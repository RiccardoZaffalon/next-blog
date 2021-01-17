---
author: Riccardo Zaffalon
title: A tale of many stacks
subtitle: Or how I built this website
tags: React, Next.js
date: 2021/01/17
---

When I first purchased this domain name in 2014, I built my portfolio using PHP and a few lines of CSS. It used to connect to the Behance API from the server, retrieve my projects, and store that information in a JSON on the filesystem to avoid hitting their services more than once a day.

Over the course of the next few years it evolved and changed many times, allowing me to experiment with new stacks and tools. At one point I built my own JSON-based micro-CMS, and generated static HTML files using Pug and Node. I thought it was really cool to move the performance and security issues away from the production site! Hosting was also much faster and cheaper (free, actually, on Github Pages).

In the recent years I took on React, and used it to build some web applications, but always tought that would be unnecessarily complicated for a simple site. That changed when I learned about [Next.js](https://nextjs.org/), a React Framework capable of rendering components on the server side at request, but also pre-generate HTML files at build time. This would allow me to add dynamic content, such as a blog, without an entire CMS running in the background. The development experience is awesome, and it removes a lot of the overhead of dealing with pre-fetching and caching. It even works with serverless functions, so it can be deployed on modern hosting platforms such as [Netlify](http://netlify.com) and [Vercel](http://vercel.com) (who actually make Next.js).

At work we recently started relying more and more on utility classes to approach styling, as it can provide a more uniform styling across websites and allow to create ready-to-use templates without adding any CSS, which is very handy on Commerce Cloud. So I wanted to try a utility-first framework to build the new site, and [Tailwind](https://tailwindcss.com/) was my choise, as it seems to be the most mature and adopted solution.

So that was my stack sorted! I used Next, React, and Tailwind to build my new site. I also want to have a blog, but prefer to own my content and track changes with Git, so I added Markdown and syntax highlighting for code snippets. I use [Notion](https://notion.so) to write articles, which allows me to copy/paste or export them in `.md` format.

Hosting is provided by [Vercel](https://vercel.com) via Github integration, so that I can have a production site linked to the `main` branch which is built on each commit, and a preview site from the `develop` branch, for work-in-progress features.

The result is what you are looking at! A lot more to add and improve, but I am very pleased with the performance and overall experience of building and using the new site. The whole project is open source; you can find the codebase [on my Github profile](https://github.com/RiccardoZaffalon/next-blog).

Thanks for reading!