import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/production-requirements',
    name: 'ProductionRequirements',
    component: () =>
      import(
        /* webpackChunkName: "ProductionRequirements" */ '@/views/ProductionRequirements.vue'
      ),
  },
  {
    path: '/lab-templated-text',
    name: 'LabTemplatedText',
    component: () =>
      import(
        /* webpackChunkName: "LabTemplatedText" */ '@/views/LabTemplatedText.vue'
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
