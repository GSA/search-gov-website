---
layout: post
category: releases
title: 2023 system highlights
filename-custom: 2023-System-Highlights
last_modified_at: 2024-04-16
sidenav: about_us
release-year: "2023"
description: "Summary of the major improvements we made to the Search.gov system during 2023."
---

## Search filters: 
* We built a filtering feature for unstructured, cross-platform web searches. This one of a kind feature combines the breadth and power of an external web search engine, with the precision of an internal, single-site search feature, such as an e-commerce site.  
* During 2023 we created the backend functionality for this feature and made it available to customers through our results API. 
* Read about how NASA.gov implemented search filters on their site.
* Read our documentation on [metadata]({{ site.baseurl }}/indexing/metadata.html) and our [Results API](https://open.gsa.gov/api/searchgov-results/).

## Indexing improvements:
* We added several important features to our backend indexing workflows:
  * We added RSS and TXT file formats to the set of file types we monitor as sitemaps.
  * We re-ordered the indexing queue, so that customer requests for indexing are prioritized above general index maintenance.
* We conducted extensive investigations into developing a spidering function, to supplement our sitemap-driven indexing. 

## Results matching improvements:
* We conducted extensive investigations into AI-driven solutions to certain results matching challenges, with a focus on alphanumeric strings. Alphanumeric strings are used across government, on forms, regulations, policies, directives, and so on. Often these combinations of letters and numbers include punctuation, and it’s common for people to mistype the string. For instance, someone may need their “DD 214,” but search for “DD214” - a subtle but technically challenging difference where we are asking the search engine to recognize two words as the equivalent of a single word, or vice versa. We chose a tool that seemed most likely to resolve this challenge, but discovered that it could not operate at scale. At the end of the year, we pivoted to trying simpler solutions for this challenge.
* We added more matching and filtering options to our results API, including dates and URL paths.

## Results page redesign
* We built a new React-driven results page based on the [U.S. Web Design System](https://designsystem.digital.gov/) (USWDS) and released it in beta in January 2024. This work supports compliance with the 21st Century IDEA, for ourselves and for our customers. Our beta included:
  * Extensive changes to the backend, so that the system could receive search requests from the new page, and share result content back with it in the correct groupings. 
  * Extensive frontend work, not only on the new design itself, but also to incorporate our complex data, and present it in an internationalized setting. We offer our results page in [65 languages]({{ site.baseurl }}/admin-center/dashboard/supported-languages.html).
  * Updates to our Admin Center, to allow customers to configure their layout, colors, links, and logos.

## Updates, upgrades, and other codebase improvements:
* We created a redaction script to protect personally identifiable information if it is entered as a search term, while still showing customers that this type of information was searched for. For example, a social security number now appears in our search data as “redacted_ssn.”
* We removed several significant segments of unneeded code, including unused search API connections, and infrastructure code.
* We expanded our encryption posture to include components not connected to the internet.
* We added multi-factor authentication for a team-facing resource.
* We upgraded components across our system.
* We began our ATO reassessment period.
* We improved our development containers.
* We began work on migrating to a new infrastructure and orchestration tool.
* We improved our firewall, secrets management, and security agent performance.
