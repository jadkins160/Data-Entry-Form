import { createRouter as _createRouter } from 'vue-router';

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


  export function createRouter () {
    return _createRouter({
      routes: routes
    })
  }