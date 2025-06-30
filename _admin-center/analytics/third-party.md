---
layout: page
title: How to Add Javascript for Your Third-party Web Services
category: admin-center
tags: help-manual analytics third-party google-analytics foresee DAP
date: June 5, 2020
last_modified_at: June 27, 2025
#subnav:
  #data: admin_center
redirect_from:
    - /manual/third-party.html
---

Find it in the Admin Center: [Search.gov Home]({{ site.baseurl }}/index.html) > [Admin Center](https://search.usa.gov/sites/) > YourSite > Analytics > 3rd Party Tracking

Do you want your search results page to run third-party web services such as Foresee, Google Analytics, Omniture, Siteimprove, or WebTrends?

1. Input the JavaScript code you'd like to call from your search results page. 
1. Click submit to send us your request. 
1. We'll review and reach out if we have any questions.
1. When confirmed, we will insert the code into your production results page and email you to notify you that the process is complete.

Some tips for commonly used third-party web services follow.

## Google Tag Manager

If you add a Google Tag Manager script to our system, we cannot review the individual scripts for content or quality. You are responsibile for the scripts managed in your GTM account, and for the script actions that are run on our results page on your behalf. A note about the differences between our third-party tracking support and GTM recommendations:

<table style="border:1px solid;padding:10px;float:middle">
  <tr><th style="border:1px solid;padding:10px;width:50%;">Google Tag Manager Guidance</th><th style="border:1px solid;padding:10px;width:50%;">Search.gov script support</th></tr>
  <tr><td style="border:1px solid;padding:10px;width:50%;">Place primary snippet in the <code>head</code> of the html file</td><td style="border:1px solid;padding:10px;width:50%;">Snippet is placed at the end of the <code>body</code></td></tr>
  <tr><td style="border:1px solid;padding:10px;width:50%;">Place secondary snippet at the beginning of the <code>body</code></td><td style="border:1px solid;padding:10px;width:50%;">Does not place secondary tag</td></tr>
</table>
<br />
Despite these differences, our agency partners appear to have success in using GTM with our results page.

## Google Analytics

Within your Google Analytics account, select the option, *Do Track Site Search*. Set the query parameter as *query*. For more information, read Google's tip, [Set Up and Configure Site Search](https://support.google.com/analytics/answer/1012264?hl=en&ref_topic=1031951).

For more information, read Google's tip, [Tracking Multiple Domains](https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingSite).

The code you submit should look something like this:

     <script type="text/javascript">
     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
     </script>
     
## Digital Analytics Program

Does your federal agency participate in the [Digital Analytics Program](https://digitalgov.gov/services/dap/) (DAP)?  You don't need to do anything. We're already fully integrated with DAP. If you use the `search.usa.gov` domain on your results page, your data will be located within the GSA Agency Profile in DAP. To bring your Search.gov DAP data into your own agency's DAP profile, you must set up a [domain mask]({{ site.baseurl }}/admin-center/display/cname.html).

You do not need to submit the DAP script to us.