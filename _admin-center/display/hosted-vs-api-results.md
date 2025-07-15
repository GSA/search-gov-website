---
layout: page
title: "Feature comparison: Hosted search results vs. API"
tags: display brand api
date: September 15, 2020
last_modified_at: July 11, 2025
#subnav:
  #data: admin_center
---

After you [set up a site]({{ site.baseurl }}/get-started/site-launch-guide.html) and we have indexed your content, it is time to think about how you want to display the search results. 

We offer two options:
 
## Option 1. Hosted search results (recommended)
  * Configure the branding, fonts, and colors of the results page using our Admin Center interface.
  * All our search features are available and maintained over time.
  * No developer effort on your agency’s part.

Learn more about how to [configure the display]({{ site.baseurl }}/admin-center/display/) of the hosted search results page in the Admin Center.

## Search results API
  * To use this API to display results in your website's frame, you'll need developers to create a results page template in your environment .
  * You should also use the [clicks API](https://open.gsa.gov/api/searchgov-clicks/) to use alongside the Results API &mdash; this API reports click activity to our system and will complete your search analytics.
  * For searchers to use new search features we introduce over time, your developers will need to update your environment's results page template.

Learn more about [how to use the results API](https://open.gsa.gov/api/searchgov-results/).

{: .usa-table .usa-table--compact}
| Analytics Features | Hosted results page | API |
| :-- | :--: | :--: |
| [Query Tracking]({{ site.baseurl }}/admin-center/analytics/queries.html) to see what people searched for on your website | Yes | Yes |
| [Click Tracking]({{ site.baseurl }}/admin-center/analytics/clicks.html) to see what people clicked on from the results pages | Yes | Yes, with the [clicks API](https://open.gsa.gov/api/searchgov-clicks/) |
| [Referrer Tracking]({{ site.baseurl }}/admin-center/analytics/referrers.html) to see where people were when they ran their searches | Yes | No |

{: .usa-table .usa-table--compact}
| Content Features | Hosted results page | API |
| :-- | :--: | :--: |
| [Domains]({{ site.baseurl }}/admin-center/content/domains.html) to search by default | Yes | Yes |
| [Collections]({{ site.baseurl }}/admin-center/content/collections.html) to search alternative locations | Yes | No |
| [Best Bets]({{ site.baseurl }}/admin-center/content/best-bets.html) &mdash; Text and Graphics options, to post recommended items at the top of results | Yes | Yes |
| [Routed Queries]({{ site.baseurl }}/admin-center/content/routed-queries.html) to send searchers to specific pages | Yes | Yes, with additional logic |
| Faceted Search | No | Yes |
