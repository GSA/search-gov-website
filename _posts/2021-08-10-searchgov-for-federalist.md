---
layout: post
title: Setting up Search.gov for Federalist websites
crumbname: Search.gov for Federalist
category: manual
tags: getting-started go-live site-launch
breadcrumbs:
  - label: Home
    url: /
  - label: Help Manual
    url: /manual/
  - label: Site Launch Guide
    url: /manual/site-launch-guide.html
---

For 20 years, GSA's Search.gov has transformed the public’s search experience on federal government websites. Agencies use our free, shared service to power over 2,000 search boxes on over 30% of federal domains. This page will walk you through the steps required to integrate Search.gov with your Federalist website using the Jekyll site template.

You can get everything set up with us prior to launching your website, except indexing of your content. We will index your pages after the website is pushed to production.

If you wish to test things out prior to launch, we'll need to work with a publicly accessible pre-production domain such as `demo.example.gov`. You'll work with your agency's DNS team to set this up, and then follow the instructions below 

## On the Federalist side of things, part 1

1. Open your `_config.yml` file in your Federalist repo. In the `plugins` section, confirm that the `jekyll-sitemap` gem is included in the list. For more information, [read the docs here](https://github.com/jekyll/jekyll-sitemap) and [instructions for GitHub Pages here](https://help.github.com/en/articles/sitemaps-for-github-pages).
1. Decide if you want to use our hosted search results page (our recommendation) or if you want to pull search results into your website for display. Please note that at this time, pulling search results into your website will result in an incomplete set of analytics.

## On the Search.gov side of things:

1. Sign up for a [user account](https://search.usa.gov/signup).
1. Read our [Search Site Launch Guide]({{ site.baseurl }}/manual/site-launch-guide.html) if you’d like some direction.
1. Create and configure a search site in our [Admin Center](https://search.usa.gov/sites), as described in the [Search Site Launch Guide]({{ site.baseurl }}/manual/site-launch-guide.html). Highlights include:
  * [Add a search site]({{ site.baseurl }}/manual/add-site.html)
  * Brand your hosted search results page
1. Request that your domain be indexed by [emailing our team](mailto:search@support.digitalgov.gov). Note, the site must be publicly available for our indexer to be able to access your content.
1. [Preview your search results]({{ site.baseurl }}/manual/preview.html) once the indexing is complete.

## On the Federalist side of things, part 2

1. Open the `_config.yml` file in your Federalist repo.
1. Add your site's domain to the `url` field, approximately line 25. Leave this line commented out for now.
  1. If you're testing pre-production, enter your **demo** domain here, and uncomment the line to allow the XML sitemap to build using the demo domain. 
1. Find the `Search.gov configuration` section following the navigation and sidebar configuration sections. Add your site handle from the Admin Center to the `affiliate` line.
1. If you are using the hosted search results page:
  1. Delete the value in the `access_key` line and/or comment out the line.
  1. Set the `inline` value to `false`
1. If you're pulling search results into your website for display:
  1. Go to the Search.gov Admin Center, and find the `Activate` section, `API Access Key`. Copy this value to the `access_key` line in your Federalist `_config.yml` file.
1. If you do not want [type-ahead search suggestions]({{ site.baseurl }}/manual/typeahead-api.html) to appear in your website’s search box, change the `suggestions` value to `false`.
1. When you're ready to launch your website, you will uncomment  the `url` line, this will insert your production domain into your XML sitemap. Then, let our team know you're live and we'll begin indexing.
  1. If you tested pre-production using a demo domain, you'll need to update the `url` line to include your production domain.
