---
layout: page
title: An introduction to robots.txt files
crumbname: Robots.txt
category: admin-center
redirect_from: 
  - /blog/robotstxt.html
  - /manual/robotstxt.html
tags: how-to manage-content indexing
date: January 17, 2020
last_modified_at: July 24, 2025
#subnav:
  #data: indexing
---

**Understand how and why to create a robots.txt file**

## What is a robots.txt file?

A robots.txt file is a text file that instructs internet bots on how to crawl and index a website. 

Visit [https://www.usa.gov/robots.txt](https://www.usa.gov/robots.txt) to see an example of a well-structured robots.txt file on a federal government website.

## Why is a robots.txt file important?

When you have a robots.txt file on your website, the public can more easily find your agency's content on search engines.

This file is crucial because it instructs web crawlers (like those from search engines) which parts of a website they should or should not access. 

You can also use it manage your site's performance, [security](https://digital.gov/topics/security), and [search engine optimizaton](https://digital.gov/topics/search-engine-optimization) by telling search engines how to crawl and index your content. 

## How to create a robots.txt file

Use a robots.txt file to provide guidance to the bots on how to interact with your website. Refer to the [Robots Exclusion Protocol on robotstxt.org](http://www.robotstxt.org/robotstxt.html) for detailed information on how and where to create your robots.txt file. 

Key points include:

* Place a robots.txt file at the root of your domain and any subdomains. Each subdomain needs its own file.
* Pay attention to casing. The robots.txt protocol is case-sensitive.
* Be careful when you write the instructions:
  * Use `Disallow: /`&nbsp;to disallow everything.
  * Use `Disallow: `&nbsp;to disallow nothing. In other words, use it to allow everything.
  * Use `Allow: /`&nbsp;to allow everything.
  * Use `Allow: `&nbsp;to allow nothing. In other words, use it to disallow everything.
* Remember that the robots.txt instructions are guidance, not binding requirements. Bad bots may ignore your instructions.

### Point to your XML sitemap

List the location of your [XML sitemap]({{ site.baseurl }}/indexing/sitemaps.html) in your robots.txt file. 

```
# Sitemaps
Sitemap: https://www.usa.gov/sitemap.xml
```

### Set the crawl delay

Use the crawl delay instructions to tell bots how quickly they it can request pages from your website. For example, use a crawl delay of 10 to tell bots that they should not request a new page more than every 10 seconds.

If you use [Search.gov](https://search.usa.gov/sites), the Search.gov team recommends a crawl-delay of 2 seconds for their `usasearch` user agent and a crawl delay of 10 seconds for all other bots. A lower crawl delay allows Search.gov to index the content on your site more quickly, and they are a trusted bot. 

```
User-agent: usasearch  
Crawl-delay: 2

User-agent: *
Crawl-delay: 10
```

### Manage content

Disallow any directories or files that you do not want listed in search results.

```
Disallow: /archive/
Disallow: /news-1997/
Disallow: /reports/duplicative-page.html
```

You can set different permissions for different bots. For example, if you want Search.gov to index your archived content but don't want a commercial search engine to index it, you can be this specific.

```
User-agent: usasearch  
Allow: /archive/

User-agent: *
Disallow: /archive/
```