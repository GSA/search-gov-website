---
layout: page
title: Robots.txt Files
crumbname: Robots.txt
category: admin-center
redirect_from: 
  - /blog/robotstxt.html
  - /manual/robotstxt.html
tags: how-to manage-content indexing
date: January 17, 2020
last_modified_at: January 17, 2020
sidenav: indexing
---

A `/robots.txt` file is a text file that instructs automated web bots on how to crawl and/or index a website. Web teams use them to provide information about what site directories should or should not be crawled, how quickly content should be accessed, and which bots are welcome on the site.

## What should my robots.txt file look like?
Please refer to the [robots.txt protocol](http://www.robotstxt.org/robotstxt.html)  for detailed information on how and where to create your robots.txt. Key points to keep in mind:

* The file must be located at the root of the domain, and each subdomain needs its own file.
* The robots.txt protocol is case sensitive.
* It's easy to accidentally block crawling of everything:
  * `Disallow: /` means disallow everything.
  * `Disallow:  ` means disallow nothing, which will allow everything.
  * `Allow: /` means allow everything.
  * `Allow:  ` means allow nothing, which will disallow everything.
* The instructions in robots.txt are guidance for bots, not binding requirements &mdash; bad bots may ignore your settings.

## How can I optimize my robots.txt for Search.gov?

### Crawl delay
A robots.txt file may specify a "crawl delay" directive for one or more user agents, which tells a bot how quickly it can request pages from a website. For example, a crawl delay of 10 specifies that a crawler should not request a new page more than every 10 seconds.

```
  500,000 URLs
     x 10 seconds between requests
5,000,000 seconds for all requests

5,000,000 seconds = 58 days to index the site once.
```

We recommend a crawl-delay of 2 seconds for our `usasearch` user agent, and setting a higher crawl delay for all other bots. The lower the crawl delay, the faster Search.gov will be able to index your site. In the robots.txt file, it would look like this:

```
User-agent: usasearch  
Crawl-delay: 2

User-agent: *
Crawl-delay: 10
```

### XML Sitemaps
Your robots.txt file should also list one or more of your [XML sitemaps]({{ site.baseurl }}/indexing/sitemaps.html). For example:

```
Sitemap: https://www.example.gov/sitemap.xml
Sitemap: https://www.example.gov/independent-subsection-sitemap.xml
```
* Only list sitemaps for the domain matching where the robots.txt file is. A different subdomain's sitemap should be listed on that subdomain's robots.txt.

### Allow only the content that you want searchable 
We recommend disallowing any directories or files that should not be searchable. For example:

```
Disallow: /archive/
Disallow: /news-1997/
Disallow: /reports/duplicative-page.html
```

* Note that if you disallow a directory after it's been indexed by a search engine, this may not trigger a removal of that content from the index. You'll need to go into the search engine's webmaster tools to request removal.
* Also note that search engines may index individual pages within a disallowed folder if the search engine learns about the URL from a non-crawl method, like a link from another site or your sitemap. To ensure a given page is not searchable, set a [robots meta tag]({{ site.baseurl }}/indexing/how-search-engines-index-content-better-discoverability.html#robots) on that page.


### Customize settings for different bots
You can set different permissions for different bots. For example, if you want us to index your archived content but don't want Google or Bing to index it, you can specify that:

```
User-agent: usasearch  
Crawl-delay: 2
Allow: /archive/

User-agent: *
Crawl-delay: 10
Disallow: /archive/
```

## Robots.txt checklist
<i class="icon-check" ></i> 1. A robots.txt file has been created in the site's root directory (`https://example.gov/robots.txt`)

<i class="icon-check"></i> 2. The robots.txt file disallows any directories and files that automated bots should not crawl

<i class="icon-check"></i> 3. The robots.txt file lists one or more [XML sitemaps]({{ site.baseurl }}/indexing/sitemaps.html)  

<i class="icon-check"></i> 4. The robots.txt file format has been [validated](https://www.websiteplanet.com/webtools/sitemap-validator/) 

## Additional Resources
[Yoast SEO's Ultimate Guide to Robots.txt](https://yoast.com/ultimate-guide-robots-txt/)   

[Google's "Learn about robots.txt files"](https://support.google.com/webmasters/answer/6062608?hl=en&ref_topic=6061961)   


