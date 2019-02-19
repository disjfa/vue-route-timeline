<template>
  <div>
    <div class="text-xs-center">
      <img src="logo.png" alt="" style="max-width: 200px; height: auto;">
    </div>

    <div class="container">
      <h2>Vue route timeline</h2>
      <p>
        Why are we building a timeline, i heard about a timeline feature on the internet and got
        excited. That project did't come together so i wanted to make something using <a
        href="https://vuejs.org/">Vue.js</a>, <a href="https://vuex.vuejs.org/">vuex</a> and <a
        href="https://router.vuejs.org/">vue-router</a>.</p>
      <p>So i did.</p>
      <p>
        If you like to know what it does, please click through the site an everywhere i placed the
        timeline you can see it grow. I log the clicks on the routes and the route timeline grows.
        You can easily click back to any of the routes.</p>
      <p>Try clicking on the get started button and click back here to see, it's awesome.</p>
      <div>
        <v-btn primary dark :to="{name: 'installation'}">Get started</v-btn>
        <v-btn primary dark :to="{name: 'docs'}">Documentation</v-btn>
      </div>
      <br>
      <h4>The result</h4>
      <v-card>
        <v-toolbar class="cyan" dark>
          <v-toolbar-title>Timeline</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-subheader>Where have we been</v-subheader>
          <route-timeline scope="props">
            <template slot="item" scope="props">
              <v-list-tile :to="props.route">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ props.title }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ props.created | timelineDate }}
                    -
                    {{ props.subtitle }}
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </route-timeline>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  mounted() {
    this.$routeTimeline.set('Hello', 'We clicked on hello');
  },
};
</script>

<style scoped>
</style>
