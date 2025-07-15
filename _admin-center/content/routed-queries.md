---
layout: page
title: How to route queries to a specific page
category: admin-center
tags: help-manual manage-content routed-queries
date: February 9, 2018
last_modified_at: July 15, 2025
#subnav:
  #data: admin_center
redirect_from:
    - /manual/routed-queries.html
---

Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Manage Content > Routed Queries

Use routed queries to get searchers to a specific web page as quickly as possible.

A routed query skips the search results page and automatically directs visitors to a web page of your choice for very specific queries. This approach saves visitors the extra step of reading through search results links by taking them directly to your content pages.

We recommend creating a routed query for [top tasks](https://digital.gov/event/2018/04/11/a-deep-dive-into-top-tasks-with-gerry-mcgovern/) that have a good content page but less-than-ideal search results.

## Add a routed query

**Routed query URL.** Add the URL of the destination web page.

**Routed query description.** Add a brief description to help you remember why you created this entry and what it does. Descriptions aren't used for indexing or visible to searchers.

**Keywords.** Add the specific words or phrases (up to 255 characters) used to trigger the routing. Searchers will only be directed to the destination URL when their query term exactly matches one of the listed keywords. Common keywords include synonyms, acronyms, compound words, misspellings, slang, or other variants. Enter each keyword in a separate field. 

## Examples of how it works

Using USA.gov an as example, every time someone goes to [USA.gov](https://www.usa.gov) and searches for any of the following terms (must be exact matches), they'll automatically be directed to the USA.gov [Unclaimed Money from the Government](https://www.usa.gov/unclaimed-money) page.

* missing money
* unclaimed assets
* unclaimed funds
* unclaimed money
* unclaimed money in my name
* unclaimed property

If they get routed to the [Unclaimed Money from the Government](https://www.usa.gov/unclaimed-money) and search again for one of these terms, they'll get the standard list of search results. We won't take people in an endless loop.

If they search for something not on the above list, like *show me missing money*, they'll still get the regular search results.