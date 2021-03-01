---
layout: page
title: Displaying Type-ahead Suggestions on Your Agency's Website
category: admin-center
tags: api activate-search autocomplete
date: October 26, 2017
last_modified_at: October 26, 2017
sidenav: admin_center
redirect_from:
    - /manual/typeahead-api.html
---

**_Note_**: this information is for customers who wish to display type-ahead (autocomplete) suggestions on their agency's website. If you are only looking to turn on type-ahead suggestions on your search results page, please review the instructions on our [Display Overview]({{ site.baseurl }}/manual/display-overview.html#modules) page.

There are two ways to get type-ahead suggestions to appear on your agency's website.

## JavaScript Snippet

We offer a JavaScript snippet that is placed on your pages before the closing `</body>` tag. 

You must be a Search.gov customer to use this feature. Full instructions and code can be found under [Admin Center](https://search.usa.gov/sites) > YourSite > Activate Search > Code Snippets.

The code will look similar to:

    <script type="text/javascript">
    //<![CDATA[
          var usasearch_config = { siteHandle:"YourSiteHandle" };
    
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "//search.usa.gov/javascripts/remote.loader.js";
          document.getElementsByTagName("head")[0].appendChild(script);
    
    //]]>
    </script>


## Type-ahead API 

The Type-ahead API exposes your site's type-ahead suggestions. Calling the API directly alllows you to show type-ahead suggestions without adding the JavaScript code.

This API is available for use on official government websites only. Instructions can be found on the API's [GSA Open API directory listing](https://open.gsa.gov/api/searchgov-suggestions/).

--- 
***Troubleshooting:*** Suggestions are derived from the searches performed on your website. For additional details, please review the [documentation](https://open.gsa.gov/api/searchgov-suggestions/).
