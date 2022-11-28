---
layout: page
title: Metadata and tags you should include in your website
crumbname: Metadata
category: admin-center
redirect_from: 
  - /blog/metadata.html
  - /manual/metadata.html
tags: indexing seo
date: September 1, 2020
last_modified_at: September 1, 2020
sidenav: indexing
---

Search.gov, like other search engines, relies on structured data to help inform how we index your content and how it is presented in search results. You should also read up on the metadata and structured data used by [Google](https://support.google.com/webmasters/answer/79812?hl=en) and [Bing](https://www.bing.com/webmaster/help/marking-up-your-site-with-structured-data-3a93e731).

Including the following tags and metadata in each of your pages will improve the quality of your content's indexing, as well as results ranking. We also encourage you to read about more [HTML5 semantic markup](https://www.semrush.com/blog/semantic-html5-guide/) you can include in your websites.

This page will be updated over time as we add more tag-based indexing functions and ranking factors to our service.

Details on what we index for PDFs can be found in our [PDF Metadata documentation here]({{site.baseurl}}/indexing/pdf-metadata.html).

<div
  class="usa-summary-box"
  role="region"
  aria-labelledby="summary-box-key-information"
>
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="summary-box-key-information">
      Supported Metadata
    </h3>
    <div class="usa-summary-box__text">
      <ul class="usa-list">
        <li>
          <a class="usa-summary-box__link" href="#main-page-content">Main Content</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#title">Title</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#description">Description</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#tags">Tags</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#created-date">Created Date</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#changed-date">Changed Date</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#crawling-metadata">Crawling Metadata</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#crawling-metadata">Crawling Metadata</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#thumbnail-image">Thumbnail Image</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#audience">Audience</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#content-type">Content Type</a> 
        </li>
        <li>
          <a class="usa-summary-box__link" href="#searchgov-custom-fields">Search.gov Custom Fields</a> 
        </li>
      </ul>
    </div>
  </div>
</div>


### Main Page Content
```
<main>
```
- **Detail:** Allows the search engine to target the actual content of the page and avoid headers, sidebars and other page content not useful to search. [Read more about the <main> element here]({{ site.baseurl }}/indexing/how-search-engines-index-content-better-discoverability.html#main-element)
- **Used In:** Query matching, term frequency scoring

### Title
```
<title>
<meta property="og:title" content="Title goes here" />
```
- **Detail:** Unique title of the page. If you want to include the agency or section name, place that after the actual page title. We use the `og:title` property as the result title if it appears to be more substantive than the `<title>` tag. Note, Open Graph elements are used to display previews of your content in FaceBook and some other social media platforms.
- **Used In:** Query matching, term frequency scoring


### Description
```
<meta name="description" content="foo" />
<meta property="og:description" content="Description goes here" />
```
- **Detail:** Your well crafted, plain language summary of the page content. This will often be used by search engines in place of a page snippet. Be sure to include the keywords you want the page to rank well for. Best to limit to 160 characters, so it will not be truncated. [Read more here](https://moz.com/learn/seo/meta-description). Note, Open Graph elements are used to display previews of your content in FaceBook and some other social media platforms.
- **Used In:** Query matching, term frequency scoring

### Tags

```
<meta name="keywords" content="foo bar baz" />
<meta name="dcterms.keywords" content="foo" />
<meta name="dc.subject" content="foo" />` 
<meta name="dcterms.subject" content="foo" />
<meta name="article:tag" content="foo" />
<meta name="article:section" content="foo" />
```
- **Detail:** While not often used by commercial search engines due to [keyword stuffing](https://support.google.com/webmasters/answer/66358?hl=en), Search.gov indexes your keywords, if you have added them. We pull all fields listed into one "Tags" field for searching and future facet filtering.
- **Used In:** Query matching, term frequency scoring


### Created Date

```
<meta property="article:published_time" content="YYYY-MM-DD" />
<meta name="dc.date" content="foo" />
<meta name="dc.date.created" content="foo" />`  
<meta name="dcterms.created" content="foo" />
```
- **Detail:** The date fields are listed in order of preference. We only accept one `created` date, and use this list to determine the fallback options. Exact time is optional; [read more here](https://en.wikipedia.org/wiki/ISO_8601).
- **Used In:** Page freshness scoring.


### Changed Date
```
<meta property="article:modified_time" content="YYYY-MM-DD" />
<lastmod>
```

- **Detail:** Exact time is optional; [read more here](https://en.wikipedia.org/wiki/ISO_8601). The `<lastmod>` field is included in XML sitemaps to signal to search engines when a page was last modified. Search.gov collects this metadata in case there is no `article:modified_time` data included in the page itself.
- **Used In:** Page freshness scoring.


### Crawling Metadata
```
<meta name="robots" content="..., ..." />
```
- **Detail:** Use the [meta robots tag]({{ site.baseurl }}/indexing/how-search-engines-index-content-better-discoverability.html#robots) to block the search engine from indexing a particular page.
- **Used In:** Used during indexing, does not affect relevance ranking.




## Upcoming Metadata Support
The following fields will be used to support new features coming available in the next few months. While they won't impact your search until those features are released, we recommend incorporating these fields into your documents now to take advantage of these features faster later.

### Thumbnail Image
```
<meta property="og:image" content="https://domain.com/my-image-url.jpg" />
```
- **Detail:** An image associated to the content. Ideally, this image serves well as a thumbnail on both our search results page and on social media websites like Facebook and Twitter.
- **Used In:** Results page display 


### Audience
```
<meta name="dcterms.audience" content="foo">
```
- **Detail:** The intended audience of the page. 
- **Used In:** Query matching, faceted search


### Content Type
```
<meta name="dc.type" content="foo">
<meta name="dcterms.type" content="foo">
<meta name="dcterms.type" content="foo">
```
- **Detail:** The content type of the page. We combine these fields into one "Audience" field for searching and filtering.
- **Used In:** Faceted search


### Search.gov Custom Fields
```
<meta name="searchgov_custom1" content="..., ..., ...">
<meta name="searchgov_custom2" content="..., ..., ...">
<meta name="searchgov_custom3" content="..., ..., ...">
```
- **Detail:** These fields can hold any text content that you want to surface in your faceted search options. The fields accept single values or list-type content. 
- **Used In:** Query matching, faceted search



