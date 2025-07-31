---
layout: page
title: How to connect your search to Search.gov
category: admin-center
tags: help-manual activate-search code-snippets
date: October 13, 2020
last_modified_at: July 30, 2025
#subnav:
  #data: admin_center
redirect_from:
    - /manual/code.html
    - /admin-center/activate/code.html
    - /admin-center/code.html
---

When you are ready to [go live with Search.gov]({{ site.baseurl }}/get-started/go-live-with-searchgov.html), you will need to connect your search to Search.gov.

## Update the form code

Use form code provided in the Activate section of the [Admin Center](https://search.usa.gov/sites).
    
    <form accept-charset="UTF-8" action="https://search.usa.gov/search" id="search_form" method="get">
        <div style="margin:0;padding:0;display:inline">
        <input name="utf8" type="hidden" value="&#x2713;" /></div>
        <input id="affiliate" name="affiliate" type="hidden" value="YourSiteHandle" />
        <label for="query">Enter Search Term(s):</label>
        <input autocomplete="off" class="usagov-search-autocomplete" id="query" name="query" type="text" />
        <input name="commit" type="submit" value="Search" />
    </form>

Replace `YourSiteHandle` with your site handle, which you can find on [sites list](https://search.usa.gov/user_sites) page in the Admin Center.

To modify the form code for the search box on your website, you will probably need to work with your technical team. They can also help you use these parameters to create a more customized search box on your site.

## Advanced options

You can limit results to specific folders or subdomains by passing in a hidden value or creating a [collection]({{ site.baseurl }}/admin-center/content/collections.html).

### Option 1. Limit to a hidden value

You can pass a hidden value in the search form code to return results from a specific subdomain or subfolder on your site. 

For example, on `nps.gov`, the following hidden value would be added to limit results to only the `yell` subfolder.

    <input type="hidden" name="sitelimit" id="sitelimit" value="www.nps.gov/yell" />

You can see how this works by going to the [Yellowstone National Park](https://www.nps.gov/yell/index.htm) page on NPS.gov. Type any term in the search box and select the `This site` option to limit results to Yellowstone National Park only.

### Option 2. Limit to collections

You can update your form code to limit the search results to collections only. You will need to make two updates to the basic form code:
1. Change the form action to `action="https://search.usa.gov/search/docs/`.
1. Add an input line, `<input type="hidden" name="dc" value="###">`.
    
    <form accept-charset="UTF-8" action="https://search.usa.gov/search/docs/" id="search_form" method="get">
        <div style="margin:0;padding:0;display:inline">
        <input type="hidden" name="dc" value="###">
        <input name="utf8" type="hidden" value="&#x2713;" /></div>
        <input id="affiliate" name="affiliate" type="hidden" value="YourSiteHandle" />
        <label for="query">Enter Search Term(s):</label>
        <input autocomplete="off" class="usagov-search-autocomplete" id="query" name="query" type="text" />
        <input name="commit" type="submit" value="Search" />
    </form>

Replace `###` with your collection ID, which you can find in the URL when you edit your collection in the Admin Center as shown in the sample below.

[![Value for the collection ID]({{ site.baseurl}}/assets/img/site/get-code-collection.png)]({{ site.baseurl}}/assets/img/site/get-code-collection.png)

## APIs for developers

If you don't want to use the hosted search results page, you can use our APIs, which allow you to display results within your own website. 

* [Search results API](https://open.gsa.gov/api/searchgov-results/). Use the search results API to recieve web results, best bets, news, and videos in one JSON call.
* [Clicks API](https://open.gsa.gov/api/searchgov-clicks/). Use the clicks API with the Search results API to send click data to Search.gov.

While using the APIs gives you more control the look and feel of the search results, you will need a team of designers, engineers, and other digital service experts to create your search experience and maintain it over time.