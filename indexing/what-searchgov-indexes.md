---
layout: page
title: What Search.gov Indexes From Your Website
crumbname: What Search.gov Indexes
category: admin-center
tags: indexing seo
date: April 24, 2019
last_modified_at: November 10, 2022
sidenav: indexing
redirect_from:
    - /manual/what-searchgov-indexes.md

---

## Content

When we think about indexing pages for search, we usually think about indexing the primary content of the page. But if the page isn’t structured to tell the search engine where that content is to be found, it will collect the `<body>` tag, and then filter out the `<nav>` and `<footer>` elements, if present. If `<main>`, `<nav>`, or `<footer>` are not present, we collect the full contents of the `<body>` tag. Learn more on our post about aiming search engines at the content you really want to be searchable, using [the </main> element]({{ site.baseurl }}/indexing/how-search-engines-index-content-better-discoverability.html#main-element).

## Metadata

You can [read more detail on each of the following elements here]({{ site.baseurl }}/indexing/metadata.html).

### Standard metadata elements

* title
* meta description
* meta keywords
* locale or language (from the opening `<html>` tag)
* url
* lastmod (collected from XML sitemaps)

### [Open Graph protocol](http://ogp.me/)  elements

* og:description
* og:title
* article:published_time
* article:modified_time

## File formats

In addition to HTML pages with their various file extensions, Search.gov indexes the following file types:

* PDFs
* Word docs
* Excel docs
* TXT
* Images can be indexed either using our [Flickr integration]({{ site.baseurl }}/admin-center/content/flickr.html), or by sending us an [MRSS feed]({{ site.baseurl }}/admin-center/content/rss.html). Note that images are not indexed during web page indexing, so you’ll need to use one of these two methods. 

{: #js-indexing }

## Javascript-based content

Javascript frameworks like [Angular](https://angular.io/) and [React](https://reactjs.org/) insert content dynamically on a webpage.  These technologies pull structured information from databases into user-friendly webpages. To search this kind of content, we need to add a processing step to run all scripts before we try to index.

If your site uses Javascript to insert content on your HTML pages, [reach out to our team](mailto:search@gsa.gov). We can enable Javascript indexing on a per-domain basis. 

For each page indexed with Javascript enabled, we allow up to 5 seconds for content to load. Because of this step, domains indexed with Javascript enabled do take slightly longer.