---
layout: post
title: 2021 System Highlights
description: Search.gov made many improvements in system structure and security in 2021.
tags: release-notes year-in-review
date: January 19, 2022
release-year: "2021"
last_modified_at: 2022-01-19
redirect_from: /about/updates/year-in-review/2021-system-highlights.html
#subnav:
  #data: about_us
---

Every month we publish [release notes]({{site.baseurl}}/about/updates/releases/), highlighting the improvements we’ve made to our technology. The biggest changes in 2021 revolved around system security and legacy code cleanup, paving the way for new feature development in 2022.

* **Indexing Improvements:** We now visit sitemaps to scan for new and updated content every 2 hours. We made updates to our backend infrastructure to make it easier to manually queue URLs for indexing. We also improved the performance and stability of our indexing process.
* **Localizations Update:** We moved management of multilingual support from the GSA/Punchcard repository to the GSA/search-gov repository.
* **Legacy code removals:** We removed the old results display code environment, clearing the path for our results page redesign. We also removed support for the legacy V1 `/api/search/` endpoint.
* **Security updates:** We improved security settings on our session cookies, input validation in certain fields in the Admin Center, security of our third-party integrations, and performed many gem upgrades, changes, and removals to maintain a secure environment.
* **System upgrades:** Ruby, Rails, Elasticsearch, MySQL, jQuery.
* **System load management:** We improved our ability to block unwanted queries and react to flux in traffic. We also implemented auto-scaling on portions of our infrastructure.