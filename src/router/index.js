import { createRouter, createWebHistory } from 'vue-router';
import PageInvoices from '../pages/PageInvoices.vue';
import PageLogin from '../pages/PageLogin.vue';
import PageSignup from '../pages/PageSignup.vue';

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: PageSignup,
  },
  {
    path: '/login',
    name: 'login',
    component: PageLogin,
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
