webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(52)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(61),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-25118d18",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getters__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(72);




/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: {
    items: [],
  },
  actions: __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* default */],
  getters: __WEBPACK_IMPORTED_MODULE_1__getters__["a" /* default */],
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__["a" /* default */],
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Hello__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Instalation__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_Instalation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_Instalation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Docs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_Docs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_Docs__);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var routes = [{
  path: '/hello',
  name: 'hello',
  title: 'Hello',
  icon: 'home',
  component: __WEBPACK_IMPORTED_MODULE_2__views_Hello___default.a
}, {
  path: '/instalation',
  name: 'instalation',
  title: 'Get started',
  icon: 'publish',
  component: __WEBPACK_IMPORTED_MODULE_3__views_Instalation___default.a
}, {
  path: '/docs',
  name: 'docs',
  title: 'Documentation',
  icon: 'rowing',
  component: __WEBPACK_IMPORTED_MODULE_4__views_Docs___default.a
}, {
  path: '*',
  redirect: { name: 'hello' }
}];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: routes
}));

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(67);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var debug = "production" !== 'production';

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  strict: debug
}));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(54)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(63),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeline_plugin__ = __webpack_require__(73);



/* harmony default export */ __webpack_exports__["a"] = ({
  timeline: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */],
  plugin: __WEBPACK_IMPORTED_MODULE_1__timeline_plugin__["a" /* default */],
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src__ = __webpack_require__(16);








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5__src__["a" /* default */].plugin, __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a);

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({ // eslint-disable-line no-new
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */],
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_2__App___default.a);
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Hello__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__views_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Navbar__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Navbar__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data: function data() {
    return {
      drawer: true
    };
  },

  components: {
    Navbar: __WEBPACK_IMPORTED_MODULE_1__components_Navbar___default.a,
    Hello: __WEBPACK_IMPORTED_MODULE_0__views_Hello___default.a
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navbar',
  computed: {
    routes: function routes() {
      var _this = this;

      var routes = [];
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.$router.options.routes).forEach(function (key) {
        var route = _this.$router.options.routes[key];
        if (route.title) {
          routes.push(route);
        }
      });
      return routes;
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'docs',
  mounted: function mounted() {
    this.$routeTimeline.set('Documentation', 'We have read the docs');
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  mounted: function mounted() {
    this.$routeTimeline.set('Hello', 'We clicked on hello');
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'instalation',
  mounted: function mounted() {
    this.$routeTimeline.set('Instalation', 'We checked out how to install, cool!');
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'route-timeline',
  computed: {
    items: function items() {
      return this.$store.getters['timeline/getItems'];
    }
  }
});

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(60),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(53)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(62),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-44abe1ee",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(51)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(59),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0c7628c6",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(64),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('h2', [_vm._v("Get started")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "instalation"
    }
  }, [_vm._v("Instalation")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "add-it"
    }
  }, [_vm._v("Add it to your project")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "in-routes"
    }
  }, [_vm._v("Use it in routes")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "explanation"
    }
  }, [_vm._v("Explanation")]), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("You can just add a route whenever, in the example above i added it to the mount of a view of a route. An easy example. If you have a dynamic route system and items just connect it whenever you want, eq in a watch for an item in your package.")]), _vm._v(" "), _c('p', [_vm._v("Just add a route to the timeline, whenever:")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "add-a-timeline"
    }
  }, [_vm._v("Add a timeline in your code")]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "result"
    }
  }, [_vm._v("The result is a timeline")]), _vm._v(" "), _c('route-timeline')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('code', {
    staticClass: "block"
  }, [_c('pre', [_vm._v("npm install vue-route-timeline")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('code', {
    staticClass: "block"
  }, [_c('pre', [_vm._v("import Vue from 'vue'; // Load vue\nimport App from './App.vue'; // Load your app\nimport router from './router'; // Add your router\nimport store from './store'; // Build your vuex store\nimport timeline from 'vue-route-timeline'; // Import timeline\n\nVue.use(timeline.plugin, store, router); // Connect timeline to vue, store and router\n\nnew Vue({\n  el: '#app',\n  router,\n  store,\n  render: h => h(App),\n});")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('code', {
    staticClass: "block"
  }, [_c('pre', [_vm._v("<template>\n    <div class=\"container\">\n        <h2>This is a template</h2>\n    </div>\n</template>\n\n<script>\n  export default {\n    name: 'docs',\n    mounted() {\n      this.$routeTimeline.set('I loaded a page', 'Please save');\n    },\n  };\n</script>")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('code', {
    staticClass: "block"
  }, [_c('pre', [_vm._v("this.$routeTimeline.set('I loaded a page', 'Please save');")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('code', {
    staticClass: "block"
  }, [_c('pre', [_vm._v("this.$routeTimeline.set('Package name', this.item.title);")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('code', {
    staticClass: "block"
  }, [_c('pre', [_vm._v("<template>\n    <div class=\"container\">\n        <route-timeline></route-timeline>\n    </div>\n</template>")])])
}]}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', [_c('br'), _vm._v(" "), _c('v-list', {
    attrs: {
      "dense": ""
    }
  }, [_c('v-subheader', [_c('h4', {
    staticClass: "white--text"
  }, [_vm._v("Menu")])]), _vm._v(" "), _vm._l((_vm.routes), function(route) {
    return _c('v-list-tile', {
      key: route.name,
      attrs: {
        "to": route
      }
    }, [_c('v-list-tile-action', [_c('v-icon', [_vm._v(_vm._s(route.icon))])], 1), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v("\n                    " + _vm._s(route.title) + "\n                ")])], 1)], 1)
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('h2', [_vm._v("Vue route timeline")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('p', [_vm._v("So i did.")]), _vm._v(" "), _c('p', [_vm._v("If you like to know what it does, please click through the site an everywhere i placed the timeline you can see it grow. I log the clicks on the routes and the route timeline grows. You can easily click back to any of the routes.")]), _vm._v(" "), _c('p', [_vm._v("Try clicking on the get started button and click back here to see, it's awesome.")]), _vm._v(" "), _c('div', [_c('v-btn', {
    attrs: {
      "primary": "",
      "dark": "",
      "to": {
        name: 'instalation'
      }
    }
  }, [_vm._v("Get started")]), _vm._v(" "), _c('v-btn', {
    attrs: {
      "primary": "",
      "dark": "",
      "to": {
        name: 'docs'
      }
    }
  }, [_vm._v("Documentation")])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', [_vm._v("The result")]), _vm._v(" "), _c('v-card', [_c('v-toolbar', {
    staticClass: "cyan",
    attrs: {
      "dark": ""
    }
  }, [_c('v-toolbar-title', [_vm._v("Timeline")])], 1), _vm._v(" "), _c('v-list', [_c('v-subheader', [_vm._v("Where have we been")]), _vm._v(" "), _c('route-timeline', {
    attrs: {
      "scope": "props"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function(props) {
        return [_c('v-list-tile', {
          attrs: {
            "to": props.route
          }
        }, [_c('v-list-tile-content', [_c('v-list-tile-title', [_vm._v("\n                                " + _vm._s(props.title) + "\n                            ")]), _vm._v(" "), _c('v-list-tile-sub-title', [_vm._v("\n                                " + _vm._s(props.subtitle) + "\n                            ")])], 1)], 1)]
      }
    }])
  })], 1)], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Why are we building a timeline, i heard about a timeline feature on the internet and got excited. That project did't come together so i wanted to make something using "), _c('a', {
    attrs: {
      "href": "https://vuejs.org/"
    }
  }, [_vm._v("Vue.js")]), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://vuex.vuejs.org/"
    }
  }, [_vm._v("vuex")]), _vm._v(" and "), _c('a', {
    attrs: {
      "href": "https://router.vuejs.org/"
    }
  }, [_vm._v("vue-router")]), _vm._v(".")])
}]}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('h2', [_vm._v("Documentation")])])
}]}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', [_c('v-navigation-drawer', {
    attrs: {
      "persistent": "",
      "dark": "",
      "enable-resize-watcher": "",
      "prominent": ""
    },
    model: {
      value: (_vm.drawer),
      callback: function($$v) {
        _vm.drawer = $$v
      },
      expression: "drawer"
    }
  }, [_c('navbar')], 1), _vm._v(" "), _c('v-toolbar', {
    staticClass: "primary",
    attrs: {
      "dark": ""
    }
  }, [_c('v-toolbar-side-icon', {
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.drawer = !_vm.drawer
      }
    }
  }), _vm._v(" "), _c('v-toolbar-title', [_vm._v("Vue route timeline")])], 1), _vm._v(" "), _c('main', [_c('v-container', [_c('router-view')], 1)], 1), _vm._v(" "), _c('v-footer')], 1)
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "route-timeline"
  }, [_vm._l((_vm.items), function(item) {
    return _vm._t("item", [_c('router-link', {
      staticClass: "route-timeline-item",
      attrs: {
        "to": item.route
      }
    }, [_c('h4', [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('h5', [_vm._v(_vm._s(item.subtitle))]), _vm._v("\n            " + _vm._s(item.created) + "\n        ")])], {
      title: item.title,
      subtitle: item.subtitle,
      created: item.created,
      route: item.route
    })
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RouteTimeline_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RouteTimeline_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__RouteTimeline_vue__);


/* harmony default export */ __webpack_exports__["a"] = ({
  RouteTimeline: __WEBPACK_IMPORTED_MODULE_0__RouteTimeline_vue___default.a,
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  addTimelineItem(state, item) {
    const timeline = {
      title: item.title,
      subtitle: item.subtitle,
      created: new Date(),
      route: {
        name: item.route.name,
        params: item.route.params,
      },
    };

    return state.commit('timelineItemIsAdded', { timeline });
  },
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  getItems: state => state.items,
  getItem: state => payload => state.items.find(item => item.id === payload.id),
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
  timelineItemIsAdded(state, payload) {
    const { items } = state;
    items.push(payload.timeline);
    __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].set(state, 'items', items);
  },
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(69);



const timelinePlugin = {};

timelinePlugin.install = function install(Vue, store, router, moduleName = 'timeline') {
  store.registerModule(moduleName, __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */]);

  Object.keys(__WEBPACK_IMPORTED_MODULE_1__components__["a" /* default */]).forEach((key) => {
    Vue.component(`${key}`, __WEBPACK_IMPORTED_MODULE_1__components__["a" /* default */][key]);
  });

  const setRoute = (title, subtitle = '') => {
    store.dispatch(`${moduleName}/addTimelineItem`, {
      title,
      subtitle,
      route: router.app.$route,
    });
  };

  Vue.prototype.$routeTimeline = {
    set: setRoute,
  };
};

/* harmony default export */ __webpack_exports__["a"] = (timelinePlugin);


/***/ })
],[17]);
//# sourceMappingURL=app.e659c3795ae529ee95ad.js.map