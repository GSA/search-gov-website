---
layout: page
title: Setting up Search.gov for Federalist Sites
crumbname: Search.gov for Federalist
tags: getting-started go-live site-launch
sidenav: get_started
date: April 22, 2019
last_modified_at: April 14, 2021
---

For over 20 years, GSA's Search.gov has transformed the public’s search experience on federal government websites. Agencies use our free, shared service to power over 2,000 search boxes on over one third of federal domains. This page will walk you through the steps required to integrate Search.gov with your Federalist website.

## On the Federalist side of things, part 1

1. Confirm you have an XML sitemap. For sites using Jekyll, look for the `jekyll-sitemap` gem in the `plugins` section of your `_config.yml` file. [Read the docs here](https://github.com/jekyll/jekyll-sitemap) and [instructions for GitHub Pages here](https://help.github.com/en/articles/sitemaps-for-github-pages).

## On the Search.gov side of things

1. Sign up for a [user account](https://search.usa.gov/signup).
1. Read our [Search Site Launch Guide]({{ site.baseurl }}/get-started/site-launch-guide.html) if you’d like some direction.
1. Request that your domain be indexed by [emailing our team](mailto:search@support.digitalgov.gov). Note, the site must be publicly available on a production or demo domain for our indexer to be able to access your content.
1. Create and configure a search site in our [Admin Center](https://search.usa.gov/sites).
  - Five your site a display name and a site handle
  - Enter the site handle in the search box form code on your website, see below
1. [Preview your search results]({{ site.baseurl }}/admin-center/preview.html) once the indexing is complete.
1. Put finishing touches on your search site in the Admin Center &mdash; brand your results page, etc. 

## On the Federalist side of things, part 2

1. Add your site handle from the Admin Center to the `_config.yml` file in your Federalist repo, on the `searchgov` `affiliate` line.
1. Decide if you want to use the Federalist results page, or our hosted results page.
  - `inline = true` will use our API to display results in your Cloud.gov site
  - `inline = false` will direct searchers to our hosted results page, and then return them to your site to view your content
1. Include the `_includes/searchgov/form.html` search box in your `<header>` include.
1. If you would like typeahead search suggestions to appear in your website’s search box, in the `_config.yml` file set `searchgov` `suggestions` to `true`.
