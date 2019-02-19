import timelineStore from './store';
import Components from './components';

function install(Vue, options, moduleName = 'timeline') {
  const { store, router } = options;
  store.registerModule(moduleName, timelineStore);

  Object.keys(Components).forEach((key) => {
    Vue.component(`${key}`, Components[key]);
  });

  Vue.filter('timelineDate', (value) => {
    if (value) {
      return value.toLocaleString();
    }
    return '';
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
}

export default install;
