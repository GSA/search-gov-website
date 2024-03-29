---
layout: page
title: How to Boost Certain Results Using Best Bets
category: admin-center
tags: help-manual manage-content best-bets
date: March 19, 2020
last_modified_at: March 19, 2020
#subnav:
  #data: admin_center
redirect_from:
    - /manual/best-bets.html
---

Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Manage Content > Best Bets: Text or Graphics

Do you want to promote a specific page or resource? [Create a Text Best Bet](#best-bets-text).

Do you want to promote a set of pages or resources? We recommend you [create a Graphics Best Bet](#best-bets-graphics) if you have more than two recommendations on a given topic.

Best Bets appear at the top of the results page when a searcher's query matches the text of its title, description, or keywords.

## Best Bets: Text

Text best bets have the same look as standard web results. They're listed under the heading, Recommended by YourSite.

See the sample results page below that shows a text best bet displayed on TSA.gov for a search on *[taxes](https://search.usa.gov/search?utf8=%E2%9C%93&affiliate=usagov&query=taxes)*.

![Text best bets for 'taxes' on USA.gov. Text best bets appear as recommendations at the top of the results page.]({{ site.url }}/assets/img/site/best-bets-text.png)


### Add an Individual Text Best Bet

***URL.*** Add the URL of the web page that you want to promote. Make sure the URL is properly formatted, and includes the `https://` protocol.

***Title and Description.*** Add the title and description of the web page that you want to promote. Each field can have up to 255 characters. Titles and descriptions are visible to searchers.

***Status and Publish Dates.*** By default, newly created Best Bets are Active. If you don't want your Best Bet to display, set it to Inactive. The default start date is the day on which you create the best bet. The default end date is null, so it will stay up forever until you decide to take it down. You can opt to specify other start and end dates using the date pickers.

***Match Keywords Only?*** You have the option of having your Best Bets display only for exact keyword matches, and not for title or discription matches. If you select this option, be sure to include *all* query terms you want the Best Bet to display for, including terms you have used in the title and description.

***Keywords.*** Keywords are optional and they're *not* visible to searchers. Add specific words or phrases that aren't already included in the visible title or description. Common keywords include synonyms, acronyms, compound words, plural variations, misspellings, slang, or other variants. Enter each keyword (word or phrase up to 255 characters) in a separate field. Use your search Analytics to inform your keyword lists. Keywords are not case sensitive, but are exact matches, and cannot end with a space. If a keyword ends with a space, that keyword won't return the best bet in results.

### Add Multiple Best Bets Via Bulk Upload

You can upload a batch of Text Best Bets, up to 390 at a time. Create a comma-separated file with the following fields (in this order). Download our [sample template for uploading best bets]({{ site.url }}/files/best-bets-template-201603.csv) [CSV] to see the correct format.

Title, URL, Description, StartDate, EndDate, Keywords, Match_Keywords_Only, Status

* Required fields:
  * Title.
  * URL. Make sure the URL is properly formatted, and includes the protocol (either `http://` or `https://`). 
  * Description.
* Optional fields:
  * Start date.
  * End date.
  * Keywords. Cannot end with a space.
  * Match_Keywords_Only. Enter a `1` in this column if you want the Best Bet to respond only to the query terms and phrases you've specified in this column. Note that selecting this option means you need to list *all* terms or phrases you want the Best Bet to respond to.  
  * Status. If you leave this column blank, the Best Bet will default to `Active` and will display to users. Enter `0` to set the Best Bet to `Inactive`.
  
Save the file with a .csv extension and upload it.

Bulk upload updates existing Best Bets (matching on the URL field) and adds new Best Bets. To turn off Best Bets, either use the `Remove` button in the Admin Center Best Bets list view, or set the Best Bet to `Inactive` in the edit view.

## Best Bets: Graphics

Recommended items are displayed in two columns, and you have the option of including an image. We show the most relevant Graphics Best Bet for the query, with the heading, Recommended by YourSite.

See the sample results page below that shows a graphics best bet displayed on [USA.gov for a search on housing assistance](https://search.usa.gov/search?utf8=%E2%9C%93&affiliate=usagov&query=Housing+Assistance).

[![Graphics best bet highlighting housing assistance links on USA.gov]({{ site.url }}/assets/img/site/best-bets-graphics.png "Graphics best bet highlighting housing assistance links on USA.gov. Graphic Best Bets appear as recommendations at the top of the search results page.")](https://search.usa.gov/search?utf8=%E2%9C%93&affiliate=usagov&query=Housing+Assistance)


#### More configuration options

* **Two columns with a collection of links and an image** displayed on USA.gov for a search on *[wildfires](https://search.usa.gov/search?affiliate=usagov&query=wildfires)*.   
* **Two columns with a collection of links only** displayed on USA.gov for a search on *[housing](https://search.usa.gov/search?affiliate=usagov&query=housing)*.   
* **A single link to a specific web page and an image**.  

### Add a Graphics Best Bet

***Title.*** Add the title (up to 255 characters) of the web page or collection of web pages that you want to promote. The title is visible to searchers.

***Title URL.*** Add the URL of the primary web page that you want to promote. This field is optional.

***Status and Publish Dates.*** By default, newly created Best Bets are Active. If you don't want your Best Bet to display, set it to Inactive. The default start date is the day on which you create the best bet. The default end date is null, so it will stay up forever until you decide to take it down. You can opt to specify other start and end dates using the date pickers.

***Image.*** You can opt to add an image. The file should be a GIF, JPG or PNG with a maximum size of 512 KB. The system will resize your image to fit.

***Match Keywords Only?*** You have the option of having your Best Bets display only for exact keyword matches, and not for title and link title matches. If you select this option, be sure to include *all* query terms you want the Best Bet to display for, including terms you have used in the title and description.

***Keywords.*** Keywords are optional and they're *not* visible to searchers. Add specific words or phrases that aren't already included in the visible title or link titles. Common keywords include synonyms, acronyms, compound words, plural variations, misspellings, slang, or other variants. Enter each keyword (word or phrase up to 255 characters) in a separate field. Use your search Analytics to inform your keyword lists. Keywords are not case sensitive, but are exact matches, and cannot end with a space. If a keyword ends with a space, that keyword won't return the best bet in results.

***Links.*** Enter a title and URL for each link. There is no limit on the number of links. Use the list icons ("hamburger buttons") on the left to rearrange the display order of the links. The two columns populate by rows, so if you have three links, you would have two links in the top row, and one link in the left column of the second row. The link titles are visible to searchers.

## When Will Searchers See Your Best Bets: Graphics?

For searchers to see a best bet on your site, it must match their query and be relevant and active.

### It Matches Their Query

Searchers see your best bets when their query either:

* Matches any or all words in the title, description, or link titles, or
* Matches a keyword exactly.

Matches are made within, but not across, fields.

A sample graphics best bet entry is below.

    Title: Estate Tax
    Link title 1: Transfer Property After You Pass Away
    Link title 2: Estate Tax Rights
    Link title 3: Tax Rates
    Keyword 1: death tax
    Keyword 2: inheritance tax
    Keyword 3: fair market value
    Keyword 4: market value

This best bet would display for searches on estate tax (exact title match), estate (partial title match), tax on the estate (title match that includes stopwords), estate taxes (title match for singular/plural variant), property tax (partial link title match), propertey tax (link title match with a slight misspelling), and death tax (exact keyword match), among other queries.

It would *not* display for searches on death, death property, taxes after death, fair value, as keywords matches must be exact, and these queries are only partial keyword matches. It also would *not* display for estate property tax, as this is a partial match across multiple fields.

### It Is Very Relevant

After we determine which best bets match the searcher's query, we rank their relevance and display only the most relevant. We'll display up to two text best bets, and up to one graphics best bet. Default relevance is determined first by title, then by description (text best bets) or link titles (graphics best bets), and lastly by keywords. Date is used as a tiebreaker if the entries' scores based on the above three factors are equal. We display the newer Best Bet.

If you've selected Match Keywords Only, then only keywords are used to determine relevance.

### It Is Active

We use [color coding]({{ site.baseurl }}) to indicate each entry's status. 

{: .usa-table .usa-table--compact}
| Color | Status | 
| :------------ | :---------------------------------- |
| Green&nbsp;&nbsp;&nbsp;  | Active&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| Yellow   | Inactive |
| &nbsp; | &nbsp; |

Active best bets are shown to searchers on your site. Inactive entries aren't shown to searchers because they're inactive, expired (by the publish end date), or both.

--- 

Watch the recording of our February 2015 webinar [**Straight to the Top: Best Bets in DigitalGov Search**](https://www.youtube.com/embed/WzQocKYK0t4) (55 mins)

***Pro Tips*** 

* Use the [Search Page Alert]({{ site.baseurl }}/admin-center/display/system-alert.html) feature to add a text message to your search results page, which will appear at all times above all search results, *regardless of the query*.

* Analyze the number of impressions and clicks and clickthru rate for each best bet on the [Monthly Reports]({{ site.baseurl }}/admin-center/analytics/monthly-reports.html) page. Use the data to inform your titles, descriptions, and keywords and your decision to deactivate or delete an entry.

* When you use the [sitelimit parameter]({{ site.baseurl }}/admin-center/content/collections.html#sitelimit) to scope the search to a subsection of your website, we'll apply this sitelimit to your Best Bets so searchers see recommended pages from within that folder or subdomain only.
