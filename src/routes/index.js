import { createRouter, createWebHistory } from 'vue-router';
import AboutRoot from '../views/AboutRoot.vue';
import AboutError from '../views/AboutError.vue';
import AdminLogin from '../views/AdminLogin.vue';
import AdminSignup from '../views/AdminSignup.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: '/',
        component: AboutRoot
      },
      {
        path: '/errors',
        name: '/errors',
        component: AboutError
      },
      {
        path: '/admin/login',
        name: '/admin/login',
        component: AdminLogin
      },
        {
      path: '/admin/signup',
      name: '/admin/signup',
      component: AdminSignup,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/errors',
    }
  ]
})

export default router
