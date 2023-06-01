---
layout: year-review
title: "The great migration: Implementation"
description: Discussion of the technical implementation phases of a website redesign, and their impact on search. Content migration, testing, and rollout.
tags: year-in-review
hero-image: Implementation_hero.png
hero-image-desktop: Implementation_hero_desktop.png
date: May 18, 2023
last_modified_at: May 18, 2023

---

<div class="grid-row grid-gap">
<article class="desktop:grid-col-8 usa-prose article">
    <main id="main-content">
        <h1 class="title">Technical implementation</h1>
        <p>The final phases of redesign are the technical implementation steps. After all the planning and design is complete, it’s time to get the new website ready to launch. This is a long and challenging time, and teams may discover they need to revisit earlier phases to make revisions based on new information or changing context. The major phases of this final push are:</p>
		<ul>
			<li>Content migration,</li>
			<li>Testing, and</li>
			<li>Rollout.</li>
		</ul>
		<p>Each phase will have an impact on search experiences. Here we discuss details of each, outline the potential impact on search, and share the experiences of our partner agencies. The Search.gov team is most frequently engaged with our partners during these final phases.</p>
        <hr class="section-break" id="section_1">
        <img src="{{ site.baseurl }}/about/updates/year-in-review/special-report/img/7_logo.png" alt="" />
        <h2 id="">7. Content migration</h2>
        <blockquote class="year-in-review padding-x-4 padding-y-2 margin-x-0">
        <h3>Impact on search</h3>
        <p>This phase of a website redesign has very little impact on search, because the space does not include decisions about content structure and presentation. Sometimes test content remains in the website and is indexed and returned in search after launch. Update placeholder text to final content, and delete test pages.</p>
        </blockquote>
        <p>Content migration involves inserting content from the old website into the new website. It requires coordinating among multiple participating teams. It’s the end of the work that began with the baseline site assessment, and moved through updates to content strategy and information architecture.</p>
		<p>The relaunch path chosen earlier in the process will determine how much content moves and when. Technical and human factors will influence how smoothly the content migration phase proceeds. Technical factors may include how easy or difficult it is to get content out of the old website, cleaning up content prior to importing it into the new website, or reformatting page style code to work with the new system. Specific to human factors, authors need to agree to the content strategy, content edits need to be reviewed in a timely manner, and communication with internal partner teams needs to be frequent and thorough.</p>
        <img src="{{ site.baseurl }}/about/updates/year-in-review/special-report/img/Example-gov_logo.png" alt="" />
        <h3>Anonymous.gov</h3>
        <h4>An unattributed story</h4>
        <p>While all phases of a website redesign take effort, content migration requires real toil. It’s long and often messy, and we thank this agency for sharing their recent content migration experience with us. We share their story without attribution.</p>
		<p>When the Office of Public Affairs web team began work on the redesign, the agency had decided to take a “big bang” approach, to relaunch not only the main website, but a set of subdomains aimed at different audiences as well. In total, they had about 50,000 items to move, including web pages, images, and PDFs of legal documents.</p>
		<p>They conducted an audit of web analytics data and customer feedback surveys, and met with internal stakeholders, many of whom are frequent users of the website themselves.</p>
		<p>The web team learned that there were large groups of older content that were not being used. They also learned that people often looked for information on the main website that was published on a subdomain.</p>
		<p>In addition, the team learned that there were people from the general public trying to use their website who were confused by pages written for experts.</p>
		<p>The team developed a strategy that focused on four main areas:</p>
		<ul>
			<li>archiving outdated pages, including removing and archiving one content type entirely; </li>
			<li>rewriting pages to use plain language; </li>
			<li>creating obvious cross-links between websites to get people to the right place; and </li>
			<li>moving their legal documents into a dedicated section so they would be easier to find and not blended with other content types. </li>
		</ul>
		<p>Despite having a sound content strategy, there were a few bumps in the road. 
