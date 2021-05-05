---
layout: page
title: Resources for Developers
category: developer
tags: api open
date: November 20, 2019
last_modified_at: November 20, 2019
sidenav: support
---

In line with the White House's [Digital Government Strategy](https://digital.gov/resources/2012-digital-government-strategy/), we're making our code and data more open.

## APIs for Search.gov Customers

These APIs are available for use on official government websites only. You must be a Search.gov customer. [Sign in](https://search.usa.gov/sites) is required. 

**Search Results API** &mdash; This API exposes all relevant results "modules" in a single JSON call, including: web results, best bets, health topics, job openings, recent tweets, recent news, recent videos, *Federal Register* documents, and related searches. Use it to ***pull search results*** from our service to display on your agency's website or mobile applications. 

- See a [feature comparison]({{ site.baseurl }}/admin-center/display/hosted-vs-api-results.html) between our Results API modules and our hosted search results page.
- [Results API technical documentation](https://open.gsa.gov/api/searchgov-results/){% external_link %}
- The Results API should be used in parallel with our [Clicks API](https://open.gsa.gov/api/searchgov-clicks/){% external_link %}.

**[Type-ahead API](https://open.gsa.gov/api/searchgov-suggestions/)** {% external_link %} &mdash; This API exposes the type-ahead suggestions that often appear below your search box as searchers enter their search terms. We recommend, however, that instead of using this API you [use our javascript snippet]({{ site.baseurl }}/admin-center/activate/typeahead-api.html) that will call the API for you.

**[i14y]({{ site.baseurl }}/developer/i14y.html)** &mdash; This API is still available, but we encourage the use of sitemap-based indexing instead. Read more about our indexing process [here]({{ site.baseurl }}/indexing/indexing-with-searchgov.html). The i14y API allows you to send content directly from your content management system (CMS) into Search.gov for real-time indexing.

**[Clicks API](https://open.gsa.gov/api/searchgov-clicks/)** {% external_link %} &mdash; This API is to use in parallel with the Search Results API. It allows sites that display results on their own websites to send click action data into our system for analysis.

## APIs and Data Feeds for the Public

**[USAJOBS API](https://developer.usajobs.gov)** &mdash; Taps into a list of current job openings in federal agencies. The Search.gov Jobs API has been deprecated.

**[USA.gov/Developer](https://www.usa.gov/developer)** &mdash; Full list of USA.gov's APIs and data feeds available to the public.

**[api.data.gov](https://api.data.gov)** &mdash; Portal for access to APIs from across the federal government. 

## Source Code (Public Github Repositories)

**[ASIS (Advanced Social Image Search)](https://github.com/GSA/asis)** &mdash; The source code that runs our image search. ASIS indexes images from Flickr, Instagram, and media RSS to provide a combined search API.

**[i14y](https://github.com/GSA/i14y)** &mdash; The source code that runs our search engine for agencies' published content. i14y indexes agencies' published content, for search through our regular search channels.

**[Non-.gov URLs](https://github.com/GSA/govt-urls)** &mdash; The source code that runs our non-.gov URLs API. Indexes all government URLs that don't end in .gov or .mil.

**[Punchcard](https://github.com/GSA/punchcard)** &mdash; The repository of synonyms, protected words, stop words, localizations, and other vocabularies that we use to improve the precision, recall, and usability of search results.

**[search-gov-website](https://github.com/gsa/search-gov-website)** &mdash; Pages and layout for our website, <https://search.gov>.

**[Site Links](https://github.com/GSA/sitelink_generator)** &mdash; The source code that "decorates" organic web results to provide additional, value-added links to help searchers find what they're looking for. Currently provides one-click links to EDGAR filings for relevant SEC.gov results. Also published as a Ruby gem at <https://rubygems.org/gems/sitelink_generator>.

**[Unique Child Attribute](https://github.com/GSA/activerecord-validate_unique_child_attribute)** &mdash; activerecord-validate_unique_child_attribute is an ActiveRecord extension to enforce uniqueness validations when accepting nested attributes. Works around [Rails issue #4568](https://github.com/rails/rails/issues/4568).
