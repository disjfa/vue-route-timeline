# Vue route timeline

[![version][version-badge]][package]
[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

> Build a timeline clicking throug your application, using vue-router and vuex.

For detailed explanation on how things work, checkout the [docs](https://disjfa.github.io/vue-route-timeline/#/hello).

## Instalation

```
npm install vue-route-timeline
```

## Getting started

```javascript
import Vue from 'vue'; // Load vue
import VueRouteTimeline from 'vue-route-timeline'; // Import timeline
import App from './App'; // Load your app
import router from './router'; // Add your router
import store from './store'; // Build your vuex store

Vue.use(VueRouteTimeline, {store, router}); // Connect timeline to vue, store and router

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
```

## Usage

Add an item whenever you like, it will store the current route:

```javascript
this.$routeTimeline.set('Title', 'Subtitle');
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/632778?v=4" width="100px;"/><br /><sub>disjfa</sub>](http://www.disjfa.nl)<br />[💬](#question-disjfa "Answering Questions") [💻](https://github.com/disjfa/vue-route-timeline/commits?author=disjfa "Code") [🎨](#design-disjfa "Design") [📖](https://github.com/disjfa/vue-route-timeline/commits?author=disjfa "Documentation") [💡](#example-disjfa "Examples") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

[package]: https://www.npmjs.com/package/vue-route-timeline
[version-badge]: https://img.shields.io/npm/v/vue-route-timeline.svg?style=flat-square
[license]: https://github.com/disjfa/vue-route-timeline/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/vue-route-timeline.svg?style=flat-square
[github-watch-badge]: https://img.shields.io/github/watchers/disjfa/vue-route-timeline.svg?style=social
[github-watch]: https://github.com/disjfa/vue-route-timeline/watchers
[github-star-badge]: https://img.shields.io/github/stars/disjfa/vue-route-timeline.svg?style=social
[github-star]: https://github.com/disjfa/vue-route-timeline/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20vue-route-timeline!%20-%20Cool%timeline!%20Thanks%20@disjfa%20https://github.com/disjfa/vue-route-timeline%20%F0%9F%A4%97
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/disjfa/vue-route-timeline.svg?style=social
