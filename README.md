# mysite 
the content of a web page can be injected in to the page in three stage:
 
* hard coded in the html page.
  this is the simplest but most diffcult to maintain if too many pages.
* store data in file or datatbase, then inject it into pages in
  a compile stage using template.
* inject cotent into pages dynamic at runtime.  
 
**mysite** is a static web site generator works at the second scenario.
 
## features
* the folder becomes the menu of navbar
* rails style partial
* template file in site folder, the generated html file in public folder

## how to use
* clone this repo
* bundle install
* rake install (use rake -T see all tasks)
* rake preview

## thanks to
* [octopress](http://github.com/imathis/octopress)
* [jekyll](https://github.com/mojombo/jekyll)

* [qiniu](http://www.qiniutek.com/)
* [standard](http://t.mobanku.com/02040/1.htm)
