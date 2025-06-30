---
layout: page
title: How to Edit Your Domains
category: admin-center
tags: help-manual manage-content domains
date: April 18, 2017
last_modified_at: June 27, 2025
#subnav:
  #data: admin_center
redirect_from:
    - /manual/domains.html
---

Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Manage Content > Domains

Enter the applicable domains, subdomains, or folders to return results specific to your website. You do not need to include `https://` as we recognize domains with or without it.

## Entire Site(s)

* List yoursite.gov (without www) to search your entire site, including all subdomains.
* List yoursite.gov and yoursite2.gov to search multiple sites.

## Specific Subdomains

* List www.yoursite.gov to include only the primary 'www' domain.
* List subdomain.yoursite.gov to include subdomains.

## Specific Directories

List yoursite.gov/folder to include folders. Note: this will include all sub-folders (if they exist), i.e. yoursite.gov/folder/folder2.

You cannot specify individual URLs, but you can [filter unwanted URLs from results]({{ site.baseurl }}/admin-center/content/filter-content.html).

---

## How to Exclude Content

### Domains

You can *exclude* specific subdomains or folders by:
* List the excluded subdomains or folders in your [robots.txt](http://www.robotstxt.org) file. This blocks them from all crawlers that follow the robots exclusion protocol.
* Exclude them by omission. For example, to exclude subdomain3, list only subdomain1.yoursite.gov, subdomain2.yoursite.gov, and subdomain4.yoursite.gov.

 ### URLs <a id="filter"></a>

You can remove or filter specific URLs by:

* Removing the page from your site and returning a 404 (Not Found), 401 (Gone), or 301 (Permanently Moved) HTTP status.
* Adding a [noindex robots metatag or x-robots tag](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag?csw=1). This blocks them from all crawlers that follow the robots exclusion protocol.
* Requesting the page's removal using the [Block URLs option in Bing Webaster Tools](https://www.bing.com/webmaster/help/block-urls-from-bing-264e560a) and [Remove URLs option in Google Webmaster Tools](https://support.google.com/webmasters/answer/1663419).
* Use the [Filter URLs]({{ site.baseurl }}/admin-center/content/filter-content.html) option under the Advanced tab. Note that this option should be used only if the other options aren't feasible as it can have an undesired effect on other features such as the display of spelling suggestions and relevance ranking.