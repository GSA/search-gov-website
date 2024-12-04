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

<!-- <img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Potential Degradation">&nbsp;&nbsp; Potential Degradation <br /> 
Date: {{ "now" | date: "%B %d, %Y %I:%M %p %Z" }} - ongoing <br />
Details: We are investigating a possible issue with our search service. We will provide updates every 30 minutes. -->

<!-- When updating the status page, comment out (rather than delete) the "Fully Operational" message below, so it is easy to reinstate it later. -->

<img src="https://search.gov/assets/img/site/green-status-normal-operations.png" width="15px" height="15px" alt="Fully Operational" title="Fully Operational">&nbsp;&nbsp;&nbsp; Fully Operational 


<!--
<img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Performance Degradation">&nbsp;&nbsp; Major performance Degradation <br /> 
<!-- Date: {{ "now" | date: "%B %d, %Y %I:%M %p %Z" }} - ongoing <br /> -->
Date: October 22, 2024 2 PM Eastern - October 23, 12 PM Eastern <br />
Status as of {{ "now" | date: "%B %d, %Y %I:%M %p %Z" }} :
Details: 
* The search.gov system is stable.
* An email update to search.gov users has been sent.
* The search.gov team is currently addressing issues that were discovered over the last day.
* Expect regular communications here and through user emails as to next steps.
-->
 
<!-- TO ANNOUNCE A PROD PUSH, uncomment the next two lines, update the date in the announcement and in the last_modified_at at the top of the page. Commit straight to Main. When the prod push is complete, re-comment them out. Commit to Main again. -->

<img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Alert icon">&nbsp;&nbsp; Planned Maintenance<br /> 
We will be doing an infrastructure cutover between 5pm and 10pm ET today, May 23, 2024. We do not anticipate any interruptions to service. Please reach out to search@gsa.gov if you encounter any issues. 
 

## Recent Events

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: October 22, 2024, 12:03 ET &ndash; 3:00PM ET <br />
Details: Post production cutover, we discovered a resource and timeout misconfiguration that led to the system being overwhelmed and returning errors for many queries during peak daily traffic.  These issues have been addressed, and the main functionality of the system have been addressed.


<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: May 23, 2024, 7:50AM ET &ndash; 2:00PM ETbr />
Details: During planned maintenance to migrate infrastructure that supports Elasticsearch, unexpected issues are leading to a partial degration of the search.gov in-house index. This affected customers whose web results come from our in-house index, as well as additional features such as Best Bets, RSS news, etc., for searches that were new after the change, as well as accessing the admin interface. Searches that had also been run prior to the change were served from cache. 

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation - Bing index-powered sites<br />
Date: May 23, 2023, 1:20AM ET &ndash; 9:30 AMET<br />
Details: Update 11:15am - Beginning approximately 1:20AM ET, Thursday May 23, the Bing web search API began returning errors. At approximately 9:45AM ET, Bing began returning results again. During this time, Search.gov sites leveraging Bing results were presenting searchers with a "Sorry, no results" message. Though results are now returning.


<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: April 30, 2024, 5:00PM ET &ndash; 8:40PM ET<br />
Details: During planned maintenance, a change to our production connection to Elasticsearch failed and we began returning errors for searches that require Elasticsearch. This affected customers whose web results come from our in-house index, as well as additional features such as Best Bets, RSS news, etc., for searches that were new after the change. Searches that had also been run prior to the change were served from cache. We rolled back the change. Search.gov is now fully operational.

<img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Alert icon">&nbsp;&nbsp; Planned Maintenance<br /> 
<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Partial Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Partial Degradation <br />
Date: February 14, 2024, 10:13-10:24am ET.
We performed planned maintenance on our database between 9:30am and 12:30pm ET today. From 10:14-10:24am ET, our app servers did not process requests. The system self-healed, and Search.gov is now fully operational.

