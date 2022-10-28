---
last_modified_at: October 28, 2022
crumbname: Search.gov for Cloud.gov Pages
layout: page
title: Setting up Search.gov for Cloud.gov Pages sites
redirect_from:
  - /manual/searchgov-for-federalist.html
  - /get-started/searchgov-for-federalist.html
sidenav: get_started
date: April 22, 2019
tags: getting-started go-live site-launch
description: Detailed documentation on integrating Search.gov with Cloud.gov Pages websites.
---
For over 20 years, GSA's Search.gov has transformed the public’s search experience on federal government websites. Agencies use our free, shared service to power over 2,000 search boxes on over 30% of federal domains. This page will walk you through the steps required to integrate Search.gov with your Cloud.gov Pages website. Examples are for websites using the Jekyll site template.

You can get everything set up with us before launching your website, except for actually indexing your content. We will index your pages after the website is live.

If you wish to test before launch, you'll need to publish the website to a publicly accessible domain such as `demo.example.gov`. You'll work with your agency's DNS team to set this up, and then follow the instructions below.

## On the Cloud.gov Pages side of things, part 1

1. Open your `_config.yml` file in your Cloud.gov Pages repo. In the `plugins` section, confirm that the `jekyll-sitemap` gem is in the list. For more information, [read the docs here](https://github.com/jekyll/jekyll-sitemap) and the [instructions for GitHub Pages here](https://help.github.com/en/articles/sitemaps-for-github-pages).
2. Discuss and decide which search results page to use. We recommend you use our hosted search results page. You can also pull search results into your website for display. Please note that at this time, pulling search results into your website will result in an incomplete set of search analytics.

## On the Search.gov side of things:

1. Sign up for a [user account](https://search.usa.gov/signup).
2. Read our [Search Site Launch Guide]({{ site.baseurl }}/manual/site-launch-guide.html) if you’d like some direction.
3. Create and configure a search site in our [Admin Center](https://search.usa.gov/sites), as described in the [Search Site Launch Guide]({{ site.baseurl }}/manual/site-launch-guide.html). Highlights include:

  * [Add a search site]({{ site.baseurl }}/manual/add-site.html)
  * [Brand your hosted search results page]({{ site.baseurl }}/manual/brand.html)

4. Request that we index your domain by [emailing our team](mailto:search@gsa.gov). Note, the site must be publicly available for our indexer to be able to access your content.
5. [Preview your search results]({{ site.baseurl }}/manual/preview.html) once the indexing is complete.

## On the Cloud.gov Pages side of things, part 2

1. Open the `_config.yml` file in your Cloud.gov Pages repo.
2. Add your site's domain to the `url` field, approximately line 25. Leave this line commented out for now.

  * If you're testing pre-production, enter your **demo** domain in the `url` field, and uncomment the line to allow the XML sitemap to build using this demo domain.

3. Find the `Search.gov configuration` section following the navigation and sidebar configuration sections. Add your site handle from the Admin Center to the `affiliate` line.
4. If you are using the hosted search results page:

  * Delete the value in the `access_key` line and/or comment out the line.
  * Set the `inline` value to `false`

5. If you're pulling search results into your website for display:

  * Go to the Search.gov Admin Center, and find the `Activate` section, `API Access Key`. Copy this value to the `access_key` line in your Cloud.gov Pages `_config.yml` file.

6. If you do not want [type-ahead search suggestions]({{ site.baseurl }}/manual/typeahead-api.html) to appear in your website’s search box, change the `suggestions` value to `false`.
7. When you're ready to launch your website, you will uncomment  the `url` line, to allow your XML sitemap to build using your production domain. Then, let our team know you're live and we'll begin indexing.

  * If you tested using a demo domain, you'll need to update the `url` value to be your production domain.
