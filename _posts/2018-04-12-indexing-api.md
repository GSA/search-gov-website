---
layout: post
title: i14y Content Indexing API Documentation
category: developer
tags: i14y api
---

[Search.gov Home]({{ site.baseurl }}/index.html) > [APIs for Developers]({{ site.baseurl }}/developer/index.html) > i14y API

> **Important Note:** April, 2018. i14y does not visit your content to do full-text scraping of your content. For new implementations, the Search.gov team recommends you index your content with us not using the i14y API, but rather by publishing a comprehensive xml sitemap, which we can use to index your content. [Read more.]({{ site.baseurl }}/blog/six-months-in.html)

[i14y Github repo](https://github.com/GSA/i14y){% external_link %}

## What is i14y?

The Search.gov i14y Content Indexing API allows you to send content directly from your content management system (CMS) into Search.gov for real-time indexing. By hooking into your CMS workflow, you can immediately create, update, and delete the associated documents in our search indexes via this API. Even if you don’t have a CMS, you can develop software to publish your content in a way that meets the i14y API specifications below.

Ruby/Python/Node clients are welcome.

## Before you Begin

1. Set-up a search site with our service via 
[Search.gov]() 
2. Request that your search site be enabled for i14y by [emailing our team](mailto:search@support.digitalgov.gov).
3. Set up an i14y “drawer” in our system. [Full instructions]({{ site.baseurl }}/manual/i14y-drawers.html) are available in our help manual. You’ll give your drawer a handle, and you’ll need to enter this drawer handle in the username field below after you click the Authorize button.
4. Get your i14y secret token. You’ll need to enter this token as your password.
The token can be found in our system in: [Search Admin Center](https://search.usa.gov/sites) > Manage Content > i14y Drawers, select the option Show.

*Note:* If you are a developer who doesn't have access to our site configurations, please [email us](mailto:search@support.digitalgov.gov).

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
  <defs>
    <symbol viewBox="0 0 20 20" id="unlocked">
          <path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z"></path>
    </symbol>

    <symbol viewBox="0 0 20 20" id="locked">
      <path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z"/>
    </symbol>

    <symbol viewBox="0 0 20 20" id="close">
      <path d="M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z"/>
    </symbol>

    <symbol viewBox="0 0 20 20" id="large-arrow">
      <path d="M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z"/>
    </symbol>

    <symbol viewBox="0 0 20 20" id="large-arrow-down">
      <path d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z"/>
    </symbol>


    <symbol viewBox="0 0 24 24" id="jump-to">
      <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"/>
    </symbol>

    <symbol viewBox="0 0 24 24" id="expand">
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
    </symbol>

  </defs>
</svg>

<link rel="stylesheet" type="text/css" href="/files/swagger-ui.css" >

<div id="swagger-ui"></div>

<script src="{{ site.baseurl }}/files/swagger-ui-bundle.js"> </script>
<script src="{{ site.baseurl }}/files/swagger-ui-standalone-preset.js"> </script>
<script>
window.onload = function() {
  
  // Build a system
  const ui = SwaggerUIBundle({
    url: "https://search.gov/files/i14y_swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  })

  window.ui = ui
}
</script>