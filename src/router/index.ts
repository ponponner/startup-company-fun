import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductionRequirements from '@/views/ProductionRequirements.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductionRequirements,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
