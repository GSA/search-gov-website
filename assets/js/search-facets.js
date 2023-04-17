---
---
// This search page allows us to conduct searches without a page refresh via AJAX calls
// I used this demo as a starting point: https://blog.carsonevans.ca/2015/09/01/add-search-feature-to-a-jekyll-blog/

(function() {
    var request = new XMLHttpRequest();

    // define HTML elements that will be altered or read
    var searchBox = document.getElementById("search-box"); 
    var searchInput = document.getElementById("search-field-en-small")
    var resultBox = document.getElementById("search-results");
    var facetBox = document.getElementById('facet-panel')

    // posts will store the results in the API response
    var posts; 

    // sets up the facets information required to render the facets on the search page
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
        created: {
            name: "Published Date",
            values: []
        },
        changed: {
            name: "Last Updated",
            values: []
        },
    };

    // sets up the parameters that are passed to the Results API to actually filter the query
    var facetParams = {
        audience:[],
        content_type:[],
        mime_type: [],
        tags: [],
        searchgov_custom1: [],
        searchgov_custom2: [],
        searchgov_custom3: [],
        created: [],
        changed: [],
        created_since: "",
        created_until: "",
        updated_since: "",
        updated_until: ""
    };

    // renders result HTML given specific content in the right place on the page
    function render_result(content, append = true){
        const previous = document.getElementById('search-results').innerHTML;
        resultBox.innerHTML = (append == true) ? previous + content : content;
      }

    // renders facet HTML in the right place on the page
    function render_facets(content, append = true){
        const previous = document.getElementById('facet-panel').innerHTML;
        facetBox.innerHTML = (append == true) ? previous + content : content;
    }

    // maps raw facet values to human-readable values. this is specifically done for mimetype right now, but could be used for any facet values.
    function updateLabel(content){
        var displayValue = "";
        switch(content) {
            case "text/html":
                displayValue = "Webpage";
                break;
            case "application/pdf":
                displayValue = "PDF";
                break;
            case "text/plain":
                displayValue = "Text File";
                break;
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                displayValue = "DOCX";
                break;
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                displayValue = "XLSX";
                break; 
            case "application/msword":
                displayValue = "DOC";
                break; 
            case "application/vnd.ms-excel":
                displayValue = "XLS";
                break; 
            default:
                displayValue = content;
                break;
          }
        return(displayValue);
;    }



    request.onreadystatechange = function(e) {

        // the request is done and successful.
        if (request.readyState === 4 && request.status === 200) {


            // parse the json response in to an array of objects.
            posts = JSON.parse(request.responseText);

            // renders the results with the formatting required

            render_result(posts.web.total == 1 ? `<i>${posts.web.total} result</i>` : `<i>${posts.web.total} results</i>`);

            for (item in posts.web.results){

                resultFacetInfo = ""
                if (posts.web.results[item]['content_type']){
                    resultFacetInfo+=`<div class="facet-field">Content Type: ` + posts.web.results[item]['content_type'] + `</div>`
                }

                if (posts.web.results[item]['mime_type']){
                    var filetype = updateLabel(posts.web.results[item]['mime_type']);
                    resultFacetInfo+=`<div class="facet-field">File Type: ` + filetype + `</div>`
                }

                if (posts.web.results[item]['searchgov_custom1']){
                    resultFacetInfo+=`<div class="facet-field">Custom Field 1: ` + String(posts.web.results[item]['searchgov_custom1']).replaceAll(",", ", ") + `</div>`
                }

                if (posts.web.results[item]['searchgov_custom2']){
                    resultFacetInfo+=`<div class="facet-field">Custom Field 2: ` + String(posts.web.results[item]['searchgov_custom2']).replaceAll(",", ", ") + `</div>`
                }

                if (posts.web.results[item]['searchgov_custom3']){
                    resultFacetInfo+=`<div class="facet-field">Custom Field 3: ` + String(posts.web.results[item]['searchgov_custom3']).replaceAll(",", ", ") + `</div>`
                }

                if (posts.web.results[item]['tags']){
                    resultFacetInfo+=`<div class="facet-field">Tags: ` + String(posts.web.results[item]['tags']).replaceAll(",", ", ") + `</div>`
                }

                if (posts.web.results[item]['publication_date']){
                    resultFacetInfo+=`<div class="facet-field">Published: ` + posts.web.results[item]['publication_date'] + `</div>`
                }

                if (posts.web.results[item]['updated_date']){
                    resultFacetInfo+=`<div class="facet-field">Updated: ` + posts.web.results[item]['updated_date'] + `</div>`
                }

                render_result(`
                  <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest search-result">
                    <div class="result-left"> 
                        ${posts.web.results[item]['thumbnail_url'] ? `<img class="result-image" src="${posts.web.results[item]['thumbnail_url']}"}>`: ""}
                    </div>
                    <div class="result-right">
                        <b class="title"><a href="${posts.web.results[item]['url']}">${posts.web.results[item]['title'].replace(/\uE000/g, '<span class="bg-yellow">').replace(/\uE001/g, '</span>').replace("| Search.gov", "")}</a></b>
                        <div> ${posts.web.results[item]['snippet'].replace(/\uE000/g, '<span class="bg-yellow">').replace(/\uE001/g, '</span>')}... </div>
                        <div class="text-base-light result-url"> ${posts.web.results[item]['url']}</div>
                        ${resultFacetInfo}
                    </div>
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
                        var dateSince = facets[key].values[facetValue].from_as_string ? new Date(facets[key].values[facetValue].from_as_string).toISOString().split('T')[0] : "";
                        var dateUntil = facets[key].values[facetValue].to_as_string ? new Date(facets[key].values[facetValue].to_as_string).toISOString().split('T')[0] : "";
                        var label = updateLabel(agg_key);

                        if (dateSince || dateUntil) {
                            facetHTML += `
                            <div class="usa-radio">
                                <input
                                class="usa-radio__input"
                                id="radio-${key}-${agg_key}"
                                type="radio"
                                name="${key}"
                                value="${key}-${agg_key}"
                                ${dateSince ? `data-dateSince="${dateSince}"` : ""}
                                ${dateUntil ? `data-dateUntil="${dateUntil}"` : ""}
                                />
                                <label class="usa-radio__label" for="radio-${key}-${agg_key}"
                                >${label} ${doc_count ? `(${doc_count})` : ""}</label
                                >
                            </div>
                            `
                        }
                        else {
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
                                >${label} ${doc_count ? `(${doc_count})` : ""}</label
                                >
                            </div>
                            `
                        }
                    }

                    facetHTML+=`</div></div>`
                    render_facets(facetHTML, true);
                }
            
            var checkBoxes = document.getElementById("facet-panel").querySelectorAll("input.usa-checkbox__input");
            var radioButtons = document.getElementById("facet-panel").querySelectorAll("input.usa-radio__input");

            // select the right checkboxes
            Object.keys(checkBoxes).forEach(function(i) {
                var checkField = checkBoxes[i].name;
                if (checkField && checkBoxes[i].value) {
                    var checkValue = checkBoxes[i].value.replace(checkField + "-", "");
                    if (facetParams[checkField] && facetParams[checkField].includes(checkValue)) {
                        checkBoxes[i].checked = true;
                    }
                    else {
                        checkBoxes[i].checked = false;
                    }
                }
                
            });

            // select the right radio buttons
            Object.keys(radioButtons).forEach(function(i) {
                try {
                    var radioField = radioButtons[i].name ? radioButtons[i].name : "";

                    if (radioField === "changed") {
                        radioField = "updated"
                    }
                    var radio_dateUntil = radioButtons[i].dataset.dateuntil ? radioButtons[i].dataset.dateuntil : "";
                    var radio_dateSince = radioButtons[i].dataset.datesince ? radioButtons[i].dataset.datesince : "";

                    if (radioField && radio_dateUntil && radio_dateSince && facetParams[radioField + "_since"] && facetParams[radioField + "_until"]) {
                        if (facetParams[radioField + "_since"] === radio_dateSince && facetParams[radioField + "_until"] === radio_dateUntil ) {
                            radioButtons[i].checked = true;
                        }
                        else {
                            radioButtons[i].checked = false;
                        }
                    }
                }
                catch(e) {
                    console.log(e);
                }
            });
                
            
            // clear out request parameters
            facetParams = {
                audience:[],
                content_type:[],
                mime_type: [],
                tags: [],
                searchgov_custom1: [],
                searchgov_custom2: [],
                searchgov_custom3: [], 
                created: [],
                changed: [],
                created_since: "",
                created_until: "",
                updated_since: "",
                updated_until: ""
            };
            params = {};
                
            

            var selectedFacets = [];

            Object.keys(checkBoxes).forEach(function(i) {
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
            });

            var selectedDates = [];
            Object.keys(radioButtons).forEach(function(i) {
                    try {
                        radioButtons[i].addEventListener('change', (event) => 
                        {
                            selectedDates = document.querySelectorAll('input.usa-radio__input:checked');
                            for (f in selectedDates) {
                                if (selectedDates[f].name === "changed"){
                                    facetParams["updated_since"] = selectedDates[f].dataset.datesince;
                                    facetParams["updated_until"] = selectedDates[f].dataset.dateuntil;
                                }
                                if (selectedDates[f].name === "created"){
                                    facetParams["created_since"] = selectedDates[f].dataset.datesince;
                                    facetParams["created_until"] = selectedDates[f].dataset.dateuntil;
                                }                                
                            }
                        });
                    }

                    catch {

                    }
                });
                
        }
    };


    
    
    
    

    // detect input on the search box.
    searchBox.onsubmit = function(e) {
        e.preventDefault();

        
        var searchEndpoint = new URL("https://api.gsa.gov/technology/searchgov/v2/results/i14y");
        params = { affiliate: "{{site.searchgov.affiliate}}", access_key: "{{site.searchgov.access_key}}", query: searchInput.value, include_facets: true };

        for (var key in facetParams) {
            if (facetParams[key].length > 0 && (facetParams[key]!="changed" || facetParams[key]!="created")) {
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
            created: {
                name: "Published Date",
                values: []
            },
            changed: {
                name: "Last Updated",
                values: []
            }
        };
        html = "";
        results = [];
        request.open("GET", searchEndpoint);
        request.send(); 
    };
})();