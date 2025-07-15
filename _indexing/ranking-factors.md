---
layout: page
title: "Relevance ranking: How Search.gov ranks search results"
crumbname: Relevance ranking
category: admin-center
tags: indexing seo
date: July 9, 2019
last_modified_at: July 11, 2025
#subnav:
  #data: indexing
redirect_from: 
  - /manual/ranking-factors.html
---

Use this information on relevance ranking to ensure that the best, most appropriate content rises to the top of search results to help the public find what they need. 

## Promoting results

For any page you want to appear as the first-listed search result, use a [Best Bet]({{ site.baseurl }}/admin-center/content/best-bets.html). 

Best Bets allow you to "pin" recommended pages to the top of the search results. Read our tips on [how to set up Best Bets]({{ site.baseurl }}/admin-center/content/best-bets.html) to learn more.

## Ranking factors

Each of the following ranking factors is calculated separately, and then multiplied together to create the final ranking score of a given item for a given search.

### File type

We prefer HTML documents over other file types. Non-HTML results are demoted to prevent, for example, PDF files from crowding out their respective landing pages.

### Freshness

We prefer documents that are fresh. Anything published or updated in the past 30 days is considered fresh. 

After that, we use a decay function to demote documents, so that the older a document is, the more it is demoted. When documents are 5 years old or older, we consider them to be equally old and do not demote further. 

We use either the `article:modified_time` on an individual page, or that page's `<lastmod>` date from the XML sitemap, whichever is more recent. If there is only an `article:published_time` for a given page, we use that date.

Documents with no date metadata at all are considered fresh and are not demoted. Read more about the [date metadata]({{ site.baseurl }}/indexing/metadata.html) we collect and why it’s important to add metadata to your files.

### Page popularity

We prefer documents that users interact with more. We use data from the [Digital Analytics Program](https://digital.gov/guides/dap/) and our own search analytics to track the number of times a URL is clicked on from the results page. 

The more clicks, the more that URL is promoted, or boosted. We use a logarithmic function to determine how much to boost the relevance score for each URL. 

Note that sites using the search results API cannot take advantage of this click data.