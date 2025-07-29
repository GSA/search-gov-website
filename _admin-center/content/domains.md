---
layout: page
title: How to Edit Your Domains
category: admin-center
tags: help-manual manage-content domains
date: April 18, 2017
last_modified_at: July 29, 2025
#subnav:
  #data: admin_center
redirect_from:
    - /manual/domains.html
---

Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Manage Content > Domains

## How to include content

Fill out the applicable domains, subdomains, or folders to return results specific to your website. You do not need to include `https://` as we recognize domains with or without it.

## Including entire sites

* List `yoursite.gov` (without www) to search your entire site, including all subdomains.
* List `yoursite.gov` and `yoursite2.gov` to search multiple sites.

## Including specific subdomains

* List `www.yoursite.gov` to include only content under the 'www' domain.
* List `subdomain.yoursite.gov` to include subdomains.

## Including specific directories

List `yoursite.gov/folder` to include folders. This will include all subfolders, including `yoursite.gov/folder/subfolder1` and `yoursite.gov/folder/subfolder2`.

## How to exclude content

### Excluding domains or folders

You can exclude specific subdomains or folders by:

* Listing the excluded subdomains or folders in your [robots.txt](https://digital.gov/resources/introduction-robots-txt-files) file. This blocks them from all crawlers that follow the robots exclusion protocol.
* Excluding them by omission. For example, to exclude subdomain3, list only `subdomain1.yoursite.gov`, `subdomain2.yoursite.gov`, and `subdomain4.yoursite.gov`.

 ### Excluding URLs</a>

You can remove or filter specific URLs by:

* Removing the page from your site and returning a 404 (Not Found), 401 (Gone), or 301 (Permanently Moved) HTTP status.
* Adding a noindex robots metatag or x-robots tag. This blocks them from all crawlers that follow the robots exclusion protocol.