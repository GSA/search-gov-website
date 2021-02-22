---
layout: page
title: How to Activate Your Search by Adding Our Code Snippets to Your Website
category: manual
tags: help-manual activate-search code-snippets
date: October 13, 2020
last_modified_at: October 13, 2020
sidenav: admin_center
redirect_from:
    - /manual/code.html
---

[Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Activate Search > Code Snippets

Visit our [Admin Center](https://search.usa.gov/sites/), select your site, and click on the Activate Search option in the left-hand menu.

Add the following two snippets of code to your website to "hook" your website and our hosted search service together. You can add this code to your individual web pages or to the template(s) in your content management system.

## 1. Form Snippet

Include this snippet of code where the form for your search box appears. It should look something like this:
    
    <form accept-charset="UTF-8" action="https://search.usa.gov/search" id="search_form" method="get">
        <div style="margin:0;padding:0;display:inline">
        <input name="utf8" type="hidden" value="&#x2713;" /></div>
        <input id="affiliate" name="affiliate" type="hidden" value="YourSiteHandle" />
        <label for="query">Enter Search Term(s):</label>
        <input autocomplete="off" class="usagov-search-autocomplete" id="query" name="query" type="text" />
        <input name="commit" type="submit" value="Search" />
    </form>

## 2. Javascript Snippet

Include this snippet of code before the closing `</body>` tag. This tag enables type-ahead search in the search box on your web pages and powers the data on trending URLs on the [Site Overview]({{ site.baseurl }}/manual/site-overview.html) page in the Admin Center. It should look something like this:

    <script type="text/javascript">
    //<![CDATA[
          var usasearch_config = { siteHandle:"YourSiteHandle" };
    
          var script = document.createElement("script");
          script.type = "text/javascript";
          script.src = "//search.usa.gov/javascripts/remote.loader.js";
          document.getElementsByTagName("head")[0].appendChild(script);
    
    //]]>
    </script>


## Advanced: Options for Limiting a Search Box to Specific Folders or Subdomains

You can limit results to specific folders or subdomains by creating a collection, setting up an RSS feed, or passing in a hidden value.

### Option 1. Limit to Collections

Create a [collection]({{ site.baseurl }}/manual/collections.html). Then update your form code to (a) change the action to `action="https://search.usa.gov/search/docs/` and (b) add an input for this collection, `<input type="hidden" name="dc" value="###">`. It should look something like this:
    
    <form accept-charset="UTF-8" action="https://search.usa.gov/search/docs/" id="search_form" method="get">
        <div style="margin:0;padding:0;display:inline">
        <input type="hidden" name="dc" value="###">
        <input name="utf8" type="hidden" value="&#x2713;" /></div>
        <input id="affiliate" name="affiliate" type="hidden" value="YourSiteHandle" />
        <label for="query">Enter Search Term(s):</label>
        <input autocomplete="off" class="usagov-search-autocomplete" id="query" name="query" type="text" />
        <input name="commit" type="submit" value="Search" />
    </form>

The value is the number for your collection ID, which is visible in the URL when you edit your collection in the Admin Center as shown in the sample below.

![Value for the collection ID](https://d3qcdigd1fhos0.cloudfront.net/blog/img/get-code-collection.png)

### Option 2. Limit to RSS Feeds

Set up an [RSS feed]({{ site.baseurl }}/manual/rss.html). Then update your form code to (a) change the action to `action="https://search.usa.gov/search/news/` and (b) add an input for this feed, `<input type="hidden" name="channel" value="###">`.  It should look something like this:
    
    <form accept-charset="UTF-8" action="https://search.usa.gov/search/news/" id="search_form" method="get">
        <div style="margin:0;padding:0;display:inline">
        <input type="hidden" name="channel" value="###">
        <input name="utf8" type="hidden" value="&#x2713;" /></div>
        <input id="affiliate" name="affiliate" type="hidden" value="YourSiteHandle" />
        <label for="query">Enter Search Term(s):</label>
        <input autocomplete="off" class="usagov-search-autocomplete" id="query" name="query" type="text" />
        <input name="commit" type="submit" value="Search" />
    </form>

The value is the number for your RSS ID, which is visible in the URL when you edit or preview your feed in the Admin Center.

### Option 3. Limit to a Hidden Domain Value

You can pass a hidden value for the domain in the search form code to focus results on a particular portion of your site, without using a collection. The value must be within the scope of the [Domains]({{ site.baseurl }}/manual/domains.html) list, either a subdomain or subfolder of a domain listed there.

For example, on `example.gov`, the following hidden value would be added to limit results to only the `research` subdomain.

    <input type="hidden" name="sitelimit" id="sitelimit" value="research.example.gov" />

See it in action on NPS.gov: type a query in the search box on <a href="https://www.nps.gov/isro/index.htm">https://www.nps.gov/isro/index.htm</a> and click the `This Site` button.

----

***Pro tip!*** You can use a [domain mask]({{ site.baseurl }}/manual/cname.html) on your results page, which allows you to show searchers your own domain (instead of search.USA.gov).
