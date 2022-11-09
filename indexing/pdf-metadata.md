---
layout: page
title: How to improve PDF discoverability
crumbname: PDF Metadata
category: admin-center
tags: indexing seo pdf
date: November 9, 2022
last_modified_at: November 9, 2022
sidenav: indexing
---

You may have heard that PDFs are not the ideal document type for driving Search Engine Optimization. This is because much of the SEO value of PDFs is generally derived from metadata that must be created for each document file in a program such as Adobe Acrobat, which is a step that many often overlook. Non-HTML documents also fall lower in our ranking algorithm than HTML documents. However, if you do have PDFs on your domain, we have some tips to improve their discoverability.

Similar to web pages, Search.gov relies on structured data in your PDF files to present them in search results. By following these suggestions in preparing your PDF files you will improve the quality of your content in the index and the file’s ability to appear in the results rankings.

## Choose a descriptive file name: 
**Example:**
> file-title-or-form-name-and-number.pdf

**Detail:** Similar to a title, a descriptive file name makes file content clear when a user downloads the file. We strongly recommend you do not use the default file name suggested by your scanner or PDF program, and instead insert the document title into the file properties using Adobe Acrobat or other PDF program. If a title is not set in the PDF file properties, the file name will appear in the search results page in place of the title. It’s best practice to use hyphens to separate words, rather than underscores. [Avoid using space characters and these uncommon characters in your file names.](https://www.mtu.edu/umc/services/digital/writing/characters-avoid/)

**Used In:** If title isn’t set -- Query matching, term frequency matching

**Read More:** 
 * [The Ultimate Guide for an SEO-Friendly URL Structure — Search Engine Journal](https://www.searchenginejournal.com/technical-seo/url-structure/) 
 * [Filenames and file types — Google](https://developers.google.com/style/filenames) 
 * [What are good file naming conventions? — Oregon State University](https://webtech.training.oregonstate.edu/faq/what-are-good-file-naming-conventions)

## Make text in the document is searchable: 
**Detail:** Search engines don’t provide readability for image only PDFs. If a PDF is created through a scan it often will be an image, preventing the text from being used to help find the file in customer searches. Run all scanned PDFs through Optical Character Recognition (OCR) to convert from an image to fully searchable text. For guides on running OCR we suggest [How to search a PDF](https://www.adobe.com/acrobat/resources/how-to-search-pdf.html) (instructions) or [How to Create a Searchable PDF File](https://acrobatusers.com/tutorials/how-to-create-a-searchable-pdf-file/) (video)

**Used In:** Query matching, term frequency matching

## Add a title
**Example:**
> Title: Unique title of the PDF file

**Detail:** The title should be the unique, document-specific title of the PDF. This is used by Search.gov similar to the HTML title tag and displayed in the list of search results. If the title field is left blank in the PDF properties, the file name will be displayed. You can add a title to your file by updating the file properties in a program such as Adobe Acrobat.

**Used In:** Query matching, term frequency matching

## Add a description (in Adobe labeled as ‘Subject’)
**Example:**
> Subject: A description of the PDF’s content. This is a great place to use synonyms to achieve plain language and SEO keyword stuffing. Aim for 160 characters or fewer.

**Detail:** The description should be a well crafted, plain language summary of the particular unique file. This will often be used by search engines in place of a page snippet. Include all your relevant keywords you want the page to rank well for. Ideally, limit your description to 160 characters to prevent it being truncated on the search results page. This can be added through updating the file properties in a program such as Adobe Acrobat. (Note that in Adobe>Properties the description field is labeled ‘Subject’).

**Used In:** Query matching, term frequency matching

## Add keywords
**Example:**
> Keywords: Relevant Keyword, Applicable Keyword, Pertinent Keyword, Related Keyword

**Detail:** List the terms the public would use to find this document. This can be added through updating the file properties in a program such as Adobe Acrobat. Separate keywords using a comma. Both commas and semicolons are supported by Adobe, but our system currently only supports commas.

**Used In:** Query matching, term frequency matching

## Declare the file language
**Example:**
> Language: English

**Detail:** When a file language isn’t set, the Search.gov system does its best to analyze the content and make a determination. Typically this is not a problem, but if the file wasn’t run through an OCR and all it finds is an image file name or in an old scan where many letters were not correctly identified by the OCR, then our system may decide the incorrect language. Search.gov advises setting the language to avoid any issues, which is often an optional setting when running files through the OCR.

**Used In:** Used during indexing

## Create HTML landing pages for your PDFs
**Detail:** If you are specifically looking to direct traffic to PDFs, you may consider creating an HTML landing page that is SEO-optimized using traditional semantic metadata. You can find more information on semantic metadata in the [Search.gov help manual]({{site.baseurl}}/indexing/metadata.html). You could also choose to index the landing page exclusively rather than index and update your PDFs with document metadata.

## A note about date metadata
**Detail:** If you view the properties of a PDF, you will notice that date fields are not easily modified in the same way that the title, description (“subject”), and keywords are. The dates associated with PDFs include the Created and Modified dates - Created dates reflecting the time the PDF was originally produced and the Modified date reflecting the last time changes were saved to a document. 

**Used In:** Ranking fresher content higher than older content in the results.

![Screenshot showing the Document Properties of a PDF. Editable fields include Title, Author, Subject, and Keywords. It also displays the file name, and the created and modified dates of the document.]({{ site.url }}/assets/img/site/pdf-metadata.png)

Adobe has information about [editing document metadata](https://helpx.adobe.com/acrobat/using/pdf-properties-metadata.html) through xml files for PDF documents created in Acrobat 5.0 or later, and you can update the Modified date to your current date and time by re-saving your PDF file, but there is no simple way to edit these fields freely. If you are interested in having more control over dates affiliated with your PDF files, one approach to consider is using an RSS feed in your search.gov Admin Center to feed PDFs into your indexed items.

# Resources
We encourage you to read more on on how to improve PDF content for search at the following links:
* [How to Optimize PDF Documents for Search](https://moz.com/ugc/how-to-optimize-pdf-documents-for-search)
* [Add Metadata to a PDF in Acrobat - Instructions](https://www.teachucomp.com/add-metadata-to-a-pdf-in-acrobat-instructions/)

