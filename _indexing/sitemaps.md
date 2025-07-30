---
last_modified_at: July 29, 2025
crumbname: Sitemaps
layout: page
title: An introduction to XML sitemaps
redirect_from:
  - "/blog/sitemaps.html"
  - "/manual/sitemaps.html"
#subnav:
  #data: indexing
date: January 17, 2020
tags: sitemaps indexing
category: admin-center
---
**Understand how and why to create an XML sitemap**

## What is an XML sitemap?

An XML sitemap is a XML file that lists the URLs on a website. Search engines use XML sitemaps as a roadmap to efficiently discover, crawl, and index content on a website.

Visit [https://www.gsa.gov/sitemap.xml](https://www.gsa.gov/sitemap.xml) to see an example of a well-structured XML sitemap on a federal government website.

## Why is an XML sitemap important?

When you have an XML sitemap on your website, the public can more easily find your agency's content on search engines.

This file is crucial because it provides search engines with a comprehensive list of URLs on your website. It also tells search engines what new and updated content they need to crawl and index. 

## How to create an XML sitemap

Most content management systems have plugins that you can use to publish XML sitemaps.

Refer to the [Sitemap Protocol on sitemaps.org](https://www.sitemaps.org/protocol.html) for detailed information on how and where to create your XML sitemap. Key points include:

* Place the XML sitemap at the root of your domain and any subdomains. Each subdomain needs its own file.
* Point to the XML sitemap from your robots.txt file.
* Replace any special characters by escaping them using HTML entities. For example, use `&quot;` for `"` and `&amp;` for `&`.
* Save the XML sitemap file as UTF-8 encoded.
* Do not exceed 50,000 URLs or a file size of 50MB, whichever comes first. 

If you have any pages you do not want to be found on search engines, do not include these URLs in your XML sitemap.  

### Format the XML sitemap properly

When publishing your XML sitemap, be sure to include an `<xml>` declaration and opening and closing tags for each URL. The three required tags are `<urlset>`, `<url>`, and `<loc>`.

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset>
<url>
<loc>https://www.gsa.gov/staff-directory</loc>
<lastmod>2025-02-10</lastmod>
</url>
<url>
<loc>https://www.gsa.gov/about-us/newsroom</loc>
<lastmod>2025-07-16</lastmod>
</url>
</urlset>
```

Also [escape special characters](https://www.sitemaps.org/protocol.html#escaping) so search engines can process them.

### Include optional metadata

There are three optional tags that you may want to use: `<lastmod>`, `<changefreq>`, and `<priority>`.

Of these three tags, the `<lastmod>` tag is the most common. You can use it to share the last modified date with search engines to they know when a page is updated and needs to be reindexed.

### Point to XML sitemaps from your robots.txt file

List the location of your XML sitemaps in your [robots.txt file](https://digital.gov/resources/introduction-robots-txt-files). 

```
# Sitemaps
Sitemap: https://www.usa.gov/sitemap.xml
```

For large sites, you may need to publish several XML sitemaps. You can publish a [sitemap index file](https://www.sitemaps.org/protocol.html#index) or list all the XML sitemaps in your robots.txt file. 

**Sitemap index file**

```
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex>
<sitemap>https://uscis.gov/sitemap.xml?page=1</sitemap>
<sitemap>https://uscis.gov/sitemap.xml?page=2</sitemap>
<sitemap>https://uscis.gov/sitemap.xml?page=3</sitemap>
</sitemapindex>
```

**Robots.txt file listing multiple XML sitemaps**

```
# Sitemaps
Sitemap: https://www.uscis.gov/sitemap.xml?page=1
Sitemap: https://www.uscis.gov/sitemap.xml?page=2
Sitemap: https://www.uscis.gov/sitemap.xml?page=3
```