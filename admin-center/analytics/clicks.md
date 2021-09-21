---
layout: page
title: Analyzing Your Site's Clicks
category: admin-center
tags: help-manual analytics clicks
date: February 28, 2018
last_modified_at: February 28, 2018
sidenav: admin_center
redirect_from:
    - /manual/clicks.html

---

Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Analytics > Clicks

The Clicks page shows what searchers clicked on from your search results pages, and the number of times each of those items was clicked during the selected date range. The current month is shown by default, and the date can be adjusted using the date selectors at the top of the page and re-generating the report.

You can also toggle between filtered and unfiltered views of the data by clicking on the filter icon (<i class="icon-filter"></i>) in the top navigation bar. The filtered data represent our best effort to show you real searches performed by your site's visitors. The unfiltered data include nearly all searches and clicks. Only known spiders (such as Bingbot and Googlebot) are excluded.

Related resource for *Search Results API users* &mdash; use our [Clicks API](https://open.gsa.gov/api/searchgov-clicks/) to send clicks data into our system for reporting.

## Reading the Report Table

### Top URLs Clicked

<a href="{{ site.baseurl }}/assets/img/site/Analytics_Clicks_800.png" target="_blank" alt="Top clicks from results pages"><img style="float: right;" src="{{ site.baseurl }}/assets/img/site/Analytics_Clicks_800.png"></a>The top 1,000 most clicked-on URLs from your results page for the selected time period, with the most popular first. 

### Download Details

You can download the raw click logs for any URL in the list. The CSV (comma separated values) file has one line for each time this URL was clicked. Details avialable include:

* *Date* and *Time* of the click,
* *Query*: The query they ran before clicking the search result,
* *Position*: Where in the results page was the result they clicked, e.g. **5** means the searcher clicked the fifth result in the list,
* *Request*: The clicked URL (It is embedded in the request URL. Look for the text following ‘u=’.) and its position on the page, 
* *Referrer*: The webpage the person was on when they ran the search, this column also includes the query, 
* *Vertical* and *Modules*: The modules loaded in response to the query (Our [Module Codes]({{ site.baseurl }}/admin-center/analytics/module-codes.html) tip provides a key of the codes and names.),
* *Device*, *Browser*, and *OS*: The kind of device and browser they were using, and
* *Country Code* and *Region*: Where the user was, physically. We use the ISO-2 alpha standard for country codes and ISO 3166-2 codes for country subdivisions.
 
### Number of Clicks

Select a hyperlinked number in the `# of Clicks` column to view the queries that led to the clicks for that URL (the **Queries leading to a Click** report).

<a href="{{ site.baseurl }}/assets/img/site/ClicksQueries_800.png" target="_blank" alt="Report of Queries that people ran before clicking on a particular page"><img src="{{ site.baseurl }}/assets/img/site/ClicksQueries_800.png"></a>

If you then click on a number in the `# of Clicks` column for a query on the Queries leading to a Click page, you will see all the URLs that were clicked on from that query's results pages (the **Clicks from a Query** report). This is the same report you see when you follow a `# of Clicks` link from the [Queries page]({{ site.baseurl }}/admin-center/analytics/queries.html).

<a href="{{ site.baseurl}}/assets/img/site/ClicksfromQuery_800.png" target="_blank" alt="Report of pages people clicked on after searching for a given term"><img src="{{ site.baseurl }}/assets/img/site/ClicksfromQuery_800.png"></a>

You can loop through or drill down into this list for any set of clicks and queries.

---

***Pro Tip*** 

The [Monthly Report]({{ site.baseurl }}/admin-center/analytics/monthly-reports.html) gives a bird's-eye view of the number of [queries]({{ site.baseurl }}/admin-center/analytics/queries.html) and clicks each month. The [Site Overview]({{ site.baseurl }}/admin-center/dashboard/site-overview.html) provides a snapshot of what has been happening on your site today.
