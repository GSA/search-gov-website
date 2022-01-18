<!--
  Federalist recommends you use Continuous Integration to automatically test
  and validate any new changes to your site. CircleCI is free for open source
  projcets. You should replace this badge with your own.

  https://circleci.com/
-->
[![CircleCI](https://circleci.com/gh/GSA/search-gov-website.svg?style=svg)](https://app.circleci.com/pipelines/github/GSA/search-gov-website)


# Federalist + U.S. Web Design System + Jekyll

This code uses the [Jekyll](https://jekyllrb.com) site engine and built with Ruby. 

This project strives to be compliant with requirements set by [21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/). The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires agencies to ensure that legacy websites are regularly reviewed, removed, and consolidated);
- has a search function;
- uses an industry standard secure connection;
- “is designed around user needs with data-driven analysis influencing management and development decisions, using qualitative and quantitative data to determine user goals, needs, and behaviors, and continually test the website, web-based form, web-based application, or digital service to ensure that user needs are addressed;”
- allows for user customization; and
- is mobile-friendly.

## How to edit
- Non-developers should focus on editing markdown content in the `_posts` and `_pages` folder

- We try to keep configuration options to a minimum so you can easily change functionality. You should review `_config.yml` to see the options that are available to you. There are a few values on top that you **need** to change. They refer to the agency name and contact information. The rest of `_config.yml` has a range of more advanced options.

- The contents inside `assets/` folder store your Javascript, SCSS/CSS, images, and other media assets are managed by  [jekyll-assets](https://github.com/envygeeks/jekyll-assets).  Assets are combined, compressed, and automatically available in your theme

- If you look at `package.json` you will see that the `npm run federalist` command that will run when running on the Federalist platform.

- Do not edit files in the `_site/` folder. These files are auto-generated, and any change you make in the folder will be overwritten.

- To edit the look and feel of the site, you need to edit files in `_includes/` folder, which render key components, like the menu, side navigation, and logos.

- `index.html` may not require much editing, depending on how you customize `hero.html` and `highlights.html`.

- `_layouts/` may require the least amount of editing of all the files since they are primarily responsible for printing the content.

- `blog/index.html` can be edited, but be careful. It will impact the pagination system for the posts. If you do edit the file, be prepared to edit `_config.yml`.  For example, you may need go change configurations for [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2)

- `search/index.html` is used by search.gov.

## Getting Started

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

### Testing

#### With locally installed `node` and `ruby`
    $ npm test
    OR
    $ bundle exec htmlproofer _site; npx a11y '_site/**/*.html'

#### With Docker
    $ docker-compose run ruby bundle exec htmlproofer _site; npx a11y '_site/**/*.html'

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
