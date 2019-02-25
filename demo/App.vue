<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app dark>
      <navbar></navbar>
    </v-navigation-drawer>
    <v-toolbar class="purple" dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Vue route timeline</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/disjfa/vue-route-timeline">
        <v-icon>fab fa-github</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  data() {
    return {
      drawer: true,
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main';
  @import '../scss/vue-route-timeline.scss';

  code.block {
    display: block;
    padding: 0 10px;
    font-size: 1rem;
    overflow: auto;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }
</style>
