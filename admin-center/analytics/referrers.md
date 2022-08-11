---
layout: page
title: Analyzing Your Site's Referrers
last_modified_at: August 11, 2022
redirect_from:
  - /manual/referrers.html
sidenav: admin_center
date: August 11, 2016
tags: help-manual analytics referrers
description: Referrer data shows the page a search request was initiated from -
  where was the person when they decided to use the search box?
category: admin-center
---
Find it in the Admin Center: \[Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Analytics > Referrers

The Referrers report shows what pages searchers were on when they entered their queries. The current month is shown by default, and the date can be adjusted by using the date selectors at the top of the page and re-generating the report.

You can also toggle between filtered and unfiltered views of the data by clicking on the filter icon (`<i class="icon-filter"></i>`) in the top navigation bar. The filtered data represent our best effort to show you real searches performed by your site's visitors. The unfiltered data include nearly all searches and clicks. Only known spiders (such as Bingbot and Googlebot) are excluded.

*[An important note about referrer policies](#referrer-policies) follows the information about this analytics feature.*

## Top Referrers

The top 1,000 most popular referring URLs for your selected time period, with the most popular listed first.

## \# of Queries

The number of queries made from a specific referring URL.

## View All Queries From This Referring Url

Click on the link to see a list of all the queries  that were made from a specific URL, with the most popular listed first (the **Queries from a Referring URL** report). You can see the number of times each query was made from that URL. You can also click to view a list of all the referring URLs for each unique query (the **Referring URLs Leading to a Query** report).

{: #referrer-policies }
## Important Note: Default Referrer Policy Obscures User Journey

Previously, the default Referrer Policy allowed the full path of the referring page to come through, as long as the site maintained the same level of security (`no-referrer-when-downgrade`). As of late 2020 and early 2021, most major browsers ([Chrome](https://developer.chrome.com/blog/referrer-policy-new-chrome-default/), [Firefox](https://blog.mozilla.org/security/2021/03/22/firefox-87-trims-http-referrers-by-default-to-protect-user-privacy/), [Edge](https://docs.microsoft.com/en-us/microsoft-edge/web-platform/site-impacting-changes)) now default to `strict-origin-when-cross-origin`, which means we only get the domain or subdomain as a referrer, rather than the whole path of the page they were on.

If you do not see the full referring URLs in your Admin Center analytics, you will need to update your [Referrer Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) to allow the full URL path to come through to us.

We recommend setting the `referrerpolicy` attribute on search requests to `no-referrer-when-downgrade`, so that you can see full URL paths and query parameters as referrers in your analytics. Read more about the referrer policy and how to set it.