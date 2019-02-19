<template>
  <div class="container">
    <h2>Get started</h2>
    <h4 id="instalation">Instalation</h4>
    <code class="block">
      <pre>npm install vue-route-timeline</pre>
    </code>
    <br>
    <h4 id="add-it">Add it to your project</h4>
    <code class="block">
            <pre>import Vue from 'vue'; // Load vue
import VueRouteTimeline from 'vue-route-timeline'; // Import timeline
import App from './App.vue'; // Load your app
import router from './router'; // Add your router
import store from './store'; // Build your vuex store

Vue.use(VueRouteTimeline, {store, router}); // Connect timeline to vue, store and router

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});</pre>
    </code>
    <br>
    <h4 id="in-routes">Use it in routes</h4>
    <code class="block">
            <pre>&lt;template&gt;
    &lt;div class="container"&gt;
        &lt;h2&gt;This is a template&lt;/h2&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: 'docs',
    mounted() {
      this.$routeTimeline.set('I loaded a page', 'Please save');
    },
  };
&lt;/script&gt;</pre>
    </code>
    <br>
    <h4 id="explanation">Explanation</h4>
    <code class="block">
      <pre>this.$routeTimeline.set('I loaded a page', 'Please save');</pre>
    </code>
    <br>
    <p>You can just add a route whenever, in the example above i added it to the mount of a view of
      a route. An easy example. If you have a dynamic route system and items just connect it
      whenever you want, eq in a watch for an item in your package.</p>
    <p>Just add a route to the timeline, whenever:</p>
    <code class="block">
      <pre>this.$routeTimeline.set('Package name', this.item.title);</pre>
    </code>
    <h4 id="add-a-timeline">Add a timeline in your code</h4>
    <code class="block">
            <pre>&lt;template&gt;
    &lt;div class="container"&gt;
        &lt;route-timeline&gt;&lt;/route-timeline&gt;
    &lt;/div&gt;
&lt;/template&gt;</pre>
    </code>
    <br>
    <h4 id="css">Add some css</h4>
    <p>I also have a small scss file in the style folder, you can include this.</p>
    <code class="block">
            <pre>&lt;style&gt;
    @import 'vue-route-timeline/style/vue-route-timeline.scss';
&lt;/style&gt;</pre>
    </code>
    <br>
    <h4 id="result">The result is a timeline</h4>
    <route-timeline></route-timeline>
  </div>
</template>

<script>
export default {
  name: 'instalation',
  mounted() {
    this.$routeTimeline.set('Get started', 'We checked out how to install, cool!');
  },
};
</script>

<style scoped>
</style>
