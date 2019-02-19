<template>
  <nav>
    <v-list three-line>
      <v-list-tile avatar ripple :to="{name: 'hello'}">
        <v-list-tile-avatar>
          <img src="logo.png" alt="" style="border-radius: 0;">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Vue route timeline</v-list-tile-title>
          <v-list-tile-sub-title>Route your timeline in your application</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-tile v-for="route in routes" :to="route" :key="route.name" ripple>
        <v-list-tile-action>
          <v-icon dark>{{ route.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ route.title }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ route.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    routes() {
      const routes = [];
      Object.keys(this.$router.options.routes).forEach((key) => {
        const route = this.$router.options.routes[key];
        if (route.title) {
          routes.push(route);
        }
      });
      return routes;
    },
  },
};
</script>
