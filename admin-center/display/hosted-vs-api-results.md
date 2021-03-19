---
layout: page
title: Which Search.gov results page solution is right for you?
tags: display brand api
date: September 15, 2020
last_modified_at: March 4, 2021
sidenav: admin_center
---

After you get your [search site set up]({{ site.baseurl }}/get-started/site-launch-guide.html) and we have your content indexed, it’s time to think about how you want to display the search results to your users.

We offer a [hosted search results page]({{ site.baseurl }}/admin-center/display/), which allows you to configure the look and feel of the results page using our Admin Center interface. We recommend customers use the hosted search results page because all features are automatically available and maintained over time - users can access a consistent experience with no developer effort on the agency’s part.

We also offer a [results API](https://open.gsa.gov/api/searchgov-results/){% external_link %}, which does require development within your website’s environment in order to display results.

| Analytics Features | Available on Hosted Search Results Page? | Available in Results API? |
| :-- | :--: | :--: |
| [Query tracking]({{ site.baseurl }}/admin-center/analytics/queries.html) to see what people searched for on your website | Yes | Yes |
| [Click tracking]({{ site.baseurl }}/admin-center/analytics/clicks.html) to see what people clicked on from the results pages | Yes | Yes - requires a [secondary API call](https://open.gsa.gov/api/searchgov-clicks/){% external_link %} |
| [Referrer tracking]({{ site.baseurl }}/admin-center/analytics/referrers.html) to see where people were when they ran their searches | Yes | No |

| Content Features | Available on Hosted Search Results Page? | Available in Results API? |
| :-- | :--: | :--: |
| [Domains]({{ site.baseurl }}/admin-center/content/domains.html) to search by default | Yes | Yes |
| [Collections]({{ site.baseurl }}/admin-center/content/collections.html) to search alternative locations | Yes | No |
| [Best Bets]({{ site.baseurl }}/admin-center/content/best-bets.html) - Text and Graphics options, to post recommended items at the top of results | Yes | Yes |
| [Routed Queries]({{ site.baseurl }}/admin-center/content/routed-queries.html) to send searchers to specific pages | Yes | Yes - requires additional logic |
| [RSS Feeds]({{ site.baseurl }}/admin-center/content/rss.html) - document search | Yes | Yes - requires separate endpoint call |
| [YouTube Videos]({{ site.baseurl }}/admin-center/content/youtube.html) | Yes | Yes - requires separate endpoint call |
| [Twitter]({{ site.baseurl }}/admin-center/content/twitter.html) | Yes | Yes |
| [Flickr]({{ site.baseurl }}/admin-center/content/flickr.html) | Yes | No |
| [MRSS Feeds]({{ site.baseurl }}/admin-center/content/rss.html) - image search | Yes | No |
| [Jobs]({{ site.baseurl }}/admin-center/display/jobs-module.html) | Yes | Yes |
| [Federal Register Documents]({{ site.baseurl }}/admin-center/display/federal-register-module.html) | Yes | Yes |
| [Health Topics]({{ site.baseurl }}/admin-center/display/health-module.html) | Yes | Yes |