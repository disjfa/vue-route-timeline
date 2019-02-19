import Vue from 'vue';

export default {
  timelineItemIsAdded(state, payload) {
    const { items } = state;
    items.unshift(payload.timeline);
    Vue.set(state, 'items', items.slice(0, 25));
  },
};
