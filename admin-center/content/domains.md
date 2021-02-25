---
layout: page
title: How to Edit Your Domains
category: manual
tags: help-manual manage-content domains
date: April 18, 2017
last_modified_at: April 18, 2017
sidenav: admin_center
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

You cannot specify individual URLs.

Searches that start three or more subfolders deep must use our full indexing service. [Email us](mailto:search@support.digitalgov.gov) for assistance.

---

Related Resources:

* [Filter]({{ site.baseurl }}/manual/filter-content.html) unwanted URLs from results
* [Add content]({{ site.baseurl }}/manual/domains-advanced.html) to supplement Bing results

---

**Pro Tips:**

**Excluding domains**

You can *exclude* specific subdomains or folders using any of the following options.

1. List the excluded subdomains or folders in your [robots.txt](http://www.robotstxt.org){% external_link %} file. This blocks them from all crawlers that follow the robots exclusion protocol, including Google.com and Bing.com.

2. Exclude them by omission. For example, to exclude subdomain3, list only subdomain1.yoursite.gov, subdomain2.yoursite.gov, and subdomain4.yoursite.gov.

3. Email us at <search@support.digitalgov.gov> to filter them from your site's search results. Note that this option should be used only if the other options aren't feasible as it can have an undesired effect on other features such as the display of spelling suggestions and relevance ranking.

<a id="filter"></a>**Removing Content** 

You can remove or filter specific URLs using any of the following options.

1. Remove the page from your site and return a 404 (Not Found) 401 (Gone), or 301 (Permanently Moved) HTTP status.

2. Add a [noindex robots metatag or x-robots tag](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag?csw=1){% external_link %}. This blocks them from all crawlers that follow the robots exclusion protocol, including Google.com and Bing.com.

3. Request the page's removal using the [Block URLs option in Bing Webaster Tools](https://www.bing.com/webmaster/help/block-urls-from-bing-264e560a){% external_link %} and [Remove URLs option in Google Webmaster Tools](https://support.google.com/webmasters/answer/1663419){% external_link %}.

4. Use the [Filter URLs]({{ site.baseurl }}/manual/filter-content.html) option under the Advanced tab. Note that this option should be used only if the other options aren't feasible as it can have an undesired effect on other features such as the display of spelling suggestions and relevance ranking.

**Missing Content:** 

Are web pages missing from your web results? [Email us](mailto:search@support.digitalgov.gov) for assistance.
