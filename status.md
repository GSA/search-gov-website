---
layout: page
title: Search.gov System Status
tags: status support help
description: This page provides the current operating status of the Search.gov system.
last_modified_at: May 23, 2024
#subnav:
  #data: support
---

## Current Status

<!-- Uncomment the block below to post the first message once an issue is reported. The timestamp will update based on when the site builds in Cloud.gov Pages. When we have more information, comment the "Potential Degradation" back out and add a new update with the determined degradation status and manually entered timeframe. -->
<!--
<img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Potential Degradation">&nbsp;&nbsp; Potential Degradation <br /> 
Date: {{ "now" | date: "%B %d, %Y %I:%M %p %Z" }} - ongoing <br />
Details: We are investigating a possible issue with our search service.  We will provide updates every 30 minutes. -->

<!--
<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">	Serious Degradation:
Date: {{ "now" | date: "%B %d, %Y %I:%M %p %Z" }} - ongoing <br />
We are investigating a possible issue with our search service. One or more components of the Search.gov service is unavailable, but other services are fully operational.&nbsp;&nbsp;&nbsp; -->


<!-- When updating the status page, comment out (rather than delete) the "Fully Operational" message below, so it is easy to reinstate it later. -->
 <img src="https://search.gov/assets/img/site/green-status-normal-operations.png" width="15px" height="15px" alt="Fully Operational" title="Fully Operational">&nbsp;&nbsp;&nbsp; Fully Operational 


<!--
<img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Performance Degradation">&nbsp;&nbsp; Major performance Degradation <br /> 
Date: {{ "now" | date: "%B %d, %Y %I:%M %p %Z" }} - ongoing <br /> 
Date: October 22, 2024 2 PM Eastern - October 23, 12 PM Eastern <br />
Status as of {{ "now" | date: "%B %d, %Y %I:%M %p %Z" }} :
Details: 
* The search.gov system is stable.
* An email update to search.gov users has been sent.
* The search.gov team is currently addressing issues that were discovered over the last day.
* Expect regular communications here and through user emails as to next steps. -->
 
<!-- TO ANNOUNCE A PROD PUSH, uncomment the next two lines, update the date in the announcement and in the last_modified_at at the top of the page. Commit straight to Main. When the prod push is complete, re-comment them out. Commit to Main again. -->

<!--
<img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Alert icon">&nbsp;&nbsp; Planned Maintenance<br /> 
We will be doing an infrastructure cutover between 5pm and 10pm ET today, December 4, 2024. We do not anticipate any interruptions to service. Please reach out to search@gsa.gov if you encounter any issues. 
--> 



## Legend

{: .usa-table .usa-table--compact}
| &nbsp;&nbsp;Color&nbsp;&nbsp;	| Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	| Description |
| :--:	| :--	| :-- |
|<img src="https://search.gov/assets/img/site/green-status-normal-operations.png" width="15px" height="15px" alt="Fully Operational" title="Fully Operational">	| Fully Operational	| Systems are operating normally.|
|<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">	| Intermittent Degradation&nbsp;&nbsp;&nbsp;	| Periodic errors that resolve themselves on retry.|
|<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">	| Serious Degradation	| One or more components of the Search.gov service is unavailable, but other services are fully operational.&nbsp;&nbsp;&nbsp;|
|<img src="https://search.gov/assets/img/site/red-status-system-down.png" width="15px" height="15px" alt="Outage" title="Outage">	| Outage	| The Search.gov service is down.|
