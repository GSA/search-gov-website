---
layout: year-review
title: Design
description: The 2022 Search.gov Year In Review.
tags: year-in-review
hero-image: Design_Hero.png
date: April 24, 2022
last_modified_at: April 24, 2022

---

<div class="grid-row grid-gap">
<article class="desktop:grid-col-8 usa-prose article">
    <main id="main-content">
        <h1 class="title">{{page.title}}</h1>
        <img src="{{ site.baseurl }}/about/updates/year-in-review/2022/img/4_logo.png" alt="" />
        <h2 id="section_1">4. Content strategy revisions</h2>
        <blockquote class="year-in-review padding-x-4 padding-y-2 margin-x-0">
        <h3>Impact on search</h3>
        <p>If the content is being rewritten during a relaunch, the team will need to reindex the website to ensure accurate results. Now is the time to establish content governance for the new site, so content across the site will be of a similar quality, and maintained over time. This includes metadata strategy and requirements, and schedules for reviews and updates.</p>
        </blockquote>
        <p>At its best, content strategy helps content managers communicate effectively with the public about what the agency can do for them.</p>
        <p>The team should base the content strategy on findings from user research, usability testing, and web analytics review. It will include scope and guidance for what to communicate, as well as when, where, and how.</p>
        <p>Ideally, it will also include a strategy for page metadata. That strategy will help content managers add helpful descriptors to their content, as well as governance and workflows. It should also include a specific plan about what content to update, what to significantly revise, and what to remove entirely, and when.</p>
        <p>In the context of search, brand new content is the easiest because search engines recognize when a URL is new, and simply add the item to the index. Pages that are receiving content updates must also include an “updated” date in the structured metadata of the page code. This will allow search engines to identify pages that have been updated since the last time the bot worked on the site, and update the index accordingly.</p>
        <p>Most modern content management systems make it easy to include published dates and updated dates for each page. If it's not possible to add date metadata to pages, the search engine should regularly update URLs it knows about, just in case the page has been edited without updated date metadata. Search.gov revisits known URLs every 30 days to reindex. Commercial search engines have not published their reindexing schedules, as the schedule varies for different domains.</p>
        <p>Removing content is more tricky. Whenever possible, place a 301 redirect on the old URL path pointing to a new, relevant location.</p>
        <p>If the old URL will not get a redirect, the path must return a 404 error. Even though 404 errors can remain in search results for longer than desirable and create poor experiences for searchers, there is a more challenging possibility.</p>
        <p>Some agencies have removed content from pages, but the page URLs themselves continue to load and return “200 OK” responses. When a search engine sees a 200 response, it will keep the URL in the index, with updated content. Empty pages that look to a system like good pages can create a lot of confusion in the search results.</p>
        <img src="{{ site.baseurl }}/about/updates/year-in-review/2022/img/usa-gov_logo.png" alt="USA.gov" />
        <h3>USA.gov</h3>
        <p>USAGov has been transforming how they provide information to the public, including building entirely new English and Spanish beta sites (Beta.USA.gov). Throughout the process, they’ve relied on data from across their channels (websites, contact center, and social media) to create a human centered yet authoritative source of government information.</p>
        <p>Before they created any content for the new sites, USAGov narrowed their content scope based on data such as webpage visits and contact center inquiries. Cross functional teams from the UX and content teams distilled both quantitative (page views and clicks) and qualitative data (search terms and survey comments) into content design recommendations. The content on the new sites needed to be based on user research and usability testing, and support people in solving their issues or finding answers to their questions.</p>
        <p>After they finished this review, their writers developed a set of “user intents” Each page focuses on a single user intent. Using the search trend data, the team wrote headlines and link text that matched what people wanted to know more about.</p>
        <p>Some of the content strategy focused on interactive elements. They used new design components from the US Web Design System (USWDS) to structure content with visual cues of how to do tasks, including process lists and clickable call to action buttons. Their UX, content and developer teams worked together to create interactive tools that allow visitors to find their elected officials and where to report scams.</p>
        <p>The team is promoting the beta sites on social media and banners on the main USA.gov. They link to the beta sites to drive traffic and get feedback. They are also conducting ongoing usability tests on specific new features. Together, these data help USAGov identify what’s working and glean ideas to improve the completed site.</p>
        <img src="{{ site.baseurl }}/about/updates/year-in-review/2022/img/5_logo.png" alt="" />
        <h2 id="section_2">5. Information architecture revisions</h2>
        <blockquote class="year-in-review padding-x-4 padding-y-2 margin-x-0">
        <h3>Impact on search</h3>
        <p>Changes to a website’s information architecture almost always change every URL on the website. By extension, all of the old URLs will no longer work, which means that every search result will break. Agencies must reindex websites when they change architecture, even if the content does not change. Reindexing guarantees that the URLs with the new structure will be returned in search.</p>
        <p>Architecture updates also improve search engine optimization, if folders are renamed using plain language. The text contained in URLs is indexed by search engines, and can help match with search terms.</p>
        </blockquote>
        <p>Base any changes made to a website’s information architecture on findings from user research and usability testing. The public must be able to find and understand content and services on a website. Plain language folder names, organized around what users search for and using the words they use, improve URLs’ usability for both people and search engines.</p>
        <p>Sometimes an architecture revision may not be obvious to the team as it occurs. This can happen if most of the folder structure remains the same, but the entire website moves up one level, or if the subdomain changes.</p>
        <p>For instance, the team moves to a new platform, without any planned structural or content changes. However, in this new platform, they remove the “site” folder from their structure. On the surface, nothing changes, but really every URL changes.</p>
        <p>Similarly, if a website removes “www,” this changes every URL and requires reindexing.</p>
            <div class="grid-row grid-gap-4 margin-y-2">
                <div class="grid-col-6">
                    <div class="example-website padding-x-4 padding-y-2">
                        <h3 class="design-header">Original Website</h3>
                        <p>example.gov/site/the-website-starts-here</p>
                        <p><a href="">www.example.gov</a></p>
                    </div>
                </div>
                <div class="grid-col-6">
                    <div class="example-website padding-x-4 padding-y-2">
                        <h3 class="design-header">New Website</h3>
                        <p>example.gov/site/the-website-starts-here</p>
                        <p><a href="">example.gov</a></p>
                    </div>
                </div>
            </div>
        <img src="{{ site.baseurl }}/about/updates/year-in-review/2022/img/NRCS_logo.png" alt="Natural Resources Conservation Service" />
        <h3>Natural Resources Conservation Service NRCS.USDA.gov</h3>
        <p>The Natural Resources Conservation Service supports conservation on “working” lands, providing technical and financial assistance to farmers, ranchers and forest landowners to help them make conservation improvements to their land.</p>
        <p>NRCS also serves as a national leader in natural resource data and a source of soil, water supply and plants data. When they were beginning their site redesign, they were facing challenges with ease of use, both for agricultural producers looking for information on farm programs as well as stakeholders looking for data.</p>
        <p>Adding to the challenge, the programs that NRCS delivers are based on local priorities.</p>
        <p>The old site was heavily reliant on state-level web managers, as each state had a subsite which held a full set of information about relevant programs and resources, in a classic fan or tree structure.</p>
        <p>With their new site, they wanted to ensure that people in any particular state would be able to find everything they need easily. They also wanted to streamline their content, focusing more on topics without regard to agency structure. So they created an architecture that is almost an inversion of the old site, reflecting users and their needs, rather than how NRCS is organized.</p>
        <p>The new architecture emphasizes topics, programs, and resources, and narrows down to state-level information within those higher level categories. In addition, each state manages a state-specific page. This page then links out to all the relevant state information in the other folders.</p>
        <p>The new structure is a set of distinct content categories with strategic cross-linking. This allows the state teams to provide targeted support to their constituents, and allows the central NRCS web team to manage content without redundancy.</p>
        <img src="{{ site.baseurl }}/about/updates/year-in-review/2022/img/6_logo.png" alt="" />
        <h2 id="section_3">6. Design: Visual and structural</h2>
        <blockquote class="year-in-review padding-x-4 padding-y-2 margin-x-0">
        <h3>Impact on search</h3>
        <p>Website design can have a large impact on search. Develop page template code carefully so the information that the agency wants searchable is picked up by search engines, and the text that is not valuable for search is not.</p>
        <p>The Search.gov team can review your page template code for good structure.</p>
        </blockquote>
        <p>When we think of website design, we often think of colors, fonts, and imagery first. But before these “surface” components, visual design focuses on the structure of the information on the page, and how it relates to other information presented nearby. This other information may include menus, sidebars, call out boxes, etc.</p>
        <p>Some sidebars or call out boxes, which have information that is unique to the page, can help return that page in search.</p>
        <p>However, the words included in menus, headers, side navigation, and footers are almost never useful in search. Behind the scenes, tag each of these pieces correctly so the search index doesn’t pick up redundant content.</p>
        <p>“Semantic” tags allow front-end developers to specify which section of the page code is the header, the menu, a sidebar, the main content, and the footer. These tags allow engines to focus on the main content of the page, and skip the rest of the text it may find.</p>
        <p>One element that is easy to code incorrectly are the lists of items inside of mega menus. These are often placed in the code as regular lists, so search engines pick them up just as they would any other paragraph text. Because menu text is repetitive, it can cause pages to be returned in results that are not about the topic of the search, but which technically matched because the topic is listed in a menu.</p>
        <p>Check for these important items:</p>
        <ul>
            <li>Include the entire mega menu code inside the &lt;menu&gt; element.</li>
            <li>Use only one H1 tag on any page.</li>
            <li>Include the page title in the H1 tag.</li>
            <li>Do not use the &lt;main&gt; tag to enclose the side navigation code or the breadcrumbs.</li>
            <li>Place the opening &lt;main&gt; tag just ahead of the H1 tag.</li>
        </ul>
        <img src="{{ site.baseurl }}/about/updates/year-in-review/2022/img/Search.gov_logo.png" alt="Search.gov" />
        <h3>Search.gov, the website</h3>
        <p>Early in 2022, we relaunched our own website. We used user feedback on findability in two areas: homepage structure and the side navigation element on our internal pages.</p>
        <p>We saw a consistent pattern of questions to our help desk that showed people were looking for information in a few categories. In our new website, we wanted to make sure this information was available to searchers, browsers/navigators, and people who only want to look at the homepage. The more frequent the question or need, the closer we placed links to the relevant content to the top of the homepage.</p>
        <p>We also are in the middle of redesigning our side navigation element for subsections of the site. Our information architecture is relatively tall, with some folders going three levels deep. Once a person clicks into a page in a subfolder, our current sidenav design no longer shows where the person is in the website.</p>
        <p>We will be shifting to a sidenav design that is more dynamic and will adjust to the person’s location, no matter how deep in the site they may be. This should help them choose their next step more easily.</p>
    </main>
</article>
<div class="desktop:grid-col-4">
    <aside class="usa-in-page-nav-together">
        <nav role="navigation" arial-label="In-page navigation">
            <ul class="usa-in-page-nav-together-list">
                <li class="usa-in-page-nav-together__item"><a href="#section_1" class="usa-in-page-nav-together__link usa-current">4. Content strategy revisions</a></li>
                <li class="usa-in-page-nav-together__item"><a href="#section_2" class="usa-in-page-nav-together__link">5. Information architecture revisions</a></li>
                <li class="usa-in-page-nav-together__item"><a href="#section_3" class="usa-in-page-nav-together__link">6. Design: Visual and structural</a></li>
            </ul>
        </nav>
    </aside>
</div>
</div>