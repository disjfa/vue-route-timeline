import Router from 'vue-router';

const routes = [
  {
    path: '/hello',
    name: 'hello',
    title: 'Hello',
    subtitle: 'Vue route timeline',
    icon: 'fa-home',
    component: () => import('./views/Hello.vue'),
  },
  {
    path: '/installation',
    name: 'installation',
    title: 'Get started',
    subtitle: 'Lets do this',
    icon: 'fa-map-signs',
    component: () => import('./views/Instalation.vue'),
  },
  {
    path: '/customize',
    name: 'customize',
    title: 'Customize',
    subtitle: 'Lets change this',
    icon: 'fa-edit',
    component: () => import('./views/Customize.vue'),
  },
  {
    path: '/docs',
    name: 'docs',
    title: 'Documentation',
    subtitle: 'Check it out',
    icon: 'fa-code',
    component: () => import('./views/Docs.vue'),
  },
  {
    path: '*',
    redirect: { name: 'hello' },
  },
];

export default new Router({
  routes,
});
