---
layout: page
title: How to optimize your content
category: admin-center
tags: help-manual manage-content domains best-bets routed-queries collections
date: April 18, 2017
last_modified_at: July 30, 2025
#subnav:
  #data: admin_center
redirect_from:
    - /manual/domains.html
    - /admin-center/content/index.html
    - /admin-center/content/content-overview.html
    - /admin-center/content/collections.html
    - /admin-center/content/domains.html
    - /admin-center/content/best-bets.html
    - /admin-center/content/routed-queries.html
    - /admin-center/add-your-domains.html
---

Make sure your search results page is returning the right content to meet your goals.

There are many options to optimize your content, so you may need to consult your content team for help. 

## Optimize your content for search engines

Search.gov follows [search engine optimization (SEO)](https://digital.gov/topics/search-engine-optimization) best practices. 

Create a [robots.txt file](https://digital.gov/resources/introduction-robots-txt-files) and [XML sitemap](https://search.gov/indexing/sitemaps.html) to optimize your search results.

Also make sure your robots.txt file allows our user agent (`usasearch`) to access your content.

## Add your domains

Add your domains on the Domains page in the [Admin Center](https://search.usa.gov/sites).

For the most comprehensive results add `yoursite.gov` without the `www`. This returns search results for all content across your domain, including all subdomains and folders.

For more precise results, you can be more specific:

* Add `www.yoursite.gov` to return results for content under your 'www' domain only
* Add `subdomain.yoursite.gov` to return results for content under this subdomain only
* Add `yoursite.gov/folder` to return results for content under this folder only

For more precise results, you can also exclude content. Examples include:

* Add `subdomain1.yoursite.gov`, `subdomain2.yoursite.gov`, and `subdomain4.yoursite.gov` to return results for content under these subdomains only (and not `subdomain3.yoursite.gov`)
* Return a 404 (Not Found) or 301 (Permanently Moved) HTTP response code for all pages you remove from your website.
* Disallow subdomains or folders in your [robots.txt](https://digital.gov/resources/introduction-robots-txt-files) file

Note that Search.gov indexes publicly accessible content only. Do not add domains for secure content, including intranets.

## Manage other content (optional)

Search.gov offers several other ways to manage the content on your results page. You can set up collections, best bets, and routed queries in the Content section of the [Admin Center](https://search.usa.gov/sites).

### Create collections

You can use collections to search a narrower or broader scope than the default results page defined by the domains you added.

Add a name for the collection (such as Blog, News, or All Agency) to create a collection. Then, add the scope:

* To search a narrower scope, add the subdomain or folder (such as `blog.yoursite.gov` or `yoursite.gov/news/` for the Blog or News collections).
* To search a broader scope, add the domains (such as `bureau1.gov`, `bureau2.gov`, `bureau3.gov` for the All Agency collection).

Collections often appear as a tab on your search results page. After you create a collection, be sure to turn on its display on the Display Overview page in the [Admin Center](https://search.usa.gov/sites).

You can also set up a separate search box on your website that limits results to the collection only. Check out the tips on [how to set up a search box limited to a collection only]({{ site.url }}/admin-center/connect-your-search-to-searchgov.html). 

## Recommend content with best bets

You can use best bets to recommend and promote specific pages at the top of your search results page.

Best bets stand out from the regular web results with some unique formatting and a title, Recommended by `YourSiteDisplayName`.

To create a best bet:

* **Add the page URL.** 
* **Add a title and description.** Titles and descriptions are displayed on the results page. Each field can have up to 255 characters. 
* **Set the status and publish date.** Newly created best bets are active by default. Change it to inactive if you don't want it to be displayed yet. Use the start and end dates if you only want the best bet to appear during a specific timeframe.
* **Add keywords (optional).** Keywords do not appear on the results page. Use them to add other words or phrases that are not in title or description. Common keywords include acronyms, synonyms, misspellings, slang, or other variants.

If multiple best bets are returned for search, only the two most relevent best bets are displayed.

[Search for _vote_ on USA.gov](https://search.usa.gov/search?affiliate=usagov_en_internal&query=vote) to see an example of a best bet on a federal government website.

## Route queries

You can use routed queries to get searchers to a specific web page as quickly as possible.

Routed queries skip the search results page and automatically redirect visitors to a page on your website. Use them for [top tasks](https://digital.gov/event/2018/04/11/a-deep-dive-into-top-tasks-with-gerry-mcgovern/) with search results that are less than ideal.

To create a routed query:

* **Add the page URL.** 
* **Add a description.** Add a brief description to help you remember why you created this routed query. Descriptions are not used for any other purpose, and they do not appear on the results page.
* **Add keywords.** Add the words or phrases you want to trigger the routing. Enter each keyword in a separate field. Each keyword can have up to 255 characters. Common keywords include acronyms, synonyms, misspellings, slang, or other variants. Searchers are redirected to your web page when their search term exactly matches a keyword.

[Search for _unclaimed money_ on USA.gov](https://search.usa.gov/search?affiliate=usagov_en_internal&query=unclaimed+money) to see an example of a routed query on a federal government website.