---
layout: post
title: 2022 System Highlights
description: Search.gov made many improvements in system structure and security in 2022.
tags: release-notes year-in-review
date: January 31, 2023
last_modified_at: January 31, 2023
release-year: "2022"
redirect_from: /about/updates/year-in-review/2022-system-highlights.html
sidenav: about_us
---

Every month we publish [release notes]({{site.baseurl}}/about/updates/releases/), highlighting the improvements we’ve made to our technology. In 2022, we released some exciting and heavily-requested features! 

* **Faceted Search**: We support Faceted Search via our Results API! Read more about the [metadata](https://search.gov/indexing/metadata.html) we index. Our [Results API](https://open.gsa.gov/api/searchgov-results/) documentation explains how to add this to your site. We will be adding support to our hosted results page soon!
* **Javascript Content Indexing**: We can now index Javascript-based content! Before this update, any content that wasn't present in the page source code was invisible to our indexers. Now, we have an option to pre-render pages to be able to index Javascript content. [Email](mailto:search@gsa.gov) our team to enable this for your site!
* **General Indexing Improvements**: We support cross-posted sitemaps, which allows sites to use external services to generate sitemaps. We also added more error handling to account for issues reaching customer domains. We made it easier for our team to support large sites who need specific sections reindexed (ex. for a gradual redesign rollout).
* **System Load Improvements**: We improved our system's response to external attacks. 
* **Search.gov Website Redesign**: We launched a redesign for our help documentation website. We added navigational structure and support content in response to our customers' needs. The site uses [U.S. Web Design System](https://designsystem.digital.gov/) components for a consistent government experience.
* **System upgrades:** Ruby, Rails, Redis, Tika, and Elasticsearch.
