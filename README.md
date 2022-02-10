<!--
  Federalist recommends you use Continuous Integration to automatically test
  and validate any new changes to your site. CircleCI is free for open source
  projcets. You should replace this badge with your own.

  https://circleci.com/
-->
[![CircleCI](https://circleci.com/gh/GSA/search-gov-website.svg?style=svg)](https://app.circleci.com/pipelines/github/GSA/search-gov-website)


# Search.gov Website 

The Search.gov website serves as an educational resource and help manual for those using our service to power their site search. This website is based off of the [Federalist Jekyll template](https://github.com/18F/federalist-uswds-jekyll).

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## How to Edit Content via NetlifyCMS
We use NetlifyCMS as an easier way to edit the site content. Editing within this tool will create a PR with your suggested changes that can then be reviewed by another member of the Search.gov team.

### Logging In
Navigate to [https://search.gov/admin/](https://search.gov/admin/) and login with your Github account.

Note: You may get a message to log into [Federalist](https://federalistapp.18f.gov/sites) first. If so, log into Federalist and try to log in again to NetlifyCMS.

Once you log in successfully, you should see the following screen:
![NetlifyCMS Landing page, showing collections and posts](/assets/img/site/netlify-cms-landing.png)

### Editing Existing Pages
To edit an existing page, you can search in the Collections search box, or click through the navigational structure to find the page.
![NetlifyCMS Collections list, showing a sample folder (About) and items within that folder](/assets/img/site/cms-collections.png)

Once you find the page, click the page you want to edit. You'll see an editor interface where you can update content. Most often, you'll be editing the `body` field. You can edit this in Rich Text mode, or switch the toggle to edit it in raw [Markdown](https://www.markdownguide.org/cheat-sheet/).

Note: some pages have HTML or complex markdown tables, which will need to be edited in the "Markdown" mode. Some examples of such pages are below:
* /support.html
* /status.html
* /about/why-choose-searchgov.html
* /admin-center/display/hosted-vs-api-results.html
* /admin-center/entries/color-codes

### Adding Hyperlinks
Links will need to be added in markdown with the syntax below in order for our preview functionality to work. 

```
[Link Text]({{ site.baseurl }}/folder1/folder2/index.html)
```

{{ site.baseurl }} adds the correct folder path for the Federalist Preview URL to work.

**Important Note** - if you are adding image or PDF references to any page within `admin-center`, use `{{ site.url }}` instead of `{{ site.baseurl }}`. This will add in "https://search.gov" to the URL, which means the resource will not appear until it exists in production. However, it will allow us to show that image within the preview modals in the Admin Center.


### Adding Media
Media can be uploaded to the site via NetlifyCMS as well. Click on "Media" on the top menu, and you'll see an interface where you can browse through existing images and upload new ones. These can then be added via the page editor to any page you're working on.

![NetlifyCMS Media modal, showing a search bar and thumbnails of uploaded images](/assets/img/site/cms-media-library.png)

### Creating a New Page
To create a new page, click the "Quick add" button at the top right. From here, you can select the top-level folder this page belongs to. Once you click it, you'll be taken to that same page editor view as editing an existing post.

If the page should live immediately within the folder you selected, then you can leave the Path field blank. Otherwise, if you want to nest this page in an existing folder, indicate this in the "Path" field. For example, the Releases page (https://search.gov/about/updates/releases/) has a Path value of `updates/releases`. 

![NetlifyCMS Quick add drop down menu, showing the different content types we have available](/assets/img/site/cms-quickadd.png) 


### Editorial Workflow
Any proposed change you make will automatically create a Pull Request in Github. We can use the workflow to mark items as Draft, In Review, and Ready. These correspond to actions and labels in Github that can be tracked there as well.
![View of the editorial workflow with a post in the Draft column](/assets/img/site/workflow-draft.png)

From the [NetlifyCMS Documentation](https://www.netlifycms.org/docs/configuration-options/#publish-mode):

| Actions in Netlify UI | Perform these Git actions |
| ----------------------| --------------------------|
| Save draft | Commits to a new branch (named according to the pattern cms/collectionName/entrySlug), and opens a pull request |
| Edit draft |	Pushes another commit to the draft branch/pull request |
| Approve and publish draft	| Merges pull request and deletes branch |

Once you save changes to your draft, you'll be able to view a Preview link after Federalist builds the site. This will show as a link in the top right of the page editor.  

## How to Edit the Site Locally 

### Running the application

#### With locally installed `node` and `ruby`
    $ npm install
    $ bundle install
    $ npm start 
    OR
    $ bundle exec jekyll serve

To build but not serve the site, run `npm run build` or `bundle exec jekyll build`.

#### With Docker
    $ docker-compose run node npm install
    $ docker-compose build
    $ docker-compose up

To build but not serve the site, run:
```
docker-compose run ruby bundle exec jekyll build
```
.

Note that when built by Federalist, `npm run federalist` is used instead of
`npm run build`.

Open your web browser to [localhost:4000](http://localhost:4000/) to view your
site.

#### Troubleshooting
If you get an error like the below:
> Assets:  File to import not found or unreadable: uswds. Load paths: node_modules/uswds/dist/img node_modules/uswds/dist/js node_modules/uswds/dist/scss node_modules/netlify-cms/dist assets/css assets/fonts assets/images assets/videos assets/audios assets/components assets/javascript assets/video assets/audio assets/image assets/img assets/js _assets/css _assets/fonts _assets/images _assets/videos _assets/audios _assets/components _assets/javascript _assets/video _assets/audio _assets/image _assets/img _assets/js css fonts images videos audios components javascript audio video image img js .jekyll-cache/assets/proxied

This typically means a package in Node can’t be found. Run `npm install` and try running `bundle exec jekyll serve` again once done.



### Testing

#### With locally installed `node` and `ruby`
    $ npm test
    OR
    $ bundle exec htmlproofer _site; npx a11y '_site/**/*.html'

#### With Docker
    $ docker-compose run ruby bundle exec htmlproofer _site; npx a11y '_site/**/*.html'


### Editing Tips
- Do not edit files in the `_site/` folder. These files are auto-generated, and any change you make in the folder will be overwritten.
- To edit the look and feel of the site, you need to edit files in `_includes/` folder, which render key components, like the menu, side navigation, and logos.


## Technologies you should be familiarize yourself with

- [Jekyll](https://jekyllrb.com/docs/) &mdash; The primary site engine that builds your code and content.
- [Front Matter](https://jekyllrb.com/docs/frontmatter) &mdash; The top of each page/post includes keywords within `--` tags. This is meta data that helps Jekyll build the site, but you can also use it to pass custom variables.
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov) 


## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