<img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Alert icon">&nbsp;&nbsp; Planned Maintenance<br /> 
<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Partial Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Partial Degradation <br />
Date: February 8, 2024, 9:18-9:25pm ET.
Details: We performed planned maintenance on our proxy layer. We anticipated up to 25% of requests would fail during the maintenance period of 8pm-11pm. From 9:18-9:25pm we processed requests at 60%. Total impact was 3% during the maintenance window. Search.gov is now fully operational.

<img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Alert icon">&nbsp;&nbsp; Planned Maintenance<br /> 
<img src="https://search.gov/assets/img/site/red-status-system-down.png" width="15px" height="15px" alt="Outage" title="Outage">&nbsp;&nbsp;&nbsp; Outage <br />
Date: February 7, 2024, 8:18pm &ndash; 9:04pm ET<br />
Details: At 8:00pm ET, we began performing planned maintenance on our proxy layer. We anticipated up to 25% of requests would fail between 8pm-11pm. At 8:18pm a failure occurred, and we were unable to receive any requests for processing. We investigated and began a rollback procedure. The rollback was complete at 9:04pm ET, and we began processing requests normally again. Total impact was 18% during the maintenance window. Search.gov is now fully operational.

<img src="{{ site.url }}/img/usa-icons/error_outline.svg" style="margin-bottom: -.25rem;" alt="Alert icon">&nbsp;&nbsp; Planned Maintenance<br /> 
<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Partial Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Partial Degradation <br />
Date: January 9, 2024, 5:03pm &ndash; 5:38pm ET
We performed planned maintenance on January 9, 2024, which caused a degradation in service between 5:03pm and 5:38pm ET. During this time, some agencies received degraded results, and some API users received server error responses.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Partial Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Partial Degradation <br />
Date: May 30, 2023, 3:30PM ET &ndash; May 31, 2023, 9:45AM ET <br />
Details: From approximately 3:30PM ET on May 30, to 9:45AM ET on May 31, our image search response times were very slow. Some browsers may have interpreted this response time as a timeout. The cause was a change intended only for local development, but which affected production performance. That change has been reverted, and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Partial Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Partial Degradation <br />
Date: May 9, 2023, 9:06AM &ndash; 12:39PM ET <br />
Details: During planned maintenance the evening of May 8, we replaced a server. The new server received our standard configuration, but was never fully functional. When traffic began increasing normally at the beginning of the business day, at 9:06AM ET, the server's issues caused ripple effects across the system, without providing indicators of a root cause. We pulled the server out of rotation, and as of 12:39PM ET, search is now fully operational.

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: May 4, 2023, 2:13PM ET &ndash; 4:14PM ET<br />
Details: From 2:13PM ET &ndash; 4:14PM ET, a misconfiguration in our DNS caused failure for search requests to sites using masked domains (e.g., search.example.gov, instead of search.usa.gov). The issue is resolved and Search.gov is now fully operational. We are improving our monitoring so this sort of issue can be detected immediately in the future.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Partial Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Partial Degradation <br />
Date: April 28, 2023, 2:20 &ndash; 2:42PM ET <br />
Details: From 2:20 - 2:42PM ET we experienced a slight degradation in our search results. The issue appears to be resolved and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Partial Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Partial Degradation <br />
Date: April 27, 2023, 12:13 - 1:02PM ET <br />
Details: From 12:13 - 1:02PM ET we experienced a partial degradation in our search. The issue appears to be resolved and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Partial Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Partial Degradation <br />
Date: October 26, 2022, 3:54 - 4:35PM ET <br />
Details: From 3:54 - 4:35PM ET we experienced a partial degradation in our search. The issue appears to be resolved and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Partial Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Partial Degradation in Bing Web Results <br />
Date: June 14, 2022 - September 22, 2022 <br />
Details: Beginning June 14, some sites using the Bing Web index started experiencing issues returning search results. Sites on the Search.gov in-house web index are not affected. As of September 22, Bing believes the issue is resolved. Please reach out to <a href="mailto:search@gsa.gov">search@gsa.gov</a> if you continue to encounter any issues or would like to switch your Bing-powered site to use the Search.gov in-house index. 

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: August 3, 2022, 11:16AM ET - 11:23AM ET<br />
Details: From 11:16AM ET - 11:23AM ET, a network connectivity issue caused failure for most search requests. The issue is resolved and Search.gov is now  operational.

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: June 17, 2022 1:42PM ET - 2:29PM ET <br />
Details:  From 1:42PM ET - 2:29PM ET we experienced serious degradation in our search. The issue appears to be resolved and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: April 21, 2022 12:33PM ET - 12:48PM ET <br />
Details: From 12:33PM ET - 12:48PM ET we experienced serious degredation in our search. The issue appears to be resolved and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: February 24, 2022, 2:07PM ET - 2:50PM ET <br />
Details: From 2:07PM ET to 2:50PM ET we experienced serious degredation in our search. The issue appears to be resolved and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: February 24, 2022, 10:50AM ET - 11:45AM ET <br />
Details: 
From February 24 at 10:50AM ET to 11:45AM ET, a small number of searches failed due to network anomalies. The issue has been resolved and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: January 26, 2022 - Janary 28, 2022 <br />
Details: For a period of about two days, Bing searches intermittently failed due to an issue in the Bing API. The errors have subsided and Search.gov is fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: 7:10 - 8:20 ET December 22, 2021 <br />
Details: From around 7AM to 8AM ET, searches were intermittently failing due to an outage with our hosting provider. The outage is now resolved and Search.gov is fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: 8:16AM ET - 8:21AM ET, 8:40AM ET - 8:41AM ET December 20 <br />
Details: From December 20 between 8:16AM ET - 8:21AM ET, and 8:40AM ET - 8:41AM ET, Search.gov encountered an error with a certain subset of searches failing. The issue has been resolved and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: 12:02PM - 1:32PM ET September 28, 2021 <br />
Details: Beginning shortly after noon ET, during planned maintenance, some searches failed. We then experienced serious degradation between 12:29PM and 12:36PM, which appears to have been a combination of the planned maintenance and a DDoS attempt. After this period, some queries continued to fail intermittently until 1:32PM ET.

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Partial Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: 2:04PM - 2:38PM ET August 26, 2021 <br />
Details: Starting around 2:04PM, our system stopped returning search results due to a production push to update a back-end tool. Search results began to improve around 2:14PM ET as we redeployed our app servers. As of 2:38PM, Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation <br />
Date: 3:01pm &ndash; 5:08pm ET January 11, 2021 <br />
Details: Starting 3:01 PM ET, a significant increase in query traffic caused our system to refuse connections. We added more processing resources to handle that additional load, which entered the herd at 4:04 PM ET and began to resolve the connection issue. The system is now fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: 2:24pm &ndash; 2:43pm ET August 25, 2020<br />
Details: A brief certificate issue caused a small subset of image searches to be unavailable. The issue was resolved by a certificate re-issue, and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/red-status-system-down.png" width="15px" height="15px" alt="Outage" title="Outage">&nbsp;&nbsp;&nbsp; Outage <br />
Date: 4:52pm &ndash; 5:15pm ET March 5, 2020<br />
Details: At 4:52pm ET, Search.gov encountered an error due to an issue with data pulls for a migration. Service was restored once our clusters recovered at 5:15pm ET. Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: 8:22am &ndash; 12:40pm ET March 6, 2020<br />
Details: Search.gov saw a large number of errors on sites due to an issue originating on our application servers. The issue was resolved by a rolling restart of the environment and Search.gov is now fully operational.

