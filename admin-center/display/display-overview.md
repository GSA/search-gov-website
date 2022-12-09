---
layout: page
title: How to Select the Options That Appear on Your Results Page
category: admin-center
tags: help-manual manage-display facets modules related-sites
date: February 27, 2017
last_modified_at: February 27, 2017
sidenav: admin_center
redirect_from:
    - /manual/display-overview.html
---

Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Manage Display > Display Overview

Related resource: [Comparison of our hosted search results page and our results API]({{ site.baseurl }}/admin-center/display/hosted-vs-api-results.html)

## Facets
> These features are only available on the hosted search results page.

{% include featured-accordion.html content="facet-renaming" accordion=false %}

**Label.** By default, we use the label 'Search' for your facets. Enter a label in the label field if you'd like something other than this default. Keep your label consistent with the options you're listing and under 15 characters.

See the sample results page below that shows the facets with the default label, Search, displayed for a [search on *passport* on USA.gov](https://search.usa.gov/search?affiliate=usagov&query=passport). (It is most easily seen by clicking on the menu option from a mobile phone.)

**On/off options for facets.** Select which facets you'd like to appear on your results page. Turn an option on to allow searchers to see it. Turn an option on or off at any time.

Type over the text in the Name field to edit a facet's display name. Keep each name short (15 or fewer characters) and consistent with the content you're searching. Click on the hyperlink in the Source field to update the facet's source content. Hover over the icon with three horizontal lines on the left to change the order.

**More.** We show up to four facets above your search box. If you turn on the display of more than four facets, you'll see them listed under a 'More' dropdown menu. Email us at <search@gsa.gov> if you'd like to use a custom label instead of the default 'More'.


## Modules

> These options control what types of search results are returned, and apply to both the hosted search results page and the search results API.

**On/Off Options for Modules.** Turn on a module to allow searchers to see inline, contextually relevant results for selected content sources based on keyword matches with relevant queries. There are eight types of modules.

1. **News.** This option only appears after you've told us about your [RSS]({{ site.baseurl }}/admin-center/content/rss.html) feeds. When a searcher's query matches the title of an RSS article published within the past four months, the article appears in the News module. Very recent news results (less than five days) appear at the top of the page and less recent news results appear at the bottom. Up to three articles are displayed. Type over the default name, News, in the Name field to edit the display name.

1. **Videos.** This option only appears after you've told us about your [YouTube]({{ site.baseurl }}/admin-center/content/youtube.html) channel. When a searcher's query matches the metadata of a video published within the 13 months, the video appears in the Videos module. One inline video is displayed with a link to see more videos for the searcher's query.

1. **Job Openings.** When a searcher's query matches the text of a job opening published by your agency on USAJobs, the job appears in the Job Openings module. Up to three job openings are displayed. For more information, including a screenshot, read our post [Help Searchers Find Jobs]({{ site.baseurl }}/admin-center/display/jobs-module.html). You will need to [contact us](mailto:search@gsa.gov) to get the Jobs module enabled for your site.

1. ***Federal Register* Documents.** When a searcher's query matches the text of a notice or rule published by your agency in the *Federal Register*, the document appears in the *Federal Register* module. Up to three documents are displayed. For more information, including a screenshot, read our post [Help Searchers Find Federal Register Documents]({{ site.baseurl }}/admin-center/display/federal-register-module.html).

1. **Related Searches.** Help visitors better define the focus of their search by offering them searches related to their current search term. Suggestions are derived from the searches performed on your website. Up to five searches related to your visitors' original search are displayed and are updated in near real time.

1. **Health Topics.** Help searchers find high-quality, authoritative health information from MedlinePlus and ClinicalTrials.gov. For more information, including a screenshot, read our post [Help Searchers Find Health Information]({{ site.baseurl }}/admin-center/display/health-module.html).

1. **Recent Tweets.** This option only appears after you've told us about your [Twitter]({{ site.baseurl }}/admin-center/content/twitter.html) account. When a searcher's query matches the text of a tweet published within the past three days, the tweet appears in the Recent Tweets module.

1. **Typeahead Search.** Help searchers refine their query by displaying typeahead search suggestions as a list in the search box. The list forms as a searcher begins to type in the search box. Suggestions are listed in order of most popular (that is, most searched). They're updated every few seconds. See, for example, the suggestions as you type di... on [SocialSecurity.gov's search results page](https://search.ssa.gov/search?affiliate=ssa). ***Note:*** this will enable typeahead on your search results page that is hosted by our service. If you wish to display typeahead suggestions on your agency’s website, please review instructions for our [JavaScript snippet and API]({{ site.baseurl }}/admin-center/activate/typeahead-api.html). 


## Related Sites

> This feature is only available on the hosted search results page.

Help visitors find content relevant to their search query that resides on other websites, such as the site for your parent organization or your Spanish-language site. When searchers click on the link to the related site, they see search results for their query on the related site.

Enter the [site handle]({{ site.baseurl }}/admin-center/dashboard/settings.html) for one of your other Search.gov sites. Enter the text you'd like searchers to see for the link to the related site. Create two entries, one from the first site to the second and vice versa, if you'd like a reciprocal link.

See, for example, the Español option displayed on [USA.gov for a search on *venezuela*](https://search.usa.gov/search?query=venezuela&affiliate=usagov). When searchers click this option, they see results for [*venezuela* on GobiernoUSA.gov](https://search.usa.gov/search?query=venezuela&affiliate=gobiernousa).

If you list more than two related sites, searchers will see them listed under a dropdown menu, View Topic.

Email us at <search@gsa.gov> if you'd like to use a custom label instead of the default 'View Topic' label.

---

**Pro Tip**  

*Refining RSS search results* (Hosted search results page only)

Searchers may narrow results by time period for any [RSS]({{ site.baseurl }}/admin-center/content/rss.html) feeds. See, for example, results for a [search on *space* narrowed to press releases in the last week on NASA.gov](https://nasasearch.nasa.gov/search/news?affiliate=nasa&channel=1618&query=space&sort_by=date&tbs=w).
