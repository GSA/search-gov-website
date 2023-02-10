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

            for (item in posts.web.results){
                render_result(`
                  <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest">
                    <b class="title"><a href="${posts.web.results[item]['url']}">${posts.web.results[item]['title'].replace(/\uE000/g, '<span class="bg-yellow">').replace(/\uE001/g, '</span>').replace("| Search.gov", "")}</a></b>
                    <div> ${posts.web.results[item]['snippet'].replace(/\uE000/g, '<span class="bg-yellow">').replace(/\uE001/g, '</span>')}... </div>
                    <div class="text-base-light"> ${posts.web.results[item]['url']}</div>
                  </li>
                  `, true)
                
              }
            
            for (item in posts.web.aggregations){
                // render_facets(` 
                //     <li>${JSON.stringify(posts.web.aggregations[item])}</li>
                // `, true);
                for (var key in posts.web.aggregations[item]) {
                    if (posts.web.aggregations[item].hasOwnProperty(key)) {
                      render_facets(`<legend class="usa-legend">${key}</legend>`)

                      for (var facetValue in posts.web.aggregations[item][key]) {
                            var agg_key = posts.web.aggregations[item][key][facetValue].agg_key; 
                            var doc_count = posts.web.aggregations[item][key][facetValue].doc_count;

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

        resultBox.innerHTML = "";
        facetBox.innerHTML = "";
        html = "";
        results = [];
        request.open("GET", searchEndpoint);
        request.send();
    };
})();