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
last_modified_at: December 8, 2022
#subnav:
  #data: indexing
---

Search.gov, like other search engines, relies on structured data to help inform how we index your content and how it is presented in search results. You should also read up on the metadata and structured data used by [Google](https://support.google.com/webmasters/answer/79812?hl=en) and [Bing](https://www.bing.com/webmaster/help/marking-up-your-site-with-structured-data-3a93e731).

Including the following tags and metadata in each of your pages will improve the quality of your content's indexing, as well as results ranking. We also encourage you to read about more [HTML5 semantic markup](https://www.semrush.com/blog/semantic-html5-guide/) you can include in your websites.

This page will be updated over time as we add more tag-based indexing functions and ranking factors to our service.

Details on what we index for PDFs can be found in our [PDF Metadata documentation]({{site.baseurl}}/indexing/pdf-metadata.html).

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
          <a class="usa-summary-box__link" href="#tags--keywords">Tags</a> 
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

### Fields by Type

{: .usa-table .usa-table--compact}
|[Standard Fields](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name)|[OpenGraph Fields](https://ogp.me/)|[DublinCore Fields](https://www.dublincore.org/)|
|:----|:----|:----|:----|
|[`<main>`](#main-page-content)|[`og:title`](#title)|[`dcterms.keywords`](#tags--keywords)|
|[`<title>`](#title)|[`og:description`](#description)|[`dc.subject`](#tags--keywords)|
|[`description`](#description)|[`article:section`](#tags--keywords)|[`dcterms.subject`](#tags--keywords)|
|[`keywords`](#tags--keywords)|[`article:tag`](#tags--keywords)|[`dcterms.audience`](#audience)|
|[`robots`](#crawling-metadata)|[`article:published_time`](#created-date)|[`dc.type`](#content-type)|
||[`article:modified_time`](#changed-date)|[`dcterms.type`](#content-type)|
||[`og:image`](#thumbnail-image)|[`dc.date`](#created-date)|
|||[`dc.date.created`](#created-date)|
|||[`dcterms.created`](#created-date)|

### Main Page Content
We look for the following fields:
```
<main>
<div role="main">
```
- **Detail:** Allows the search engine to target the actual content of the page and avoid headers, sidebars and other page content not useful to search. Read more about the [`<main>` element]({{ site.baseurl }}/indexing/how-search-engines-index-content-better-discoverability.html#main-element).
- **Data Gathering Logic:** If the `<main>` tag is present, we will use that field. If not, we will take the first HTML element with a `role="main"`. If neither `<main>` nor `role="main"` are present, we will capture all content in the `<body>` tag. If none of those tags are present, we index everything in the `<html>` tag. 
- **Used In:** Query matching, term frequency scoring

### Title

We look for the following fields:
```
<title>
<meta property="og:title" content="Example" />
```
- **Detail:** Unique title of the page. If you want to include the agency or section name, place that after the actual page title. We use the `og:title` property as the result title if it appears to be more substantive than the `<title>` tag. Note, Open Graph elements are used to display previews of your content in FaceBook and some other social media platforms.
- **Data Gathering Logic:** We collect both fields, and use whichever is longer in search results. If both are blank, we will use the URL as the title of the document.
- **Used In:** Query matching, term frequency scoring


### Description

We look for the first instance of the following fields:
```
<meta property="og:description" content="Example" />
<meta name="description" content="Example" />
<meta name="dc.description" content="Example" />
```
- **Detail:** Your well crafted, plain language summary of the page content. This will often be used by search engines in place of a page snippet. Be sure to include the keywords you want the page to rank well for. Best to limit to 160 characters, so it will not be truncated. Read more technical [background and guidance](https://moz.com/learn/seo/meta-description). Note, Open Graph elements are used to display previews of your content in FaceBook and some other social media platforms.
- **Used In:** Query matching, term frequency scoring

### Tags & Keywords

We look for the following fields:
```
<meta name="keywords" content="example, example 2, example 3" />
<meta name="dcterms.keywords" content="example" />
<meta name="dc.subject" content="example" />` 
<meta name="dcterms.subject" content="example" />
<meta name="article:tag" content="example" />
<meta name="article:section" content="example" />
```
- **Detail:** While not often used by commercial search engines due to [keyword stuffing](https://support.google.com/webmasters/answer/66358?hl=en), Search.gov indexes your keywords, if you have added them. 
- **Data Gathering Logic:** We pull all fields listed into one "Tags" field for searching and future facet filtering. We also dedupe keywords so that our `Tags` field only contains unique terms. Each keyword will be treated as a unique term when searching and filtering content. 
- **Used In:** Query matching, term frequency scoring, faceted search (upcoming feature)


### Created Date

We look for the following fields:
```
<meta property="article:published_time" content="YYYY-MM-DD" />
<meta name="dc.date" content="YYYY-MM-DD" />
<meta name="dc.date.created" content="YYYY-MM-DD" />`  
<meta name="dcterms.created" content="YYYY-MM-DD" />
```
- **Detail:** The date fields are listed in order of preference. We only accept one `created` date, and use this list to determine the fallback options. Exact time is optional; read more technical [background and guidance](https://en.wikipedia.org/wiki/ISO_8601).
- **Used In:** Page freshness scoring, faceted search (upcoming feature)


### Changed Date

We look for the following field:
```
<meta property="article:modified_time" content="YYYY-MM-DD" />
```

- **Detail:** Exact time is optional; read more technical [background and guidance](https://en.wikipedia.org/wiki/ISO_8601). 
<!-- The `<lastmod>` field is included in XML sitemaps to signal to search engines when a page was last modified. Search.gov collects this metadata in case there is no `article:modified_time` data included in the page itself. -->
- **Used In:** Page freshness scoring, faceted search (upcoming feature)


### Crawling Metadata

We look for the following field:
```
<meta name="robots" content="..., ..." />
```
- **Detail:** Use the [meta robots tag]({{ site.baseurl }}/indexing/how-search-engines-index-content-better-discoverability.html#robots) to block the search engine from indexing a particular page.
- **Used In:** Used during indexing, does not affect relevance ranking.




## Upcoming Metadata Support
The following fields will power new features coming in the next few months. These will not affect your search until we release those features. However, we recommend adding these fields to your documents now so that the new features will be available to you immediately after they are released.

### Thumbnail Image

We look for the following field:
```
<meta property="og:image" content="https://example.gov/my-image-url.jpg" />
```
- **Detail:** An image associated to the content. Ideally, this image serves well as a thumbnail on both our search results page and on social media platforms.
- **Used In:** Results page display (upcoming feature)


### Audience

We look for the following field:
```
<meta name="dcterms.audience" content="example">
```
- **Detail:** The intended audience of the page. 
- **Used In:** Query matching, faceted search (upcoming feature)


### Content Type

We look for the following fields:
```
<meta name="dc.type" content="example">
<meta name="dcterms.type" content="example">
<meta name="og:type" content="example">
```
- **Detail:** The content type of the page. We combine these fields into one "Content Type" field for searching and filtering.
- **Used In:** Faceted search (upcoming feature)


### Search.gov Custom Fields

We look for the following fields:
```
<meta name="searchgov_custom1" content="..., ..., ...">
<meta name="searchgov_custom2" content="..., ..., ...">
<meta name="searchgov_custom3" content="..., ..., ...">
```
- **Detail:** These fields can support any text content that you want to offers in your faceted search options. The fields accept single values or list-type content. Each listed value will be treated as a unique term when searching and filtering content. 
- **Used In:** Query matching, faceted search (upcoming feature)