<img src="https://search.gov/assets/img/site/red-status-system-down.png" width="15px" height="15px" alt="Outage" title="Outage">&nbsp;&nbsp;&nbsp; Outage <br />
Date: 7:02pm &ndash; 7:49pm ET March 5, 2020<br />
Details: Beginning 7:02pm ET, an outage at our hosting provider prevented us from distributing incoming requests to our servers. Their issue was resolved, but in addition, a database update by them to an unused feature caused our internal requests to fail. We applied an update to match their update, and service was restored.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: 8:00 pm October 29 &mdash; 10:15 am October 30, 2019<br />
Details: Beginning 8 PM ET 10/29, search sites using certain search features began returning errors for all searches. During our planned maintenance, our infrastructure host deployed routing settings to more servers than we requested, and this caused the error. After reverting the routing setting, all search sites are now behaving normally.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: August 31, 2019, 8:49am &ndash; 4:30pm ET <br />
Details: An issue at our cloud hosting provider caused new logins to the Admin Center to fail. Searches were working normally.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: August 20, 2019, 9:30pm ET &mdash; August 21 9:50am ET <br />
Details: An internal DNS issue caused our web index to return "No results" messages to some sites in their web results module. We have resolved the DNS issue and all systems are functioning normally.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: August 16, 2019, 10:30am &ndash; 3:30pm<br />
Details: We performed unplanned maintenance to alleviate issues on search result pages and the Admin Center.


