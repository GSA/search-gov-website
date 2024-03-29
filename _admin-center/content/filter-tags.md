---
layout: page
title: Filtering Tags
category: admin-center
tags: "help-manual manage-content domains"
date: December 14, 2017
last_modified_at: December 14, 2017
published: true
#subnav:
  #data: admin_center
redirect_from:
    - /manual/filter-tags.html
---

Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Manage Content > [Domains]({{ site.baseurl }}/admin-center/content/domains.html) > Advanced > Filter Tags

**Note:** this feature is only available to sites that are enabled for [i14y]({{ site.baseurl }}/developer/i14y.html).

Tags are used in the full text searching of i14y documents. If a tag is added to a document, the document will appear in search results when a query matches the tag, even if the term does not appear in the document's full text.

Use the Filter Tags feature to scope your search site based on tags. You can exclude documents that have a given tag from all search results. Or, you can require that a tag is present in order for a document to be shown.

For example:
* You can have a "News Search" site that will only show results that have the tag "news".
* You can exclude all documents that have the "blog" tag from your search results, if you don't want them to appear.
