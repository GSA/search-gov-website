---
layout: page
title: Support
tags: support help
date: March 11,2021
last_modified_at: March 11, 2021
sidenav: support
---

Customer support is central at Search.gov. Our success is bound up with the success of our federal agency partners. When you work with Search.gov, you can expect timely, courteous, expert help.

## Common Questions

<div class="usa-accordion" aria-multiselectable="true">

      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a1">
          Why can’t I log in?
        </button>
      </h3>
      <div id="m-a1" class="usa-accordion__content usa-prose">
        <p>Our system is required to disable accounts if they’ve not been used for 90 days. If you’re unable to log in to your account, <a href="mailto:search@gsa.gov">email us</a> for help.</p>

      </div>

      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a2">
          I have more than one email address associated with my Login.gov account and I can’t log in to my search.gov account. What do I do?
        </button>
      </h3>
      <div id="m-a2" class="usa-accordion__content usa-prose">
        Please follow the steps below:
        <ol>
        <li>Go to Search.gov, click Login</li>
        <li>Click Accept and Proceed on the system access banner</li>
        <li>Arrive at Login.gov</li>
        <li>Enter the email address associated with your Search.gov account (.gov or approved business email address) and account password, plus MFA code</li>
        <li>Login.gov sends you back to Search.gov along with the email address you presented to them</li>
        <li>Search.gov checks for that email address's status and should let you in</li>
        </ol>
        
        <p>If the browser your are using has stored the personal email address and is auto-filling it when you arrive at Login.gov, this needs to be overwritten with the .gov/business email address before entering your password.</p>
      </div>
      
       <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a3">
          How do I access an existing site?
        </button>
      </h3>
      <div id="m-a3" class="usa-accordion__content usa-prose">
        {% include featured-accordion.html content="access-existing-site" accordion=false %}
      </div>
  
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a4">
          We deleted some pages. Can they be removed from our search results?
        </button>
      </h3>
      <div id="m-a4" class="usa-accordion__content usa-prose">
        <p>This question has two possible answers.</p> 
			<ul>
				<li>If your search site uses our index, we scan for page updates and removals on a regular basis. If you need something removed immediately, please <a href="mailto:search@gsa.gov">email us</a>. You can also use the Filter URLs feature to hide the item. See below.</li>
				<li>If your search site uses the Bing index, you can use the Filter URLs feature to hide the item immediately from your results. However, we are unable to update the Bing index itself to remove the item fully from their results. We can work with you to index your site and move it onto our index, where we have control over the content and timeliness of updates.</li>
				<li>Learn more about the <a href="{{ site.baseurl }}/admin-center/content/filter-content.html">Filter URLs feature</a>.</li>
			</ul>
      </div>
  
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a5">
          We relaunched our website, and now our results are outdated &mdash; what do we do?
        </button>
      </h3>
      <div id="m-a5" class="usa-accordion__content usa-prose">
        <p><a href="mailto:search@gsa.gov">Email us</a> as soon as possible. We’ll need to do some things in the back-end of the system to get your search results up to date as soon as possible. Also, please read through our <a href="{{ site.baseurl }}/indexing/redesign.html">Checklist For a Successful Redesign</a> for suggestions on what you can do right away.</p>

      </div>
  
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a6">
          I don’t see all our content (PDFs, folders, etc.) in search results. What do we need to do?
        </button>
      </h3>
      <div id="m-a6" class="usa-accordion__content usa-prose">
        <p>If something is missing from your search results, it’s likely not included in your <a href="{{ site.baseurl }}/indexing/sitemaps.html">XML sitemap</a>. Some content management systems, like Drupal, have <a href="https://www.drupal.org/project/xmlsitemap">sitemap plugins</a> that allow you to add static media files to the sitemap. If the content is not stored within the CMS, you will likely need an additional sitemap or RSS feed for this content. <a href="mailto:search@gsa.gov">Email us</a> about your system and the content you need indexed, and we can recommend a solution.</p>
        
      </div>  
      
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a7">
          Why do I see one set of results on the hosted results page, and different results through the results API?
        </button>
      </h3>
      <div id="m-a7" class="usa-accordion__content usa-prose">
        <p>Our system uses multiple web indexes. Our hosted results page uses Bing index by default, but our Results API only uses our own web index. <a href="mailto:search@gsa.gov">Contact us</a> and we can adjust your hosted results page view to use our web index.</p>

      <p>If you don't see any results through the API, we need to index your website. Please <a href="{{ site.baseurl }}/indexing/indexing-with-searchgov.html">read our indexing guide</a>, and <a href="mailto:search@gsa.gov">email us</a> to get started.
      </p>
        
      </div>
  
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a8">
          How can I use collections or other features through the Results API?
        </button>
      </h3>
      <div id="m-a8" class="usa-accordion__content usa-prose">
        <p>Our search results API is robust, but its feature set is different from our hosted results page. We have a <a href="{{ site.baseurl }}/admin-center/display/hosted-vs-api-results.html">feature comparison chart</a> that gives details.</p>

      </div>
  
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a9">
          Can I download my text Best Bets?
        </button>
      </h3>
      <div id="m-a9" class="usa-accordion__content usa-prose">
        <p>If you want to work on your Best Bets in a spreadsheet, we can do a bulk download for you. Please <a href="mailto:search@gsa.gov">email us</a> to request a download.</p>

      </div>
   
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a10">
          Is the system up?
        </button>
      </h3>
      <div id="m-a10" class="usa-accordion__content usa-prose">
        <p>Our <a href="{{ site.baseurl }}/status.html">System Status page</a> shows our current status and any performance issues we may be working on.</p>
        
      </div>
    
</div>



## Other Requests

If you have any other questions, feel free to reach out to us. 

[Email](mailto:search@gsa.gov)

[Phone](tel:(202)-969-7426)
