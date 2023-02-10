---
---
(function() {
    var request = new XMLHttpRequest();
    var searchBox = document.getElementById("search-box");
    var searchInput = document.getElementById("search-field-en-small")
    var resultBox = document.getElementById("search-results");
    var facetBox = document.getElementById('facet-panel')
    var posts;
    var results;
    var html = "";
    var facets = {
        audience: {
            name: "Audience",
            values: []
        },
        content_type: {
            name: "Content Type",
            values: []
        },
        mime_type: {
            name: "File Type",
            values: []
        },
        tags: {
            name: "Tags",
            values: []
        },
        searchgov_custom1: {
            name: "Custom Field 1",
            values: []
        },
        searchgov_custom2: {
            name: "Custom Field 2",
            values: []
        },
        searchgov_custom3: {
            name: "Custom Field 3",
            values: []
        },
    };

    var searchEndpoint = new URL("https://api.gsa.gov/technology/searchgov/v2/results/i14y");

    function render_result(content, append = true){
        const previous = document.getElementById('search-results').innerHTML;
        resultBox.innerHTML = (append == true) ? previous + content : content;
      }

    function render_facets(content, append = true){
        const previous = document.getElementById('facet-panel').innerHTML;
        facetBox.innerHTML = (append == true) ? previous + content : content;
    }

    request.onreadystatechange = function(e) {

        // the request is done and successful.
        if (request.readyState === 4 && request.status === 200) {

            // parse the json response in to an array of objects.
            posts = JSON.parse(request.responseText);

            // renders the results with the formatting required
            for (item in posts.web.results){
                render_result(`
                  <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest">
                    <b class="title"><a href="${posts.web.results[item]['url']}">${posts.web.results[item]['title'].replace(/\uE000/g, '<span class="bg-yellow">').replace(/\uE001/g, '</span>').replace("| Search.gov", "")}</a></b>
                    <div> ${posts.web.results[item]['snippet'].replace(/\uE000/g, '<span class="bg-yellow">').replace(/\uE001/g, '</span>')}... </div>
                    <div class="text-base-light"> ${posts.web.results[item]['url']}</div>
                  </li>
                  `, true)
                
              }
            
            // updates our facets object with the correct aggregations
            for (var props in facets){ 
                for (item in posts.web.aggregations){
                        for (var key in posts.web.aggregations[item]) {
                            if (posts.web.aggregations[item].hasOwnProperty(key)) {
                                if (key == props) {
                                    for (i in posts.web.aggregations[item][key])
                                        facets[props].values.push(posts.web.aggregations[item][key][i]);
                                }
                            }
                        }
                    }
                }

                console.log(facets);

                for (key in facets) {
                    if (facets[key].values.length > 0) {
                        render_facets(`<legend class="usa-legend">${facets[key].name}</legend>`)
                    }

                    for (var facetValue in facets[key].values) {
                        
                            console.log(facets[key].values[facetValue])
                            var agg_key = facets[key].values[facetValue].agg_key; 
                            var doc_count = facets[key].values[facetValue].doc_count;

                            render_facets(`
                            <div class="usa-checkbox">
                                <input
                                class="usa-checkbox__input"
                                id="check-${agg_key}"
                                type="checkbox"
                                name="${key}"
                                value="${agg_key}"
                                />
                                <label class="usa-checkbox__label" for="check-${agg_key}"
                                >${agg_key} (${doc_count})</label
                                >
                            </div>
                            `) 
                        }
                    }
                
        }
    };

    

    // detect input on the search box.
    searchBox.onsubmit = function(e) {
        e.preventDefault();

        // var urlParams = new URLSearchParams(window.location.search);    
        // console.log(urlParams);
        params = { affiliate: "{{site.searchgov.affiliate}}", access_key: "{{site.searchgov.access_key}}", query: searchInput.value, include_facets: true }
        Object.keys(params).forEach(key => searchEndpoint.searchParams.append(key, params[key]))
        facetBox.innerHTML = "";
        resultBox.innerHTML = "";
        html = "";
        results = [];
        request.open("GET", searchEndpoint);
        request.send();
    };
})();