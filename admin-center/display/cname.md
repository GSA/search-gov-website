---
layout: page
title: How to Mask Your Domain
category: admin-center
tags: help-manual activate-search cname 
date: September 21, 2018
last_modified_at: September 21, 2018
sidenav: admin_center
redirect_from:
    - /manual/cname.html
---

We offer DNS masking, which allows you to show searchers `search.example.gov` (instead of `search.USA.gov`). Follow these steps to mask your domain. Please note that due to limitations in the size of our SSL certificate, we are only able to offer top level domain masking: i.e., `search.example.gov` but not `search.subagency.example.gov`.

1. Create a `search` subdomain for your domain. If `search` is already in use in your environment, you could use `find` or `findit` as your subdomain.

2. Create a CNAME in your external DNS records for `search.example.gov`. Point it to `yoursitehandle.sites.infr.search.usa.gov`. Your site handle is listed on the [settings page]({{ site.baseurl }}/admin-center/dashboard/settings.html) in the Search Admin Center.
	
	For example: if your site handle is `abc`, the DNS record would look like this:
	
		search.example.gov   CNAME  abc.sites.infr.search.usa.gov

	NOTE: if your site handle contains a `.`, please replace it with a `-` in your DNS record,  e.g., for site handle `abc.gov.search` the DNS record would look like this:

		search.example.gov   CNAME  abc-gov-search.sites.infr.search.usa.gov
  
3. After your DNS record has been added, [email us](mailto:search@gsa.gov) to request to be added to our SSL certificate. If your CNAME is not on our SSL certificate, browser security warnings will appear when your search results page attemps to load over `HTTPS`. It generally takes a few days for these requests to get through our queue.<br><br>Your domain mask will work as soon as these two steps are complete.

4. When your DNS record is in place and you have received confirmation that your domain mask has been added to our SSL certificate, change your search box's [form code]({{ site.baseurl }}/admin-center/activate/code.html) action from `search.usa.gov/search` to `search.example.gov/search`. 

---

***Troubleshooting tip:*** Many agencies have both internal and external DNS. Be
sure to update your *external* DNS records (step 1) before changing your form code (step 2).

***Pro Tips*** 

* Any search site within your domain may use the same domain mask and CNAME record, even if the CNAME is not associated with that particular site's handle. To implement an existing mask for a search box, just do Step 2, above.
* Once the CNAME is set up, if visitors to your site happen to truncate the URL in the browser bar to https://search.example.gov (without any parameters), they're automatically redirected to your agency's homepage at https://www.example.gov. 
* Most of our customers use a `search.example.gov` mask (such as search.nih.gov). If the `search` subdomain is already used by another application, you can use `find` or `findit`, such as `find.irs.gov` or `findit.state.gov`. We no longer support other subdomain patterns. 
