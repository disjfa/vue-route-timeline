import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import router from './router';
import store from './store';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';

import VueRouteTimeline from '../src';

Vue.use(VueAnalytics, {
  id: 'UA-83598448-1',
  router,
  autoTracking: {
    pageviewTemplate(route) {
      return {
        page: `/vue-route-timeline${route.path}`,
        title: document.title,
        location: window.location.href,
      };
    },
  },
});
Vue.use(VueRouteTimeline, {
  store,
  router,
});
Vue.use(Vuetify, {
  iconfont: 'fa',
});
Vue.use(Router);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App),
});
