<template>
  <div class="container">
    <h2>Customize</h2>
    <p>As we can see, i use <a href="https://vuetifyjs.com/">vuetifyjs</a> for styling. So the base
      timeline does not look cool. I want to add it in a
      <a href="https://vuetifyjs.com/components/lists">list</a>, that looks cool i think.</p>
    <p>Just remember, i used vuetify. But you can map it to whatever you like.</p>
    <h4>The code</h4>
    <p>I added all the items of the timeline in a slot you can use.</p>
    <code class="block">
            <pre v-pre>&lt;route-timeline&gt;
  &lt;template #default="{item}"&gt;
    &lt;v-list-tile :to="item.route"&gt;
      &lt;v-list-tile-content&gt;
        &lt;v-list-tile-title&gt;
          {{ item.title }}
        &lt;/v-list-tile-title&gt;
        &lt;v-list-tile-sub-title&gt;
          {{ item.created | timelineDate }}
          -
          {{ item.subtitle }}
        &lt;/v-list-tile-sub-title&gt;
      &lt;/v-list-tile-content&gt;
    &lt;/v-list-tile&gt;
  &lt;/template&gt;
&lt;/route-timeline&gt;</pre>
    </code>
    <br>
    <h4>Thats the list</h4>
    <p>Ok cool, thats a list. Now add it in a card</p>
    <code class="block">
            <pre v-pre>&lt;v-card&gt;
  &lt;v-toolbar class="cyan" dark&gt;
      &lt;v-toolbar-title&gt;Timeline&lt;/v-toolbar-title&gt;
  &lt;/v-toolbar&gt;
  &lt;v-list&gt;
      &lt;v-subheader&gt;Where have we been&lt;/v-subheader&gt;
      &lt;route-timeline&gt;
        &lt;template #default="{item}"&gt;
          &lt;v-list-tile :to="item.route"&gt;
            &lt;v-list-tile-content&gt;
              &lt;v-list-tile-title&gt;
                {{ item.title }}
              &lt;/v-list-tile-title&gt;
              &lt;v-list-tile-sub-title&gt;
                {{ item.created | timelineDate }}
                -
                {{ item.subtitle }}
              &lt;/v-list-tile-sub-title&gt;
            &lt;/v-list-tile-content&gt;
          &lt;/v-list-tile&gt;
        &lt;/template&gt;
      &lt;/route-timeline&gt;
  &lt;/v-list&gt;
&lt;/v-card&gt;</pre>
    </code>
    <br>
    <h4>The result</h4>
    <p>As on the fontpage, awesome!</p>
    <v-card>
      <v-toolbar class="cyan" dark>
        <v-toolbar-title>Timeline</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-subheader>Where have we been</v-subheader>
        <route-timeline>
          <template #default="{item}">
            <v-list-tile :to="item.route">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.title }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ item.created | timelineDate }}
                  -
                  {{ item.subtitle }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </route-timeline>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'customize',
  mounted() {
    this.$routeTimeline.set('Customize', 'Lets change this');
  },
};
</script>

<style scoped>
</style>
