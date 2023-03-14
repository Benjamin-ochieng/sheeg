import { createRouter, createWebHistory } from 'vue-router';
import PageInvoices from '../pages/PageInvoices.vue';
import PageSignin from '../pages/PageSignin.vue';
import PageSignup from '../pages/PageSignup.vue';

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: PageSignup,
  },
  {
    path: '/signin',
    name: 'signin',
    component: PageSignin,
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: PageInvoices,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
