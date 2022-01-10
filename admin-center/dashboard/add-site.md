---
layout: page
title: How to Add a New Search Site
category: admin-center
tags: "help-manual settings add-site"
date: March 2, 2017
last_modified_at: March 2, 2017
published: true
sidenav: admin_center
redirect_from:
    - "/manual/add-site.html"
---
Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > Add Site

{% include featured-accordion.html content="access-existing-site" accordion=true %}

## Homepage URL

Tell us the homepage URL of your website. Enter a fully qualified URL, including the protocol, such as `https://www.example.gov`. 

**Correct Syntax**

* https://www.ssa.gov     
* https://usa.gov  
* https://stemcells.nih.gov

**Incorrect Syntax**

* usa.gov (use https://www.usa.gov)  
* www.nasa.gov (use https://www.nasa.gov)  
* https://www.sec.gov/litigation.shtml (use the higher-level folder, https://www.sec.gov/litigation)  
* https://www.gsa.gov/portal/category/100000?utm_source=OCM&utm_medium=print-radio&utm_term=&utm_campaign=shortcuts (use the higher-level domain, https://www.gsa.gov)
* http://www.doc.gov (use the domain that resolves, https://www.commerce.gov)  

We use this homepage URL to: 

1. Seed your [domains]({{ site.baseurl }}/admin-center/content/domains.html) list.
1. Scan for any social media accounts ([Flickr]({{ site.baseurl }}/admin-center/content/flickr.html), [Twitter]({{ site.baseurl }}/admin-center/content/twitter.html), and [YouTube]({{ site.baseurl }}/admin-center/content/youtube.html)), your favicon to use on your search results browser tab, and [RSS feeds]({{ site.baseurl }}/admin-center/content/rss.html) that are linked from your homepage, or another page you specify on the Display Overview page.
1. Link the default [logo]({{ site.baseurl }}/admin-center/display/brand.html) on your results page to your homepage.

## Display Name

<a href="{{ site.baseurl }}/assets/img/site/DisplayName_SiteHandle_800.png"><img style="float: right;" src="{{ site.baseurl }}/assets/img/site/DisplayName_SiteHandle_800.png" alt="Display Name and Site Handle on NIH.gov's search results page"></a>Tell us the name of your website. Searchers see your display name on the results page, such as in your page title or best bets. We recommend using the plain language name for your agency or site, such as National Institutes of Health. 

## Site Handle

Your site handle is a unique identifier for your site. The site handle is included in the request you send us from your search box, to let us know which search site to use. We also include it in the URL of your search results page, again, to show which search site is being used. We recommend making this handle short and unique, such as `nih`.

Handles can have lowercase letters, numbers, periods, hyphens, and underscores only. They can't have spaces and other punctuation.

## Site Language

English is the default language for our results pages. If you will be searching against content in another language, you should choose another language for your search site &mdash; we support English, Spanish, and [66 other languages]({{ site.baseurl }}/admin-center/dashboard/supported-languages.html). 

When English is selected, results will primarily include English language pages. All display text on the results page will also be in English. 

If you select Spanish, results will primarily include Spanish language pages. All display text on the results page will also be in Spanish. (Localizations are provided by GSA's [GobiernoUSA.gov](https://gobierno.usa.gov/) team.)

If you select one of the other [69 languages]({{ site.baseurl }}/admin-center/dashboard/supported-languages.html), results will primarily include pages from the selected language when possible. Display text will be in the selected language when localizations are available, and in English when they're not available.

We've published the [localization files](https://github.com/GSA/punchcard/tree/master/localizations) on Github, and we encourage you to [contribute](https://github.com/GSA/punchcard/blob/master/CONTRIBUTING.md) to them.

---

***Troubleshooting Tip:*** For non-English sites, some agencies opt to include the specific location of the language's content (such as example.gov/language or language.example.gov) in their [Domains]({{ site.baseurl }}/admin-center/content/domains.html) to further refine the search results. Test the results for your non-English site with both the general example.gov and the language-specific location to determine which setting gives you the best results.

***Troubleshooting Tip:*** Once you've added your site, you can edit your display name on the [Settings]({{ site.baseurl }}/admin-center/dashboard/settings.html) page. If you later need to edit your site handle or language, email us at <search@support.digitalgov.gov>.
