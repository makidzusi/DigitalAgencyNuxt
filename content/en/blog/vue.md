---
img: 'https://blog.vverh.digital/wp-content/uploads/2020/07/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-1.png'
desc: 'Vue.js for doubters. Everything you need to know'
date: 'January 2023 , 1'
---

# Vue.js for doubters. Everything you need to know


![image](https://habrastorage.org/r/w1560/web/2bc/ece/638/2bcece638fc74988b1e54b2143977586.jpg)

In this article we will talk about a wonderful frontend framework Vue.js . As you can see, the article is called "Vue.js for doubters", and if you still could not decide to try Vue.js in practice, I hope that after reading it you will decide to do it.

Frameworks are developed in order to simplify our lives and free us from writing the same type of code. But, as the codebase of some frameworks grows greatly, they begin to bring their share of complexity to the project. Because of this, when planning development, we have to take into account two factors:

- the complexity of our application
- complexity of the framework we use

Let's abstract a little and call it internal complexity (that is, complexity that we cannot get rid of during development) and the complexity of the tool with which we achieve this or that goal. Naturally, we can only manipulate the complexity of the tool.

From the above, we get two options for choosing a tool:

- **Insufficiency variant.** When the tool is not enough to cover the internal complexity. The functions necessary for the implementation of the application are missing in the framework, and we have to manually refine and add the necessary tools.
- **Redundancy option.** When the functionality required for the application is overlapped by only a small part of the tool. The rest of the toolkit hangs like a dead weight and only creates problems for us: restrictions during development, slowing down the loading of the application, etc.

So what to do? Perhaps I will be a little Captain Obvious, but we must act on the principle: “For each goal — its own tool.” When planning, we need to look for a middle ground so that the complexity (and therefore functionality) of the application is on the same level.

## About Vue.js and the author

So, let's figure out Vue and how it can make it easier for us to develop an application.

The creator of Vue.js is Evan You, a former employee of Google and Meteor Dev Group. He started developing the framework in 2013, and in February 2014 the first public release took place. Vue is widely used among Chinese companies, for example: Alibaba, Baidu, Xiaomi, Sina Weibo, etc. It is included in the core of Laravel and PageKit. Recently, the free repository management system GitLab also switched to Vue.js .

At the end of September 2016, it was released Vue.js 2.0, even cooler and with an emphasis on performance — now virtual DOM is used, server rendering is supported, the ability to use JSX, etc. Although it is now supported only by the community, it holds up well even at the level of products of such giants as Google and Facebook (Angular2 and React 15), and is gradually catching up with them in popularity.

Consider the simplest example:

**app.js**

    var demo = new Vue({
        el: '#demo',
        data: {
            message: 'Hello, Singree!'
        }
    })

- a new instance of the view is created via new Vue
- in el we determine which element the view is monitoring
- in data we have a status object