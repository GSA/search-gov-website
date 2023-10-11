---
layout: page
title: "Results Page Feature Comparison: Hosted Vs. API"
tags: display brand api
date: September 15, 2020
last_modified_at: April 20, 2023
#subnav:
  #data: admin_center
---

After you get your [search site set up]({{ site.baseurl }}/get-started/site-launch-guide.html) and we have your content indexed, it’s time to think about how you want to display the search results to your users. We offer two options:
 
**[Hosted Search Results]({{ site.baseurl }}/admin-center/display/)** &mdash; *Recommended!*
  * Configure the branding, fonts, and colors of the results page using our Admin Center interface.
  * All our search features are available and maintained over time.
  * No developer effort on your agency’s part.

**[Search Results API](https://open.gsa.gov/api/searchgov-results/)**
  * To use this API to display results in your website's frame, you'll need developers to create a results page template in your environment .
  * You should also implement our [Clicks API](https://open.gsa.gov/api/searchgov-clicks/) to use alongside the Results API &mdash; this API reports click activity to our system and will complete your search analytics.
  * For searchers to use new search features we introduce over time, your developers will need to update your environment's results page template.

{: .usa-table .usa-table--compact}
| Analytics Features | Available on Hosted Search Results Page? | Available in Results API? |
| :-- | :--: | :--: |
| [Query Tracking]({{ site.baseurl }}/admin-center/analytics/queries.html) to see what people searched for on your website | Yes | Yes |
| [Click Tracking]({{ site.baseurl }}/admin-center/analytics/clicks.html) to see what people clicked on from the results pages | Yes | Yes &mdash; requires a [secondary API call](https://open.gsa.gov/api/searchgov-clicks/) |
| [Referrer Tracking]({{ site.baseurl }}/admin-center/analytics/referrers.html) to see where people were when they ran their searches | Yes | No |

{: .usa-table .usa-table--compact}
| Content Features | Available on Hosted Search Results Page? | Available in Results API? |
| :-- | :--: | :--: |
| [Domains]({{ site.baseurl }}/admin-center/content/domains.html) to search by default | Yes | Yes |
| [Collections]({{ site.baseurl }}/admin-center/content/collections.html) to search alternative locations | Yes | No |
| [Best Bets]({{ site.baseurl }}/admin-center/content/best-bets.html) &mdash; Text and Graphics options, to post recommended items at the top of results | Yes | Yes |
| [Routed Queries]({{ site.baseurl }}/admin-center/content/routed-queries.html) to send searchers to specific pages | Yes | Yes &mdash; requires additional logic |
| [RSS Feeds]({{ site.baseurl }}/admin-center/content/rss.html) &mdash; document search | Yes | Yes &mdash; requires separate endpoint call |
| [YouTube Videos]({{ site.baseurl }}/admin-center/content/youtube.html) | Yes | Yes &mdash; requires separate endpoint call |
| [Flickr]({{ site.baseurl }}/admin-center/content/flickr.html) | Yes | No |
| [MRSS Feeds]({{ site.baseurl }}/admin-center/content/rss.html) &mdash; image search | Yes | No |
| [Jobs]({{ site.baseurl }}/admin-center/display/jobs-module.html) | Yes | Yes |
| [Federal Register Documents]({{ site.baseurl }}/admin-center/display/federal-register-module.html) | Yes | Yes |
| [Health Topics]({{ site.baseurl }}/admin-center/display/health-module.html) | Yes | Yes |
| Faceted Search | Planned | [Yes](https://open.gsa.gov/api/searchgov-results/) |
