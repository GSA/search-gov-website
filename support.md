---
layout: page
title: Support
tags: support help
date: March 11,2021
last_modified_at: June 27, 2025
#subnav:
  #data: support
---

Customer support is central at Search.gov. Your success is our success. When you work with Search.gov, you can expect timely, courteous, expert help.

## Answers to Common Questions

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
        <p>Our system is required to disable accounts if they’ve not been used for 90 days. If you’re unable to log in to your account, <a href="mailto:search@gsa.gov">email us</a> to reset it.</p>

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
        <li>Search.gov checks for that email address's status and should let you in. If you still see a credentials error, <a href="mailto:search@gsa.gov">email us</a> to troubeshoot the error.</li>
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
        <p>We scan for page updates and removals on a regular basis. If you need something removed immediately, you can also use the Filter URLs feature to hide the item. Learn more about the <a href="{{ site.baseurl }}/admin-center/content/filter-content.html">Filter URLs feature</a>.</p>

			</ul>
      </div>
  
      <!-- Use the accurate heading level to maintain the document outline -->
      <h3 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="m-a5">
          We relaunched our website, and now our results are outdated. What do we do?
        </button>
      </h3>
      <div id="m-a5" class="usa-accordion__content usa-prose">
        <p>Please read through our <a href="{{ site.baseurl }}/indexing/redesign.html">Checklist For a Successful Redesign</a> for suggestions on what you can do right away. Then, <a href="mailto:search@gsa.gov">email us</a> so we can update some things in the backend to get your search results up to date as soon as possible.</p>

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
        <p>If something is missing from your search results, it’s likely not included in your <a href="{{ site.baseurl }}/indexing/sitemaps.html">XML sitemap</a>. Some content management systems, like Drupal, have <a href="https://www.drupal.org/project/xmlsitemap">sitemap plugins</a> that allow you to add static media files to the sitemap. If the content is not stored within the CMS, you will likely need an additional sitemap or RSS feed for this content.</p>
        
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
          aria-controls="m-a10">
          Is the system up?
        </button>
      </h3>
      <div id="m-a10" class="usa-accordion__content usa-prose">
        <p>Our <a href="{{ site.baseurl }}/status.html">System Status page</a> shows our current status and any performance issues we may be working on.</p>
        
      </div>
    
</div>

## Other Requests

If you have any other questions, please [email us](mailto:search@gsa.gov).