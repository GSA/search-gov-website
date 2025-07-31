---
layout: page
title: How to go live with Search.gov
crumbname: Go-live steps
category: admin-center
tags: go-live site-launch indexing
date: April 22, 2019
last_modified_at: July 30, 2025
#subnav:
  #data: get_started
redirect_from:
    - /manual/site-launch-guide.html
    - /get-started/site-launch-guide.html
---

After you [create an account]({{ site.baseurl }}/get-started/create-an-account-and-sign-in.html), follow these five steps to go live with Search.gov. 

## Step 1. Create a new site

To customize the search experience for your website, you need to [create a new site](https://search.usa.gov/sites/new) in the [Admin Center](https://search.usa.gov/sites). Start by entering some basic details about your site, including its homepage and display name.

## Step 2. Add domains

After creating the new site, you need to add the domains for the content you want included in the search results. You can add one or more domains in the Content section of the [Admin Center](https://search.usa.gov/sites).

Review [how to add your domains]({{ site.baseurl }}/admin-center/add-your-domains.html) for more information.

## Step 3. Manage other content (optional)

We offer several other ways to manage the content on your results page. You can set up collections, best bets, and routed queries in the Content section of the [Admin Center](https://search.usa.gov/sites).

* Use [collections]({{ site.baseurl }}/admin-center/content/collections.html) to search a narrower or broader scope than the default results page.  
* Use [best bets]({{ site.baseurl }}/admin-center/content/best-bets.html) to promote specific pages at the top of your search results.
* Use [routed queries]({{ site.baseurl }}/admin-center/content/routed-queries.html) to bypass the results page entirely for a specific search term

## Step 4. Design the results page

There are several options you can use to make the results page match the design of your website. You can set fonts and colors and upload your logo in the Display section of the [Admin Center](https://search.usa.gov/sites).

You can also add header links to support navigation between your website and the search results page to create a more seamless experience.

If you created any collections, you can select the option to display them on the Display Overview page in the [Admin Center](https://search.usa.gov/sites).

Use the Preview option in the [Admin Center](https://search.usa.gov/sites) to preview the design.

Review [how to design your results page]({{ site.baseurl }}/admin-center/design-your-results-page.html) for more information.

## Step 5. Connect your search box to Search.gov

When you are ready to go live, you will need to modify the form code for the search box on your website.

We provide this form code in the Activate section of the [Admin Center](https://search.usa.gov/sites).

To modify the form code for the search box on your website, you will probably need to work with your technical team. They can also help you use these parameters to create a more customized search box on your site.

Review [how to connect your search box to Search.gov]({{ site.baseurl }}/admin-center/connect-your-search-to-searchgov.html) for more information. 

---

## Special instructions for Cloud.gov Pages customers

If you use [Cloud.gov Pages](https://cloud.gov/pages/), you will also need to update the `_config.yml` file in your Cloud.gov Pages repository.

* Confirm that the `jekyll-sitemap` gem is listed as a plugin.
* Add your domain to the `url` field. This builds the [XML sitemap](https://search.gov/indexing/sitemaps.html) for this domain.
* Add your `site handle` from the [Admin Center](https://search.usa.gov/sites) to the `affiliate` line in the `Search.gov configuration` section.
* Delete the value in the `access_key` line.
* Set the `inline` value to `false`.

Please [contact the Pages support team](https://cloud.gov/pages/contact/) if you need help making these updates. 

Then, when you're ready to go live, [email the Search.gov team](mailto:search@gsa.gov) so we can index your content.