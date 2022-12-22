---
layout: page
title: Key to Color Coding in the Admin Center
category: admin-center
last_modified_at: "November 02, 2015"
tags: help-manual manage-users best-bets rss
#subnav:
  #data: admin_center
redirect_from:
    - /manual/color-codes.html
---

In addition to text-based indicators, we use color coding the [Admin Center](https://search.usa.gov/sites/) to indicate the status of a few types of items. 

## [Manage Users]({{ site.baseurl }}/admin-center/dashboard/users.html)

{: .usa-table .usa-table--compact}
| Color | Status |
| :------------ | :---------------------------------- |
| No color&nbsp;&nbsp;&nbsp; | Approved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| Yellow  | Pending &mdash; requires approval or email verification |
| Red   | Not approved |

## [RSS Feeds]({{ site.baseurl }}/admin-center/content/rss.html)

{: .usa-table .usa-table--compact}
| Color | Status |
| :------------ | :---------------------------------- |
| Green&nbsp;&nbsp;&nbsp; | Feed indexed, no errors&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| Yellow  | Pending Indexing |
| Red   | Feed indexed, but error in one or more items |


Click on the name of the feed to see more detailed information about its status. Possible error messages follow.

* 404 Not Found
* Feed looks empty
* Description can't be blank
* Title can't be blank
* Missing link field
* Missing pubDate field
* Link is not a valid URL
* Linked URL does not exist (HTTP 404)

## [Best Bets]({{ site.baseurl }}/admin-center/content/best-bets.html): Text or Graphics

{: .usa-table .usa-table--compact}
| Color | Status |
| :------------ | :---------------------------------- |
| Green&nbsp;&nbsp;&nbsp;  | Active&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| Yellow   | Inactive |

Active best bets are shown to searchers on your site. Inactive entries aren't shown to searchers because they're inactive, expired (by the publish end date), or both.
