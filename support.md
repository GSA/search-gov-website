---
layout: page
title: Support
tags: support help
date: March 11,2021
last_modified_at: March 11, 2021
#subnav:
  #data: support
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
        It's likely your browser auto-filled the wrong email address. If your browser has stored your personal email address and is auto-filling it when you arrive at Login.gov, this needs to be overwritten with your .gov or business email address before entering your normal password. Please follow these steps:
        <ol>
        <li><a href="https://search.usa.gov/login">Login to your Search.gov account</a></li>
        <li>Click "Accept and Proceed" on the system access banner</li>
        <li>Arrive at Login.gov</li>
        <li>Enter the email address associated with your Search.gov account (.gov or approved business email address) and account password, plus MFA code</li>
        <li>Login.gov will send you back to Search.gov along with the email address you presented to them</li>
        <li>Search.gov checks for that email address's status and should let you in. If you still see a credentials error, <a href="mailto:search@gsa.gov">email us</a> for help.</li>
	      </ol>
        Another possibility is that you were logged into another service using your personal email in login.gov, and then you chose the "Log in with your government employee id" link below the sign in button.  Unfortunately, sometimes using that option sends search.gov a different email than the one that is regisitered with search.gov (such as your personal email), which leads to your login attempt being rejected.  We recommend entering your email and password each time instead.
        <figure>
          <img src="{{ site.url }}/files/signin_guidance.png" alt="A screenshot of the login.gov sign in page for Search.gov.  There is a blue box around the username and password fields, and the username field is filled in with username@agency.gov, and the password field is filled in with dots.  There is a red X over the link that reads Sign in with your government id" />
          <figcaption>Always enter the email associated with your search.gov account and your login.gov password, instead of the "Sign in with your government employee id" shortcut link</figcaption>
        </figure>
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
