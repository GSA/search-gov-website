---
layout: page
title: i14y Content Indexing API Documentation
category: developer
date: June 22, 2020
sidenav: developer
tags: i14y api
---

[Search.gov Home]({{ site.baseurl }}/index.html) > [APIs for Developers]({{ site.baseurl }}/developer/index.html) > i14y API

> **Important Note:** Search.gov team recommends you index your content with us not using the i14y API, but rather by publishing a comprehensive xml sitemap, which we can use to index your content. [Read more.]({{ site.baseurl }}/manual/indexing-with-searchgov.html)

[i14y Github repo](https://github.com/GSA/i14y){% external_link %}

## What is i14y?

The Search.gov i14y Content Indexing API allows you to send content directly from your content management system (CMS) into Search.gov for real-time indexing. By hooking into your CMS workflow, you can immediately create, update, and delete the associated documents in our search indexes via this API. Even if you don’t have a CMS, you can develop software to publish your content in a way that meets the i14y API specifications below.

Ruby/Python/Node clients are welcome.

## Before you Begin

1. Set-up a search site with our service via 
[Search.gov]() 
2. Request that your search site be enabled for i14y by [emailing our team](mailto:search@support.digitalgov.gov).
3. Set up an i14y “drawer” in our system. [Full instructions]({{ site.baseurl }}/manual/i14y-drawers.html) are available in our help manual. You’ll give your drawer a handle, and you’ll need to enter this drawer handle in the username field below after you click the Authorize button.
4. Get your i14y secret token. You’ll need to enter this token as your password.
The token can be found in our system in: [Search Admin Center](https://search.usa.gov/sites) > Manage Content > i14y Drawers, select the option Show.

*Note:* If you are a developer who doesn't have access to our site configurations, please [email us](mailto:search@support.digitalgov.gov).

As noted above, sitemap indexing is our preferred method, so the i14y API spec has been unpublished.
