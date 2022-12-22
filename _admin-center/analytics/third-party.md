---
layout: page
title: How to Add Javascript for Your Third-party Web Services
category: admin-center
tags: help-manual analytics third-party google-analytics foresee DAP
date: June 5, 2020
last_modified_at: June 5, 2020

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

We do not officially support Google Tag Manager. If you add a Google Tag Manager script to our system, we cannot review the individual scripts for content or quality. You assume full responsibility for the scripts managed in your GTM account, and for the script actions that are run on our results page on your behalf. A note about the differences between our third party tracking support and GTM recommendations:

<table style="border:1px solid;padding:10px;float:middle">
  <tr><th style="border:1px solid;padding:10px;width:50%;">Google Tag Manager Guidance</th><th style="border:1px solid;padding:10px;width:50%;">Search.gov script support</th></tr>
  <tr><td style="border:1px solid;padding:10px;width:50%;">Place primary snippet in the <code>head</code> of the html file</td><td style="border:1px solid;padding:10px;width:50%;">Snippet is placed at the end of the <code>body</code></td></tr>
  <tr><td style="border:1px solid;padding:10px;width:50%;">Place secondary snippet at the beginning of the <code>body</code></td><td style="border:1px solid;padding:10px;width:50%;">Does not place secondary tag</td></tr>
</table>
<br />
Despite these differences, our agency partners appear to have success in using GTM with our results page.

## Google Analytics

Within your Google Analytics account, select the option, *Do Track Site Search*. Set the query parameter as *query*. For more information, read Google's tip, [Set Up and Configure Site Search](https://support.google.com/analytics/answer/1012264?hl=en&ref_topic=1031951).

Additionally, if you've requested [domain masking]({{ site.baseurl }}/admin-center/display/cname.html) and you want to include the analytics for your *search.example.gov* subdomain with your main *example.gov* domain, you'll need to set your domain in your Google Analytics JavaScript by including `_gaq.push(['_setDomainName', 'example.gov']);`.

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

*Note:* You do not need to submit the DAP script to us.

## ForeSee

Coordinate with your ForeSee representative and the Search.gov team to implement your customer satisfaction survey on your results page. The four general steps follow.

1. Email us at <search@gsa.gov> to [set up a CNAME]({{ site.baseurl }}/admin-center/display/cname.html) for `search.example.gov`.

1. Update the files path in your Foresee code to use an absolute path instead of a relative path. 

    **Find =>** 'files': '/fsrscripts/',  

    **and replace it with =>** 'files': 'https://www.example.gov/fsrscripts/',  

    *(Or, find => 'files': '/foresee/', and replace it with => 'files': 'https://www.YOURAGENCY/foresee/',)*

    in the following five files.

    * foresee-trigger.js  
    * foresee-tracker.js  
    * foresee-alive.js  
    * foresee-qualifier.js  
    * foresee-test.js

1. Submit your foresee-trigger.js via our Admin Center. It should look something like the following script. `<script type="text/javascript" src="https://www.example.gov/library/foresee/foresee-trigger.js"></script>`

1. We'll send you an email to confirm that we've set up both your CNAME and added the script for your foresee-trigger.js file.

---

***Pro Tip*** 

We use Google Analytics Web analytics software &mdash; our own tag plus the [Digital Analytics Program](https://digitalgov.gov/services/dap/) tag &mdash; by default. Learn more in our [terms of service]({{ site.baseurl }}/tos.html).
