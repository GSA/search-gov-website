---
layout: page
title: Resources for Developers
category: developer
tags: api open
date: November 20, 2019
last_modified_at: June 11, 2025
#subnav:
  #data: support
permalink: /developer/
---

## APIs for Search.gov Customers

These APIs are available for use on official government websites only. You must be a Search.gov customer with an [active user account]({{ site.baseurl }}/get-started/account.html).

**[Search Results API](https://open.gsa.gov/api/searchgov-results/)** &mdash; This API exposes all relevant results "modules" in a single JSON call, including: web results, best bets, health topics, job openings, recent news, recent videos, *Federal Register* documents, and related searches. Use it to pull search results from our service to display on your agency's website or mobile applications. 

See a [feature comparison]({{ site.baseurl }}/admin-center/display/hosted-vs-api-results.html) between our Results API modules and our hosted search results page.

**[Clicks API](https://open.gsa.gov/api/searchgov-clicks/)**  - Use this API with the Search Results API to send click data into the system for analysis.

**[Typeahead API](https://open.gsa.gov/api/searchgov-suggestions/)**  - This API exposes the typeahead suggestions that often appear below your search box as searchers enter their search terms. We recommend, however, that instead of using this API you [use our javascript snippet]({{ site.baseurl }}/admin-center/activate/typeahead-api.html) that will call the API for you.

## Source Code (Public Github Repositories)

**[search-gov](https://github.com/GSA/search-gov)** &mdash; The source code that runs our core component app, including indexing processes, search request handling, our hosted results page, and Admin Center.

**[i14y](https://github.com/GSA/i14y)** &mdash; The source code that runs our search engine for agencies' published content. i14y indexes agencies' published content, for search through our regular search channels.

**[Punchcard](https://github.com/GSA/punchcard)** &mdash; The repository of synonyms, protected words, stop words, and other vocabularies that we use to improve the precision, recall, and usability of search results.

**[search-gov-website](https://github.com/gsa/search-gov-website)** &mdash; Pages and layout for our website, <https://search.gov>.

**[Unique Child Attribute](https://github.com/GSA/activerecord-validate_unique_child_attribute)** &mdash; activerecord-validate_unique_child_attribute is an ActiveRecord extension to enforce uniqueness validations when accepting nested attributes.

**[Robots Tag Parser](https://github.com/GSA/robots_tag_parser)** &mdash; A gem that parses X-Robots-Tag HTTP headers to aid in our indexing.