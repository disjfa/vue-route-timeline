export default {
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
};
