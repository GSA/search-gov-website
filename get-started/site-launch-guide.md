---
layout: page
title: Search Site Launch Guide
crumbname: Site Launch Guide
category: admin-center
tags: go-live site-launch indexing
date: April 22, 2019
last_modified_at: February 3, 2021
sidenav: get_started
redirect_from:
    - /manual/site-launch-guide.html
---

This page includes the basic steps you need to take to start using our service. If your website is planning to go or is already going through a redesign process, see our [checklist]({{site.baseurl}}/indexing/redesign.html) for a successful redesign, content management migration, or both.

At Search.gov we aim to provide a self-service, plug and play search solution. This guide will walk you through everything you need to do, and let you know when to reach out to us. The basic steps are:

1. [Add a site](#add-site)
1. [Add Domains](#add-domains)
1. [We will select the search index your site will use](#select-index)
1. [Add additional search features](#add-features)
1. [Turn on the search features](#turn-features-on)
1. [Configure the branding of your results page](#configure-branding)
1. [Connect your website’s search box to your search site](#go-live)

![Flow chart showing the steps involved in launching a search site on Search.gov]({{ site.baseurl }}/files/site-launch-workflow.png){: .img-responsive}
[Site launch flow chart detailed description](#add-site)

[Open large version]({{ site.baseurl }}/files/site-launch-workflow.png)

{: #add-site }

## 1. Add Site

**Who:**  You, the agency web team

**What:** After you’ve successfully opened an account with Search.gov, you'll need to create a search site. A search site is where you configure the search experience for your website. Find the `Add Site` link at the top of the Admin Center, and enter some basic details about your site. Please note that our service is for publicly accessible, federal government content. More detailed information can be found on our [Add Site help page]({{ site.baseurl }}/admin-center/dashboard/add-site.html). 

Once you've created your site, note the actions available on the left-hand navigation of your Admin Center. 

<i class="icon-dashboard"></i> The **[Dashboard]({{site.baseurl}}/admin-center/dashboard/)** is where you can view a Site Overview, manage users, update your site’s homepage, or site display name. 

<i class="icon-bar-chart"></i> **[Analytics]({{site.baseurl}}/admin-center/analytics/)** are provided for the past 13 months, reporting your top queries, clicks, and referrers (the pages people were on when they ran their searches), and monthly rollup data.

<i class="icon-file"></i> **[Content]({{site.baseurl}}/admin-center/content/)** management is where you define what your search experience will include, both the default search scope, additional content sources, and alternative search views.

<i class="icon-desktop"></i> **[Display]({{site.baseurl}}/admin-center/display/)** management is where you can configure the branding of your search results page.

<i class="icon-eye-open"></i> **[Preview]({{site.baseurl}}/admin-center/preview.html)** your search results page to see what your search experience will be like, before you go live.

<i class="icon-code"></i> And finally, the **[Activate](/admin-center/activate/)** section provides pre-formatted code snippets to help you go live. Don’t be afraid of entering this area, nothing will actually be activated.

{: #add-domains }

## 2. Add Domains

**Who:** You, the agency web team

**What:** In the content management section, the domains list defines the default search scope for your site. You can include one domain or several, or you can focus on particular subdomains of one domain. [Read more here]({{ site.baseurl }}/admin-center/content/domains.html).

{: #select-index }

## 3. Web Index Selection

**Who:** Search.gov team, in consultation with you, the agency web team

**What:** By default a new search site will be connected to the Bing web index to receive web results. Websites with very low levels of search traffic can continue to use the Bing web index after they launched our service. However, sites that will see greater than 150,000 queries per year will need to be indexed directly by our service before going live.  We monitor new sites established in our system, and will reach out if we think your site will need to be indexed by us, or if we need more information to make a determination.

Regardless of the index used to support your search, we can only serve publicly accessible content. You will not be able to use our service for secure content, including intranets, and we can never index or serve personally identifiable information (PII) or other confidential data.

[Jump to Step 4. Add Features](#add-features) if you don't need the details of the indexing process at this time.)

If we will be indexing your content ourselves, we will follow these steps:

{: #indexing-workflow }

{% include featured-accordion.html content="indexing-long" accordion=true expanded=true %}

{: #add-features }

## 4. Add Search Features

**Who:** You, the agency web team

**What:** We offer several additional search features you can configure to enhance your search experience.

* [Collections]({{ site.baseurl }}/admin-center/content/collections.html) allow you to set up alternative search scopes from the Domains you declare for the main search. Often Collections point at particular subfolders or subdomains of the primary domain for the site. Sometimes they point at a different domain entirely. If you are indexed by Search.gov and you want a Collection to search another domain, check with us to see if we have that content already indexed.  
* [Best Bets]({{ site.baseurl }}/admin-center/content/best-bets.html) work like ads in Google, and allow you to pin certain results to the top of your search results. Use Text Best Bets to boost individual items, and Graphics Best Bets to boost a set of related items, such as a form, its instructions page, and other related material.
* [Routed queries]({{ site.baseurl }}/admin-center/content/routed-queries.html) allow you to bypass the results page entirely for a given query, where you know exactly the page you want a person to get to after running that query. This is helpful for always getting people to the landing page for a process, rather than their clicking to a mid-process page from a search results page.
* [RSS]({{ site.baseurl }}/admin-center/content/rss.html) feeds can be indexed and searched either as separate tabs on the search results, or as an inline module promoting your latest content alongside your web results.
* [YouTube]({{ site.baseurl }}/admin-center/content/youtube.html) videos can also be searched
* [Twitter]({{ site.baseurl }}/admin-center/content/twitter.html)    
* [Flickr]({{ site.baseurl }}/admin-center/content/flickr.html)   
* [Jobs]({{ site.baseurl }}/admin-center/display/jobs-module.html) are one of the most frequently searched topics on agency websites. Use our jobs module to show your agency’s postings from USAJOBS in your own website’s search results.
* [_Federal Register_]({{ site.baseurl }}/admin-center/display/federal-register-module.html) rules and notices can be added to your search results in a separate module. 

{: #turn-features-on }

## 5. Toggle Search Features On

**Who:** You, the agency web team

**What:** In order to display any of the search features you just added above, you’ll need to toggle ON the display for each one, using the [Display Overview page]({{ site.baseurl }}/admin-center/display/display-overview.html). If you want to show Jobs or _Federal Register_ results and you don’t see those options on the Display Overview page, [let us know](mailto:search@support.digitalgov.gov) and we can connect your search site to those features.

{: #configure-branding }

## 6. Configure Results Page

**Who:** You, the agency web team

**What:** To make the results page complement your website’s look and feel, upload your logo, set the font style, and customize the page colors to ensure a more seamless experience for your searchers as they move from your site to ours, and back again. You can also add header and footer links to support navigation back to your website. [See more details here]({{ site.baseurl }}/admin-center/display/brand.html). 

[Masking the domain for your results page]({{ site.baseurl }}/admin-center/display/cname.html) is another way you can provide continuity to your searchers as they move back and forth between your site and our system.

{: #go-live }

## 7. Connect Your Search Box to Search.gov

**Who:** You, the agency web team, in collaboration with your deploy team, if different

**What:** Once you’re ready to go live with your search site, take a look at the [Go-Live Checklist]({{ site.baseurl }}/get-started/go-live.html) to make sure you've covered all your bases. Then you will need to modify the form code for the search box on your website. We provide simple pre-formatted code in the Admin Center, or you can include these same parameters in another style of search box. [Read more and see required parameters here]({{ site.baseurl }}/admin-center/activate/code.html). 

If you publish your site on Federalist, read these [alternative instructions]({{ site.baseurl }}/get-started/searchgov-for-federalist.html).

You’re now live with Search.gov!