Content that was slated to be removed was discussed and reviewed with agency staff during the migration. However, by the launch of the new site, the agency discovered unexpected business needs for the removed content.</p>
		<p>This required the web team and other staff to deliver alternate solutions to the content users. While the web team managed content creation for the new website, they were also managing the new website’s design process, and keeping the old website up and running.</p>
		<p>In all, the content migration took about 18 months.</p>
		<p>Looking back, the web team would have built in more time to complete the content migration. The team may have taken a phased approach instead of a full site migration, updating and publishing sections or subdomains individually.</p>
		<p>As a best practice, the team has implemented a stronger content governance, so that content is now kept current, reviewed, and archived on a regular basis. The team is looking forward to using these lessons and best practices for redesigns in the future.</p>
        <hr class="section-break" id="section_2">
        <img src="{{ site.baseurl }}/about/updates/year-in-review/special-report/img/8_logo.png" alt="" />
        <h2 id="">8. Testing</h2>
        <blockquote class="year-in-review padding-x-4 padding-y-2 margin-x-0">
        <h3>Impact on search</h3>
        <p>There are several benefits of including search capability in pre-launch test plans. Testing can confirm that sitemaps are building properly, the site content can be indexed cleanly, and the connection between the search box and search service is working as expected.</p>
        </blockquote>
        <p>Before a new website goes live, it’s tested thoroughly at different stages, to ensure the final product will work as intended. User Acceptance Testing (UAT) is conducted over the course of development to confirm delivery of features and functionality. More rounds of usability testing are conducted to gather feedback on new or revised features. Ideally, features will be revised following these usability tests if they don’t make sense to people.</p>
		<p>Many agencies choose to release a public beta version of their new website to get direct feedback from people using it. (Beta.USA.gov, mentioned above, is an example.) The length of time the beta site is open varies. Some agencies have it open only for a few months, some for over a year.</p>
		<p>During the time that the beta site is available, the agency may or may not provide a search function. Some agencies block their beta sites from being indexed by the major commercial search engines, but allow Search.gov to index and provide search of the beta content. Some agencies offer a search function on the beta site, but have the results offer content from the main website. Some agencies do not offer search on their beta sites at all.</p>
		<p>We encourage testing search results before launching the new website. However, it’s more difficult without a public beta site. As of this writing, our ATO only permits storing public content, so teams that work only in private staging environments will have limited ability to test.</p>
		<p>We can help you test interconnections and verify that the site’s SEO structures are set up to perform well. But we will not be able to access your servers to index the pre-production content.</p>
		<p>Some agencies tested their search experiences extensively before  launch. Many agencies use our preview feature to generally verify their search experience so they can move forward, especially if we already support their production websites.</p>
		<p>We’re proud that agencies trust our service during the launch process.</p>
        <img src="{{ site.baseurl }}/about/updates/year-in-review/special-report/img/Example-gov_logo.png" alt="Example.gov" />
        <h3>Example.gov</h3>
        <h4>An unattributed story</h4>
        <p>We share the following story without attribution because the development team for this website has changed hands to a new team. This story is not related to a website redesign, which we mentioned above is rare. Rather, it is about testing a search feature the agency had not used before.</p>
		<p>We call this feature type-ahead search suggestions, or type-ahead search. These suggestions appear as a list of options below the search box after someone starts typing. The suggestions show frequent searches that begin with the letters the person has just typed, and update as they continue, to become more specific.</p>
		<p>There are two ways to use this feature:</p>
		<ul>
			<li>by placing a script on the agency website that pulls suggestions from our system, or</li>
			<li>by using an API connection to pull the suggestions directly.</li>
        </ul>
		<p>This team chose the direct API method, and wrote code to create the connection. Before rolling this feature out to all website users, the team wanted to test whether their implementation was going to provide a fast and useful experience.</p>
		<p>They analyzed their search data to find common needs that were often mistyped, or showed other meaningful signals that the searcher might like some help entering their search. They sent us a curated list of suggestions that they wanted to start out with, and we loaded them into the system.</p>
		<p>Then, they tested in their staging environment to make sure their connection to the type-ahead API was sending us the characters typed in the search box, and that their website was showing the suggestions we returned to them.</p>
		<p>After they were satisfied with the basic connection, they prepared an A/B test to be able to compare the experience with the suggestions to the one without. They deployed the type-ahead connection to just one of their web servers. They set their load balancer to send 5% of traffic to the updated server.</p>
		<p>Then, they watched their server monitors and web analytics to see how quickly the suggestions were being displayed, and how often were people clicking on them. They ran the A/B test for two months, to allow time for different usage patterns to emerge.</p>
		<p>At the end of the test, they were satisfied that people found the feature useful and deployed the type-ahead code to all of their servers.</p>
        <hr class="section-break" id="section_3">
        <img src="{{ site.baseurl }}/about/updates/year-in-review/special-report/img/9_logo.png" alt="" />
        <h2 id="">9. Rollout</h2>
        <blockquote class="year-in-review padding-x-4 padding-y-2 margin-x-0">
        <h3>Impact on search</h3>
        <p>For search, launch day holds the most activity. New content needs to be indexed, content that has been migrated or updated must be re-indexed, and decommissioned content needs to be removed from search results.</p>
		<p>Our team needs to know the date and time of your relaunch, so that we can start all these activities as soon as possible. We provide some guidance on other search experience items that need to be updated at or soon after launch.</p>
        </blockquote>
        <p>And so, after many months of hard work, the new website is ready and a launch day is scheduled. Sometimes it goes ahead as planned, but like sending a rocket into space, it’s not uncommon for a launch to be rescheduled when conditions change.</p>
		<p>During the public launch of the website, teams test to make sure the DNS records are accurately pointing to the new website instead of the old ones, and that all the updated features are showing in the places they are expected to be. For agencies using content distribution network (CDN) services, this may involve team members across the country verifying when the rollout has reached their regions. We provide a final review of the sitemap build, as it moves from the staging or beta domain to the production domain.</p>
		<p>When the agency team is satisfied that the new site is live and ready, they give our team notice to begin our indexing activities. We start the jobs and let the agency team know when indexing is complete.</p>
        <img src="{{ site.baseurl }}/about/updates/year-in-review/special-report/img/DOJ_logo.png" alt="Department of Justice seal" />
        <h3>Department of Justice</h3>
        <h4>Justice.gov</h4>
        <p>Justice.gov chose a phased approach for their redesign, dividing their website into seven parts. Each segment is being migrated into the new content management system and published when ready. As of this writing, five rounds have been completed.</p>
		<p>For each wave, the team prepares the launch and notifies our team of the date and time the affected sections will be relaunching. Our team prepares a list of all the URLs in those sections.</p>
		<p>Ongoing communication is important, so we are aware of any changes to the schedule or scope. At the expected time, we confirm that the pages are live with the new design and structure, and begin reindexing the list of affected URLs.</p>
		<p>For each URL, our system checks if it is still active, and if so, pulls the updated content into our index. If the URL is no longer active, we remove it from the index. We also pick up all new URLs listed in the sitemap. When re-indexing is complete, we notify the Justice.gov team. The updates to the search results appear to searchers gradually, as our system works through each URL.</p>
    </main>
</article>
<div class="desktop:grid-col-4 desktop:display-block tablet:display-none">
    <aside class="usa-in-page-nav-together">
        <nav role="navigation" arial-label="In-page navigation">
                <p class="usa-sidenav-label">On this page:</p>
            <ul class="usa-in-page-nav-together-list">
                <li class="usa-in-page-nav-together__item"><a href="#section_1" class="usa-in-page-nav-together__link usa-current">7. Content migration</a></li>
                <li class="usa-in-page-nav-together__item"><a href="#section_2" class="usa-in-page-nav-together__link">8. Testing</a></li>
                <li class="usa-in-page-nav-together__item"><a href="#section_3" class="usa-in-page-nav-together__link">9. Rollout</a></li>
            </ul>
        </nav>
    </aside>
</div>
</div>
<div>
<a class="usa-button usa-button--outline" href="{{ site.baseurl }}/about/updates/year-in-review/special-report/overview.html">Beginning</a>&nbsp;&nbsp;<a class="usa-button usa-button--outline" href="{{ site.baseurl }}/about/updates/year-in-review/special-report/design.html">Back</a>
</div>
