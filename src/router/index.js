import { createRouter as createRouter, createWebHistory } from 'vue-router';

import SubmitForm from '../components/SubmitForm.vue';
import ConfirmationPage from '../components/ConfirmationPage.vue';

const routes = [
  {
    path: '/',
    name: 'submit',
    component: SubmitForm
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: ConfirmationPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;