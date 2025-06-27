---
layout: page
title: Going Live With Search.gov
crumbname: Go-Live
category: admin-center
tags: help-manual
date: September 4, 2019
last_modified_at: April 20, 2023
#subnav:
  #data: get_started
redirect_from:
    - /blog/go-live.html
    - /manual/go-live.html
---
Your pre-launch checklist will be unique to your agency's workflow, requirements, and deadlines. Below is a typical checklist.

## Double Check Your Content Settings

<i class="icon-check"></i> **1. Have you told us which domain(s) you want to search?** List one or more [domains]({{ site.baseurl }}/admin-center/content/domains.html) that you want to search on the first page of web results. Some agencies opt to leave out the 'www' to include all subdomains (for example, list usa.gov to include answers.usa.gov, blog.usa.gov, publications.usa.gov, etc). Some agencies especially department-level portals opt to also include their bureaus' websites (for example, Commerce.gov includes commerce.gov, noaa.gov, trade.gov, etc.)

<i class="icon-check"></i> **2. Have we indexed your your content?** We follow search engine optimization (SEO) best practices and leverage your [XML sitemaps]({{ site.baseurl }}/indexing/sitemaps.html) to monitor for new content. Verify also that you have a [robots.txt file]({{ site.baseurl }}/indexing/robotstxt.html). These two files are typically located in the root directory of your website (i.e., `example.gov/robots.txt` and `example.gov/sitemap.xml`, respectively). Also verify that your robots.txt file allows our user agent (`usasearch`) to access your public content.

<i class="icon-check"></i> **3. Have you told us about your RSS feeds?** We love [RSS feeds]({{ site.baseurl }}/admin-center/content/rss.html). Tell us about all of your feeds, even if you opt not to show them (see #5 below). They're a quick way for us to index your new and updated content, in addition to the content listed on your sitemap (see above). (Tip: Preview your feeds from the RSS page in the [Admin Center](https://search.usa.gov/sites/) to confirm that we've indexed your content.)

<i class="icon-check"></i> **4. Have you told us about your social media accounts?** [Flickr photostreams]({{ site.baseurl }}/admin-center/content/flickr.html) and [YouTube videos]({{ site.baseurl }}/admin-center/content/youtube.html) are a great way to highlight your recent content and offer a single point of access to your various publishing channels. 

## Customize the Display of Your Search Results Page

<i class="icon-check"></i> **5. Have you made the search results page look like your website?** Customize the [brand]({{ site.baseurl }}/admin-center/display/brand.html) (font, colors, logo, favicon, and navigation links) of your search results page to create a seamless experience for users as they search and browse your website.

<i class="icon-check"></i> **6. Have you told us what to show on your results page?** Turn on (or off) the inline modules and search tabs that you want to appear on your search results page. You can change the default settings on the [Display Overview]({{ site.baseurl }}/admin-center/display/display-overview.html) page in the Admin Center.

{% include featured-accordion.html content="facet-renaming" accordion=false %}

## Connect Your Site to Search.gov

Most agencies add these two [snippets of code]({{ site.baseurl }}/admin-center/activate/code.html) to the template(s) in their websites or content management systems (rather than adding them to individual pages).

<i class="icon-check"></i> **7. Does your search box point to Search.gov?** Update your search box form code point to our service so that, when users execute a search, they'll see your Search.gov-hosted results page.

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

<i class="icon-check"></i> **8. Do you have our Javascript tag on your webpages?** This Javascript powers the suggestions for typeahead and [related searches]({{ site.baseurl }}/admin-center/display/display-overview.html). It also provides data on your trending URLs on the [Site Overview]({{ site.baseurl }}/admin-center/dashboard/site-overview.html) page in the [Admin Center](https://search.usa.gov/sites/).

	<script type="text/javascript">
	//<![CDATA[
		 var usasearch_config = { siteHandle:"YourSiteHandle" };
	 	var script = document.createElement("script");
	 	script.type = "text/javascript";
	 	script.src = "//search.usa.gov/javascripts/remote.loader.js";
	 	document.getElementsByTagName("head")[0].appendChild(script);
	//]]>
	</script>

## Don't Forget SEO

<i class="icon-check"></i> **11. Have you registered your site with the major commercial search engines?** Register for both [Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster) and [Google Webmaster Tools](https://www.google.com/webmasters/tools/home?hl=en) to maximize the coverage of your content in their search results.
