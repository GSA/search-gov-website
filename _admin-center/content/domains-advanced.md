---
layout: page
title: Adding Supplemental Content to Your Search Configuration
category: admin-center
tags: "help-manual manage-content domains advanced supplemental-feed supplemental-urls"
published: true
date: May 2, 2017
last_modified_at: May 2, 2017
#subnav:
  #data: admin_center
redirect_from:
    - /manual/domains-advanced.html
---

Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Manage Content > [Domains]({{ site.baseurl }}/admin-center/content/domains.html) > Advanced

Is content missing from your search results? Do you want to have RSS content appear in your main page search results?

We offer two ways for you to tell us about content that you want us to fetch and include in our web index: via RSS feed (Supplemental Feed) or manually (via the [Supplemental URLs](#supplemental-urls) section).

**Note for customers using Collections:** We serve [Collections]({{ site.baseurl }}/admin-center/content/collections.html) results from commercial indexes; the instructions below only apply to your main search results.

**Note to our i14y customers:** Supplemental content will not appear for customers using our [i14y content indexing API]({{ site.baseurl }}/developer/i14y.html).

## Adding Content Via Supplemental Feed

You can use an RSS feed to add URLs. The feed is useful if you'd like to automate the process, add multiple URLs, or both.

Enter the URL of your RSS feed. Click `Submit`. We'll fetch each URL in your feed and index the title, description (optional), and the full text of the document/webpage for the items you provide. Please be sure to follow our [schema]({{ site.baseurl }}/admin-center/content/rss.html), and note that we will only index the items that are listed in the feed. 

You can see the list of URLs we have indexed from your feed by viewing the Supplemental URLs section.

Delete a URL added via RSS feed by deleting the item from your RSS feed. We'll remove the URL from our index the next time we fetch your RSS feed (we fetch saved feeds once per day, in the evening in Eastern Time; for brand new feeds, we fetch as soon as you hit `Submit` on the feed URL).

You can also delete all of the URLs added via the RSS feed by deleting the RSS feed itself.

**Note:** We can't restore URLs that don't exist within your current feed. Please don't remove items from the feed unless you want them to be removed from the index. You can add a feed that contains up to 1,000 items on your own. If you have a feed that will include more than 1,000 items, please contact us.

{: #supplemental-urls }

## Adding Content Via the Supplemental URLs Section

You can also manually add a specific URL on the Supplemental URLs page. We'll fetch each URL you add manually and we'll index the title, description, and the full text of the document/webpage for the link you provide. Note: You can’t manually add a Supplemental URL if it has already been added by via Supplemental feed.

Delete a manually added URL by selecting `Remove` within the list of supplemental URLs.

The source column in the crawl report shows how you added the URL, via an RSS feed or manually. 

## How Supplemental Content Appears on Your Search Results Page

We display titles as they are provided in the feed or as you entered them manually.

We display descriptions as follows: 

* If a searcher’s term matches terms in the description you provided: We'll display the description exactly as you provided it.
* If a searcher’s term only matches terms in the full text of the document: We’ll display snippets taken from the full text.

## Getting Supplemental Content to Always Appear First

If you would like your supplemental content to always appear first in search results, please [contact our team](mailto:search@suppot.digitalgov.gov). Searchers will first be served any supplemental content results, and are then offered the chance to “search again,” which will lead them to commercial index results. 

Please note: if you have any [regular RSS feeds]({{ site.baseurl }}/admin-center/content/rss.html) set up in your search site, this regular RSS content will also appear first with the supplemental content, prior to commercial results. If content is present in both types of feed, duplicates will appear in your results.

In the example below, a Supplemental URL appears first, and clicking “Try your search again” will lead to a page of Bing results. 

![A Supplemental URL is Displayed on Page One of the DigitalGo Search Search Results Page]({{ site.url }}/assets/img/site/Supplemental-Content-First-Example.png){:height="95%" width="95%"}

## Getting Supplemental Content to Be Your Only Search Results

If you would like your supplemental content to be the only results served from your site, please [contact our team](mailto:search@suppot.digitalgov.gov). Searchers will not be offered the chance to “search again” on a commercial index after they exhaust your supplemental content results (see above example). 

Please note: if you have any [regular RSS feeds]({{ site.baseurl }}/admin-center/content/rss.html) set up in your search site, this regular RSS content will also appear with the supplemental content. If content is present in both types of feed, duplicates will appear in your results.

---

***Troubleshooting tip:*** We support RSS 2.0 and Atom feeds. Learn more and validate your feeds at:

* [W3C Feed Validation Service](https://validator.w3.org/feed/) (Atom & RSS)
* RSS 2.0 [specification](http://www.rssboard.org/rss-specification) and [validator](http://www.rssboard.org/rss-validator/)
* [Atom syndication format](https://validator.w3.org/feed/docs/atom.html)

***Troubleshooting tip:*** Are you seeing an error message in the crawled URLs report for your PDF that says, "No content found in document"? Your PDF is likely an image-only, non-searchable file that was created from a paper document using a scanner. See the resources below for more information on how to create searchable PDF files.

* [How to Create Searchable PDF File](https://acrobatusers.com/tutorials/how-to-create-a-searchable-pdf-file) (video)

***Troubleshooting tip:*** Are you seeing an error message in the crawled URLs report that says your page is taking too long to load? Use [Google's PageSpeed Tools](https://developers.google.com/speed) to test the load time of your page, analyze it, and find the bottlenecks.

***Pro Tip*** 

To help the public find your web pages when they search on Bing.com, we notify Bing about any URLs you add. While this helps with search engine optimization (SEO), it is not a cure-all. You should also register for and use commercial search engines' webmaster tools.

* [Google Search Console](https://search.google.com/search-console)
* [Bing Webmaster Tools](https://www.bing.com/toolbox/webmaster)