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

<ol><li>Open your <code>_config.yml</code> file in your Cloud.gov Pages repo. In the <code>plugins</code>section, confirm that the <code>jekyll-sitemap</code> gem is in the list. For more information, <a href="https://github.com/jekyll/jekyll-sitemap">read the docs here</a> and the <a href="https://help.github.com/en/articles/sitemaps-for-github-pages">instructions for GitHub Pages here</a>.</li>
<li>Discuss and decide which search results page to use. We recommend you use our hosted search results page. You can also pull search results into your website for display. Please note that at this time, pulling search results into your website will result in an incomplete set of search analytics.</li>
</ol>

## On the Search.gov side of things:

<ol><li>Sign up for a <a href="https://search.usa.gov/signup">user account</a>.</li>
<li>Read our <a href="{{ site.baseurl }}/manual/site-launch-guide.html">Search Site Launch Guide</a> if you’d like some direction.</li>
<li>Create and configure a search site in our <a href="https://search.usa.gov/sites">Admin Center</a>, as described in the <a href="{{ site.baseurl }}/manual/site-launch-guide.html">Search Site Launch Guide</a>. Highlights include:<br />
<ul>
<li><a href="{{ site.baseurl }}/manual/add-site.html">Add a search site</a></li>
<li><a href="{{ site.baseurl }}/manual/brand.html">Brand your hosted search results page</a></li>
</ul></li>
<li>Request that we index your domain by <a href="mailto:search@gsa.gov">emailing our team</a>. Note, the site must be publicly available for our indexer to be able to access your content.</li>
<li><a href="{{ site.baseurl }}/manual/preview.html">Preview your search results</a> once the indexing is complete.</li>
</ol>

## On the Cloud.gov Pages side of things, part 2

<ol><li>Open the <code>_config.yml</code> file in your Cloud.gov Pages repo.</li>
<li>Add your site's domain to the <code>url</code> field, approximately line 25. Leave this line commented out for now.<br />
<ul>
<li>If you're testing pre-production, enter your **demo** domain in the <code>url</code> field, and uncomment the line to allow the XML sitemap to build using this demo domain.</li>
</ul>
</li>
<li>Find the <code>Search.gov configuration</code> section following the navigation and sidebar configuration sections. Add your site handle from the Admin Center to the <code>affiliate</code> line.</li>
<li>If you are using the hosted search results page:<br />
<ul>
<li>Delete the value in the <code>access_key</code> line and/or comment out the line.</li>
<li>Set the <code>inline</code> value to <code>false</code>.</li>
</ul>
</li>
<li>If you're pulling search results into your website for display:<br />
<ul>
<li>Go to the Search.gov Admin Center, and find the <code>Activate</code>section, <code>API Access Key<code>. Copy this value to the <code>access_key</code>line in your Cloud.gov Pages <code>_config.yml</code>file.</li>
</ul>
</li>
<li>If you do not want [type-ahead search suggestions]({{ site.baseurl }}/manual/typeahead-api.html) to appear in your website’s search box, change the <code>suggestions</code>value to <code>false<code>.</li>
<li>When you're ready to launch your website, you will uncomment  the <code>url</code>line, to allow your XML sitemap to build using your production domain. Then, let our team know you're live and we'll begin indexing.<br />
<ul>
<li>If you tested using a demo domain, you'll need to update the <code>url</code>value to be your production domain.</li>
</ul></li>
</ol>
