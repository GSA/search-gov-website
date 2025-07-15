---
layout: page
title: How to go live with Search.gov
crumbname: Go-Live
category: admin-center
tags: help-manual
date: September 4, 2019
last_modified_at: July 15, 2025
#subnav:
  #data: get_started
redirect_from:
    - /blog/go-live.html
    - /manual/go-live.html
---
Your pre-launch checklist will be unique to your agency's workflow, requirements, and deadlines. Use the checklist below as a starting point.

## Check the content settings

<i class="icon-check"></i> **1. Have you told us which domains you want to search?** List one or more [domains]({{ site.baseurl }}/admin-center/content/domains.html) that you want to search on the first page of web results. Some agencies opt to leave out the 'www' to include all subdomains (for example, list usa.gov to include answers.usa.gov, blog.usa.gov, publications.usa.gov, etc). Some agencies &mdash; especially department-level portals &mdash; opt to also include their bureaus' websites (for example, Commerce.gov includes commerce.gov, noaa.gov, trade.gov, etc.)

<i class="icon-check"></i> **2. Have we indexed your your content?** We follow search engine optimization (SEO) best practices and leverage your [XML sitemaps]({{ site.baseurl }}/indexing/sitemaps.html) to monitor for new content. Verify also that you have a [robots.txt file]({{ site.baseurl }}/indexing/robotstxt.html). These two files are typically located in the root directory of your website at `example.gov/robots.txt` and `example.gov/sitemap.xml`. Also verify that your robots.txt file allows our user agent (`usasearch`) to access your public content.

## Customize the display

<i class="icon-check"></i> **3. Have you made the search results page look like your website?** Customize the [brand]({{ site.baseurl }}/admin-center/display/brand.html) (font, colors, logo, favicon, and navigation links) of your search results page to create a seamless experience for users as they search and browse your website.

<i class="icon-check"></i> **4. Have you told us what to show on your results page?** Turn on (or off) the inline modules and search tabs that you want to appear on your search results page. You can change the default settings on the [Display Overview]({{ site.baseurl }}/admin-center/display/display-overview.html) page in the Admin Center.

{% include featured-accordion.html content="facet-renaming" accordion=false %}

## Configure your search box

Most agencies add this [code snippet]({{ site.baseurl }}/admin-center/activate/code.html) to the template in their content management systems (rather than adding them to individual pages).

<i class="icon-check"></i> **5. Does your search box point to Search.gov?** Update your search box form code point to our service so that, when users perform a search, they'll see the Search.gov results page.

	<form accept-charset="UTF-8" 
	action="https://search.usa.gov/search" 
	id="search_form" 
	method="get">
	<div style="margin:0;padding:0;display:inline">
		<input name="utf8" type="hidden" value="&#x2713;" />
	</div>
	<input id="affiliate" name="affiliate" type="hidden" value="YourSiteHandle" />
	<label for="query">Enter Search Term(s):</label>
	<input autocomplete="off" 
		class="usagov-search-autocomplete" 
		id="query" 
		name="query" 
		type="text" />
	<input name="commit" type="submit" value="Search" />
	</form>

## Remember SEO

<i class="icon-check"></i> **6. Have you registered your site with the major commercial search engines?** Register for both [Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster) and [Google Webmaster Tools](https://www.google.com/webmasters/tools/home?hl=en) to maximize the coverage of your content in their search results.
