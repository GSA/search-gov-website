---
layout: page
title: usasearch Drupal Module Help Documentation 
category: developer
tags: i14y drupal
date: April, 12, 2018
last_modified_at: April 12, 2018
#subnav:
  #data: support
---

{% include archive.html %}

> **Important Note:** April, 2018. For new implementations, the Search.gov team recommends you index your content with us not using our Drupal module to send content to our i14y indexing API, but rather by publishing a comprehensive XML sitemap, which we can use to index your content. We recommend the [XML Sitemap module](https://www.drupal.org/project/xmlsitemap). [Read more.]({{ site.baseurl }}/blog/six-months-in.html)

To use the Search.gov service on a Drupal-based website, you should install the [XML Sitemap](https://www.drupal.org/project/xmlsitemap) module, and may want to consider a tool like [Yoast SEO](https://www.drupal.org/project/yoast_seo) to pull in non-Drupal content as well. You may also be interested in our overview of [XML sitemaps]({{ site.baseurl }}/indexing/sitemaps.html).

The `usasearch` [Drupal module](https://drupal.org/project/usasearch) can facilitate indexing content with our service, but we prefer the XML sitemap method. 

* It is possible to manually modify the Drupal search box to connect to our service, but the module allows you to make the connection via a setting configuration, rather than code work.

## Step by step instructions for setting up the module

* [usasearch 7.x-5.x]({{ site.baseurl }}/developer/drupal-7-module-instructions.html)
* [usasearch 8.x-1.x]({{ site.baseurl }}/developer/drupal-8-module-instructions.html)

## [Troubleshooting tips]({{ site.baseurl }}/developer/drupal-module-troubleshooting.html)