<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: August 12, 2019, 10:30am &ndash; 2:00pm, and from 2:30pm &ndash; 5:50pm ET<br />
Details: We experienced two periods of intermittent errors and longer than usual load times, during high load to our results API. The load resulted in a reallocation process of our search indexes.

<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">&nbsp;&nbsp;&nbsp; Serious Degradation<br/>
Date: July 17, 2019, 8am &ndash; approx 10:30am <br/>
Details: Server issues caused intermittent issues on search result pages (SERPs) and site Admin Centers.  

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation<br/>
Date: July 16, 2019, 10:30am-11:30am <br/>
Details: We conducted restarts of our servers to resolve memory issues. This resulted in intermittent degradation to search experiences.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation<br/>
Date: July 15, 2019, approx 1:51pm-6:15pm <br/>
Details: Memory issues in our back-end services caused intermittent issues when users attempted to complete searches.

<img src="https://search.gov/assets/img/site/red-status-system-down.png" width="15px" height="15px" alt="Outage" title="Outage">&nbsp;&nbsp;&nbsp; Outage <br />
Date: July 10, 2019, approx 2:35pm-2:50pm ET<br />
Details: Deploy issues resulted in errors on search results pages (SERPs). We will address these issues before attempting future deploys.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: April 8, 2019, approx 8am-11:30am ET<br />
Details: We experienced heavy load to our DNS, which we addressed through updating settings.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: March 11, 2019, 9:49am-1:55pm ET <br />
Details: We experienced a transient issue with our back-end services which made some search data intermittently unavailable for the time indicated. No data was lost.

<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">&nbsp;&nbsp;&nbsp; Intermittent Degradation <br />
Date: January 30-31, 2019 <br />
Details: We experienced intermittent errors due to request queue volume. Errors resolved on retry. We performed maintenance on our primary index and increased the processing power for the machines that support this index.

## Legend

{: .usa-table .usa-table--compact}
| &nbsp;&nbsp;Color&nbsp;&nbsp;	| Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	| Description |
| :--:	| :--	| :-- |
|<img src="https://search.gov/assets/img/site/green-status-normal-operations.png" width="15px" height="15px" alt="Fully Operational" title="Fully Operational">	| Fully Operational	| Systems are operating normally.|
|<img src="https://search.gov/assets/img/site/yellow-status-intermittent-operations.png" width="15px" height="15px" alt="Intermittent Degradation" title="Intermittent Degradation">	| Intermittent Degradation&nbsp;&nbsp;&nbsp;	| Periodic errors that resolve themselves on retry.|
|<img src="https://search.gov/assets/img/site/orange-status-serious-degradation.png" width="15px" height="15px" alt="Serious Degradation" title="Serious Degradation">	| Serious Degradation	| One or more components of the Search.gov service is unavailable, but other services are fully operational.&nbsp;&nbsp;&nbsp;|
|<img src="https://search.gov/assets/img/site/red-status-system-down.png" width="15px" height="15px" alt="Outage" title="Outage">	| Outage	| The Search.gov service is down.|
