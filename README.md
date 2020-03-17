# search.gov

[![CircleCI](https://circleci.com/gh/GSA/search.digitalgov.gov.svg?style=svg)](https://circleci.com/gh/GSA/search.digitalgov.gov)

## How to add a new post

1. Clone the `master` branch.
1. Create a new file in the [drafts directory](https://github.com/GSA/search.digitalgov.gov/tree/master/drafts)
   using the following naming convention: `YYYY-MM-DD-post-filename-title.md`
1. Add the YAML block to the top of the file.
   You can use the following [sample file](https://github.com/GSA/search.digitalgov.gov/tree/master/drafts/2014-03-05-sample.md) as a starting point.
1. Add the content of your new post below the YAML block.
   Feel free to use HTML,
   [Markdown](http://daringfireball.net/projects/markdown/syntax) or
   [Liquid Extension](https://github.com/mojombo/jekyll/wiki/Liquid-Extensions).
1. Add, commit and push your new post back to the repository.
1. After roughly 3 minutes, visit `https://search.digitalgov.gov/drafts/post-filename-title.html` to preview your post.
   If you added a permalink config in your post, visit `https://search.digitalgov.gov/drafts/your-permalink.html`
1. When you're ready to publish your post, move the file from from drafts to the [_posts directory](https://github.com/GSA/search.digitalgov.gov/tree/master/_posts).

## How to set up your development environment

Open a Terminal window. Start homebrew.

    $ brew update
    $ brew doctor

We use bundler to manage gems. `cd` into the local repo. Install bundler and other required gems.

    $ gem install bundler
    $ bundle install

## Running the site locally

**To build the pages with Jekyll:**
1. open a new tab in terminal
2. Navigate to the root directory of the project
3. run: `bundle exec jekyll serve`
4. Go to <http://localhost:4000>. The site should have the expected content & formatting of the [Search.gov]({{ site.url }}{{ site.baseurl }}/) homepage.

**To build the CSS styles:**
1. open a new tab in terminal
2. Navigate to the root directory of the project
3. run: `gulp`
4. Go to <http://localhost:4000>. The site should have the expected content & formatting of the [Search.gov]({{ site.url }}{{ site.baseurl }}/) homepage.



---

## Template Images

To refernce images in the the site templates, use the path to the image within the `/assets/img` folder.

```
{{ "/assets/img/site/searchdotgovlogo.png" | prepend: site.baseurl }}
```


* For more information about Jekyll, visit [the wiki pages](https://github.com/mojombo/jekyll/wiki).
* If you don't already have it, you'll need the Ruby version specified in `.ruby-version`. [RVM](http://rvm.io) is recommended to install Ruby on your development environment. Verify that your path points to the correct version of Ruby:

    $ ruby -v
    ruby 2.5.5p157 (2019-03-15 revision 67260) [x86_64-darwin18]
