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

    var facetParams = {
        audience:[],
        content_type:[],
        mime_type: [],
        tags: [],
        searchgov_custom1: [],
        searchgov_custom2: [],
        searchgov_custom3: []
    };

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

            // clear out request parameters
            facetParams = {
                audience:[],
                content_type:[],
                mime_type: [],
                tags: [],
                searchgov_custom1: [],
                searchgov_custom2: [],
                searchgov_custom3: []
            };
            params = {};

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

            for (key in facets) {
                facetHTML = ""
                if (facets[key].values.length > 0) {
                    facetHTML =`
                    <div class="usa-accordion">
                    <h4 class="usa-accordion__heading">
                        <button
                        type="button"
                        class="usa-accordion__button"
                        aria-expanded="true"
                        aria-controls="${facets[key].name}"
                        >
                        ${facets[key].name}
                        </button>
                    </h4>
                    <div id="${facets[key].name}" class="usa-accordion__content usa-prose">
                    `
                }

                for (var facetValue in facets[key].values) {
                    
                        var agg_key = facets[key].values[facetValue].agg_key; 
                        var doc_count = facets[key].values[facetValue].doc_count;

                        facetHTML += `
                        <div class="usa-checkbox">
                            <input
                            class="usa-checkbox__input"
                            id="check-${key}-${agg_key}"
                            type="checkbox"
                            name="${key}"
                            value="${key}-${agg_key}"
                            />
                            <label class="usa-checkbox__label" for="check-${key}-${agg_key}"
                            >${agg_key} (${doc_count})</label
                            >
                        </div>
                        `
                    }

                    facetHTML+=`</div></div>`
                    render_facets(facetHTML, true);
                }

                
            

            var checkBoxes = document.querySelectorAll("input.usa-checkbox__input");
            var selectedFacets = [];

            for (i in checkBoxes) {
                try {
                    checkBoxes[i].addEventListener('change', (event) => 
                    {
                        selectedFacets = document.querySelectorAll('input.usa-checkbox__input:checked');
                        for (f in selectedFacets) {
                            if (facetParams[selectedFacets[f].name]){
                                var value = selectedFacets[f].value.replace(selectedFacets[f].name + "-", "");

                                if (!facetParams[selectedFacets[f].name].includes(value)) {
                                    facetParams[selectedFacets[f].name].push(value);
                                }
                            }
                        }
                    });
                }

                catch {

                }
            } 
                
        }
    };

    
    
    
    

    // detect input on the search box.
    searchBox.onsubmit = function(e) {
        e.preventDefault();

        var searchEndpoint = new URL("https://api.gsa.gov/technology/searchgov/v2/results/i14y");
        params = { affiliate: "{{site.searchgov.affiliate}}", access_key: "{{site.searchgov.access_key}}", query: searchInput.value, include_facets: true };

        for (var key in facetParams) {
            if (facetParams[key].length > 0) {
                params[key]=facetParams[key];
            }
        };

        Object.keys(params).forEach(key => searchEndpoint.searchParams.append(key, params[key]));

        facetBox.innerHTML = "";
        resultBox.innerHTML = "";
        facets = {
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
        html = "";
        results = [];
        request.open("GET", searchEndpoint);
        request.send(); 
    };
})();