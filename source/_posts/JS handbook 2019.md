---
title: 前端开发绿皮书2019
date: 2019-04-24 18:14:27
tags: 文档翻译
---

![Front End Developers Handbook 2019 Cover](/imgs/FM_2019Cover_final.jpg)

Front-end Developer Handbook 2019
=================================

### Written by [Cody Lindley](http://codylindley.com/)

_Sponsored by [Frontend Masters](https://frontendmasters.com/), advancing your skills with in-depth, modern front-end engineering courses_

Download: [PDF](https://github.com/FrontendMasters/front-end-handbook-2019/raw/master/exports/Front-end%20Developer%20Handbook%202019.pdf) | [epub](https://github.com/FrontendMasters/front-end-handbook-2019/raw/master/exports/Front-End%20Developer%20Handbook%202019.epub)

* * *

### Overview:

This is a guide that everyone can use to learn about the practice of front-end development. It broadly outlines and discusses the practice of front-end engineering: how to learn it and what tools are used when practicing it in 2019.

It is specifically written with the intention of being a professional resource for potential and currently practicing front-end developers to equip themselves with learning materials and development tools. Secondarily, it can be used by managers, CTOs, instructors, and head hunters to gain insights into the practice of front-end development.

The content of the handbook favors web technologies (HTML, CSS, DOM, and JavaScript) and those solutions that are directly built on top of these open technologies. The materials referenced and discussed in the book are either best in class or the current offering to a problem.

The book should not be considered a comprehensive outline of all resources available to a front-end developer. The value of the book is tied up in a terse, focused, and timely curation of just enough categorical information so as not to overwhelm anyone on any one particular subject matter.

The intention is to release an update to the content yearly. This is currently the fourth year an edition has been released.

* * *

**What is in this Handbook**:

Chapter [0](#0) provides a lite recap of the year in front-end development and what may be to come. Chapter [1](#1) & [2](#2) aim to give a brief overview of the discipline and practice of front-end development. Chapters [3](#3) & [4](#4) organize and recommend learning paths and resources. Chapter [5](#5) organizes and list the tools used by front-end developers and Chapter [6](#6) highlights front-end information outlets.

* * *

**Contribute content, suggestions, and fixes on github**:

[https://github.com/FrontendMasters/front-end-handbook-2019](https://github.com/FrontendMasters/front-end-handbook-2019)

* * *

Chapter 0. Recap of 2018 and Looking Forward
--------------------------------------------

### 0.1 — Recap of Front-end Development in 2018

*   React had several notable releases this past year that included, [lifecycle methods](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes), [context API](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#official-context-api), [suspense](https://reactjs.org/docs/react-api.html#reactsuspense), and [React hooks](https://reactjs.org/docs/hooks-intro.html).
*   [Microsoft buys Github](https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/). Yeah, that happened.
*   Fonts created by CSS became a [thing](https://yusugomori.com/projects/css-sans/).
*   What I used to call front-end driven apps, gets labeled ["serverless"](https://thepowerofserverless.info/). Unfortunately, this term is [overloaded](owler.com/articles/serverless.html). However, the term [JAMstack](https://jamstack.org/) does seem to be [resonating](https://jamstackconf.com/nyc/) with developers.
*   Google offered some neat tools this year to help make webpages load faster, i.e. [squoosh](https://github.com/GoogleChromeLabs/squoosh/) and [quicklink](https://github.com/GoogleChromeLabs/quicklink).
*   [Vue gets](https://risingstars.js.org/2018/en/#section-framework) more [Github stars](https://hasvuepassedreactyet.surge.sh/) than React this year. But React remains dominant in [terms](https://2018.stateofjs.com/front-end-frameworks/overview/) of [use](https://www.npmjs.com/browse/depended).
*   A solution similar to React, without a virtual DOM or JSX, is introduced [RE:DOM](https://github.com/redom/redom).
*   Alternatives to NW.js and Electron show up, [DeskGap](https://deskgap.com/) and [Neutralino.js](https://neutralino.js.org/).
*   In 2017 the [great](https://medium.com/@jerrylowm/the-death-of-front-end-developers-803a95e0f411) divide between a [front-end HTML & CSS developer](https://medium.com/@mandy.michael/is-there-any-value-in-people-who-cannot-write-javascript-d0a66b16de06) v.s. [front-end application developer is realized/verbalized](https://medium.com/@mandy.michael/is-there-any-value-in-people-who-cannot-write-javascript-d0a66b16de06). In 2018 that [divide has grown wider and deeper](https://css-tricks.com/the-great-divide/) and more [people](https://rachelandrew.co.uk/archives/2019/01/30/html-css-and-our-vanishing-industry-entry-points/) start to [feel](https://hackernoon.com/the-backendification-of-frontend-development-62f218a773d4) [the](http://bradfrost.com/blog/post/big-ol-ball-o-javascript/) [divide](https://justmarkup.com/log/2018/11/just-markup/).
*   This year, like most recent years, was stock full of app/framework solutions trying to contend with the mainstream JavaScript app tools (i.e. [React, Angular, and Vue etc...](https://stateofjs.com/2017/front-end/results)) Let me list them for you. [Radi.js](https://radi.js.org/), [DisplayJS](https://display.js.org/), [Stimulus](https://stimulusjs.org/), [Omi](https://github.com/Tencent/omi), [Quasar](https://quasar-framework.org).
*   JavaScript frameworks start offering their own languages that compile to JavaScript (e.g. [Mint](https://www.mint-lang.com/)).
*   [CodeSandbox](https://codesandbox.io/) evolves to become the dominant solution for online code sharing.
*   [CSS Grid](https://cssgridgarden.com/) and [CSS Flexbox](https://flexboxfroggy.com/) are fully supported in modern browsers and get taken for some serious rides. But many are left [wondering](https://www.youtube.com/watch?v=hs3piaN4b5I) when to [use which one and how](https://css-irl.info/to-grid-or-to-flex/).
*   Many realize the long terms costs of bolted on type systems (e.g. TypeScript and Flow). Some concluded bolted on systems are not unlike bolted on module systems (i.e. AMD/Require.js) and come with [more issues than solutions](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b). Minimally, many developers realize that if types are needed in large code bases, that bolted on systems are not ideal in comparison to languages that have them baked in (e.g. [Reason](https://reasonml.github.io/), [Purescript](http://www.purescript.org/), [Elm](https://elm-lang.org/)).
*   [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) gain [browser support](https://caniuse.com/#feat=css-variables) among modern web browsers
*   The flavors of [CSS in JS](http://michelebertoli.github.io/css-in-js/) exploded and [some](http://bradfrost.com/blog/link/whats-wrong-with-css-in-js/) question the practice.
*   [ES modules](https://caniuse.com/#search=modules) are now usable in modern browsers and [dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import#dynamic) are close behind. We are even seeing a shift in [tooling](https://www.pikapkg.com/blog/introducing-pika-pack/) around this fact.
*   Many realize that end to end testing is the starting point of doing tests correctly in large part due to [Cypress](https://www.cypress.io/how-it-works/) (i.e. Cypress first, then [Jest](https://jestjs.io/)).
*   While [Webpack](https://webpack.js.org/) was heavily used again this year, many developers found [Parcel](https://github.com/parcel-bundler/parcel) to be easier to get up and running.
*   One of the most important questions asked this year was, what is the [cost of JavaScript](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4).
*   [Babel 7 was released this year](https://babeljs.io/blog/2018/08/27/7.0.0). That's a big deal because the last major release was almost three years ago.
*   The reality of too much JavaScript change too fast is realized and people start [talking](https://www.robinwieruch.de/javascript-fundamentals-react-requirements/) about what you need to know before you can even learn something like React. The fight is real.
*   Most developers found GraphQL, via [Apollo](https://www.apollographql.com/), and [see it](https://blog.bitsrc.io/why-does-everyone-love-graphql-17de7f99f05a) as the next evolution for data API's.
*   Gulp and friends definitely took a back seat to [NPM/Yarn run](https://css-tricks.com/why-npm-scripts/). But this did not stop Microsoft from getting in the game with [Just](https://github.com/Microsoft/just).
*   This year, one can not only lint/hint HTML, CSS, and JavaScript they can [lint/hint the web](https://webhint.io) itself.
*   The [2018 Front-End Tooling survey](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2018-results) is worth reading if only to realize just how much jQuery is still used.
*   It [can't be denied](https://2018.stateofjs.com/javascript-flavors/typescript/) [TypeScript](https://www.typescriptlang.org/) gained a lot of users this year.
*   [VScode](https://code.visualstudio.com/), [dominates](https://triplebyte.com/blog/editor-report-the-rise-of-visual-studio-code) as the code editor of choice.

### 0.2 — In 2019, Expect...

*   Hopefully, more of this to come. "[Stepping away from Sass](https://cathydutton.co.uk/posts/why-i-stopped-using-sass/)".
*   Still a good idea to keep an eye on and learn about the up coming additions (and potential additions) to CSS via [https://cssdb.org](https://cssdb.org/)
*   The [WebP](https://developers.google.com/speed/webp/) image format from Google could reach [support from all modern browsers this year](https://caniuse.com/#feat=webp).
*   [Prepack](https://prepack.io/) will continue to cook.
*   [GraphQL](https://graphql.org/) will continue to gain massive adoption.
*   The, "[State of JavaScript](https://stateofjs.com/)" survey authors will add a "[State of CSS](https://stateofcss.com/)" survey in 2019.
*   Keep an eye on [Web Animations API](https://caniuse.com/#feat=web-animation).
*   Someone you know will try and convince you to use [TypeScript](https://www.typescriptlang.org/).
*   Babel will get some competition from [swc-project](https://github.com/swc-project/swc).
*   The case for, [JAMStack](https://jamstack.org/)'s will [continue](https://jamstackconf.com/nyc/).
*   [Chasing the one code base to many platforms will continue.](https://quasar-framework.org)
*   More developers will turn to languages like [ReasonML](https://www.imaginarycloud.com/blog/reasonml-react-as-first-intended/) over JavaScript/TypeScript for large code bases.
*   More, [largely used projects](https://github.com/twbs/bootstrap/pull/23586) will start to shed jQuery in favor of native DOM solutions.
*   [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)! At this point, I have no idea how Web Components will play out. Reality is they are not going away, and they have not gained a lot of momentum/usage once the hype ended.

* * *

Chapter 1. What Is a Front-end Developer?
-----------------------------------------

This chapter provides a baseline explanation for front-end development and the front-end developer discipline.

> Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.
> 
> The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices with varying screen sizes and resolutions thus forcing the designer to take into consideration these aspects when designing the site. They need to ensure that their site comes up correctly in different browsers (cross-browser), different operating systems (cross-platform) and different devices (cross-device), which requires careful planning on the side of the developer.
> 
> [https://en.wikipedia.org/wiki/Front-end\_web\_development](https://en.wikipedia.org/wiki/Front-end_web_development)

![](/imgs/what-is-front-end-dev.png "https://www.upwork.com/hiring/development/front-end-developer/") Image source: [https://www.upwork.com/hiring/development/front-end-developer/](https://www.upwork.com/hiring/development/front-end-developer/)

#### A Front-end Developer...

A front-end developer architects and develops websites and web applications using web technologies (i.e., [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)), which typically runs on the [Open Web Platform](https://en.wikipedia.org/wiki/Open_Web_Platform) or acts as compilation input for non-web platform environments (i.e., [React Native](https://facebook.github.io/react-native/)).

A person enters into the field of front-end development by learning to build a website or web application which relies on HTML, CSS, and JavaScript and commonly runs in a [web browser](https://en.wikipedia.org/wiki/Web_browser) but can also run in a [headless browser](https://en.wikipedia.org/wiki/Headless_browser), [WebView](http://developer.telerik.com/featured/what-is-a-webview/), or as compilation input for a native runtime environment. These four run times scenarios are explained below.

**Web Browsers (most common)**

A web browser is software used to retrieve, present, and traverse information on the [WWW](https://en.wikipedia.org/wiki/World_Wide_Web). Typically, browsers run on a desktop or laptop computer, tablet, or phone, but as of late a browser can be found on just about anything (i.e, on a fridge, in cars, etc.).

The most common web browsers are (shown in order of [most used first](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables)):

*   [Chrome](http://www.google.com/chrome/)
*   [Safari](http://www.apple.com/safari/)
*   [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer) (Note: not [Edge](http://dev.modern.ie/), referring to IE 9 to IE 11)
*   [Firefox](https://www.mozilla.org/firefox/)
*   [Edge](https://www.microsoft.com/en-us/windows/microsoft-edge)

**Headless Browsers**

Headless browsers are a web browser **without** a graphical user interface that can be controlled from a command line interface programmatically for the purpose of web page automation (e.g., functional testing, scraping, unit testing, etc.). Think of headless browsers as a browser that you can run programmatically from the command line that can retrieve and traverse web page code.

The most common headless browsers are:

*   [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)
*   [Zombie](https://github.com/assaf/zombie)
*   [slimerjs](http://slimerjs.org/)
*   [puppeteer](https://github.com/GoogleChrome/puppeteer)

**Webviews**

[Webviews](http://developer.telerik.com/featured/what-is-a-webview/) are used by a native OS, in a native application, to run web pages. Think of a [webview](http://developer.telerik.com/featured/what-is-a-webview/) like an iframe or a single tab from a web browser that is embedded in a native application running on a device (e.g., [iOS](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/), [android](http://developer.android.com/reference/android/webkit/WebView.html), [windows](https://msdn.microsoft.com/library/windows/apps/windows.ui.xaml.controls.webview.aspx)).

The most common solutions for [webview](http://developer.telerik.com/featured/what-is-a-webview/) development are:

*   [Cordova](https://cordova.apache.org/) (typically for native phone/tablet apps)
*   [NW.js](https://github.com/nwjs/nw.js) (typically used for desktop apps)
*   [Electron](http://electron.atom.io/) (typically used for desktop apps)

**Native from Web Tech**

Eventually, what is learned from web browser development can be used by front-end developers to craft code for environments that are not fueled by a browser engine (i.e. web platform). As of late, development environments are being dreamed up that use web technologies (e.g., CSS and JavaScript), without web engines, to create native applications.

Some examples of these environments are:

*   [Flutter](https://flutter.io/)
*   [React Native](https://facebook.github.io/react-native/)
*   [NativeScript](https://www.nativescript.org/)

**Notes:**

1.  Make sure you are clear what exactly is meant by the "web platform". Read the, ["Open Web Platform"](https://en.wikipedia.org/wiki/Open_Web_Platform) Wikipedia page. Explore [the many technologies](https://platform.html5.org/) that make up the web platform.

Chapter 2. The Practice of Front-end Development: Overview
----------------------------------------------------------

This chapter will break down and broadly describes the practice of front-end engineering starting with, "How Front-End Developers Are Made".

### 2.1 - How Front-End Developers Are Made

How exactly does one become a front-end developer? Well, it's complicated. Just consider this road map:

![](assets/images/frontend.png "https://github.com/kamranahmedse/developer-roadmap")

Image source: [https://github.com/kamranahmedse/developer-roadmap](https://github.com/kamranahmedse/developer-roadmap)

Today, in general, one can't go to college and expect to graduate with a degree in front-end engineering. And, I rarely hear of or meet front-end developers who suffered through what is likely a deprecated computer science degree or graphic design degree to end up writing HTML, CSS, and JavaScript professionally. From my perspective, most of the people working on the front-end today generally seem to be self-taught from the ground up or cross over into the front-end space from design or computer science fields.

If you were to set out today to become a front-end developer I would loosely strive to follow the process outlined below (Chapter 3 and Chapter 4 will dive into more details on learning resources).

1.  Learn, roughly, how the [web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works) [platform](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work) works. Make sure you know the "what" and "where" of [HTML, CSS, DOM, JavaScript, Domains, DNS, URLs, HTTP, browsers, and servers/hosting](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web). Don't dive deep on anything just yet, just aim to understand the parts at play and how they loosely fit together. Start by building simple web pages.
2.  [Learn HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML)
3.  [Learn CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
4.  [Learn JavaScript](https://youtu.be/QjKH1J77gjI?list=PL055Epbe6d5bQubu5EWf_kUNA3ef_qbmL)
5.  Learn DOM
6.  Learn the fundamentals of user interface design (i.e. UI patterns, interaction design, user experience design, and usability).
7.  Learn CLI/command line
8.  Learn the practice of software engineering (i.e., Application design/architecture, templates, Git, testing, monitoring, automating, code quality, development methodologies).
9.  Get opinionated and customize your tool box with whatever makes sense to your brain (e.g. Webpack, React, and Mobx).
10.  Learn Node.js

A short word of advice on learning. [Learn the actual underlying technologies, before learning abstractions.](https://youtu.be/QjKH1J77gjI?list=PL055Epbe6d5bQubu5EWf_kUNA3ef_qbmL) Don't learn jQuery, learn the DOM. Don't learn SASS, learn CSS. Don't learn JSX, learn HTML. Don't learn TypeScript, learn JavaScript. Don't learn Handlebars, learn JavaScript ES6 templates. Don't just use Bootstrap, learn UI patterns.

Lately a lot of non-accredited, expensive, front-end code schools/bootcamps have emerged. These avenues of becoming a front-end developer are typically teacher directed courses, that follow a more traditional style of learning, from an official instructor (i.e., syllabus, test, quizzes, projects, team projects, grades, etc.).

Keep in mind, if you are considering an expensive training program, this is the web! Everything you need to learn is on the web for the taking, costing little to nothing. However, if you need someone to tell you how to take and learn what is low cost to free, and hold you accountable for learning it, you should consider a traditional instructor lead class room setting. Otherwise, I am not aware of any other profession that is practically free for the taking with an internet connection, a [couple of dollars a month for screencasting memberships](https://frontendmasters.com/join/), and a burning desire for knowledge.

For example, if you want to get going today, consuming one or more of the following self-directed resources below can work:

*   [Getting started with the Web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web) \[read\]
*   [So, You Want to be a Front-End Engineer](https://www.youtube.com/watch?v=Lsg84NtJbmI) \[watch\]
*   [Frontend Masters Learning Paths](https://frontendmasters.com/learn) \[watch\]\[$\]
*   [Introduction to Web Development](https://frontendmasters.com/courses/web-development-v2/) \[watch\]\[$\]
*   [Treehouse Techdegree](https://teamtreehouse.com/techdegree/front-end-web-development-2) \[watch\]\[$\]
*   [Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) \[watch\]\[$\]
*   [Become a Front-End Web Developer](https://www.lynda.com/learning-paths/Web/become-a-front-end-web-developer) \[watch\]\[$\]
*   [freeCodeCamp](https://learn.freecodecamp.org/) \[interactive\]\[watch\]

When getting your start, you should fear most things that conceal complexity. Abstractions (e.g. jQuery) in the wrong hands can give the appearance of advanced skills, while all the time hiding the fact that a developer has an inferior understanding of the basics or underlying concepts.

It is assumed that on this journey you are not only learning, but also doing as you learn and investigate tools. Some suggest only doing to learn. While others suggest only learning about doing. I suggest you find a mix of both that matches how your brain works and do that. But, for sure, it is a mix! So, don't just read about it, do it. Learn, do. Learn, do. Repeat indefinitely because things change fast. This is why learning the fundamentals, and not abstractions, are so important.

### 2.2 - Front-End Job Titles

[A great divide has been brewing in the front-end developer space for several years between two very different types of so-called front-end developers](https://css-tricks.com/the-great-divide/). On the one side, you have JavaScript-focused programmers who write JavaScript for front-end runtimes that likely have computer science skills with a software development history. They more than likely view HTML and CSS as an abstraction (i.e. [JSX](https://reactjs.org/docs/introducing-jsx.html) and [CSS in JS](https://hackernoon.com/all-you-need-to-know-about-css-in-js-984a72d48ebc)). On the other side, you have, most likely, non-computer science educated developers who focus on HTML, CSS, and JavaScript as it specifically pertains to the UI. In 2019, when entering or trying to understand the front-end developer space you will absolutely feel this divide. The term front-end developer is on the verge of meaninglessness without clarifying words to address what type of front-end developer is being discussed.

Below is a list and description of various front-end job titles (Keep in mind titles are [hard](https://blog.prototypr.io/dissecting-front-end-job-titles-7f72a0ef0bc5)). The common, or most used (i.e., generic), title for a front-end developer is, "front-end developer" or "front-end engineer". Note that any job that contains the word "front-end", "client-side", "web UI", "HTML", "CSS", or "JavaScript" typically infers that a person has some degree of HTML, CSS, DOM, and JavaScript professional know how.

**Front-End Developer**: The generic job title that describes a developer who is skilled to some degree at HTML, CSS, DOM, and JavaScript and implementing these technologies on the web platform.

**Front-End Engineer (aka JavaScript Developer or Full-stack JavaScript Developer)**: The job title given to a developer who comes from a computer science, engineering, background and is using these skills to work with front-end technologies. This role typically requires computer science knowledge and years of software development experience. When the word "JavaScript Application" is included in the job title, this will denote that the developer should be an advanced JavaScript developer possessing advanced programming, software development, and application development skills (i.e has years of experience building front-end software applications).

**CSS/HTML Developer**: The front-end job title that describes a developer who is skilled at HTML and CSS, excluding JavaScript and application, know how.

**Front-End Web Designer**: When the word "Designer" is included in the job title, this will denote that the designer will possess front-end skills (i.e., HTML & CSS) but also professional design (Visual Design and Interaction Design) skills.

**UI (User Interface) Developer/Engineer**: When the word "Interface" or "UI" is included in the job title, this will denote that the developer should posses interaction design skills in addition to front-end developer skills or front-end engineering skills.

**Mobile/Tablet Front-End Developer**: When the word "Mobile" or "Tablet" is included in the job title, this will denote that the developer has experience developing front-ends that run on mobile or tablet devices (either natively or on the web platform, i.e., in a browser).

**Front-End SEO Expert**: When the word "SEO" is included in the job title, this will denote that the developer has extensive experience crafting front-end technologies towards an SEO strategy.

**Front-End Accessibility Expert**: When the word "Accessibility" is included in the job title, this will denote that the developer has extensive experience crafting front-end technologies that support accessibility requirements and standards.

**Front-End Dev. Ops**: When the word "DevOps" is included in the job title, this will denote that the developer has extensive experience with software development practices pertaining to collaboration, integration, deployment, automation, and quality.

**Front-End Testing/QA**: When the word "Testing" or "QA" is included in the job title, this will denote that the developer has extensive experience testing and managing software that involves unit testing, functional testing, user testing, and A/B testing.

**Notes:**

1.  If you come across the "Full Stack" or the generic "Web Developer" terms in job titles these words may be used by an employer to describe a role that is responsible for all aspects of web/app development, i.e., both front-end (potentially including design) and back-end.

### 2.3 - Baseline Web Technologies Employed by Front-End Developers

![](assets/images/web-tech-employed.jpg "HTML CSS and JS")

The following core web technologies are employed by front-end developers (consider learning them in this order):

1.  Hyper Text Markup Language (aka HTML)
2.  Cascading Style Sheets (aka CSS)
3.  Uniform Resource Locators (aka URLs)
4.  Hypertext Transfer Protocol (aka HTTP)
5.  JavaScript Programming Language (aka ECMAScript 262)
6.  JavaScript Object Notation (aka JSON)
7.  Document Object Model (aka DOM)
8.  Web APIs (aka HTML5 and friends or Browser APIs)
9.  Web Content Accessibility Guidelines (aka WCAG) & Accessible Rich Internet Applications (aka ARIA)

For a comprehensive list of all web related specifications have a look at [platform.html5.org](https://platform.html5.org/) or [MDN Web APIs](https://developer.mozilla.org/en-US/docs/Web/API).

The nine technologies just mentioned are defined below along with a link to the relevant documentation and specification for each technology.

#### Hyper Text Markup Language (aka HTML)

> HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Web browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/HTML)

Most relevant specifications / documentation:

*   [All W3C HTML Spec](http://www.w3.org/standards/techs/html#w3c_all)
*   [The elements of HTML](https://html.spec.whatwg.org/multipage) from the Living Standard
*   [Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
*   [HTML 5.2 from W3C](https://www.w3.org/TR/2017/REC-html52-20171214/)
*   [HTML 5.3 from W3C](http://w3c.github.io/html/)
*   [HTML attribute reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
*   [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
*   [The HTML Syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax) from the Living Standard

#### Cascading Style Sheets (aka CSS)

> Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. Although most often used to change the style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any kind of XML document, including plain XML, SVG and XUL. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

Most relevant specifications / documentation:

*   [All W3C CSS Specifications](http://www.w3.org/Style/CSS/current-work)
*   [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification](https://www.w3.org/TR/CSS22/)
*   [CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
*   [Selectors Level 3](http://www.w3.org/TR/css3-selectors/)

#### Hypertext Transfer Protocol (aka HTTP)

> The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

Most relevant specifications:

*   [Hypertext Transfer Protocol -- HTTP/1.1](https://tools.ietf.org/html/rfc2616)
*   [HTTP/2](http://httpwg.org/specs/rfc7540.html)

#### Uniform Resource Locators (aka URL)

> A uniform resource locator (URL) (also called a web address) is a reference to a resource that specifies the location of the resource on a computer network and a mechanism for retrieving it. A URL is a specific type of uniform resource identifier (URI), although many people use the two terms interchangeably. A URL implies the means to access an indicated resource, which is not true of every URI. URLs occur most commonly to reference web pages (http), but are also used for file transfer (ftp), email (mailto), database access (JDBC), and many other applications.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Uniform_Resource_Locator)

Most relevant specifications:

*   [Uniform Resource Locators (URL)](http://www.w3.org/Addressing/URL/url-spec.txt)
*   [URL Living Standard](https://url.spec.whatwg.org/)

#### Document Object Model (aka DOM)

> The Document Object Model (DOM) is a cross-platform and language-independent convention for representing and interacting with objects in HTML, XHTML, and XML documents. The nodes of every document are organized in a tree structure, called the DOM tree. Objects in the DOM tree may be addressed and manipulated by using methods on the objects. The public interface of a DOM is specified in its application programming interface (API).
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model)

Most relevant specifications / documentation:

*   [DOM Living Standard](https://dom.spec.whatwg.org/)
*   [W3C DOM4](https://www.w3.org/TR/domcore/)
*   [UI Events](https://www.w3.org/TR/uievents/)

#### JavaScript Programming Language (aka ECMAScript 262)

> JavaScript is a high level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, it is one of the three essential technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage or graphics facilities, relying for these upon the host environment in which it is embedded.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/JavaScript)

Most relevant specifications / documentation:

*   [ECMAScript® 2018 Language Specification](http://ecma-international.org/ecma-262/9.0/index.html#Title)
*   [All ECMAScript Language Specifications](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)

#### Web APIs (aka HTML5 and friends)

> When writing code for the Web using JavaScript, there are a great many APIs available. Below is a list of all the interfaces (that is, types of objects) that you may be able to use while developing your Web app or site.
> 
> — [Mozilla](https://developer.mozilla.org/en-US/docs/Web/API)

Most relevant documentation:

*   [Web API Interfaces](https://developer.mozilla.org/en-US/docs/Web/API)

#### JavaScript Object Notation (aka JSON)

> It is the primary data format used for asynchronous browser/server communication (AJAJ), largely replacing XML (used by AJAX). Although originally derived from the JavaScript scripting language, JSON is a language-independent data format. Code for parsing and generating JSON data is readily available in many programming languages. The JSON format was originally specified by Douglas Crockford. It is currently described by two competing standards, RFC 7159 and ECMA-404. The ECMA standard is minimal, describing only the allowed grammar syntax, whereas the RFC also provides some semantic and security considerations. The official Internet media type for JSON is application/json. The JSON filename extension is .json.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/JSON)

Most relevant specifications:

*   [Introducing JSON](http://json.org/)
*   [JSON API](http://jsonapi.org/)
*   [The JSON Data Interchange Format](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf)

#### Web Content Accessibility Guidelines (aka WCAG) & Accessible Rich Internet Applications (aka ARIA)

> Accessibility refers to the design of products, devices, services, or environments for people with disabilities. The concept of accessible design ensures both “direct access” (i.e., unassisted) and "indirect access" meaning compatibility with a person's assistive technology (for example, computer screen readers).
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Accessibility)

*   [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/standards-guidelines/)
*   [Web Content Accessibility Guidelines (WCAG) Current Status](http://www.w3.org/standards/techs/wcag#w3c_all)

### 2.4 - Potential Front-end Developer Skills

![](assets/images/front-end-skills.png "http://blog.naustud.io/2015/06/baseline-for-modern-front-end-developers.html")

Image source: [http://blog.naustud.io/2015/06/baseline-for-modern-front-end-developers.html](http://blog.naustud.io/2015/06/baseline-for-modern-front-end-developers.html)

A basic to advanced understanding of HTML, CSS, DOM, JavaScript, HTTP/URL, and web browsers is assumed for any type of professional front-end developer role.

Beyond the skills just mentioned, a front-end developer might also be specifically skilled in one or more of the following:

*   Content Management Systems (aka CMS)
*   Node.js
*   Cross-Browser Testing
*   Cross-Platform Testing
*   Unit Testing
*   Cross-Device Testing
*   Accessibility / WAI-ARIA
*   Search Engine Optimization (aka SEO)
*   Interaction or User Interface Design
*   User Experience
*   Usability
*   E-commerce Systems
*   Portal Systems
*   Wireframing
*   CSS Layout / Grids
*   DOM Manipulation (e.g., jQuery)
*   Mobile Web Performance
*   Load Testing
*   Performance Testing
*   Progressive Enhancement / Graceful Degradation
*   Version Control (e.g., GIT)
*   MVC / MVVM / MV*
*   Functional Programming
*   Data Formats (e.g., JSON, XML)
*   Data APIs (e.g Restful API)
*   Web Font Embedding
*   Scalable Vector Graphics (aka SVG)
*   Regular Expressions
*   Microdata / Microformats
*   Task Runners, Build Tools, Process Automation Tools
*   Responsive Web Design
*   Object-Oriented Programming
*   Application Architecture
*   Modules
*   Dependency Managers
*   Package Managers
*   JavaScript Animation
*   CSS Animation
*   Charts / Graphs
*   UI Widgets
*   Code Quality Testing
*   Code Coverage Testing
*   Code Complexity Analysis
*   Integration Testing
*   Command Line / CLI
*   Templating Strategies
*   Templating Engines
*   Single Page Applications
*   Web/Browser Security
*   Browser Developer Tools

### 2.5 - Front-End Developers Develop For...

A front-end developer crafts HTML, CSS, and JS that typically runs on the [web platform](http://tess.oconnor.cx/2009/05/what-the-web-platform-is) (e.g. a web browser) delivered from one of the following operating systems (aka OSs):

*   [Android](https://www.android.com/)
*   [Chromium](https://www.chromium.org/chromium-os)
*   [iOS](https://developer.apple.com/ios/)
*   [OS X (i.e. MacOS)](https://www.apple.com/macos)
*   [Ubuntu (or some flavor of Linux)](https://www.ubuntu.com/)
*   [Windows](https://www.microsoft.com/en-us/windows)

These operating systems typically run on one or more of the following devices:

*   Desktop computer
*   Laptop / netbook computer
*   Mobile phone
*   Tablet
*   TV
*   Watch
*   [Things](https://en.wikipedia.org/wiki/Internet_of_things) (i.e., anything you can imagine, car, refrigerator, lights, thermostat, etc.)

![](assets/images/growth-iot.jpg "https://www.enterpriseirregulars.com/104084/roundup-internet-things-forecasts-market-estimates-2015/")

Image source: [https://www.enterpriseirregulars.com/104084/roundup-internet-things-forecasts-market-estimates-2015/](https://www.enterpriseirregulars.com/104084/roundup-internet-things-forecasts-market-estimates-2015/)

Generally speaking, front-end technologies can run on the aforementioned operating systems and devices using the following run time web platform scenarios:

*   A web browser (examples: [Chrome, IE, Safari, Firefox](http://outdatedbrowser.com/en)).
*   A [headless browser](https://en.wikipedia.org/wiki/Headless_browser) (examples: [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)).
*   A [WebView](http://developer.telerik.com/featured/what-is-a-webview/)/browser tab (think [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)) embedded within a native application as a runtime with a bridge to native APIs. WebView applications typically contain a UI constructed from web technologies. (i.e., HTML, CSS, and JS). (examples: [Apache Cordova](https://cordova.apache.org/), [NW.js](http://nwjs.io/), [Electron](http://electron.atom.io/))
*   A native application built from web tech that is interpreted at runtime with a bridge to native APIs. The UI will make use of native UI parts (e.g., iOS native controls) not web technologies. (examples: [NativeScript](https://www.nativescript.org/), [React Native](https://facebook.github.io/react-native/))

### 2.6 - Front-End on a Team

A front-end developer is typically only one player on a team that designs and develops web sites, web applications, or native applications running from web technologies.

A bare-bones development team for building **professional** web sites or software for the web platform will typically, minimally, contain the following roles.

*   Visual Designer (i.e., fonts, colors, spacing, emotion, visuals concepts & themes)
*   UI/Interaction Designer/Information Architect (i.e., wireframes, specifying all user interactions and UI functionality, structuring information)
*   Front-End Developer (i.e., writes code that runs in client/on the device)
*   Back-End Developer (i.e., writes code that runs on the server)

The roles are ordered according to overlapping skills. A front-end developer will typically have a good handle on UI/Interaction design as well as back-end development. It is not uncommon for team members to fill more than one role by taking on the responsibilities of an over-lapping role.

It is assumed that the team mentioned above is being directed by a project lead or some kind of product owner (i.e., stakeholder, project manager, project lead, etc.)

A larger web team might include the following roles not shown above:

*   SEO Strategists
*   DevOps Engineers
*   Performance Engineers
*   API Developers
*   Database Administrators
*   QA Engineers / Testers

### 2.7 - Generalist/Full-Stack Myth

![Full Stack Developer](assets/images/full-stack.jpg)

The term "Full-Stack" developer has come to take on several meanings. So many, that not one meaning is clear when the term is used. Just consider the results from the two surveys shown below. These results might lead one to believe that being a full-stack developer is commonplace. But, in my almost 20 years of experience, this is anything but the case in a professional context.

![](assets/images/fullstack1.png "https://medium.freecodecamp.com/we-asked-15-000-people-who-they-are-and-how-theyre-learning-to-code-4104e29b2781#.ngcpn8nlz")

Image source: [https://medium.freecodecamp.com/we-asked-15-000-people-who-they-are-and-how-theyre-learning-to-code-4104e29b2781#.ngcpn8nlz](https://medium.freecodecamp.com/we-asked-15-000-people-who-they-are-and-how-theyre-learning-to-code-4104e29b2781#.ngcpn8nlz)

![](assets/images/fullstack2.png "https://insights.stackoverflow.com/survey/2017#developer-profile-specific-developer-types")

Image source: [https://insights.stackoverflow.com/survey/2017#developer-profile-specific-developer-types](https://insights.stackoverflow.com/survey/2018/#developer-profile)

The roles to design and develop a website or web application require a deep set of skills and vast experience in the area of visual design, UI/interaction design, [front-end development](https://github.com/kamranahmedse/developer-roadmap#-front-end-roadmap), and [back-end development](https://github.com/kamranahmedse/developer-roadmap#-back-end-roadmap). Any person who can fill one or more of these 4 roles at a professional level is an extremely rare commodity.

Pragmatically, you should seek to be, or seek to hire, an expert in one of these roles (i.e. Visual Design, Interaction Design/IA, Front-end Dev, Back-end Dev). Those who claim to operate at an expert level at one or more of these roles are exceptionally rare.

However, given that JavaScript has infiltrated all layers of a technology stack (i.e. Node.js) finding a full-stack JS developer who can code the front-end and back-end is becoming less mythical. Typically, these full-stack developers only deal with JavaScript. A developer who can code the front-end, back-end, API, and database isn't as absurd as it once was (excluding visual design, interaction design, and CSS). Still mythical in my opinion, but not as uncommon as it once was. Thus, I wouldn't recommend a developer set out to become a "full-stack" developer. In rare situations, it can work. But, as a general concept for building a career as a front-end developer, I'd focus on front-end technologies.

### 2.8 - Front-End Interviews

#### Preparing:

*   [Preparing for a Front-End Web Development Interview in 2017](http://davidshariff.com/blog/preparing-for-a-front-end-web-development-interview-in-2017/)
*   [Cracking the front-end interview](https://medium.freecodecamp.com/cracking-the-front-end-interview-9a34cd46237)
*   [Front End Interview Handbook](https://github.com/yangshun/front-end-interview-handbook)
*   [Decoding the Front-end Interview Process](https://dev.to/emmawedekind/decoding-the-front-end-interview-process-14dl)

#### Quiz's:

*   [Front End Web Development Quiz](http://davidshariff.com/quiz/)
*   [JavaScript Web Quiz](http://davidshariff.com/js-quiz/)

#### Questions you may get asked:

*   [10 Interview Questions Every JavaScript Developer Should Know](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)
*   [Front-End Job Interview Questions](http://h5bp.github.io/Front-end-Developer-Interview-Questions/)
*   [Front End Web Development Quiz](http://davidshariff.com/quiz/)
*   [Interview Questions for Front-End-Developer](http://thatjsdude.com/interview/index.html)
*   [The Best Frontend JavaScript Interview Questions (written by a Frontend Engineer)](https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-(Written-by-a-Frontend-Engineer))

#### Questions you ask:

*   [An open source list of developer questions to ask prospective employers](https://github.com/ChiperSoft/InterviewThis)

### 2.9 - Front-End Job Boards

A plethora of technical job listing outlets exist. The narrowed list below are currently the most relevant resources for finding a specific front-end position/career.

*   [authenticjobs.com](https://authenticjobs.com/#category=4)
*   [careers.stackoverflow.com](http://careers.stackoverflow.com/jobs?searchTerm=front-end)
*   [css-tricks.com/jobs](https://css-tricks.com/jobs/)
*   [frontenddeveloperjob.com](http://frontenddeveloperjob.com/)
*   [glassdoor.com](http://www.glassdoor.com/Job/front-end-developer-jobs-SRCH_KO0,19.htm?jobType=all)
*   [jobs.github.com](https://jobs.github.com/)
*   [linkedin.com](https://www.linkedin.com/jobs/search/?keywords=frontend%20developer)
*   [remote.co](https://remote.co/remote-jobs/developer/)
*   [weworkremotely.com](https://weworkremotely.com/)
*   [www.smashingmagazine.com/jobs/](https://www.smashingmagazine.com/jobs/)

**Notes:**

1.  Want to work remotely as a front-end developer checkout these [remote-friendly companies](https://github.com/jessicard/remote-jobs).

### 2.10 - Front-End Salaries

The national average in the U.S for a mid-level front-end developer is somewhere between [$65k](https://www.payscale.com/research/US/Job=Front_End_Developer_%2f_Engineer/Salary) and [100k](https://www.indeed.com/salaries/Front-End-Developer-Salaries).

Of course when you first start expect to enter the field at around 40k depending upon location and experience.

**Notes:**

1.  A lead/senior front-end developer/engineer can potentially live wherever they want (i.e., work remotely) and make over $150k a year (visit [angel.co](https://angel.co/jobs), sign-up, review front-end jobs over $150k or examine the salary ranges on [Stack Overflow Jobs](https://stackoverflow.com/jobs?q=front-end&sort=y)).

Chapter 3. Learning Front-end Dev: Self Directed Resources/Recommendations
--------------------------------------------------------------------------

This chapter highlights the many resources (video training, books, etc.) that an individual can use to direct their own learning process and career as a front-end developer.

The learning resources identified (articles, books, videos, screencasts etc..) will include both free and paid material. Paid material will be indicated with \[$\].

### 3.1. - Learn Internet/Web

> The Internet is a global system of interconnected computer networks that use the Internet protocol suite (TCP/IP) to link several billion devices worldwide. It is a network of networks that consists of millions of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies. The Internet carries an extensive range of information resources and services, such as the inter-linked hypertext documents and applications of the World Wide Web (WWW), electronic mail, telephony, and peer-to-peer networks for file sharing.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Internet)

 [![How the internet works](assets/images/how-the-internet-works.jpg "https://www.helloitsliam.com/2014/12/20/how-the-internet-works-infographic/")](assets/images/how-the-internet-works.jpg) 

Image source: [https://www.helloitsliam.com/2014/12/20/how-the-internet-works-infographic/](https://www.helloitsliam.com/2014/12/20/how-the-internet-works-infographic/)

*   [What is the Internet?](https://www.youtube.com/watch?v=Dxcc6ycZ73M) \[watch\]
*   [Internet Fundamentals](http://internetfundamentals.com) \[watch\]
*   [How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works) \[read\]
*   How does the Internet work? [https://developer.mozilla.org/en-US/docs/Learn/Common\_questions/How\_does\_the\_Internet_work](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work) and [http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm](http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm) \[read\]
*   [How the Internet Works](https://www.khanacademy.org/partner-content/code-org/internet-works) \[watch\]
*   [How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc) \[watch\]
*   [How the Web Works](https://www.eventedmind.com/classes/how-the-web-works-7f40254c) \[watch\]
*   [What Is the Internet? Or, "You Say Tomato, I Say TCP/IP"](http://www.20thingsilearned.com/en-US/what-is-the-internet/1) \[read\]
*   [Don’t Fear the Internet](http://www.dontfeartheinternet.com/)

![](assets/images/who-runs-the-internet-infographic.jpg "http://www.bitrebels.com/technology/find-out-who-runs-the-internet-chart/")

Image source: [http://www.bitrebels.com/technology/find-out-who-runs-the-internet-chart/](http://www.bitrebels.com/technology/find-out-who-runs-the-internet-chart/)

### 3.2. - Learn Web Browsers

> A web browser (commonly referred to as a browser) is a software application for retrieving, presenting, and traversing information resources on the World Wide Web. An information resource is identified by a Uniform Resource Identifier (URI/URL) and may be a web page, image, video or other piece of content. Hyperlinks present in resources enable users easily to navigate their browsers to related resources. Although browsers are primarily intended to use the World Wide Web, they can also be used to access information provided by web servers in private networks or files in file systems.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Web_browser)

#### The [most commonly used browsers](https://netmarketshare.com/?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22deviceType%22%3A%7B%22%24in%22%3A%5B%22Desktop%2Flaptop%22%2C%22Mobile%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222018-01%22%2C%22dateEnd%22%3A%222018-12%22%2C%22segments%22%3A%22-1000%22%7D) (on desktop and mobile) are:

1.  [Chrome](http://www.google.com/chrome/) (engine: [Blink](https://en.wikipedia.org/wiki/Blink_%28layout_engine%29) \+ [V8](https://en.wikipedia.org/wiki/V8_%28JavaScript_engine%29))
2.  [Firefox](https://www.mozilla.org/en-US/firefox/new/) (engine: [Gecko](https://en.wikipedia.org/wiki/Gecko_%28software%29) \+ [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey_%28software%29))
3.  [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie) (engine: [Trident](https://en.wikipedia.org/wiki/Trident_%28layout_engine%29) \+ [Chakra](https://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29))
4.  [Safari](https://www.apple.com/safari/) (engine: [Webkit](https://en.wikipedia.org/wiki/WebKit) \+ [SquirrelFish](https://trac.webkit.org/wiki/SquirrelFish))

![](assets/images/statcounter.png "http://gs.statcounter.com/browser-market-share")

Image source: [http://gs.statcounter.com/browser-market-share](http://gs.statcounter.com/browser-market-share)

#### Evolution of Browsers & Web Technologies (i.e., APIs)

*   [evolutionoftheweb.com](http://www.evolutionoftheweb.com/) \[read\]
*   [Timeline of web browsers](https://en.wikipedia.org/wiki/Timeline_of_web_browsers) \[read\]

#### The Most Commonly Used [Headless Browser](http://www.asad.pw/HeadlessBrowsers/) Are:

*   [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md) (engine: [Blink](https://www.chromium.org/blink) \+ V8)
*   [SlimerJS](http://slimerjs.org/) (engine: [Gecko](https://en.wikipedia.org/wiki/Gecko_%28software%29) \+ [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey_%28software%29))

#### How Browsers Work

*   [20 Things I Learned About Browsers and the Web](http://www.20thingsilearned.com/en-US/foreword/1) \[read\]
*   [Fast CSS: How Browsers Lay Out Web Pages](http://dbaron.org/talks/2012-03-11-sxsw/master.xhtml) \[read\]
*   [How Browsers Work: Behind the scenes of modern web browsers](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) \[read\]
*   [Quantum Up Close: What is a browser engine?](https://hacks.mozilla.org/2017/05/quantum-up-close-what-is-a-browser-engine/)
*   [So How Does the Browser Actually Render a Website](https://www.youtube.com/watch?v=SmE4OwHztCc) \[watch\]
*   [What forces layout / reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a) \[read\]
*   [What Every Frontend Developer Should Know About Webpage Rendering](http://frontendbabel.info/articles/webpage-rendering-101/) \[read\]

#### Optimizing for Browsers:

*   [Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860) \[watch\]
*   [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884) \[watch\]

#### Comparing Browsers

*   [Comparison of Web Browsers](https://en.wikipedia.org/wiki/Comparison_of_web_browsers) \[read\]

#### Browser Hacks

*   [browserhacks.com](http://browserhacks.com/) \[read\]

#### Developing for Browsers

In the past, front-end developers spent a lot of time making code work in several different browsers. This was once a bigger issue than it is today. Today, abstractions (e.g., React, Webpack, Post-CSS, Babel etc...) combined with modern browsers make browser development fairly easy. The new challenge is not which browser the user will use, but on which device they will run the browser.

#### Evergreen Browsers

The latest versions of most modern browsers are considered evergreen browsers. That is, in theory, they are supposed to automatically update themselves silently without prompting the user. This move towards self-updating browsers has been in reaction to the slow process of eliminating older browsers that do not auto-update.

#### Picking a Browser

As of today, most front-end developers use Chrome and "Chrome Dev Tools" to develop front-end code. However, the most used modern browsers all offer a flavor of developer tools. Picking one to use for development is a subjective choice. The more important issue is knowing which browsers, on which devices, you have to support and then testing appropriately.

### 3.3 - Learn Domain Name System (aka DNS)

> The Domain Name System (DNS) is a hierarchical distributed naming system for computers, services, or any resource connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities. Most prominently, it translates domain names, which can be easily memorized by humans, to the numerical IP addresses needed for the purpose of computer services and devices worldwide. The Domain Name System is an essential component of the functionality of most Internet services because it is the Internet's primary directory service.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System)

![](assets/images/how_dns_works.jpg "http://www.digital-digest.com/blog/DVDGuy/wp-content/uploads/2011/11/how_dns_works.jpg")

Image source: [http://www.digital-digest.com/blog/DVDGuy/wp-content/uploads/2011/11/how\_dns\_works.jpg](http://www.digital-digest.com/blog/DVDGuy/wp-content/uploads/2011/11/how_dns_works.jpg)

*   [An Introduction to DNS Terminology, Components, and Concepts](https://www.digitalocean.com/community/tutorials/an-introduction-to-dns-terminology-components-and-concepts) \[read\]
*   [DNS Explained](https://www.youtube.com/watch?v=72snZctFFtA) \[watch\]
*   [How DNS Works](https://howdns.works/ep1/) \[read\]
*   [The Internet: IP Addresses and DNS](https://www.youtube.com/watch?v=5o8CwafCxnU&index=3&list=PLzdnOPI1iJNfMRZm5DDxco3UdsFegvuB7) \[watch\]
*   [What is a domain name?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name) \[read\]

### 3.4 - Learn HTTP/Networks (Including CORS & WebSockets)

> **HTTP** \- The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

#### HTTP Specifications

*   [HTTP/2](https://http2.github.io/)
*   [Hypertext Transfer Protocol -- HTTP/1.1](https://tools.ietf.org/html/rfc2616)

#### HTTP Docs

*   [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) \[read\]

#### HTTP Videos/Articles/Tutorials

*   [High Performance Browser Networking: What Every Web Developer Should Know About Networking and Web Performance](http://chimera.labs.oreilly.com/books/1230000000545/index.html) \[read\]
*   [MDN: An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) \[read\]
*   [HTTP: The Definitive Guide (Definitive Guides)](https://www.amazon.com/HTTP-Definitive-Guide-Guides/dp/1565925092/ref=cm_cr_arp_d_product_top?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=11b990b79d33ddbef63712765715a9c1&camp=1789&creative=9325) \[read\]\[$\]
*   [HTTP/2 Frequently Asked Questions](https://http2.github.io/faq/#what-are-the-key-differences-to-http1x) \[read\]
*   [HTTP Fundamentals](http://www.pluralsight.com/courses/xhttp-fund) \[watch\]\[$\]
*   [HTTP/2 Fundamentals](https://app.pluralsight.com/library/courses/http2-fundamentals/table-of-contents) \[watch\]\[$\]
*   [HTTP: The Protocol Every Web Developer Must Know - Part 1](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177) \[read\]
*   [HTTP: The Protocol Every Web Developer Must Know - Part 2](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-2--net-31155) \[read\]
*   [HTTP Succinctly](http://code.tutsplus.com/series/http-succinctly--net-33683) \[read\]

#### HTTP Status Codes

*   [HTTP Status Codes](https://httpstatuses.com/)
*   [HTTP Status Codes in 60 Seconds](http://webdesign.tutsplus.com/tutorials/http-status-codes-in-60-seconds--cms-24317) \[watch\]

> **CORS** \- Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources (e.g., fonts) on a web page to be requested from another domain outside the domain from which the resource originated.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

#### CORS Specifications

*   [Cross-Origin Resource Sharing](https://www.w3.org/TR/cors/)

#### CORS

*   [CORS in Action](https://www.amazon.com/CORS-Action-Creating-consuming-cross-origin/dp/161729182X/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=47ebd885d688a4ed69f77a1bd8273f8a&camp=1789&creative=9325) \[read\]\[$\]
*   [HTTP Access Control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) \[read\]

> **WebSockets** \- WebSocket is a protocol providing full-duplex communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011, and the WebSocket API in Web IDL is being standardized by the W3C.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/WebSocket)

#### WebSockets

*   [Connect the Web With WebSockets](https://code.tutsplus.com/courses/connect-the-web-with-websockets) \[watch\]
*   [WebSocket: Lightweight Client-Server Communications](https://www.amazon.com/WebSocket-Client-Server-Communications-Andrew-Lombardi/dp/1449369278/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=dd39395cf3d2ab4fc7c820d7c19db39a&camp=1789&creative=9325) \[read\]\[$\]
*   [The WebSocket Protocol](https://tools.ietf.org/html/rfc6455) \[read\]

### 3.5 - Learn Web Hosting

> A web hosting service is a type of Internet hosting service that allows individuals and organizations to make their website accessible via the World Wide Web. Web hosts are companies that provide space on a server owned or leased for use by clients, as well as providing Internet connectivity, typically in a data center.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Web_hosting_service)

#### General Learning:

*   [Web Hosting 101: Get Your Website Live on the Web in No Time](https://www.udemy.com/web-hosting-101/) \[video\]

![](assets/images/what-is-web-hosting-infographic.jpg "https://firstsiteguide.com/wp-content/uploads/2016/06/what-is-web-hosting-infographic.jpg")

Image source: [https://firstsiteguide.com/wp-content/uploads/2016/06/what-is-web-hosting-infographic.jpg](https://firstsiteguide.com/wp-content/uploads/2016/06/what-is-web-hosting-infographic.jpg)

### 3.6 - Learn General Front-End Development

*   [Frontend Bootcamp / Days in the Web](https://github.com/Microsoft/frontend-bootcamp) \[read\]
*   [Becoming a Career-Ready Web Developer](https://frontendmasters.com/learn/beginner/)
*   [Become a Front-End Web Developer](https://www.lynda.com/learning-paths/Web/become-a-front-end-web-developer) \[watch\]\[$\]
*   [Being a web developer](http://www.yellowshoe.com.au/standards) \[read\]
*   [freeCodeCamp](http://freecodecamp.com/) \[interact\]
    *   [learning front-end development during #100DaysOfCode \[read\]](https://github.com/nas5w/100-days-of-code-frontend#contibuting)
*   [Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) \[watch\]\[$\]
*   [Front End Web Development Career Kickstart](http://www.pluralsight.com/courses/front-end-web-development-career-kickstart) \[watch\]\[$\]
*   [Front End Web Development: Get Started](http://www.pluralsight.com/courses/front-end-web-development-get-started) \[watch\]\[$\]
*   [Front-End Web Development Quick Start With HTML5, CSS, and JavaScript](http://www.pluralsight.com/courses/front-end-web-app-html5-javascript-css) \[watch\]\[$\]
*   [Front-End Web Development: The Big Nerd Ranch Guide](https://www.amazon.com/Front-End-Web-Development-Ranch-Guide/dp/0134433947/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=06802d4e42ca55b03294779c960d0826&camp=1789&creative=9325) \[read\]\[$\]
*   [Complete Intro to Web Development](https://frontendmasters.com/courses/web-development-v2/) \[watch\]\[$\]
*   [Learn Front End Web Development](https://teamtreehouse.com/tracks/front-end-web-development) \[watch\]\[$\]
*   [So, You Want to Be a Front-End Engineer](https://www.youtube.com/watch?v=Lsg84NtJbmI) \[watch\]
*   [codecademy.com: Web Development Path](https://www.codecademy.com/learn/paths/web-development) \[interact\]\[free to $\]
*   [web.dev](https://web.dev/learn) \[read\]

### 3.7 - Learn User Interface/Interaction Design

> **User Interface Design** \- User interface design (UI) or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing the user experience. The goal of user interface design is to make the user's interaction as simple and efficient as possible, in terms of accomplishing user goals (user-centered design).
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/User_interface_design)
> 
> **Interaction Design Pattern** \- A design pattern is a formal way of documenting a solution to a common design problem. The idea was introduced by the architect Christopher Alexander for use in urban planning and building architecture, and has been adapted for various other disciplines, including teaching and pedagogy, development organization and process, and software architecture and design.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Design_pattern)
> 
> **User Experience Design** \- User Experience Design (UXD or UED or XD) is the process of enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between the user and the product. User experience design encompasses traditional human–computer interaction (HCI) design, and extends it by addressing all aspects of a product or service as perceived by users.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/User_experience_design)
> 
> **Human–Computer Interaction** \- Human–computer interaction (HCI) researches the design and use of computer technology, focusing particularly on the interfaces between people (users) and computers. Researchers in the field of HCI both observe the ways in which humans interact with computers and design technologies that lets humans interact with computers in novel ways.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction)

Minimally I'd suggest reading the following canonical texts on the matter so one can support and potential build usable user interfaces.

*   [About Face: The Essentials of Interaction Design](https://www.amazon.com/About-Face-Essentials-Interaction-Design-ebook/dp/B00MFPZ9UY/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=c723c84ad4d246cb7f1c4a737c5f38a4&camp=1789&creative=9325) \[read\]\[$\]
*   [Design for Hackers: Reverse Engineering Beauty](https://www.amazon.com/Design-Hackers-Reverse-Engineering-Beauty/dp/1119998956/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=2a52f0968de21c03f069d857b9d92b37&camp=1789&creative=9325) \[read\]\[$\]
*   [Design for Non-Designers](https://www.youtube.com/watch?v=ZbrzdMaumNk&feature=youtu.be) \[watch\]
*   [Designing Interfaces](https://www.amazon.com/Designing-Interfaces-Jenifer-Tidwell/dp/1449379702/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=4539707bb145c676472472aab25eaa56&camp=1789&creative=9325) \[read\]\[$\]
*   [Designing Web Interfaces: Principles and Patterns for Rich Interactions](https://www.amazon.com/Designing-Web-Interfaces-Principles-Interactions-ebook/dp/B0026OR33U/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=03fb59f4a4345732fae9ecdfaa5076ae&camp=1789&creative=9325) \[read\]\[$\]
*   [Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability](https://www.amazon.com/Dont-Make-Think-Revisited-Usability/dp/0321965515/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=8b0b0771a9985e4e030ef1fe29cf6409&camp=1789&creative=9325) \[read\]\[$\]

### 3.8 - Learn HTML & CSS

> **HTML** \- HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Web browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/HTML)
> 
> **CSS** \- Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. Although most often used to change the style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any kind of XML document, including plain XML, SVG and XUL. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

Liken to constructing a house, one might consider HTML the framing and CSS to be the painting & decorating.

#### General Learning:

*   [Absolute Centering in CSS](http://codepen.io/shshaw/full/gEiDt) \[read\]
*   [CSS Positioning](http://www.pluralsight.com/courses/css-positioning-1834) \[watch\]\[$\]
*   [Introduction to Web Development (v2)](https://frontendmasters.com/courses/web-development-v2/) \[watch\]\[$\]
*   [Front End Web Development: Get Started](http://www.pluralsight.com/courses/front-end-web-development-get-started) \[watch\]\[$\]
*   [Front-End Web Development Quick Start With HTML5, CSS, and JavaScript](http://www.pluralsight.com/courses/front-end-web-app-html5-javascript-css) \[watch\]\[$\]
*   [HTML and CSS: Design and Build Websites](https://www.amazon.com/gp/product/1118008189/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=b1c45ab715f267f7dfed8c981c14eceb&camp=1789&creative=9325) \[read\]\[$\]
*   [HTML Document Flow](http://www.pluralsight.com/courses/html-document-flow-1837) \[watch\]\[$\]
*   [HTML Mastery: Semantics, Standards, and Styling](https://www.amazon.com/gp/product/1590597656/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=a5c4eb997239ea9e57a86456cef7763c&camp=1789&creative=9325) \[read\]\[$\]
*   [Interneting is Hard](https://internetingishard.com/) \[read\]
*   [Intro to HTML/CSS: Making webpages](https://www.khanacademy.org/computing/computer-programming/html-css) \[watch\]
*   [Learn to Code HTML & CSS](http://learn.shayhowe.com/html-css/) \[read\]
*   [Learn CSS Layout](http://learnlayout.com/) \[read\]
*   [MarkSheet](http://marksheet.io/) \[read\]
*   [MDN: HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML) \[read\]
*   [MDN: CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) \[read\]
*   [Semantic HTML: How to Structure Web Pages](https://webdesign.tutsplus.com/courses/semantic-html-how-to-structure-web-pages) \[watch\]
*   [Solid HTML Form Structure](https://webdesign.tutsplus.com/courses/solid-html-form-structure) \[watch\]
*   [Understanding the CSS Box Model](https://webdesign.tutsplus.com/courses/understanding-the-css-box-model) \[watch\]
*   [Resilient Web Design](https://resilientwebdesign.com/) \[read\]

#### Mastering CSS:

*   [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) \[read\]
*   [CSS Grids and Flexbox for Responsive Web Design](https://frontendmasters.com/courses/css-grids-flexbox/) \[watch\]\[$\]
*   [CSS Diner](http://flukeout.github.io/) \[interact\]
*   [CSS Selectors from CSS4 till CSS1](http://css4-selectors.com/selectors/) \[read\]
*   [CSS Secrets: Better Solutions to Everyday Web Design Problems](https://www.amazon.com/CSS-Secrets-Solutions-Everyday-Problems/dp/1449372635/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=40a9480c18839b4b2ea798aa2afafd0e&camp=1789&creative=9325) \[read\]\[$\]
*   [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) \[read\]
*   [CSS In-Depth, v2](https://frontendmasters.com/courses/css-in-depth-v2/) \[watch\]\[$\]
*   [What the Flexbox?! A Simple, Free 20 Video Course That Will Help You Master CSS Flexbox](http://flexbox.io/) \[watch\]
*   [30 Seconds of CSS - A curated collection of useful CSS snippets you can understand in 30 seconds or less.](https://atomiks.github.io/30-seconds-of-css/) \[read\]

#### References/Docs:

*   [CSS Triggers...a Game of Layout, Paint, and Composite](http://csstriggers.com/)
*   [cssreference.io](http://cssreference.io/)
*   [cssvalues.com](http://cssvalues.com/)
*   [Default CSS for Chrome Browser](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css)
*   [Head - A list of everything that could go in the
    
    of your document
    
    ](http://gethead.info/)
*   [HTML Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
*   [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
*   [MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

#### Glossary/Vocabulary:

*   [CSS Glossary - Programming Reference for CSS Covering Comments, Properties, and Selectors](https://www.codecademy.com/articles/glossary-css)
*   [CSS Vocabulary](http://apps.workflower.fi/vocabs/css/en)
*   [HTML Glossary Programming Reference for HTML elements](https://www.codecademy.com/articles/glossary-html)

#### Standards/Specifications:

*   [All W3C CSS Specifications](http://www.w3.org/Style/CSS/current-work#roadmap)
*   [All W3C HTML Spec](http://www.w3.org/standards/techs/html#w3c_all)
*   [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification](https://drafts.csswg.org/css2/)
*   [CSS Indexes - A listing of every term defined by CSS specs](https://drafts.csswg.org/indexes/)
*   [The Elements of HTML from the Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#semantics)
*   [Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
*   [The HTML Syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax) from the Living Standard
*   [HTML 5.2 from W3C](http://w3c.github.io/html/)
*   [Selectors Level 3](http://www.w3.org/TR/css3-selectors/)

#### Architecting CSS:

*   [Atomic Design](http://atomicdesign.bradfrost.com/) \[read\]
*   [BEM](http://getbem.com/introduction/)
*   [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
*   [OOCSS](http://oocss.org/) \[read\]
*   [SMACSS](https://smacss.com/) \[read\]\[$\]
    *   [Scalable Modular Architecture for CSS (SMACSS)](https://frontendmasters.com/courses/smacss/) \[watch\]\[$\]
*   [SUIT CSS](http://suitcss.github.io)
*   [rscss](http://rscss.io/)

#### Authoring/Architecting Conventions:

*   [CSS code guide](http://codeguide.co/#css) \[read\]
*   [css-architecture](https://github.com/jareware/css-architecture)
*   [cssguidelin.es](http://cssguidelin.es/) \[read\]
*   [Idiomatic CSS](https://github.com/necolas/idiomatic-css) \[read\]
*   [MaintainableCSS](http://maintainablecss.com/) \[read\]
*   [Standards for Developing Flexible, Durable, and Sustainable HTML and CSS](http://mdo.github.io/code-guide/) \[read\]

### 3.9 - Learn Search Engine Optimization

> Search engine optimization (SEO) is the process of affecting the visibility of a website or a web page in a search engine's unpaid results — often referred to as "natural," "organic," or "earned" results. In general, the earlier (or higher ranked on the search results page), and more frequently a site appears in the search results list, the more visitors it will receive from the search engine's users. SEO may target different kinds of search, including image search, local search, video search, academic search, news search and industry-specific vertical search engines.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Search_engine_optimization)

![](assets/images/how-does-seo-work.jpg "https://visual.ly/community/infographic/computers/how-does-seo-work")

Image source: [https://visual.ly/community/infographic/computers/how-does-seo-work](https://visual.ly/community/infographic/computers/how-does-seo-work)

#### General Learning:

*   [Google Search Engine Optimization Starter Guide](http://static.googleusercontent.com/media/www.google.com/en//webmasters/docs/search-engine-optimization-starter-guide.pdf) \[read\]
*   [Modern SEO](https://frontendmasters.com/courses/modern-seo/) \[watch\]\[$\]
*   [SEO Fundamentals From David Booth](http://www.lynda.com/Analytics-tutorials/SEO-Fundamentals/187858-2.html) \[watch\]\[$\]
*   [SEO Fundamentals From Paul Wilson](http://www.pluralsight.com/courses/seo-fundamentals) \[watch\]\[$\]
*   [SEO Tutorial For Beginners in 2016](http://www.hobo-web.co.uk/seo-tutorial/) \[read\]
*   [SEO for Web Designers](https://webdesign.tutsplus.com/courses/seo-for-web-designers) \[watch\]\[$\]

### 3.10 - Learn JavaScript

> JavaScript is a high level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, it is one of the three essential technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern web browsers without plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage or graphics facilities, relying for these upon the host environment in which it is embedded.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/JavaScript)

#### Getting Started:

*   [MDN: JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) \[read\]
*   [javascript.info](http://javascript.info/)
*   [JavaScript Enlightenment](http://www.javascriptenlightenment.com/) \[read\]
*   [Eloquent JavaScript](http://eloquentjavascript.net/) \[read\]

#### General Learning:

*   [Speaking JavaScript](http://speakingjs.com/es5/index.html) \[read\]
*   [JavaScript for impatient programmers](http://exploringjs.com/impatient-js/index.html) \[read\]
*   [You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going) \[read\]
*   [You Don't Know JS: Types & Grammar](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/README.md#you-dont-know-js-types--grammar) \[read\]
*   [You Don't Know JS: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures) \[read\]
*   [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) \[read\]
*   [Modern JavaScript Cheatsheet - Cheatsheet for the JavaScript knowledge you will frequently encounter in modern projects.](https://github.com/mbeaudru/modern-js-cheatsheet) \[read\]
*   [JavaScript: The Hard Parts](https://frontendmasters.com/courses/javascript-hard-parts/) \[watch\]\[$\]
*   [Deep Foundations of JavaScript (v3)](https://frontendmasters.com/courses/deep-javascript-v3/) \[watch\]\[$\]

#### Mastering:

*   [Setting up ES6](https://leanpub.com/setting-up-es6) \[read\]
*   [ES6 FOR EVERYONE!](https://es6.io/) \[watch\]\[$\]
*   [Exploring ES6](http://exploringjs.com/es6.html) \[read\]
*   [You Don't Know JS: ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond) \[read\]
*   [Understanding ECMAScript 6: The Definitive Guide for JavaScript Developers](https://www.amazon.com/Understanding-ECMAScript-Definitive-JavaScript-Developers/dp/1593277571/ref=as_li_ss_tl?&_encoding=UTF8&tag=fronenddevejo-20&linkCode=ur2&linkId=1ca4f5f23b42aeadad0990ab3bf91ca7&camp=1789&creative=9325) \[read\]\[$\]
*   [JavaScript: The Recent Parts](https://frontendmasters.com/courses/js-recent-parts/) \[watch\]\[$\]
*   [Exploring ES2016 and ES2017](http://exploringjs.com/es2016-es2017/index.html) \[read\]
*   [Exploring ES2018 and ES2019](http://exploringjs.com/es2018-es2019/index.html) \[read\]
*   [JavaScript Regular Expression Enlightenment](http://codylindley.com/techpro/2013_05_14__javascript-regular-expression-/) \[read\]
*   [Using Regular Expressions](http://www.lynda.com/Regular-Expressions-tutorials/Using-Regular-Expressions/85870-2.html) \[watch\]\[$\]
*   [You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance) \[read\]
*   [JavaScript with Promises](http://www.amazon.com/JavaScript-Promises-Daniel-Parker/dp/1449373216/ref=pd_sim_sbs_14_5) \[read\]\[$\]
*   [Test-Driven JavaScript Development](http://www.amazon.com/dp/0321683919/) \[read\]\[$\]
*   [JS MythBusters](https://mythbusters.js.org/index.html) \[read\]
*   [Robust JavaScript](https://molily.de/robust-javascript/) \[read\]
*   [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms#readme) \[read\]
*   [33 Concepts Every JavaScript Developer Should Know](https://github.com/leonardomso/33-js-concepts) \[read\]
*   [doesitmutate.xyz](https://doesitmutate.xyz/) \[read\]

#### Functional JavaScript:

*   [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon#functional-programming-jargon)
*   [funfunfunction: Functional programming in JavaScript](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) \[watch\]
*   [Functional-Light-JS](https://github.com/getify/Functional-Light-JS) \[read\]
*   [Functional Programming in JavaScript: How to improve your JavaScript programs using functional techniques](https://www.amazon.com/Functional-Programming-JavaScript-functional-techniques/dp/1617292826/ref=sr_1_1?&_encoding=UTF8&tag=fronenddevejo-20&linkCode=ur2&linkId=dcc6b0cb7de57fa841f1b178d2d54b9d&camp=1789&creative=9325) \[read\]
*   [Mostly adequate guide to FP (in javascript)](https://drboolean.gitbooks.io/mostly-adequate-guide/content/) \[read\]
*   [Professor Frisby Introduces Composable Functional JavaScript](https://egghead.io/courses/professor-frisby-introduces-composable-functional-javascript) \[watch\]
*   [JavaScript Allongé](https://leanpub.com/javascriptallongesix) \[read\]\[$\]
*   [Functional-Lite JavaScript (v2)](https://frontendmasters.com/courses/functional-javascript-v2/) \[watch\]\[$\]
*   [Hardcore Functional Programming in JavaScript](https://frontendmasters.com/courses/functional-javascript/) \[watch\]\[$\]

#### References/Docs:

*   [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
*   [MSDN JavaScript Reference](https://msdn.microsoft.com/en-us/library/yek4tbz0.aspx)

#### Glossary/Encyclopedia/Jargon:

*   [The JavaScript Encyclopedia](http://www.crockford.com/javascript/encyclopedia/)
*   [JavaScript Glossary](https://www.codecademy.com/articles/glossary-javascript)
*   [Simplified JavaScript Jargon](http://jargon.js.org/)

#### Standards/Specifications:

*   [How to Read the ECMAScript Specification](https://timothygu.me/es-howto/)
*   [ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/index.html)
*   [ECMAScript® 2016 Language Specification](https://www.ecma-international.org/ecma-262/7.0/index.html)
*   [ECMAScript® 2017 Language Specification](http://www.ecma-international.org/ecma-262/8.0/index.html)
*   [ECMAScript® 2018 Language Specification](http://www.ecma-international.org/ecma-262/9.0/index.html)
*   [ECMAScript® 2019 Language Specification](https://tc39.github.io/ecma262/)
*   [Status, Process, and Documents for ECMA262](https://github.com/tc39/ecma262)

#### Style:

*   [Airbnb JavaScript Style Guide](http://airbnb.io/javascript/)
*   [JavaScript Standard Style](http://standardjs.com/rules.html)
*   [JavaScript Semi-Standard Style](https://github.com/Flet/semistandard)

#### Deprecated JS Learning Resources:

*   [Crockford on JavaScript - Volume 1: The Early Years](https://www.youtube.com/watch?v=JxAXlJEmNMg) \[watch\]
*   [Crockford on JavaScript - Chapter 2: And Then There Was JavaScript](https://www.youtube.com/watch?v=RO1Wnu-xKoY) \[watch\]
*   [Crockford on JavaScript - Act III: Function the Ultimate](https://www.youtube.com/watch?v=ya4UHuXNygM) \[watch\]
*   [Crockford on JavaScript - Episode IV: The Metamorphosis of Ajax](https://www.youtube.com/watch?v=Fv9qT9joc0M) \[watch\]
*   [Crockford on JavaScript - Part 5: The End of All Things](https://www.youtube.com/watch?v=47Ceot8yqeI) \[watch\]
*   [Crockford on JavaScript - Scene 6: Loopage](https://www.youtube.com/watch?v=QgwSUtYSUqA) \[watch\]
*   [JavaScript Patterns](http://www.amazon.com/gp/product/0596806752/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596806752&linkCode=as2&tag=fronenddevejo-20&linkId=K56OPQZNQNMPF6QI) \[read\]\[$\]
*   [The Principles of Object-Oriented JavaScript](http://www.amazon.com/gp/product/1593275404/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1593275404&linkCode=as2&tag=fronenddevejo-20&linkId=NQTZVDOIMJRGMAQM) \[read\]\[$\]
*   [JavaScript Modules](http://jsmodules.io/cjs.html) \[read\]
*   [Functional JavaScript: Introducing Functional Programming with Underscore.js](http://www.amazon.com/gp/product/1449360726/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1449360726&linkCode=as2&tag=fronenddevejo-20&linkId=BDQC3FTEB3YXTYCK) \[read\]\[$\]
*   [The Good Parts of JavaScript and the Web](https://frontendmasters.com/courses/good-parts-javascript-web/) \[watch\]\[$\]
*   [High Performance JavaScript (Build Faster Web Application Interfaces)](http://www.amazon.com/Performance-JavaScript-Faster-Application-Interfaces/dp/059680279X/ref=sr_1_1) \[read\]\[$\]

#### JS Explorers/Visualizers:

*   [JavaScript Array Explorer](https://sdras.github.io/array-explorer/)
*   [JavaScript Object Explorer](https://sdras.github.io/object-explorer/)
*   [JavaScript Visualizer](https://tylermcginnis.com/javascript-visualizer/)

### 3.11 - Learn DOM, BOM, CSSOM & jQuery

> **DOM** \- The Document Object Model (DOM) is a cross-platform and language-independent convention for representing and interacting with objects in HTML, XHTML, and XML documents. The nodes of every document are organized in a tree structure, called the DOM tree. Objects in the DOM tree may be addressed and manipulated by using methods on the objects. The public interface of a DOM is specified in its application programming interface (API).
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model)
> 
> **BOM** \- The Browser Object Model (BOM) is a browser-specific convention referring to all the objects exposed by the web browser. Unlike the Document Object Model, there is no standard for implementation and no strict definition, so browser vendors are free to implement the BOM in any way they wish.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Browser_Object_Model)
> 
> **jQuery** \- jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today, with installation on 65% of the top 10 million highest-trafficked sites on the Web. jQuery is free, open-source software licensed under the MIT License.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/JQuery)

The ideal path, but certainly the most difficult, would be to first learn JavaScript, then the DOM, then jQuery. However, do what makes sense to your brain. Most front-end developers learn about JavaScript and then DOM by way of first learning jQuery. Whatever path you take, just make sure JavaScript, the DOM, and jQuery don't become a black box.

#### General Learning:

*   [The Document Object Model](http://eloquentjavascript.net/13_dom.html) \[read\]
*   [HTML/JS: Making Webpages Interactive](https://www.khanacademy.org/computing/computer-programming/html-css-js) \[watch\]
*   [HTML/JS: Making Webpages Interactive with jQuery](https://www.khanacademy.org/computing/computer-programming/html-js-jquery) \[watch\]
*   [jQuery Enlightenment](http://jqueryenlightenment.com/) \[read\]
*   [What is the DOM?](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) \[read\]

#### Mastering:

*   [AdvancED DOM Scripting: Dynamic Web Design Techniques](http://www.amazon.com/gp/product/1590598563/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1590598563&linkCode=as2&tag=fronenddevejo-20&linkId=VQZU5EQIQQXCF56Y) \[read\]\[$\]
*   [Advanced JS Fundamentals to jQuery & Pure DOM Scripting](https://frontendmasters.com/courses/javascript-jquery-dom/) \[watch\]\[$\]
*   [Douglas Crockford: An Inconvenient API - The Theory of the DOM](https://www.youtube.com/watch?v=Y2Y0U-2qJMs&list=PL5586336C26BDB324&index=2) \[watch\]
*   [DOM Enlightenment](http://www.amazon.com/DOM-Enlightenment-Cody-Lindley/dp/1449342841/) \[read\]\[$\] or [read online for free](http://domenlightenment.com/)
*   [Fixing Common jQuery Bugs](http://www.pluralsight.com/courses/fixing-common-jquery-bugs) \[watch\]\[$\]
*   [jQuery-Free JavaScript](http://www.pluralsight.com/courses/jquery-free-javascript) \[watch\]\[$\]
*   [jQuery Tips and Tricks](http://www.pluralsight.com/courses/jquery-tips-and-tricks) \[watch\]\[$\]

#### References/Docs:

*   [jQuery Docs](http://api.jquery.com/)
*   [Events](https://html.spec.whatwg.org/#events-2)
*   [DOM Browser Support](http://www.webbrowsercompatibility.com/dom/desktop/)
*   [DOM Events Browser Support](http://www.webbrowsercompatibility.com/dom-events/desktop/)
*   [HTML Interfaces Browser Support](http://www.webbrowsercompatibility.com/html-interfaces/desktop/)
*   [MDN Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
*   [MDN Browser Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Window)
*   [MDN Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
*   [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
*   [MSDN Document Object Model (DOM)](https://msdn.microsoft.com/en-us/library/hh772384%28v=vs.85%29.aspx)
*   [CSS Object Model (CSSOM)](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)

#### Standards/Specifications:

*   [Document Object Model (DOM) Level 3 Events Specification](https://www.w3.org/TR/DOM-Level-3-Events/)
*   [Document Object Model (DOM) Technical Reports](http://www.w3.org/DOM/DOMTR)
*   [DOM Living Standard](https://dom.spec.whatwg.org/)
*   [W3C DOM4](https://www.w3.org/TR/2015/REC-dom-20151119/)

### 3.12 - Learn Web Animation

#### General Learning:

*   [SVG Essentials and Animation, v2](https://frontendmasters.com/courses/svg-essentials-animation/) \[$\]\[watch\]
*   [Adventures in Web Animations](https://www.codeschool.com/courses/adventures-in-web-animations) \[$\]\[watch\]
*   [Animating With Snap.svg](https://webdesign.tutsplus.com/courses/animating-with-snapsvg) \[$\]\[watch\]
*   [Animation in CSS3 and HTML5](https://frontendmasters.com/courses/animation-storytelling-html5-css3/) \[$\]\[watch\]
*   [Create Animations in CSS](http://www.kirupa.com/css_animations/index.htm) \[read & watch\]
*   [CSS Animation in the Real World](https://webdesign.tutsplus.com/courses/css-animation-in-the-real-world) \[$\]\[watch\]
*   [Foundation HTML5 Animation with JavaScript](http://www.amazon.com/Foundation-HTML5-Animation-JavaScript-Lamberta/dp/1430236655/ref=sr_1_3) \[$\]\[read\]
*   [Learn to Create Animations in JavaScript](http://www.kirupa.com/javascript_animations/index.htm) \[read & watch\]
*   [Motion Design with CSS](https://frontendmasters.com/courses/motion-design-css/) \[$\]\[watch\]
*   [State of the Animation 2015](https://air.mozilla.org/rachel-nabors-state-of-the-animation-2015/) \[watch\]
*   [Web Animation using JavaScript: Develop & Design (Develop and Design)](http://www.amazon.com/Web-Animation-using-JavaScript-Develop-ebook/dp/B00UNKXVDU/ref=sr_1_1) \[$\]\[read\]

#### Standards/Specifications:

*   [Web Animations](https://w3c.github.io/web-animations/)

### 3.13 - Learn Web Fonts, Icons, & Images

> Web typography refers to the use of fonts on the World Wide Web. When HTML was first created, font faces and styles were controlled exclusively by the settings of each Web browser. There was no mechanism for individual Web pages to control font display until Netscape introduced the `<font>` tag in 1995, which was then standardized in the HTML 3.2 specification. However, the font specified by the tag had to be installed on the user's computer or a fallback font, such as a browser's default sans-serif or monospace font, would be used. The first Cascading Style Sheets specification was published in 1996 and provided the same capabilities.
> 
> The CSS2 specification was released in 1998 and attempted to improve the font selection process by adding font matching, synthesis and download. These techniques did not gain much use, and were removed in the CSS2.1 specification. However, Internet Explorer added support for the font downloading feature in version 4.0, released in 1997. Font downloading was later included in the CSS3 fonts module, and has since been implemented in Safari 3.1, Opera 10 and Mozilla Firefox 3.5. This has subsequently increased interest in Web typography, as well as the usage of font downloading.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Web_typography)

#### Fonts:

*   [A Comprehensive Guide to Font Loading Strategies](https://www.zachleat.com/web/comprehensive-webfonts/) \[read\]
*   [Beautiful Web Type a Showcase of the Best Typefaces from the Google Web Fonts Directory](http://hellohappy.org/beautiful-web-type/) \[read\]
*   [Quick Guide to Webfonts via @font-face](http://www.html5rocks.com/en/tutorials/webfonts/quick/) \[read\]
*   [MDN: Web fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts) \[read\]
*   [Responsive Web Typography, v2](https://frontendmasters.com/courses/responsive-typography-v2/) \[watch\]\[$\]
*   [Typography for the Web](http://www.pluralsight.com/courses/typography-for-web-1790) \[watch\]\[$\]

#### Icons:

*   [\[read\]](https://www.lynda.com/CSS-tutorials/Web-Icons-SVG/502312-2.html) \[watch\]

#### Images:

*   [MDN: Images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) \[read\]
*   [MDN: Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) \[read\]
*   [SVG ON THE WEB - A Practical Guide](https://svgontheweb.com/) \[read\]

### 3.14 - Learn Accessibility

> Accessibility refers to the design of products, devices, services, or environments for people with disabilities. The concept of accessible design ensures both “direct access” (i.e., unassisted) and "indirect access" meaning compatibility with a person's assistive technology (for example, computer screen readers).
> 
> Accessibility can be viewed as the "ability to access" and benefit from some system or entity. The concept focuses on enabling access for people with disabilities, or special needs, or enabling access through the use of assistive technology; however, research and development in accessibility brings benefits to everyone.
> 
> Accessibility is not to be confused with usability, which is the extent to which a product (such as a device, service, or environment) can be used by specified users to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use.
> 
> Accessibility is strongly related to universal design which is the process of creating products that are usable by people with the widest possible range of abilities, operating within the widest possible range of situations. This is about making things accessible to all people (whether they have a disability or not).
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Accessibility)

#### General Learning:

*   [9 tips to get bare minimum of web accessibility](https://medium.com/@realabhijeet4u/9-tips-to-get-bare-minimum-of-web-accessibility-739899a9437c)
*   [Foundations of UX: Accessibility](http://www.lynda.com/Accessibility-tutorials/Foundations-UX-Accessibility/435008-2.html) \[watch\]\[$\]
*   [How HTML elements are supported by screen readers](http://thepaciellogroup.github.io/AT-browser-tests/?utm_source=html5weekly&utm_medium=email) \[read\]
*   [Introduction to Web Accessibility](https://www.w3.org/WAI/intro/accessibility.php) \- WAI \[read\]
*   [Universal Design for Web Applications: Web Applications That Reach Everyone](http://www.amazon.com/Universal-Design-Web-Applications-Everyone/dp/0596518730/ref=sr_1_1) \[read\]\[$\]
*   [Web Accessibility: Getting Started](http://www.pluralsight.com/courses/web-accessibility-getting-started) \[watch\]\[$\]
*   [A Web for Everyone](http://rosenfeldmedia.com/books/a-web-for-everyone/) \[read\]\[$\]
*   [Web Accessibility](https://frontendmasters.com/courses/web-accessibility/) \[watch\]\[$\]
*   [A11ycasts](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g) \[watch\]
*   [Accessibility by Google](https://www.udacity.com/course/web-accessibility--ud891) \- Udacity course \[watch\]

#### Standards/Specifications:

*   [Accessible Rich Internet Applications (WAI-ARIA) Current Status](http://www.w3.org/standards/techs/aria#w3c_all)
*   [Web Accessibility Initiative (WAI)](http://www.w3.org/WAI/)
*   [Web Content Accessibility Guidelines (WCAG) Current Status](http://www.w3.org/standards/techs/wcag#w3c_all)

### 3.15 - Learn Web/Browser APIs

![](assets/images/web-api.png "http://www.evolutionoftheweb.com/")

Image source: [http://www.evolutionoftheweb.com/](http://www.evolutionoftheweb.com/)

The BOM (Browser Object Model) and the DOM (Document Object Model) are not the only browser APIs that are made available on the web platform inside of browsers. Everything that is not specifically the DOM or BOM, but an interface for programming the browser could be considered a web or browser API (tragically in the past some of these APIs have been called HTML5 APIs which confuses their own specifics/standardize with the actual HTML5 specification specifying the HTML5 markup language). Note that web or browser APIs do include device APIs (e.g., [`Navigator.getBattery()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery)) that are available through the browser on tablet and phones devices.

You should be aware of and learn, where appropriate, web/browser APIs. A good tool to use to familiarize oneself with all of these APIs would be to investigate the [HTML5test.com results for the 5 most current browsers](https://html5test.com/compare/browser/index.html).

MDN has a great deal of information about web/browser APIs.

*   [MDN Web API Reference](https://developer.mozilla.org/en-US/docs/Web/Reference/API)
*   [MDN Web APIs Interface Reference - All Interfaces, Arranged Alphabetically](https://developer.mozilla.org/en-US/docs/Web/API)
*   [MDN WebAPI - Lists Device Access APIs and Other APIs Useful for Applications](https://developer.mozilla.org/en-US/docs/WebAPI)

Keep in mind that not every API is specified by the W3C or WHATWG.

In addition to MDN, you might find the following resources helpful for learning about all the web/browser API's:

*   [The HTML 5 JavaScript API Index](http://html5index.org/)
*   [HTML5 Overview](http://html5-overview.net/current)
*   [platform.html5.org](https://platform.html5.org/)

### 3.16 - Learn JSON (JavaScript Object Notation)

> JSON, (canonically pronounced sometimes JavaScript Object Notation), is an open standard format that uses human-readable text to transmit data objects consisting of attribute–value pairs. It is the primary data format used for asynchronous browser/server communication (AJAJ), largely replacing XML (used by AJAX).
> 
> Although originally derived from the JavaScript scripting language, JSON is a language-independent data format. Code for parsing and generating JSON data is readily available in many programming languages.
> 
> The JSON format was originally specified by Douglas Crockford. It is currently described by two competing standards, RFC 7159 and ECMA-404. The ECMA standard is minimal, describing only the allowed grammar syntax, whereas the RFC also provides some semantic and security considerations. The official Internet media type for JSON is application/json. The JSON filename extension is .json.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/JSON)

#### General Learning:

*   [Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON](https://www.amazon.com/Introduction-JavaScript-Object-Notation-Point/dp/1491929480/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=24e8df4722cb62d086d3f8c87f4e17a1&camp=1789&creative=9325) \[read\]\[$\]
*   [json.com](https://www.json.com/) \[read\]
*   [What is JSON](https://mijingo.com/lessons/what-is-json/) \[watch\]

#### References/Docs:

*   [json.org](http://json.org/) \[read\]

#### Standards/Specifications:

*   [ECMA-404 The JSON Data Interchange Format](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf)
*   [RFC 7159 The JavaScript Object Notation (JSON) Data Interchange Format](https://tools.ietf.org/html/rfc7159)
*   [STD 90 - RFC 8259 - The JavaScript Object Notation (JSON) Data Interchange Format, DECEMBER 2017](https://www.rfc-editor.org/info/rfc8259)

#### Architecting:

*   [JSON API](http://jsonapi.org/)

### 3.17 - Learn JS Templates

A JavaScript template is typically used, but not always with a [MV*](http://todomvc.com/) solution to separate parts of the view (i.e., the UI) from the logic and model (i.e., the data or JSON).

*   [ES6 Template Literals, the Handlebars killer?](https://www.keithcirkel.co.uk/es6-template-literals/) \[read\]
*   [Getting Started with nunjucks](http://mozilla.github.io/nunjucks/getting-started.html) \[read\]
*   \[read\]\[$\]
*   [Lodash Templates](https://lodash.com/docs/4.17.2#template) \[docs\]

Note that JavaScript 2015 (aka ES6) added a native templating mechanism called ["Templates strings"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings). Additionally, templating as of late has been replaced by things like [JSX](https://facebook.github.io/jsx/), [a template element](http://aurelia.io/docs/templating/basics), or [HTML strings](https://angular.io/docs/ts/latest/guide/template-syntax.html#).

If I was not using React & JSX I'd first reach for JavaScript ["Templates strings"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings) and when that was lacking move to [nunjucks](http://mozilla.github.io/nunjucks/getting-started.html).

### 3.18 - Learn Static Site Generators

Static site generators, typically written using server side code (i.e., ruby, php, python, nodeJS, etc.), produce static HTML files from static text/data + templates that are intended to be sent from a server to the client statically without a dynamic nature.

#### General Learning:

*   [JAMstack](https://jamstack.org/) \[read\]
*   [Static Site Generators](http://www.oreilly.com/web-platform/free/static-site-generators.csp) \[read\]
*   [Working with Static Sites - Bringing the Power of Simplicity to Modern Sites](https://www.amazon.com/Working-Static-Sites-Bringing-Simplicity/dp/1491960949) \[read\]\[$\]

### 3.19 - Learn Computer Science via JS

*   [Four Semesters of Computer Science in Six Hours](https://frontendmasters.com/courses/computer-science/) \[video\]\[$\]
*   [Four Semesters of Computer Science in Six Hours: Part 2](https://frontendmasters.com/courses/computer-science-2/) \[video\]\[$\]
*   [Computer Science in JavaScript](https://github.com/davidshariff/computer-science) \[read\]
*   [Collection of classic computer science paradigms, algorithms, and approaches written in JavaScript](https://github.com/nzakas/computer-science-in-javascript) \[read\]
*   [A Practical Guide to Algorithms with JavaScript](https://frontendmasters.com/courses/practical-algorithms/) \[watch\]\[$\]
*   [Introduction to Data Structures for Interviews](https://frontendmasters.com/courses/data-structures-interviews/) \[watch\]\[$\]
*   [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/) \[watch\]\[$\]

### 3.20 - Learn Front-End Application Architecture

#### General Learning:

*   [Grab Front End Guide](https://github.com/grab/front-end-guide) \[read\]
*   [A set of best practices for JavaScript projects](https://github.com/elsewhencode/project-guidelines)
*   [Spellbook of Modern Web Dev](https://github.com/dexteryy/spellbook-of-modern-webdev)
*   [JavaScript Stack from Scratch](https://github.com/verekia/js-stack-from-scratch)

#### Deprecated Learning Materials:

*   [JavaScript Application Design](https://www.amazon.com/JavaScript-Application-Design-Build-Approach/dp/1617291951?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=4dd15b53493d3b5148af2b3e5488e98d&camp=1789&creative=9325) \[read\]\[$\]
*   [Build an App with React and Ampersand](http://learn.humanjavascript.com/react-ampersand) \[watch\]
*   [Field Guide to Web Applications](http://www.html5rocks.com/webappfieldguide/toc/index/) \[read\]
*   [Frontend Guidelines Questionnaire](https://github.com/bradfrost/frontend-guidelines-questionnaire) \[read\]
*   [Human JavaScript](http://read.humanjavascript.com/) \[read\]
*   [Nicholas Zakas: Scalable JavaScript Application Architecture](https://www.youtube.com/watch?v=vXjVFPosQHw) \[watch\]
*   [Organizing JavaScript Functionality](https://frontendmasters.com/courses/organizing-javascript/) \[watch\]\[$\]
*   [Patterns for Large-Scale JavaScript Application Architecture](http://addyosmani.com/largescalejavascript/) \[read\]
*   [Terrific](http://terrifically.org/) \[read\]
*   [frontend case studies](https://github.com/andrew--r/frontend-case-studies) \[read\]

Not a lot of general content is being created on this topic as of late. Most of the content offered for learning how to build front-end/SPA/JavaScript applications presupposes you've decided up a tool like Angular, Ember, React, or Aurelia.

My advice, in [2019](https://2018.stateofjs.com/front-end-frameworks/overview/) learn [React](https://facebook.github.io/react/) and [Mobx](https://github.com/mobxjs/mobx) and [Apollo/graphql](https://www.apollographql.com/).

### 3.21 - Learn Data (i.e. JSON) API Design

*   [API Design, v3](https://frontendmasters.com/courses/api-design-nodejs-v3/) \[watch\]\[$\]
*   [Build APIs You Won't Hate](http://apisyouwonthate.com/) \[$\]\[read\]
*   [JSON API](http://jsonapi.org/) \[read\]

### 3.22 - Learn React

#### Learning React:

*   [Tutorial: Intro To React](https://facebook.github.io/react/tutorial/tutorial.html) \[read\]
*   [ReactJS For Stupid People](http://blog.andrewray.me/reactjs-for-stupid-people/) \[read\]
*   [The Beginner's Guide to ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-reactjs) \[watch\]
*   [Complete Intro to React v4](https://frontendmasters.com/courses/complete-react-v4/) \[watch\]\[$\]
*   [React 🎄](https://react.holiday/) \[read\]
*   [React Patterns Video Subscription](https://school.reactpatterns.com) \[watch\]\[$\]
*   [React Enlightenment](https://www.reactenlightenment.com/) \[read\]
*   [REACT JS TUTORIAL #1 - Reactjs Javascript Introduction & Workspace Setup](https://www.youtube.com/watch?v=MhkGQAoc7bc&t=6s) \[watch\]

#### Mastering React:

*   [Build Your First Production Quality React App](https://egghead.io/courses/build-your-first-production-quality-react-app) \[watch\]\[$\]
*   [Advanced React Component Patterns](https://frontendmasters.com/courses/advanced-react-patterns/) \[watch\]\[$\]
*   [Intermediate React](https://frontendmasters.com/courses/intermediate-react/) \[watch\]\[$\]
*   [React Patterns](https://reactpatterns.com/) \[read\]
*   [8 Key React Component Decisions](https://medium.freecodecamp.org/8-key-react-component-decisions-cc965db11594) \[read\]
*   [React - Basic Theoretical Concepts](https://github.com/reactjs/react-basic) \[read\]
*   [React + Mobx codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the RealWorld spec and API.](https://github.com/gothinkster/react-mobx-realworld-example-app) \[code\]
*   [An Introduction to React Router v4 and its Philosophy Toward Routing](https://medium.freecodecamp.org/react-router-v4-philosophy-and-introduction-730fd4fff9bc) \[read\]

Once you have a good handle on React move on to learning a more robust state management solution like [MobX](https://mobx.js.org/). If you are an experienced developer with Functional Programming knowledge look at [Redux](https://redux.js.org/). If you need help understanding the role of state management beyond React's `setState` watch, "[Advanced State Management in React (feat. Redux and MobX)](https://frontendmasters.com/courses/react-state/)".

### 3.23 - Learn Application State Management

*   [State management in JavaScript](https://codeburst.io/state-management-in-javascript-15d0d98837e1) \[read\]
*   [Advanced State Management in React (feat. Redux and MobX)](https://frontendmasters.com/courses/react-state/) \[watch\]\[$\]
*   [React js tutorial - How Redux Works](https://www.youtube.com/watch?v=1w-oQ-i1XB8&list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt) \[watch\]
*   [MobX + React is AWESOME](https://www.youtube.com/watch?v=_q50BXqkAfI&t=10s) \[watch\]

### 3.24 - Learn Progressive Web App

> Unlike traditional applications, progressive web apps are a hybrid of regular web pages (or websites) and a mobile application. This new application model attempts to combine features offered by most modern browsers with the benefits of mobile experience.
> 
> In 2015, designer Frances Berriman and Google Chrome engineer Alex Russell coined the term "Progressive Web Apps" to describe apps taking advantage of new features supported by modern browsers, including Service Workers and Web App Manifests, that let users upgrade web apps to be first-class applications in their native OS.
> 
> According to Google Developers, these characteristics are:
> 
> *   Progressive - Work for every user, regardless of browser choice because they’re built with progressive enhancement as a core tenet.
> *   Responsive - Fit any form factor: desktop, mobile, tablet, or forms yet to emerge.
> *   Connectivity independent - Service workers allow work offline, or on low quality networks.
> *   App-like - Feel like an app to the user with app-style interactions and navigation.
> *   Fresh - Always up-to-date thanks to the service worker update process.
> *   Safe - Served via HTTPS to prevent snooping and ensure content hasn’t been tampered with.
> *   Discoverable - Are identifiable as “applications” thanks to W3C manifests\[6\] and service worker registration scope allowing search engines to find them.
> *   Re-engageable - Make re-engagement easy through features like push notifications.
> *   Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.
> *   Linkable - Easily shared via a URL and do not require complex installation.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Progressive_web_app)

*   [A Beginner’s Guide To Progressive Web Apps](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/) \[read\]
*   [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) \[read\]
*   [Getting Started with Progressive Web Apps](https://www.pluralsight.com/courses/web-apps-progressive-getting-started) \[watch\]\[$\]
*   [Building a Progressive Web App](https://www.lynda.com/CSS-tutorials/Building-Progressive-Web-App/518052-2.html) \[watch\]\[$\]
*   [Intro to Progressive Web Apps by Google](https://www.udacity.com/course/intro-to-progressive-web-apps--ud811) \[watch\]
*   [Native Apps are Doomed](https://medium.com/javascript-scene/native-apps-are-doomed-ac397148a2c0#.rfw9hdym6) \[read\]
*   [Why Native Apps Really are Doomed: Native Apps are Doomed pt 2](https://medium.com/javascript-scene/why-native-apps-really-are-doomed-native-apps-are-doomed-pt-2-e035b43170e9#.qjrm13yj3) \[read\]
*   [Your First Progressive Web App](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/) \[read\]
*   [Progressive Web Applications and Offline](https://frontendmasters.com/courses/progressive-web-apps/) \[watch\]\[$\]

### 3.25 - Learn JS API Design

*   [Designing Better JavaScript APIs](http://www.smashingmagazine.com/2012/10/designing-javascript-apis-usability/) \[read\]
*   [Writing JavaScript APIs](http://blog.wolksoftware.com/writing-javascript-apis) \[read\]

### 3.26 - Learn Browser Web Developer Tools

> Web development tools allow web developers to test and debug their code. They are different from website builders and IDEs in that they do not assist in the direct creation of a webpage, rather they are tools used for testing the user facing interface of a website or web application.
> 
> Web development tools come as browser add-ons or built in features in web browsers. The most popular web browsers today like, Google Chrome, Firefox, Opera, Internet Explorer, and Safari have built in tools to help web developers, and many additional add-ons can be found in their respective plugin download centers.
> 
> Web development tools allow developers to work with a variety of web technologies, including HTML, CSS, the DOM, JavaScript, and other components that are handled by the web browser. Due to the increasing demand from web browsers to do more popular web browsers have included more features geared for developers.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Web_development_tools)

While most browsers come equipped with web developer tools, the [Chrome developer tools](https://developers.google.com/web/tools/chrome-devtools/) are currently the most talked about and widely used.

I'd suggest learning and using the [Chrome web developer tools](https://developers.google.com/web/tools/chrome-devtools/), simply because the best resources for learning web developer tools revolves around Chrome DevTools.

#### Learn Chrome Web Developer Tools:

*   [Chrome Developer Tools](https://code.tutsplus.com/courses/chrome-developer-tools) \[watch\]\[$\]
*   [Explore and Master Chrome DevTools](http://discover-devtools.codeschool.com/) \[watch\]
*   [Mastering Chrome Developer Tools v2](https://frontendmasters.com/courses/chrome-dev-tools-v2/) \[watch\]\[$\]
*   [Using The Chrome Developer Tools](http://www.pluralsight.com/courses/chrome-developer-tools) \[watch\]\[$\]
*   [Learning Chrome Web Developer Tools](https://www.lynda.com/Chrome-tutorials/Learning-Chrome-Web-Developer-Tools/590844-2.html) \[watch\]\[$\]

#### Chrome Web Developer Tools Docs:

*   [Command Line API Reference](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference)
*   [Keyboard & UI Shortcuts Reference](https://developers.google.com/web/tools/iterate/inspect-styles/shortcuts)
*   [Per-Panel Documentation](https://developers.google.com/web/tools/chrome-devtools/#docs)
*   [Configure and Customize DevTools](https://developer.chrome.com/devtools/docs/settings)

### 3.27 - Learn the Command Line (aka CLI)

> A command-line interface or command language interpreter (CLI), also known as command-line user interface, console user interface, and character user interface (CUI), is a means of interacting with a computer program where the user (or client) issues commands to the program in the form of successive lines of text (command lines).
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)

#### General Learning:

*   [The Bash Guide](http://guide.bash.academy/) \[read\]
*   [Command Line Power User](http://commandlinepoweruser.com/) \[watch\]
*   [Learn Enough Command Line to Be Dangerous](http://www.learnenough.com/command-line-tutorial) \[read\] \[free to $\]

#### Mastering:

*   [Advanced Command Line Techniques](https://code.tutsplus.com/courses/advanced-command-line-techniques) \[watch\]\[$\]
*   [Introduction to Bash, VIM & Regex](https://frontendmasters.com/courses/bash-vim-regex/) \[watch\]\[$\]

### 3.28 - Learn Node.js

> Node.js is an open-source, cross-platform runtime environment for developing server-side web applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on OS X, Microsoft Windows, Linux, FreeBSD, NonStop, IBM AIX, IBM System z and IBM i. Its work is hosted and supported by the Node.js Foundation, a collaborative project at Linux Foundation.
> 
> Node.js provides an event-driven architecture and a non-blocking I/O API designed to optimize an application's throughput and scalability for real-time web applications. It uses Google V8 JavaScript engine to execute code, and a large percentage of the basic modules are written in JavaScript. Node.js contains a built-in library to allow applications to act as a web server without software such as Apache HTTP Server, Nginx or IIS.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Node.js)

#### General Learning:

*   [The Art of Node](https://github.com/maxogden/art-of-node#the-art-of-node) \[read\]
*   [Introduction to Node.js](https://frontendmasters.com/courses/node-js/) \[watch\]\[$\]
*   [Introduction to Node.js from Evented Mind](https://www.eventedmind.com/classes/introduction-to-node-js-4c0326de) \[watch\]
*   [io.js and Node.js Next: Getting Started](http://www.pluralsight.com/courses/running-node-applications-io-js) \[watch\]\[$\]
*   [Learning Node: Moving to the Server-Side](https://www.amazon.com/Learning-Node-Server-Side-Shelley-Powers/dp/1491943122/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=264ce29eb0775f4e8ccb7db892539555&camp=1789&creative=9325) \[read\]\[$\]
*   [Learn You The Node.js](https://github.com/workshopper/learnyounode) \[self-guided workshops\]
*   [Node.js Basics](http://teamtreehouse.com/library/nodejs-basics) \[watch\]\[$\]
*   [Node.js in Practice](https://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=e202c01e97ebad79157fab3b59723e94&camp=1789&creative=9325) \[read\]\[$\]
*   [Real-time Web with Node.js](https://www.codeschool.com/courses/real-time-web-with-node-js) \[watch\]
*   [API Design in Node.js, v3](https://frontendmasters.com/courses/api-design-nodejs-v3/) \[watch\]\[$\]
*   [Learn Node](https://learnnode.com/) \[watch\]\[$\]

### 3.29 - Learn Modules

#### General Learning:

*   [JavaScript for impatient programmers - Modules](http://exploringjs.com/impatient-js/ch_modules.html) \[read\]
*   [ES6 Modules in Depth](https://ponyfoo.com/articles/es6-modules-in-depth) \[read\]
*   [Exploring JS - Modules](http://exploringjs.com/es6/ch_modules.html#ch_modules) \[read\]
*   [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) \[read\]

#### References/Docs:

*   [MDN - export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
*   [MDN - import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

### 3.30 - Learn Module loaders/bundlers

#### Webpack:

*   [Webpack](https://webpack.js.org/guides/getting-started/) \[read\]
*   [Webpack 4 Fundamentals](https://frontendmasters.com/courses/webpack-fundamentals/) \[watch\]\[$\]
*   [Survivejs.com Webpack Book](https://survivejs.com/webpack/introduction/) \[read\]

#### Rollup:

*   [Rollup](http://rollupjs.org/guide/) \[read\]
    *   [Microbundle](https://github.com/developit/microbundle)

#### Parcel

*   [Parcel](https://parceljs.org/getting_started.html) \[read\]

### 3.31 - Learn Package Manager

> A package manager or package management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing software packages for a computer's operating system in a consistent manner. It typically maintains a database of software dependencies and version information to prevent software mismatches and missing prerequisites.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Package_manager)

#### General Learning:

*   [An introduction to how JavaScript package managers work](https://medium.freecodecamp.com/javascript-package-managers-101-9afd926add0a#.hu6knvct3) \[read\]
*   [The Mystical & Magical SemVer Ranges Used By npm & Bower](http://developer.telerik.com/featured/mystical-magical-semver-ranges-used-npm-bower/) \[read\]
*   [Package Managers: An Introductory Guide For The Uninitiated Front-End Developer](http://codylindley.com/techpro/2013_04_12__package-managers-an-introducto/) \[read\]
*   [npm docs](https://docs.npmjs.com/)
*   [yarn docs](https://yarnpkg.com/en/docs/)

### 3.32 - Learn Version Control

> A component of software configuration management, version control, also known as revision control or source control, is the management of changes to documents, computer programs, large web sites, and other collections of information. Changes are usually identified by a number or letter code, termed the "revision number," "revision level," or simply "revision." For example, an initial set of files is "revision 1." When the first change is made, the resulting set is "revision 2," and so on. Each revision is associated with a timestamp and the person making the change. Revisions can be compared, restored, and with some types of files, merged.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Version_control)

The most common solution used for [version control](https://en.wikipedia.org/wiki/Version_control) today is [Git](https://git-scm.com/). Learn it!

#### General Learning:

*   [Getting Git Right](https://www.atlassian.com/git/) \[read\]
*   [Git Fundamentals](http://www.pluralsight.com/courses/git-fundamentals) \[watch\]\[$\]
*   [learn Enough Git](https://www.learnenough.com/git-tutorial) \[read\]
*   [Ry's Git Tutorial](https://www.amazon.com/Rys-Git-Tutorial-Ryan-Hodson-ebook/dp/B00QFIA5OC) \[read\]

#### Mastering:

*   [Git In-depth](https://frontendmasters.com/courses/git-in-depth/) \[watch\]\[$\]
*   [Advanced Git Tutorials](https://www.atlassian.com/git/tutorials/advanced-overview/) \[read\]
*   [Pro Git](http://git-scm.com/book/en/v2) \[read\]
*   [Learn Git Branching](http://learngitbranching.js.org/) \[interact\]

#### References/Docs:

*   [https://git-scm.com/doc](https://git-scm.com/docs)
*   [git-cheatsheet](https://gist.github.com/eashish93/3eca6a90fef1ea6e586b7ec211ff72a5)

### 3.33 - Learn Build and Task Automation

> Build automation is the process of automating the creation of a software build and the associated processes including: compiling computer source code into binary code, packaging binary code, and running automated tests.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Build_automation)

#### General Learning:

*   [Getting Started with Gulp](https://www.amazon.com/Getting-Started-Gulp-Travis-Maynard/dp/1784395765?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=3eb1e7a868a09b44f90570c56ef5f53b&camp=1789&creative=9325) \[read\]\[$\]
*   [Gulp Basics](http://teamtreehouse.com/library/gulp-basics) \[watch\]\[$\]
*   [JavaScript Build Automation With Gulp.js](http://www.pluralsight.com/courses/javascript-build-automation-gulpjs) \[watch\]\[$\]

#### References/Docs:

*   [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

Gulp is great. However, you might only need `npm run`. Before turning to additional complexity in your application stack ask yourself if `npm run` can do the job. If you need more, use Gulp.

Read:

*   [Give Grunt the Boot! A Guide to Using npm as a Build Tool](http://www.sitepoint.com/guide-to-npm-as-a-build-tool/)
*   [Using npm as a Build System for Your next Project](https://drublic.de/blog/npm-builds)
*   [Using npm as a Task Runner](http://teamtreehouse.com/library/using-npm-as-a-task-runner) \[watch\]\[$\]
*   [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.z8plsoxxs)
*   [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/)

### 3.34 - Learn Site Performance Optimization

> Web performance optimization, WPO, or website optimization is the field of knowledge about increasing the speed in which web pages are downloaded and displayed on the user's web browser. With the average internet speed increasing globally, it is fitting for website administrators and webmasters to consider the time it takes for websites to render for the visitor.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Web_performance_optimization)

#### General Learning:

*   [Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860) \[watch\]
*   [Even Faster Web Sites: Performance Best Practices for Web Developers](https://www.amazon.com/Even-Faster-Web-Sites-Performance/dp/0596522304?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=4fe6a82bbf727209ba337ecaa0e516bc&camp=1789&creative=9325) \[read\]\[$\]
*   [High Performance Web Sites: Essential Knowledge for Front-End Engineers](https://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=e93ab3ea06b7e3e93ee0d868249d0e3f&camp=1789&creative=9325) \[read\]\[$\]
*   [JavaScript Performance Rocks](http://javascriptrocks.com/) \[read\]\[$\]
*   [PageSpeed Insights Rules](https://developers.google.com/speed/docs/insights/rules) \[read\]
*   [perf-tooling.today](http://www.perf-tooling.today/) \[read\]
*   [Performance Calendar](http://calendar.perfplanet.com) \[read\]
*   [perf.rocks](http://perf.rocks/) \[read\]
*   [Using WebPageTest](https://www.amazon.com/Using-WebPageTest-Rick-Viscomi/dp/1491902590/ref=sr_1_1?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=91a76d5d4b4f47cf4e0d1392cc9cea30&camp=1789&creative=9325) \[read\]\[$\]
*   [Web Performance Daybook Volume 2](https://www.amazon.com/Web-Performance-Daybook-Techniques-Optimizing/dp/1449332919/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=59e32c394c2377bb17af1d801b924d1d&camp=1789&creative=9325) \[read\]\[$\]
*   [Website Performance](https://frontendmasters.com/courses/web-performance/) \[watch\]\[$\]
*   [Web Performance with Webpack 4](https://frontendmasters.com/courses/performance-webpack/) \[watch\]\[$\]
*   [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884) \[watch\]
*   [Front-End Performance Checklist 2019 \[PDF, Apple Pages, MS Word\]](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/) \[read\]

### 3.35 - Learn Testing

> **Unit Testing** \- In computer programming, unit testing is a software testing method by which individual units of source code, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine whether they are fit for use. Intuitively, one can view a unit as the smallest testable part of an application.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Unit_testing)
> 
> **Functional Testing** \- Functional testing is a quality assurance (QA) process and a type of black box testing that bases its test cases on the specifications of the software component under test. Functions are tested by feeding them input and examining the output, and internal program structure is rarely considered (not like in white-box testing). Functional testing usually describes what the system does.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Functional_testing)
> 
> **Integration Testing** \- Integration testing (sometimes called integration and testing, abbreviated I&T) is the phase in software testing in which individual software modules are combined and tested as a group. It occurs after unit testing and before validation testing. Integration testing takes as its input modules that have been unit tested, groups them in larger aggregates, applies tests defined in an integration test plan to those aggregates, and delivers as its output the integrated system ready for system testing.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Integration_testing)

#### General Learning:

*   [JavaScript Testing Practices and Principles](https://frontendmasters.com/courses/testing-practices-principles/) \[watch\]\[$\]
*   [Front-End First: Testing and Prototyping JavaScript Apps](http://www.pluralsight.com/courses/testing-and-prototyping-javascript-apps) \[watch\]\[$\]
*   [Let's Code: Test-Driven JavaScript](http://www.letscodejavascript.com/) \[watch\]\[$\]
*   [JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549) \[watch\]
*   [JavaScript Testing Recipes](http://jstesting.jcoglan.com/) \[read\]\[$\]
*   [Testable JavaScript](https://www.amazon.com/gp/product/1449323391?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=a27df21b09e3eff9ad8033a5c959e7f0&camp=1789&creative=9325) \[read\]\[$\]
*   [Test-Driving JavaScript Applications: Rapid, Confident, Maintainable Code](https://www.amazon.com/Test-Driving-JavaScript-Applications-Confident-Maintainable/dp/1680501747?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=c97c9c87e634569328a335cba0b0c15f&camp=1789&creative=9325)\[read\]\[$\]
*   [Test-Driven JavaScript Development](https://www.amazon.com/dp/0321683919/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=f707aa5243bf6bac68bda05d1e6369e8&camp=1789&creative=9325) \[read\]\[$\]
*   [The Way of the Web Tester: A Beginner's Guide to Automating Tests](https://www.amazon.com/Way-Web-Tester-Beginners-Automating/dp/1680501836/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=3e2c87950e0350d64c9d9862ed2ef524&camp=1789&creative=9325) \[read\]\[$\]
*   [Testing React Applications, v2](https://frontendmasters.com/courses/testing-react/) \[watch\]\[$\]
*   [Learn Javascript Unit Testing With Mocha, Chai and Sinon](https://www.udemy.com/learn-javascript-unit-testing-with-mocha-chai-and-sinon/) \[watch\]\[$\]

### 3.36 - Learn Headless Browsers

> A headless browser is a web browser without a graphical user interface.
> 
> Headless browsers provide automated control of a web page in an environment similar to popular web browsers, but are executed via a command line interface or using network communication. They are particularly useful for testing web pages as they are able to render and understand HTML the same way a browser would, including styling elements such as page layout, color, font selection and execution of JavaScript and AJAX which are usually not available when using other testing methods. Google stated in 2009 that using a headless browser could help their search engine index content from websites that use AJAX.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Headless_browser)

*   [Getting Started with Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome) \[readme\]

[PhantomJS is no longer maintained](https://www.infoq.com/news/2017/04/Phantomjs-future-uncertain), [Headless Chrome](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md) steps in.

### 3.37 - Learn Offline Development

Offline development (aka offline first) is an area of knowledge and discussion around development practices for devices that are not always connected to the Internet or a power source.

#### General Learning:

*   [Creating HTML5 Offline Web Applications](http://apress.jensimmons.com/v5/pro-html5-programming/ch12.html) \[read\]
*   [Everything You Need to Know to Create Offline-First Web Apps](https://github.com/pazguille/offline-first) \[read\]
*   [Offline First](http://www.webdirections.org/offlineworkshop/ibooksDraft.pdf) \[read\]
*   [offlinefirst.org](http://offlinefirst.org) \[read\]
*   [The Offline Cookbook](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/) \[read\]
*   [Offline Quickstart](https://developers.google.com/web/ilt/pwa/offline-quickstart)\[read\]

### 3.38 - Learn Web/Browser/App Security

*   [Browser Security Handbook](https://code.google.com/p/browsersec/wiki/Main) \[read\]
*   [Frontend Security](https://mikewest.org/2013/09/frontend-security-frontendconf-2013) \[watch\]
*   [Hacksplaining](https://www.hacksplaining.com/) \[read\]
*   [HTML5 Security Cheatsheet](https://html5sec.org) \[read\]
*   [HTTP Security Best Practice](https://httpsecurityreport.com/best_practice.html) \[read\]
*   [Identity and Data Security for Web Development: Best Practices](https://www.amazon.com/Identity-Data-Security-Web-Development/dp/1491937017?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=f5f2aaa4d5f944a3ccc316a16e3673f4&camp=1789&creative=9325) [read]($)
*   [Security for Web Developers: Using JavaScript, HTML, and CSS](https://www.amazon.com/Security-Web-Developers-Using-JavaScript/dp/1491928646/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=df49be399d7d1a12acebe5a85637a7a8&camp=1789&creative=9325) \[read\]\[$\]
*   [The Basics of Web Application Security](http://martinfowler.com/articles/web-security-basics.html) \[read\]
*   [The Internet: Encryption & Public Keys](https://www.youtube.com/watch?v=ZghMPWGXexs&list=PLzdnOPI1iJNfMRZm5DDxco3UdsFegvuB7&index=6) \[watch\]
*   [The Internet: Cybersecurity & Crime](https://www.youtube.com/watch?v=AuYNXgO_f3Y&list=PLzdnOPI1iJNfMRZm5DDxco3UdsFegvuB7&index=7) \[watch\]
*   [The Tangled Web: A Guide to Securing Modern Web Applications](http://lcamtuf.coredump.cx/tangled/) \[read\]\[$\]
*   [Web Security Basics](https://github.com/vasanthk/web-security-basics) \[read\]
*   [Web security](https://developer.mozilla.org/en-US/docs/Web/Security) \[read\]
*   [Web Security](https://frontendmasters.com/courses/web-security/) \[watch\]\[$\]
*   [Full Stack for Front End Engineers](https://frontendmasters.com/courses/full-stack/) \[watch\]\[$\]

### 3.39 - Learn Multi-Device Development

![](assets/images/things.jpg "http://bradfrost.com/blog/post/this-is-the-web/")

Image source: [http://bradfrost.com/blog/post/this-is-the-web/](http://bradfrost.com/blog/post/this-is-the-web/)

A website or web application can run on a wide range of computers, laptops, tablets and phones, as well as a handful of new devices (watches, thermostats, fridges, etc.). How you determine what devices you'll support and how you will develop to support those devices is called, "multi-device development strategy". Below, I list the most common multi-device development strategies.

*   Build a [responsive (RWD)](https://en.wikipedia.org/wiki/Responsive_web_design) web site/app for all devices.
*   Build an [adaptive/progressively](https://en.wikipedia.org/wiki/Adaptive_web_design) enhanced web site/app for all devices.
*   Build a website, web app, native app, or hybrid-native app for each individual device or a grouping of devices.
*   Attempt to retrofit something you have already built using bits and parts from strategies 1, 2 or 3.

#### General Learning:

*   [A book Apart Pack - Responsive Web Design](https://abookapart.com/collections/responsive-design) \[read\]\[$\]
*   [A Book Apart Pack - Design For Any Device](https://abookapart.com/collections/design-for-any-device) \[read\]\[$\]
*   [Adaptive Web Design](https://www.amazon.com/gp/product/0134216148?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=defa398e66db76e7edbb8ddfa28caa1e&camp=1789&creative=9325) \[read\]\[$\]
*   [Designing with Progressive Enhancement](https://www.amazon.com/Designing-Progressive-Enhancement-Building-Everyone/dp/0321658884/?&_encoding=UTF8&tag=frontend-handbook-20&linkCode=ur2&linkId=bdac6f12a3d24fe694468aa8145001eb&camp=1789&creative=9325) \[read\]\[$\]
*   [Mobile Web Development](https://www.udacity.com/course/mobile-web-development--cs256) \[watch\]
*   [CSS Grids and Flexbox for Responsive Web Design](https://frontendmasters.com/courses/css-grids-flexbox/) \[watch\]\[$\]
*   [Responsive HTML Email Design](https://frontendmasters.com/courses/responsive-email/) \[watch\]\[$\]
*   [Responsive Images](https://www.udacity.com/course/responsive-images--ud882) \[watch\]
*   [Responsive Web Typography, v2](https://frontendmasters.com/courses/responsive-typography-v2/) \[watch\]\[$\]
*   [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893) \[watch\]

Chapter 4. Learning Front-end Dev: Instructor Directed Resources/Recommendations
--------------------------------------------------------------------------------

This chapter highlights a few options for instructor directed learning via front-end development schools, courses, programs, and bootcamps.

The table below contains a small selection of instructor-led courses (i.e. programs, schools, and bootcamps). Use the table to get a general idea of what is available, the cost, duration, and locations of courses. (Be aware the information can change quickly)

company

program

price estimate

on site

remote

duration

Betamore

[Front-end Web Development](http://betamore.com/academy/front-end-web-development/)

3,000

Baltimore, MD

10 weeks

BLOC

[Become a Front-end Developer](https://www.bloc.io/frontend-development-bootcamp)

4,999

yes

16 weeks @ 25hr/wk or 32 weeks @ 10hr/wk

General Assembly

[Front-end Web Development](https://generalassemb.ly/education/front-end-web-development)

3,500

multiple locations

3 hrs/day 2 days/wk for 8 weeks

Thinkful

[Front-end Web Development](http://www.thinkful.com/courses/learn-web-development-online)

300 per month

yes

15 hrs/wk for 3 months

Turing School of Software & Design

[Front-End Engineering](https://www.turing.io/programs/front-end-engineering)

20,000

Denver, CO

7 months full time

**Notes:**

1.  For a complete list of schools, courses, programs, and bootcamps to evaluate have a look at [switchup.org](https://www.switchup.org/front-end-development) or [coursereport.com](https://www.coursereport.com/tracks/front-end-developer-bootcamps).

If you can't afford a directed education (can be very expensive), a self directed education using screencasts, books, and articles is a viable alternative to learn front-end development for the self-driven individual.

Chapter 5. Front-end Dev Tools
------------------------------

This chapter identifies the tools of the trade. Make sure you understanding the category that a set of tools falls within, before studying the tools themselves. Note that just because a tool is listed, or a category of tools is documented, this does not equate to an assertion on my part that a front-end developer should learn it and use it. Choose your own toolbox. I'm just providing the common toolbox options.

### 5.1 - Doc/API Browsing Tools

#### Tools to browse common developer documents and developer API references.

*   [Dash](https://kapeli.com/dash) \[OS X, iOS\]\[$\]
*   [DevDocs](http://devdocs.io/)
*   [Velocity](https://velocity.silverlakesoftware.com/) \[Windows\]\[$\]
*   [Zeal](https://zealdocs.org/) \[Windows, Linux\]

#### Cheatsheets:

*   [devhints.io](https://devhints.io)

### 5.2 - SEO Tools

#### General SEO Tools:

*   [Keyword Tool](http://keywordtool.io/)
*   [Google Webmasters Search Console](https://www.google.com/webmasters/)
*   [Varvy SEO tool](https://varvy.com/tools/)

#### Tools for Finding SEO Tools:

*   [SEO Tools - The Complete List](http://backlinko.com/seo-tools)
*   [CuratedSEOTools - Curated directory of the best SEO tools](https://curatedseotools.com/)

### 5.3 - Prototyping & Wireframing Tools

#### Creating:

*   [Axure](http://www.axure.com/) \[$\]
*   [Balsamiq Mockups](https://balsamiq.com) \[$\]
*   [Justinmind](http://www.justinmind.com/) \[$\]
*   [Moqups](https://moqups.com/) \[$\]
*   [proto.io](https://proto.io/) \[$\]
*   [UXPin](http://www.uxpin.com/) \[free to $\]

#### Collaboration / Presenting:

*   [InVision](http://www.invisionapp.com/) \[free to $\]
*   [Conceptboard](https://conceptboard.com/) \[free to $\]
*   [myBalsamiq](https://balsamiq.cloud/) \[$\]
*   [Marvel](https://marvelapp.com/) \[free to $\]

### 5.4 - Diagramming Tools

*   [draw.io](https://www.draw.io/) \[free to $\]
*   [Cacoo](https://cacoo.com) \[free to $\]
*   [gliffy](https://www.gliffy.com/products/online/) \[free to $\]
*   [sketchboard.io](https://sketchboard.io) \[$\]

### 5.5 - HTTP/Network Tools

*   [Charles](http://www.charlesproxy.com/) \[$\]
*   [Chrome DevTools Network Panel](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/resource-loading)
*   [Insomnia](https://insomnia.rest/) \[free - $\]
*   [Mitmproxy](https://mitmproxy.org/) \[free\]
*   [Paw](https://paw.cloud/) \[$\]
*   [Postman](https://www.getpostman.com/) \[free - $\]

### 5.6 - Code Editing Tools

> A source code editor is a text editor program designed specifically for editing source code of computer programs by programmers. It may be a standalone application or it may be built into an integrated development environment (IDE) or web browser. Source code editors are the most fundamental programming tool, as the fundamental job of programmers is to write and edit source code.
> 
> — [Wikipedia](https://en.wikipedia.org/wiki/Source_code_editor)

Front-end code can minimally be edited with a simple text editing application like Notepad or TextEdit. But, most front-end practitioners use a code editor specifically design for editing a programming language.

Code editors come in all sorts of types and size, so to speak. Selecting one is a rather subjective engagement. Choose one, learn it inside and out, then get on to learning HTML, CSS, DOM, and JavaScript.

However, I do strongly believe, minimally, a code editor should have the following qualities (by default or by way of plugins):

1.  Good documentation on how to use the editor
2.  Report (i.e., hinting/linting/errors) on the code quality of HTML, CSS, and JavaScript.
3.  Offer syntax highlighting for HTML, CSS, and JavaScript.
4.  Offer code completion for HTML, CSS, and JavaScript.
5.  Be customizable by way of a plug-in architecture
6.  Have available a large repository of third-party/community plug-ins that can be used to customize the editor to your liking
7.  Be small, simple, and not coupled to the code (i.e., not required to edit the code)

#### Code Editors:

*   [Atom](https://atom.io/)
*   [Sublime Text](http://www.sublimetext.com/) \[$\]
*   [WebStorm](https://www.jetbrains.com/webstorm/whatsnew/) \[$\]
*   [Visual Studio Code](https://code.visualstudio.com/)

#### Online Code Editors:

*   [PaizaCloud](https://paiza.cloud) \[free to $\]
*   [AWS Cloud9](https://aws.amazon.com/cloud9/) \[$\]
*   [Codeanywhere](https://codeanywhere.com) \[free to $\]
*   [StackBliz](https://stackblitz.com/)
*   [codeSandbox](https://codesandbox.io/)

#### Shareable & Runnable Simple Code Editors:

Used to share limited amounts of immediately runnable code. Not a true code editor but a tool that can be used to share small amounts of immediately runnable code in a web browser.

*   [CodePen](http://codepen.io/) \[free to $\]
*   [jsbin.com](http://jsbin.com/) \[free to $\]
*   [jsfiddle.net](http://jsfiddle.net/)
*   [glitch](https://glitch.com/)

I recommending using [Visual Studio Code](https://code.visualstudio.com/) because of the quality of the tool and the continuous improvements made to the editor that likely won't stop or slow due to the fact that Microsoft is behind the tool. It is widely used:

![](assets/images/vscode.png)

Image source: [https://2018.stateofjs.com/other-tools/text_editors](https://2018.stateofjs.com/other-tools/text_editors)

### 5.7 - Browser Tools

#### JS Utilities to fix Browsers:

*   [History.js](https://github.com/browserstate/history.js)
*   [html2canvas](https://github.com/niklasvh/html2canvas)
*   [Platform.js](https://github.com/bestiejs/platform.js)
*   [URI.js](http://medialize.github.io/URI.js/)

#### General Reference Tools to Determine If X Browser Supports X:

*   [Browser support for broken/missing images](http://codepen.io/bartveneman/full/qzCte/)
*   [Browserscope](http://www.browserscope.org/)
*   [caniuse.com](http://caniuse.com/)
*   [Firefox Platform Status - Implementation & standardization roadmap for web platform features](https://platform-status.mozilla.org/)
*   [HTML5 Please](http://html5please.com/)
*   [HTML5 Test](https://html5test.com/)
*   [iwanttouse.com](http://www.iwanttouse.com/)
*   [web-platform-tests dashboard](https://wpt.fyi/)
*   [whatwebcando.today](https://whatwebcando.today/)

#### Browser Development/Debug Tools:

*   [Chrome Developer Tools (aka DevTools)](https://developers.google.com/web/tools/?hl=en)
    *   [Per-Panel Documentation](https://developers.google.com/web/tools/chrome-devtools/#docs)
    *   [Command Line API Reference](https://developers.google.com/web/tools/javascript/command-line/command-line-reference?hl=en)
    *   [Keyboard & UI Shortcuts Reference](https://developers.google.com/web/tools/iterate/inspect-styles/shortcuts)
    *   [Settings](https://developer.chrome.com/devtools/docs/settings)
*   [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
*   [Safari Web Inspector](https://developer.apple.com/safari/tools/)
*   [Vorlon.js](http://vorlonjs.com/)

#### JavaScript Utilities to Determine If X Browser Supports X:

*   [Feature.js](http://featurejs.com/)
*   [Modernizr](https://modernizr.com/)

#### Broad Browser Polyfills/Shims:

*   [console-polyfill](https://github.com/paulmillr/console-polyfill)
*   [HTML5 Cross Browser Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills)
*   [fetch](https://github.com/github/fetch)
*   [socket.io](http://socket.io/)
*   [SockJS](https://github.com/sockjs/sockjs-client)
*   [webcomponents.js](https://github.com/WebComponents/webcomponentsjs)
*   [webshim](https://afarkas.github.io/webshim/demos/)

#### Hosted Testing/Automation for Browsers:

*   [Browserling](https://www.browserling.com/) \[free to $\]
*   [BrowserStack](https://www.browserstack.com) \[$\]
*   [CrossBrowserTesting.com](http://crossbrowsertesting.com/) \[$\]
*   [Ghost Inspector](https://ghostinspector.com) \[free to $\]
*   [Nightcloud.io](http://nightcloud.io/)
*   [Sauce Labs](https://saucelabs.com/) \[$\]

#### Headless Browsers:

*   [slimerjs](http://slimerjs.org/)
*   [Zombie.js](http://zombie.js.org/)
*   [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)

#### Browser Automation:

Used for functional testing and monkey testing.

*   [CasperJS](http://casperjs.org/)
*   [Nightmare](https://github.com/segmentio/nightmare)
*   [TestCafe](https://github.com/DevExpress/testcafe)

#### Browser Hacks:

*   [browserhacks.com](http://browserhacks.com/)

#### Browser Syncing Tools:

*   [Browsersync](http://www.browsersync.io/)

#### Browser List:

Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env.

*   [Browserslist](https://github.com/ai/browserslist)
    *   [http://browserl.ist/](http://browserl.ist/?q=%3E+2%25)

### 5.8 - HTML Tools

#### HTML Templates/Boilerplates/Starter Kits:

*   [dCodes](http://www.dcodes.net/2/docs/index.html)
*   [Email-Boilerplate](https://github.com/seanpowell/Email-Boilerplate)
*   [HTML5 Boilerplate](https://html5boilerplate.com/)
*   [HTML5 Bones](http://html5bones.com/)
*   [Mobile boilerplate](https://html5boilerplate.com/mobile/)

#### HTML Polyfill:

*   [html5shiv](https://github.com/aFarkas/html5shiv)

#### Transpiling:

*   [Pug](https://pugjs.org/api/getting-started.html)
*   [Markdown](http://daringfireball.net/projects/markdown/)

#### References:

*   [Element attributes](https://html.spec.whatwg.org/multipage/indices.html#attributes-3)
*   [Elements](https://html.spec.whatwg.org/multipage/indices.html#elements-3)
*   [HTML Arrows](http://htmlarrows.com/)
*   [HTML Entity Lookup](http://entity-lookup.leftlogic.com/)
*   [htmlreference.io](http://htmlreference.io/)
*   [HEAD - A free guide to
    
    elements
    
    ](https://gethead.info/)

#### Linting/Hinting:

*   [HTMLHint](https://htmlhint.io/)
*   [html-inspector](https://github.com/philipwalton/html-inspector)

#### Optimizer:

*   [HTML Minifier](http://kangax.github.io/html-minifier/)

#### Online Creation/Generation/Experimentation Tools:

*   [tablesgenerator.com](http://www.tablesgenerator.com/)

#### Authoring Conventions:

*   [HTML Code Guide](http://codeguide.co/#html)
*   [Principles of Writing Consistent, Idiomatic HTML](https://github.com/necolas/idiomatic-html)

#### Workflow:

*   [Emmet](http://emmet.io/)

#### HTML Outliner:

*   [HTML 5 Outliner](https://gsnedders.html5.org/outliner/)

#### Trending HTML Repositories on GitHub This Month:

[https://github.com/trending?l=html&since=monthly](https://github.com/trending?l=html&since=monthly)

### 5.9 - CSS Tools

#### CSS [Utilities](https://css-tricks.com/need-css-utility-library/):

*   [Basscss](http://basscss.com/)
*   [Skeleton](http://getskeleton.com/)
*   [Shed](http://tedconf.github.io/shed-css/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Tachyons](https://github.com/tachyons-css/tachyons/)

#### CSS Frameworks (utilities + UI):

*   [Base](http://getbase.org/)
*   [Bulma](http://bulma.io/)
*   [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
*   [Concise](http://concisecss.com/)
*   [Foundation](http://foundation.zurb.com/)
*   [Material Design Lite (MDL)](http://www.getmdl.io/index.html)
*   [Metro UI](http://metroui.org.ua/)
*   [Mini.css](https://minicss.org/)
*   [Mobi.css](http://getmobicss.com/)
*   [Picnic](http://picnicss.com/)
*   [Pure.css](http://purecss.io/)
*   [Semantic UI](http://semantic-ui.com/)
*   [Shoelace](https://shoelace.style/)
*   [Spectre.css](https://picturepan2.github.io/spectre/)

#### Mobile Only CSS Frameworks:

*   [Ratchet](http://goratchet.com/)

#### CSS Reset:

> A CSS Reset (or “Reset CSS”) is a short, often compressed (minified) set of CSS rules that resets the styling of all HTML elements to a consistent baseline.
> 
> — [cssreset.com](http://cssreset.com/what-is-a-css-reset/)

*   [Eric Meyer's “Reset CSS” 2.0](https://meyerweb.com/eric/tools/css/reset/)
*   [Normalize](https://necolas.github.io/normalize.css/)
*   [sanitize.css](https://github.com/jonathantneal/sanitize.css)

#### Transpiling:

*   [pleeease.io](http://pleeease.io/)
*   [PostCSS](https://github.com/postcss/postcss) & [cssnext](http://cssnext.io/)
*   [rework](https://github.com/reworkcss/rework) & [myth](http://www.myth.io/)

#### References:

*   [CSS Cursors](http://csscursor.info/)
*   [css3test.com](http://css3test.com/)
*   [css3clickchart.com](http://css3clickchart.com/)
*   [cssreference.io](http://cssreference.io/)
*   [CSS Indexes - A listing of every term defined by CSS specs](https://drafts.csswg.org/indexes/)
*   [css4-selectors.com](http://css4-selectors.com/)
*   [css4 Rocks](http://css4.rocks/)
*   [CSS TRIGGERS...A GAME OF LAYOUT, PAINT, AND COMPOSITE](http://csstriggers.com/)
*   [CSS Tricks Almanac](https://css-tricks.com/almanac/)
*   [cssvalues.com](http://cssvalues.com/)
*   [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
*   [CSS Cheat Sheet](https://adam-marsden.co.uk/css-cheat-sheet/)
*   [What’s next for CSS?](https://cssdb.org/)

#### Linting/Hinting:

*   [CSS Lint](http://csslint.net/)
*   [stylelint](http://stylelint.io/)

#### Code Formatter/Beautifier:

*   [CSScomb](https://github.com/csscomb/csscomb.js)
*   [CSSfmt](https://github.com/morishitter/cssfmt)

#### Optimizer:

*   [clean-css](https://github.com/jakubpawlowicz/clean-css)
*   [cssnano](http://cssnano.co/)
*   [CSSO](http://css.github.io/csso/)
*   [purgecss](https://github.com/FullHuman/purgecss)

#### Online Creation/Generation/Experimentation Tools:

*   [CSS Arrow Please](http://cssarrowplease.com/)
*   [CSS Matic](http://www.cssmatic.com/)
*   [Enjoy CSS](http://enjoycss.com/)
*   [flexplorer](http://bennettfeely.com/flexplorer/)
*   [patternify.com](http://patternify.com)
*   [patternizer.com](http://patternizer.com/)
*   [Ultimate CSS Gradient Generator](http://www.colorzilla.com/gradient-editor/)

#### Architecting CSS:

*   [Atomic Design](http://atomicdesign.bradfrost.com/) \[read\]
*   [BEM](http://getbem.com/introduction/)
*   [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
*   [OOCSS](http://oocss.org/) \[read\]
*   [SMACSS](https://smacss.com/) \[read\]\[$\]
    *   [Scalable Modular Architecture for CSS (SMACSS)](https://frontendmasters.com/courses/smacss/) \[watch\]\[$\]
*   [SUIT CSS](http://suitcss.github.io)
*   [rscss](http://rscss.io/)

#### Authoring/Architecting Conventions:

*   [CSS code guide](http://codeguide.co/#css) \[read\]
*   [css-architecture](https://github.com/jareware/css-architecture) \[read\]
*   [cssguidelin.es](http://cssguidelin.es/) \[read\]
*   [Idiomatic CSS](https://github.com/necolas/idiomatic-css) \[read\]
*   [MaintainableCSS](http://maintainablecss.com/) \[read\]
*   [Standards for Developing Flexible, Durable, and Sustainable HTML and CSS](http://mdo.github.io/code-guide/) \[read\]
*   [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css) \[read\]

#### Style Guide Resources:

*   [Frontify](https://frontify.com/) \[$\]
*   [SC5 STYLE GUIDE GENERATOR](http://styleguide.sc5.io/)
*   [styleguide-generators](https://github.com/davidhund/styleguide-generators)
*   [Catalog](https://docs.catalog.style/)

#### CSS in JS:

*   [styled components](https://www.styled-components.com/)
*   [Emotion](https://emotion.sh/docs/introduction)
*   [Radium](https://formidable.com/open-source/radium/)
*   [Aphrodite](https://github.com/Khan/aphrodite)

#### Trending CSS Repositories on GitHub This Month:

[https://github.com/trending?l=css&since=monthly](https://github.com/trending?l=css&since=monthly)

### 5.10 - DOM Tools

#### DOM Libraries/Frameworks:

*   [Bliss](http://blissfuljs.com/docs.html)
*   [jQuery](http://jquery.com/)
    *   [You Don't Need jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery)
*   [Zepto](http://zeptojs.com/)
*   [cash](https://github.com/kenwheeler/cash/)
*   [Umbrella JS](http://umbrellajs.com/)
*   [nanoJS](https://vladocar.github.io/nanoJS/)

#### DOM Utilities:

*   [Keypress](http://dmauro.github.io/Keypress/)
*   [Tether](http://tether.io/docs/welcome/)
*   [clipboard.js](http://zenorocha.github.io/clipboard.js/)

#### DOM Event Tools:

*   [Keyboard Event Viewer](http://w3c.github.io/uievents/tools/key-event-viewer.html)

#### DOM Performance Tools:

*   [Chrome DevTools Timeline](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool)
*   [DOM Monster](http://mir.aculo.us/dom-monster/)

#### References:

*   [Events](https://html.spec.whatwg.org/#events-2)
*   [DOM Browser Support](http://www.webbrowsercompatibility.com/dom/desktop/)
*   [DOM Events Browser Support](http://www.webbrowsercompatibility.com/dom-events/desktop/)
*   [HTML Interfaces Browser Support](http://www.webbrowsercompatibility.com/html-interfaces/desktop/)
*   [MDN Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
*   [MDN Browser Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Window)
*   [MDN Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
*   [MDN Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
*   [MSDN Document Object Model (DOM)](https://msdn.microsoft.com/en-us/library/hh772384%28v=vs.85%29.aspx)

#### DOM Polyfills/Shims:

*   [dom-shims](https://github.com/necolas/dom-shims)
*   [Pointer Events Polyfill: a unified event system for the web platform](https://github.com/jquery/PEP)

#### Virtual DOM:

*   [jsdom](https://github.com/tmpvar/jsdom)
*   [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

### 5.11 - JavaScript Tools

#### JS Utilities:

*   [accounting.js](http://openexchangerates.github.io/accounting.js/)
*   [async](http://caolan.github.io/async/)
*   [axios](https://github.com/mzabriskie/axios)
*   [chance](http://chancejs.com/)
*   [date-fns](https://date-fns.org/)
*   [dinero](https://sarahdayan.github.io/dinero.js/module-Dinero.html)
*   [Finance.js](http://financejs.org/)
*   [format.js](http://formatjs.io/)
*   [Howler.js](https://howlerjs.com)
*   [immutable](https://facebook.github.io/immutable-js/)
*   [is.js](http://arasatasaygin.github.io/is.js/)
*   [lodash](https://lodash.com/)
    *   [You-Dont-Need-Lodash-Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore)
*   [Luxon](https://moment.github.io/luxon/)
    *   [You don't (may not) need Moment.js](https://github.com/you-dont-need/You-Dont-Need-Momentjs)
*   [Math.js](http://mathjs.org/)
*   [Moment.js](http://momentjs.com/)
*   [Numeral.js](http://numeraljs.com/)
*   [Ramda](http://ramdajs.com/)
*   [RxJS](http://reactivex.io/rxjs/)
*   [TheoremJS](https://theorem.js.org/)
*   [voca](https://vocajs.com/)
*   [wait](https://github.com/elving/wait)
*   [xregexp.com](http://xregexp.com/)

#### Transforming JavaScript Objects Tool:

*   [transform-www](https://transform.now.sh/)

#### Transpiling / Type Checking (ES _to ES_):

*   [TypeScript](https://www.typescriptlang.org/)

#### Type Checking (ES _to ES_):

*   [Flow](https://flowtype.org/)

#### Transpiling (ES _to ES_):

*   [Babel](https://babeljs.io/)
*   [sucrase](https://sucrase.io)
*   [scw](https://swc-project.github.io/)

#### Code-analysis Engine:

*   [Tern](https://ternjs.net/)

#### Linting/Hinting & Style Linter:

*   [eslint](http://eslint.org/)

#### Unit Testing:

*   [AVA](https://github.com/avajs/ava)
*   [Jasmine](http://jasmine.github.io/)
*   [Mocha](http://mochajs.org/)
*   [Tape](https://github.com/substack/tape)

#### Testing Assertions for Unit Testing:

*   [Chai](http://chaijs.com/)
*   [expect.js](https://github.com/Automattic/expect.js)
*   [should.js](http://shouldjs.github.io/)

#### Test Spies, Stubs, and Mocks for Unit Testing:

*   [sinon.js](http://sinonjs.org/)
*   [Kakapo.js](http://devlucky.github.io/kakapo-js)

#### Code Formater/Beautifier:

*   [esformatter](https://github.com/millermedeiros/esformatter#esformatterformatstr-optsstring)
*   [js-beautify](http://jsbeautifier.org/)
*   [jsfmt](http://rdio.github.io/jsfmt/)
*   [prettier](https://github.com/jlongster/prettier)

#### Performance Testing:

*   [benchmark.js](http://benchmarkjs.com/)
*   [jsperf.com](https://jsperf.com/)

#### Visualization, Static Analysis, Complexity, Coverage Tools:

*   [Coveralls](https://coveralls.io/) \[$\]
*   [Esprima](http://esprima.org/)
*   [istanbul](https://github.com/gotwarlost/istanbul)

#### Optimizer:

*   [Closure Compiler](https://developers.google.com/closure/compiler/)
*   [Terser](https://github.com/terser-js/terser)
*   [optimize-js](https://github.com/nolanlawson/optimize-js)
*   [Prepack](https://prepack.io/)

#### Obfuscate:

*   [Javascript Obfuscator](http://www.javascriptobfuscator.com/) \[free to $\]
*   [JScrambler](https://jscrambler.com/) \[$\]

#### Sharable/Runnable Code Editors:

*   [CodeSandbox](https://codesandbox.io/) \[free to $\]

#### Online Regular Expression Editors/Visual Tools:

*   [debuggex](https://www.debuggex.com)
*   [regex101](https://regex101.com/)
*   [regexper](http://regexper.com/)
*   [RegExr](http://regexr.com/)

#### Authoring Convention Tools:

*   [Airbnb's ESLint config, following our styleguide](https://www.npmjs.com/package/eslint-config-airbnb)
*   [Standard - ESLint Shareable Config](https://github.com/feross/eslint-config-standard)

#### Trending JS Repositories on GitHub This Month:

[https://github.com/trending?l=javascript&since=monthly](https://github.com/trending?l=javascript&since=monthly)

#### Most Depended upon Packages on NPM:

[https://www.npmjs.com/browse/depended](https://www.npmjs.com/browse/depended)

### 5.12 - Headless CMS Tools

#### Site Generator Listings:

*   [headless CMS](https://headlesscms.org/)

### 5.13 - Static Site Generators Tools

#### Site Generator Listings:

*   [staticgen.com](https://www.staticgen.com/)
*   [staticsitegenerators.net](https://staticsitegenerators.net/)

### 5.14 - Accessibility Tools

#### Guides

*   [A11Y Style Guide](http://a11y-style-guide.com/style-guide/)
*   [Accessibility Guidelines Checklist](http://accessibility.voxmedia.com)
*   [Interactive WCAG 2.0](http://code.viget.com/interactive-wcag/)
*   [18F Accessibility Guide](https://pages.18f.gov/accessibility/checklist/)

#### Site Scanners

*   [aXe Browser Extension](http://www.deque.com/products/axe/)
*   [Chrome Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb)
*   [Tenon Accessibility Tool](https://tenon.io)
*   [WAVE Accessibility Tool](http://wave.webaim.org)

#### Color Contrast Testers

*   [Colorable](http://jxnblk.com/colorable/demos/text/)
*   [Colorable Matrix](http://jxnblk.com/colorable/demos/matrix/)
*   [Color Safe](http://colorsafe.co)
*   [Color Ratio](http://leaverou.github.io/contrast-ratio/)

#### Low-Vision Simulators

*   [SEE](https://chrome.google.com/webstore/detail/see/dkihcccbkkakkbpikjmpnbamkgbjfdcn) (Chrome)
*   [Spectrum](https://chrome.google.com/webstore/detail/spectrum/ofclemegkcmilinpcimpjkfhjfgmhieb) (Chrome)
*   [NoCoffee](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl) (Chrome)

#### Screen Readers

*   [VoiceOver](http://www.apple.com/accessibility/) (Mac)
*   [JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) (Win)
*   [NVDA](https://www.nvaccess.org) (Win)
*   [ChromeVox](http://www.chromevox.com) (Chrome extension)
*   [Basic screen reader commands](https://www.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/)

#### Readability Testers

*   [Expresso App](http://www.expresso-app.org)
*   [Hemingway App](http://www.hemingwayapp.com)
*   [Grammarly](https://www.grammarly.com)
*   [Readability Score](https://readability-score.com/text/)
*   [MS Office](https://support.office.com/en-us/article/Test-your-document-s-readability-0adc0e9a-b3fb-4bde-85f4-c9e88926c6aa)

#### Articles

*   [Getting Started with ARIA](http://a11yproject.com/posts/getting-started-aria/)
*   [Reframing Accessibility for the Web](http://alistapart.com/article/reframing-accessibility-for-the-web)
*   [An Alphabet of Accessibility Issues](https://the-pastry-box-project.net/anne-gibson/2014-July-31)
*   [Practical ARIA Examples](http://heydonworks.com/practical_aria_examples/)
*   [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
*   [Enable accessibility panel in Chrome dev tools](https://umaar.com/dev-tips/101-accessibility-inspection/)

### 5.15 - App Frameworks (Desktop, Mobile, Tablet, etc.) Tools

#### Front-End App Frameworks:

*   [AngularJS](https://github.com/angular/angular.js) (i.e Angular 1.x.x) + [Batarang](https://github.com/angular/angularjs-batarang)
*   [Angular](https://github.com/angular/angular) (i.e. Angular 2.0.0 +) + [angular-cli](https://github.com/angular/angular-cli)
*   [Aurelia](http://aurelia.io/) \+ [Aurelia CLI](https://github.com/aurelia/cli)
*   [Ember](http://emberjs.com/) \+ [embercli](https://ember-cli.com/) \+ [Ember Inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi?hl=en)
*   [Polymer](https://www.polymer-project.org/1.0/)
*   [React](http://facebook.github.io/react/) \+ [create-react-app](https://github.com/facebookincubator/create-react-app) \+ [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
*   [Vue.js](http://vuejs.org/) \+ [vue-cli](https://github.com/vuejs/vue-cli) & [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
*   [Riot](http://riotjs.com/)

#### Native Hybrid Mobile WebView (i.e., Browser Engine Driven) Frameworks:

These solutions typically use [Cordova](https://cordova.apache.org/), [crosswalk](https://crosswalk-project.org/), or a custom WebView as a bridge to native APIs.

*   [ionic](http://ionicframework.com/)
*   [onsen.io](http://onsen.io/)

#### Native Hybrid Mobile Development Webview (i.e., Browser Engine Driven) Environments/Platforms/Tools:

These solutions typically use [Cordova](https://cordova.apache.org/), [crosswalk](https://crosswalk-project.org/), or a custom WebView as a bridge to native APIs.

*   [Adobe PhoneGap](http://phonegap.com/) \[$\]
*   [cocoon.io](https://cocoon.io) \[free to $\]
*   [ionic hub](http://ionic.io/) \[free to $\]
*   [kony](http://www.kony.com/products/mobility-platform) \[$\]
*   [Monaca](https://monaca.io/) \[$\]

#### Native Desktop App Frameworks:

*   [Electron](http://electron.atom.io/)
*   [NW.js](https://github.com/nwjs/nw.js)
*   [proton](https://proton-native.js.org/#/)
*   [Neutralino.js](https://neutralino.js.org/)
*   [DeskGap](https://deskgap.com/)

#### Native Mobile App Frameworks (Aka JavaScript Native Apps)

These solutions use a JS engine at runtime to interpret JS and bridge that to native APIs. No browser engine or WebView is used. The UI is constructed from native UI components.

*   [Flutter](https://flutter.io/)
*   [NativeScript](https://www.nativescript.org/)
*   [React Native](https://facebook.github.io/react-native/)
*   [tabris.js](https://tabrisjs.com/) \[free to $\]
*   [trigger.io](https://trigger.io/how-it-works/) \[$\]
*   [weex](https://weex.apache.org/)

#### References & demo apps:

*   [todomvc.com](http://todomvc.com/)
*   [RealWorld example apps](https://github.com/gothinkster/realworld) \[code\]
*   [Front-end Guidelines Questionnaire](https://github.com/bradfrost/frontend-guidelines-questionnaire)
*   [Front-end Guidelines](https://github.com/bendc/frontend-guidelines)

#### Performance:

*   [js-framework-benchmark](https://github.com/krausest/js-framework-benchmark)
*   [Front-End Performance Checklist 2019 \[PDF, Apple Pages, MS Word\]](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/) \[read\]

If you are new to front-end/JavaScript application development I'd start with [Vue.js](http://vuejs.org/). Then I'd work my way to [React](http://facebook.github.io/react/). Then I'd look at [Angular 2+](https://angular.io/), [Ember](http://emberjs.com/), or [Aurelia](http://aurelia.io/).

If you are building a simple website that has minimal interactions with data (i.e. mostly a static content web site), you should avoid a front-end framework. A lot of work can be done with a task runner like [Gulp and jQuery](https://github.com/vigetlabs/blendid), while avoiding the unnecessary complexity of learning and using an app framework tool.

Want something smaller than React, consider [Preact](https://preactjs.com/). Preact is an attempt to recreate the core value proposition of React (or similar libraries like Mithril) using as little code as possible, with first-class support for ES2015. Currently the library is around 3kb (minified & gzipped).

### 5.16 - JavaScript App Manager

*   [JSUI](https://github.com/kitze/JSUI)

### 5.17 - State Tools

*   [Redux](https://redux.js.org/)
*   [Mobx](https://mobx.js.org/)
*   [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree)
*   [Cerebral](https://github.com/cerebral/cerebral)
*   [freactal](https://github.com/FormidableLabs/freactal)
*   [unistore](https://github.com/developit/unistore)
*   [unstated](https://github.com/jamiebuilds/unstated)
*   [Vuex](https://vuex.vuejs.org/en/)

### 5.18 - Progressive Web App Tools:

*   [lighthouse](https://developers.google.com/web/tools/lighthouse/)
*   [Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist)

### 5.19 - GUI Development/Build Tools

*   [CodeKit](http://incident57.com/codekit/)
*   [Prepros](https://prepros.io/)
*   [KoalaApp](http://koala-app.com/) \[free\]

### 5.20 - Templating/Data Binding Tools

#### Just Templating:

*   [doT.js](http://olado.github.io/doT/)
*   [art-template](https://aui.github.io/art-template/)
*   [Nunjuncks](http://mozilla.github.io/nunjucks/)

#### Templating and Reactive Data Binding:

*   [ractive.js](https://ractive.js.org/)
*   [react.js](https://facebook.github.io/react/index.html)
    *   [preact](https://preactjs.com/)
    *   [inferno](https://infernojs.org/)
    *   [nerv](https://github.com/NervJS/nerv)
    *   [rax](https://github.com/alibaba/rax)
*   [riot](http://riotjs.com/)
*   [Rivets.js](http://rivetsjs.com/)
*   [vue.js](http://vuejs.org/)

#### Templating to Virtual DOM:

*   [JSX](https://facebook.github.io/jsx/)

### 5.21 - UI Widget & Component Toolkits

#### On Web Platform:

*   [Kendo UI](http://www.telerik.com/kendo-ui) for jQuery \[free to $\]
*   [Materialize](http://materializecss.com/)
*   [Office UI Fabric](http://dev.office.com/fabric)
*   [Semantic UI](http://semantic-ui.com/)
*   [UiKit](https://getuikit.com/)
*   [Webix](http://webix.com/) \[$\]

#### React Specific, On Web Platform:

*   [Ant Design](https://ant.design/)
*   [Material ui](http://material-ui.com/)
*   [Semantic-UI-React](https://react.semantic-ui.com/)
*   [ExtReact](https://www.sencha.com/products/extreact/#app) \[$\]
*   [Fabric](https://developer.microsoft.com/en-us/fabric)

#### Native Desktop/Laptop/Netbook Apps via Web Platform (i.e. used with NW.js and Electron):

*   [Photon](http://photonkit.com/)
*   [React UI Components for OS X El Capitan and Windows 10](http://gabrielbull.github.io/react-desktop/)

If you need a basic set of UI Widgets/Components start with [Semantic UI](http://semantic-ui.com/). If you are building something that needs a grid, spreadsheet, or pivot grid you'll have to look at [Kendo UI](http://www.telerik.com/kendo-ui) or [Webix](http://webix.com/). Keep in mind that most of these solutions still require jQuery.

### 5.22 - Data Visualization (e.g., Charts) Tools

#### JS Libraries:

*   [d3](http://d3js.org/)
*   [sigmajs](http://sigmajs.org/)

#### Widgets & Components:

*   [amCharts](http://www.amcharts.com/) \[free to $\]
*   [AnyChart](http://www.anychart.com/) \[Non-commercial free to $\]
*   [C3.js](http://c3js.org/)
*   [Chartist-jsj](https://github.com/gionkunz/chartist-js)
*   [Chart.js](http://www.chartjs.org/)
*   [Epoch](http://epochjs.github.io/epoch/)
*   [FusionCharts](http://www.fusioncharts.com/) \[$\]
*   [Google Charts](https://developers.google.com/chart/interactive/docs/)
*   [Highcharts](http://www.highcharts.com/) \[Non-commercial free to $\]
*   [ZingChart](http://www.zingchart.com/) \[free to $\]

#### Services (i.e. hosted data visualization services for embedding and sharing):

*   [ChartBlocks](http://www.chartblocks.com/) \[free to $\]
*   [Datawrapper](https://datawrapper.de/)
*   [infogr.am](https://infogr.am) \[free to $\]
*   [plotly](https://plot.ly/) \[free to $\]

### 5.23 - Graphics (e.g., SVG, canvas, webgl) Tools

#### General:

*   [Fabric.js](http://fabricjs.com/)
*   [Two.js](http://jonobr1.github.io/two.js/#introduction)

#### Canvas:

*   [EaselJS](https://github.com/CreateJS/EaselJS)
*   [Paper.js](http://paperjs.org/)

#### SVG:

*   [d3](http://d3js.org/)
*   [GraphicsJS](http://www.graphicsjs.org/)
*   [Raphaël](http://dmitrybaranovskiy.github.io/raphael/)
*   [Snap.svg](http://snapsvg.io/)
*   [svg.js](http://svgjs.com/)

#### WebGL:

*   [pixi.js](https://github.com/pixijs/pixi.js)
*   [three.js](http://threejs.org/)

### 5.24 - Animation Tools

#### CSS and JavaScript Utilities:

*   [Animate Plus](https://github.com/bendc/animateplus)
*   [Animate](https://github.com/daneden/animate.css)
*   [Anime.js](http://animejs.com/)
*   [Animista.net](http://animista.net/)
*   [Dynamics.js](http://dynamicsjs.com/)
*   [GreenSock-JS](http://greensock.com/)
*   [Kute.js](http://thednp.github.io/kute.js/)
*   [Magic](https://github.com/miniMAC/magic)
*   [Micron.js](https://webkul.github.io/micron/)
*   [Motion](http://mojs.io/)
*   [TweenJS](https://github.com/CreateJS/TweenJS)
*   [Popmotion](https://popmotion.io)
*   [Velocity.js](http://julian.com/research/velocity/)

#### Polyfills/Shims:

*   [web-animations-js](https://github.com/web-animations/web-animations-js)

#### Animation References:

*   [canianimate.com](http://canianimate.com/)

### 5.25 - JSON Tools

#### Online Editors:

*   [JSONmate](http://jsonmate.com/)
*   [JSON Editor Online](https://jsoneditoronline.org/)

#### Formatter & Validator:

*   [jsonformatter.org](http://jsonformatter.org/)
*   [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/)

#### Query Tools:

*   [DefiantJS](http://www.defiantjs.com/)
*   [JSON Mask](https://github.com/nemtsov/json-mask)
*   [ObjectPath](http://objectpath.org/)

#### Generating Mock JSON Tools:

*   [JSON Generator](http://www.json-generator.com/)
*   [Mockaroo](https://www.mockaroo.com/) \[free to $\]

#### Online JSON Mocking API Tools:

*   [FillText.com](http://www.filltext.com/)
*   [FakeJSON](https://fakejson.com) \[free to $\]
*   [Jam API](https://github.com/dinubs/jam-api)
*   [JSONPlaceholder](http://jsonplaceholder.typicode.com/)
*   [jsonbin.io](https://jsonbin.io)
*   [jsonbin.org](https://jsonbin.org/)
*   [mockable.io](https://www.mockable.io/)
*   [mockapi.io](http://www.mockapi.io/)
*   [Mocky](http://www.mocky.io/)
*   [RANDOM USER GENERATOR](https://randomuser.me/)

#### List of public JSON API's:

*   [A collective list of JSON APIs for use in web development](https://github.com/toddmotto/public-apis)

#### Local JSON Mocking API Tools:

*   [json-server](https://github.com/typicode/json-server)

#### JSON Specifications/Schemas:

*   [json-schema.org](http://json-schema.org/) & [jsonschema.net](http://jsonschema.net/)
*   [{json:api}](http://jsonapi.org/)

### 5.26 - Placeholder Content Tools

#### Images:

*   [placehold.it](http://placehold.it)
*   [Satyr](http://satyr.io)
*   [Placeimg](http://placeimg.com)
*   [Lorem Pixel](http://lorempixel.com)
*   [CSS-Tricks Image Resources](https://css-tricks.com/sites-with-high-quality-photos-you-can-use-for-free/)
*   [LibreStock](http://librestock.com)
*   [Unsplash](https://unsplash.it)

#### Device Mockups:

*   [placeit.net](https://placeit.net)
*   [mockuphone.com](http://mockuphone.com)

#### Text:

*   [Meet the Ipsums](http://meettheipsums.com)
*   [catipsum.com](http://www.catipsum.com/)
*   [baconipsum.com](http://baconipsum.com/) ([API](http://baconipsum.com/json-api/))

#### User Data:

*   [uinames.com](https://uinames.com)
*   [randomuser.me](https://randomuser.me)

### 5.27 - Testing Tools

#### Software Testing Frameworks:

*   [Intern](https://theintern.github.io/)
*   [Jest](http://facebook.github.io/jest/)
    *   [majestic](https://majestic.debuggable.io/)
    *   [Enzyme](https://github.com/airbnb/enzyme)
    *   [Cheerio](https://github.com/cheeriojs/cheerio)

#### Unit Testing:

*   [AVA](https://github.com/avajs/ava)
*   [Jasmine](http://jasmine.github.io/)
*   [Mocha](http://mochajs.org/)
*   [Tape](https://github.com/substack/tape)

#### Testing Assertions for Unit Testing:

*   [Chai](http://chaijs.com/)
*   [expect.js](https://github.com/Automattic/expect.js)
*   [should.js](http://shouldjs.github.io/)

#### Test Spies, Stubs, and Mocks for Unit Testing:

*   [sinon.js](http://sinonjs.org/)
*   [Kakapo.js](http://devlucky.github.io/kakapo-js)

#### Hosted Testing/Automation for Browsers:

*   [Browserling](https://www.browserling.com/) \[$\]
*   [BrowserStack](https://www.browserstack.com) \[$\]
*   [CrossBrowserTesting.com](http://crossbrowsertesting.com/) \[$\]
*   [Nightcloud.io](http://nightcloud.io/)
*   [Sauce Labs](https://saucelabs.com/) \[$\]

#### Integration/Functional Testing:

*   [Cypress](https://www.cypress.io/)
*   [Nightwatch](http://nightwatchjs.org/)
*   [WebDriver.io](http://webdriver.io/)

#### Browser Automation:

*   [CasperJS](http://casperjs.org/)
*   [Nightmare](https://github.com/segmentio/nightmare)
*   [TestCafe](https://github.com/DevExpress/testcafe)

#### UI Testing Tools:

*   [gremlins.js](https://github.com/marmelab/gremlins.js)
*   [Percy](https://percy.io)
*   [BackstopJS](https://github.com/garris/BackstopJS)
*   [PhantomCSS](https://github.com/Huddle/PhantomCSS)
*   [Ghost Inspector](https://ghostinspector.com/)
*   [diff.io](https://diff.io/)

#### Automated dead link and error detectors:

*   [Monkey Test It](https://monkeytest.it/)

#### HTTP Stubbing

*   [Polly.JS](https://netflix.github.io/pollyjs/#/README)

### 5.28 - Front-End Data Storage Tools (i.e. Data storage solution in the client)

*   [AlaSQL](http://alasql.org/)
*   [Dexie.js](http://www.dexie.org/)
*   [LocalForage](https://localforage.github.io/localForage/)
*   [LokiJS](http://lokijs.org/#/)
*   [Lovefield](https://google.github.io/lovefield)
*   [lowdb](https://github.com/typicode/lowdb)
*   [Pouchdb](http://pouchdb.com/)
*   [NeDB](https://github.com/louischatriot/nedb)
*   [RxDB](https://pubkey.github.io/rxdb/install.html)
*   [ImmortalDB](https://github.com/gruns/ImmortalDB)

### 5.29 - Module Loading/Bundling Tools

*   [Parcel](https://parceljs.org/)
*   [Rollup](http://rollupjs.org/)
    *   [Microbundle](https://github.com/developit/microbundle)
*   [webpack](https://webpack.js.org/)
    *   [Poi](https://poi.js.org/)
    *   [jetpack](https://github.com/KidkArolis/jetpack)
*   [Fusebox](https://fuse-box.org/)
*   [Browserify](http://browserify.org/)

### 5.30 - Module/Package Repository Tools

*   [NPM](https://www.npmjs.com/)
*   [yarn](https://yarnpkg.com/)
*   [PNPM](https://pnpm.js.org/)

### 5.31 - Hosting Tools

#### General

*   [AWS](https://aws.amazon.com/websites/) \[$\]
*   [DigitalOcean](https://digitalocean.com) \[$\]
*   [WebFaction](https://www.webfaction.com/) \[$\]

#### Static

*   [Firebase Hosting](https://firebase.google.com/docs/hosting/) \[free to $\]
*   [netlify](https://www.netlify.com) \[free to $\]
    *   [Bitballoon](https://www.bitballoon.com/)
*   [Surge](https://surge.sh/) \[free to $\]
*   [Forge](https://getforge.com/) \[$\]

### 5.32 - Project Management & Code Hosting Tools

*   [Assembla](https://www.assembla.com) \[free to $\]
*   [Bitbucket](https://bitbucket.org) \[free to $\]
*   [Codebase](https://www.codebasehq.com/) \[$\]
*   [Github](https://github.com/) \[free to $\]
*   [GitLab](https://about.gitlab.com/) \[free to $\]
*   [Unfuddle](https://unfuddle.com/) \[$\]

### 5.33 - Collaboration & Communication Tools

*   [Slack](https://slack.com/) & [screenhero](https://screenhero.com/) \[free to $\]
*   [appear.in](https://appear.in/)
*   [Mattermost](https://mattermost.org/) \[free to $\]

##### Code/GitHub Collaboration & Communication:

*   [Gitter](https://gitter.im) \[free to $\]

### 5.34 - Content Management Hosted/API Tools

#### Headless CMS Tools:

*   [Contentful](https://www.contentful.com/) \[$\]
*   [prismic.io](https://prismic.io/) \[free to $\]
*   [Headless](https://www.headless.rest/)

#### Self-hosted Headless CMS Tools:

*   [Cockpit](https://getcockpit.com/)
*   [Directus 7 App](https://directus.io/)

#### Hosted CMS:

*   [LightCMS](https://www.lightcms.com) \[$\]
*   [Surreal CMS](http://www.surrealcms.com/) \[$\]

#### Static CMS Tools:

*   [webhook.com](http://www.webhook.com/)
*   [Dato CMS](https://www.datocms.com/)
*   [siteleaf](https://www.siteleaf.com/)
*   [forestry.io](https://forestry.io/)

### 5.35 - Back-end/API tools

#### Data/back-end as a service aka BAAS:

*   [Backendless](https://backendless.com)
*   [Firebase](https://www.firebase.com/index.html) \[free to $\]
*   [Pusher](https://pusher.com/) \[free to $\]
*   [restdb.io](https://restdb.io/) \[free to $\]
*   [MongoDB Stitch](https://www.mongodb.com/cloud/stitch)

#### Data/back-end

*   [GraphQL](http://graphql.org/)
    *   [Apollo](http://www.apollodata.com/)
    *   [Relay](https://facebook.github.io/relay/)
*   [Falcor](https://netflix.github.io/falcor/)
*   [RxDB](https://github.com/pubkey/rxdb)

#### User Management as a Service:

*   [Auth0](https://auth0.com) \[$\]
*   [AuthRocket](https://authrocket.com)
*   [Okta](https://developer.okta.com/)

#### Search

*   [Algolia](https://www.algolia.com)

### 5.36 - Offline Tools

*   [Hoodie](http://hood.ie/)
*   [Offline.js](http://github.hubspot.com/offline/docs/welcome/)
*   [PouchDB](http://pouchdb.com/)
*   [upup](https://www.talater.com/upup/)
*   [Workbox](https://developers.google.com/web/tools/workbox/)

For more tools look [here](https://github.com/pazguille/offline-first#tools).

### 5.37 - Security Tools

#### Coding Tool:

*   [DOMPurify](https://github.com/cure53/DOMPurify)
*   [XSS](http://jsxss.com/en/index.html)

#### Security Scanners/Evaluators/Testers:

*   [Netsparker](https://www.netsparker.com)
*   [Websecurify](http://www.websecurify.com/)
*   [OWASP ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project)

#### References:

*   [HTML5 Security Cheatsheet](https://html5sec.org/)

### 5.38 - Tasking (aka Build) Tools

#### Tasking/Build Tools:

*   [Gulp](http://gulpjs.com/)

#### Opinionated Tasking/Build pipeline tools:

*   [Brunch](http://brunch.io/)

Before reaching for Gulp make sure [npm scripts](https://docs.npmjs.com/misc/scripts) or [yarn script](https://yarnpkg.com/en/docs/package-json#toc-scripts) won't fit the bill. Read, ["Why I Left Gulp and Grunt for npm Scripts"](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.nw3huib54).

### 5.39 - Deployment Tools

*   [Bamboo](https://www.atlassian.com/software/bamboo/) \[$\]
*   [Buddy](https://buddy.works/) \[free to $\]
*   [CircleCI](https://circleci.com/) \[free to $\]
*   [Codeship](https://codeship.com/) \[free to $\]
*   [Deploybot](https://deploybot.com/) \[free to $\]
*   [Deployhq](https://www.deployhq.com/) \[free to $\]
*   [FTPLOY](http://ftploy.com/) \[free to $\]
*   [Now](https://zeit.co/now) \[free to $\]
*   [Travis CI](http://docs.travis-ci.com/) \[free to $\]
*   [Semaphore](https://semaphoreci.com/) \[free to $\]
*   [Springloops](http://www.springloops.io/) \[free to $\]

### 5.40 - Site/App Monitoring Tools

#### Uptime Monitoring:

*   [Uptime Robot](https://uptimerobot.com/) \[free to $\]

#### General Monitoring Tools:

*   [Pingdom](https://www.pingdom.com/) \[free to $\]
*   [New Relic](http://newrelic.com/)
*   [Uptrends](https://www.uptrends.com/) \[$\]

### 5.41 - JavaScript Error Reporting/Monitoring

*   [bugsnag](https://bugsnag.com/) \[$\]
*   [errorception](https://errorception.com/) \[$\]
*   [Honeybadger](https://www.honeybadger.io) \[$\]
*   [Raygun](https://raygun.io) \[$\]
*   [Rollbar](https://rollbar.com) \[free to $\]
*   [Sentry](https://getsentry.com/welcome/) \[free to $\]
*   [TrackJS](https://trackjs.com/) \[$\]

### 5.42 - Performance Tools

#### Reporting:

*   [bundlephobia.com](https://bundlephobia.com/)
*   [GTmetrix](https://gtmetrix.com/)
*   [sitespeed.io](https://www.sitespeed.io)
*   [Speed Curve](https://speedcurve.com/) \[$\]
*   [Web Page Test](http://www.webpagetest.org/)
*   [Sonarwhal](https://sonarwhal.com)
*   [webhint.io](https://webhint.io)
*   [Datadog](https://www.datadoghq.com) \[$\]
*   [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

#### JS Tools:

*   [imagemin](https://github.com/imagemin/imagemin)
*   [ImageOptim-CLI](http://jamiemason.github.io/ImageOptim-CLI/)

#### Budgeting:

*   [performancebudget.io](http://www.performancebudget.io/)

#### References/Docs:

*   [Jank Free](http://jankfree.org/)
*   [Performance of ES6 features relative to the ES5](https://kpdecker.github.io/six-speed/)

#### Checklist:

*   [The Front-End Checklist](https://frontendchecklist.io/)
*   [Front-End Performance Checklist 2019 \[PDF, Apple Pages, MS Word\]](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/) \[read\]

### 5.43 - Tools for Finding Tools

*   [built with](http://builtwith.com/)
*   [frontendtools.com](http://frontendtools.com/)
*   [javascripting.com](http://www.javascripting.com)
*   [js.coach](https://js.coach/)
*   [JSter](http://jster.net)
*   [npms](https://npms.io/)
*   [stackshare.io](http://stackshare.io/)
*   [Unheap](http://www.unheap.com/)
*   [bestof.js.org](https://bestof.js.org/)
*   [libraries.io](https://libraries.io/)

### 5.44 - Documentation Generation Tools

*   [docz](https://www.docz.site/)
*   [ESDoc](https://github.com/esdoc/esdoc)
*   [JSDoc](http://usejsdoc.org/)
*   [documentjs](https://documentjs.com/)

Chapter 6. Front-end Communities, Newsletters, News Sites, & Podcasts
---------------------------------------------------------------------

#### General Front-End Newsletters, News, & Podcasts:

*   [The Big Web Show](http://5by5.tv/bigwebshow)
*   [Dev Tips](https://umaar.com/dev-tips/)
*   [Front End Happy Hour](http://frontendhappyhour.com/)
*   [Front-End Front](http://frontendfront.com/)
*   [Front-end Focus](http://frontendfocus.co/)
*   [Web Platform News Weekly](https://webplatform.news/)
*   [ShopTalk Show](http://shoptalkshow.com/)
*   [UX Design Newsletter](http://uxdesignnewsletter.com/)
*   [Web Development Reading List](https://wdrl.info/)
*   [The Web Platform Podcast](http://thewebplatform.libsyn.com/)
*   [Web Tools Weekly](http://webtoolsweekly.com/)
*   [Fresh Brewed Front-end](https://freshbrewed.co/frontend/)
*   [Pony Foo Weekly](https://ponyfoo.com/weekly)
*   [CSS-Tricks](https://css-tricks.com/newsletters/)
*   [syntax.](https://syntax.fm/)

#### HTML/CSS Newsletters:

*   [Accessibility Weekly](http://a11yweekly.com/)
*   [CSS Weekly](http://css-weekly.com/archives/)
*   [csslayout.news](http://csslayout.news/)

#### JavaScript Newsletters, News, & Podcasts:

*   [Awesome JavaScript Newsletter](https://js.libhunt.com/newsletter?f=es-top-d)
*   [Echo JS](http://www.echojs.com/)
*   [ECMAScript Daily](https://ecmascript-daily.github.io/)
*   [ES.next News](http://esnextnews.com/)
*   [JavaScript Jabber](https://devchat.tv/js-jabber/)
*   [JavaScript Kicks](http://javascriptkicks.com/)
*   [JavaScript Weekly](http://javascriptweekly.com/)
*   [React Status](https://react.statuscode.com/)
*   [JS Party](https://changelog.com/jsparty)
*   [JAMStack Radio](https://www.heavybit.com/library/podcasts/jamstack-radio/)
*   [My JavaScript Story](https://devchat.tv/my-javascript-story/)

#### Front-End Communities

*   [http://fedsonslack.com/](http://fedsonslack.com)
*   [front-end](https://spectrum.chat/frontend/) on spectrum.

**Notes:**

1.  Need more Newsletters, News Sites, & Podcasts look at [Awesome Newsletter](https://github.com/vredniy/awesome-newsletters).
2.  Find local front-end development communities by searching [https://www.meetup.com/](https://www.meetup.com/)