---
layout: page
title: Government Domains Outside .Gov and .Mil
last_modified_at: March 11, 2022
redirect_from:
  - /developer/govt-urls.html
  - /developer/govturls.html
sidenav: about_us
date: March 11, 2022
tags: seo policy government-urls
category: developer
---
## Overview

Most U.S. government websites end in .gov or .mil, but some end in .com, .org, .net, or other top-level domains. To enhance discoverability and public trust, we maintain a [list](https://github.com/GSA/govt-urls/) of known government domains that *don't* end in .gov or .mil. This list is used by several U.S. government services, including USA.gov and the .gov registry.

Anyone can submit to the list. Federal executive branch agencies are required to submit all registered non-.gov domain names for inclusion. Read more in the [Federal Zero Trust Strategy](https://zerotrust.cyber.gov/federal-zero-trust-strategy/#4-safely-making-applications-internet-accessible) and [Policies for Federal Agency Public Websites and Digital Services](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2017/m-17-06.pdf#page=11).

## What domains are in scope?

All non-.gov domain names registered by your agency, or by a contractor on behalf of your agency, are in scope of this list. This includes domains that aren\'t even used on the internet but are merely registered by your agency.

| **Domain Description** | **Example** |
|------------------------|-------------|
| Registered to facilitate redirects | * **agency.com** which may redirect to agency.gov |
| Serve some infrastructure purpose, even if not public-facing | * **agencyapi.com** <br> * **agency-dashboard.net** |
| Registered by a contractor on behalf of the agency | * **agencycampaignsite.us** |
| Registered long ago and is not expired | * **legacyagency.org** |
| Registered to prevent others from obtaining it (sometimes called "defensive registrations", which includes "typo" domains) | * **ouragency.com** <br> * **0uragency.com** <br> * **houragency.com** |

In general, do not add individual subdomains or hostnames that fall within domains matching the criteria above. For example, report *agency.com*, but do not also report *saas.agency.com*. Two exceptions include when your agency has a domain registered on a country-code top-level domain (or other "[public suffixes](https://publicsuffix.org/)") or when your agency publishes federal information on nongovernmental URLs you operate.

| **Domain Description** | **Example** |
|------------------------|-------------|
| Registered on a country-code top level domain | * **us-agency.org.uk** |
| Subdomains publishing federal information | * **exampleagency.university.edu** |

Domains registered by a grantee pursuant to the terms of a grant and used for federal purposes should generally be included. Domains registered by grantees for which an agency does not oversee or technologically support generally should not.

## What domains are out of scope?

This **excludes** the non-.gov domains of third-party online services where the agency is merely a user or a customer, not the domain's registrant.

| **Domain Description** | **Example** |
| -----------------------|-------------|
| Software-as-a-service sites | * **agency-my.sharepoint.com** <br> * **agency-service.slack.com** |
| Cloud-managed resources | * **s3.amazonaws.com** |
| Social media sites | * **twitter.com** <br> * **linkedin.com** |
| Code repositories | * **github.com/agency** |

## How to Update the List

1.  **Gather domain names**. Domains are sometimes confused for "websites", so consider asking for a "list of websites/domain registrations we manage" from the following types of roles:

    a.  External affairs, web publishing, or press team

    b.  DNS managers, network/security operations

    c.  Budget or accounting teams who might process domain registration payments to registrars like GoDaddy, Network Solutions, Namecheap, etc.

> If you have questions about whether a certain domain should be included, [open an issue](https://github.com/GSA/govt-urls/issues) in Github or email us.

2.  **Send your updates.** All submissions will be reviewed before inclusion.

-   For *multiple additions* or any *changes*

    -   [Open an issue](https://github.com/GSA/govt-urls/issues) in GitHub. (No technical knowledge or code is required, but a GitHub account is.) We will also review pull requests.

    -   Submit bulk changes via email using our [template]({{ site_baseurl }}/files/non-gov-submission-template.xlsx) (.xlsx).

-   For *single additions*, use this form:

### What's Included in the List?

* Federal, state, local, [tribal](https://www.bia.gov/service/tribal-leaders-directory), commonwealth, and territorial government agency websites.
* [Federal reserve banks and branches](https://www.federalreserve.gov/aboutthefed/federal-reserve-system.htm).
* [Federal home loan banks](http://www.fhlbanks.com/).
* Libraries, archives, and museums, including [Presidential libraries](https://www.archives.gov/presidential-libraries/).
* Department of Defense websites for [recruiting](https://www.defense.gov/Resources/Military-Departments/DOD-Websites/category/Recruiting/) and [service academies](https://www.defense.gov/Resources/Military-Departments/DOD-Websites/category/Academy/).
* [Travel and tourism](https://www.usa.gov/state-travel-and-tourism) websites for states and U.S. territories.
* State lotteries.
* [Cooperative extensions](https://nifa.usda.gov/land-grant-colleges-and-universities-partner-website-directory?state=All&type=Extension).
* [Combined federal campaigns](https://www.opm.gov/combined-federal-campaign/find-local-campaigns/#url=CFC-Zones).
* [Government sponsored enterprises](https://en.wikipedia.org/wiki/Government-sponsored_enterprise#List_of_GSEs) (such as Fannie Mae).
* Federal and state retirement systems.
* Task forces (such as the Preventive Services Task Force) and commissions (such as the 9/11 Commission).
* A few select, non-government organizations (such as the Red Cross) and public-private partnerships.

### What's Not Included in This List?

* .gov domains &ndash; these are managed by the [.gov Registry](https://home.dotgov.gov).
* .mil domains &ndash; these are managed by [DOD](https://www.defense.gov/Resources/Military-Departments/DOD-Websites/).
* Subdomains or folders that are already covered by a higher-level domain.
* State institutions of higher education or their board of regents.
* K-12 school districts.
* Local fire, library, police, sheriff, etc. departments with separate websites.
* Local chambers of commerce or visitor bureaus.
* Nonprofit municipal leagues or councils of government officials.
* Nonprofit historical societies.
* Transit authorities.
