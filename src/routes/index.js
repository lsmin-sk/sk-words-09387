import { createRouter, createWebHistory } from 'vue-router';
import AboutRoot from '../views/AboutRoot.vue';
import AboutError from '../views/AboutError.vue';
import AdminLogin from '../views/AdminLogin.vue';
import AdminSignup from '../views/AdminSignup.vue';
import PostingWords from '../views/PostingWords.vue';
import WordsQuestion from '../views/WordsQuestion.vue';
import WordsResult from '../views/WordsResult.vue';

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
      path: '/words/question',
      name: '/words/question',
      component: WordsQuestion,
    },
    {
      path: '/words/result',
      name: '/words/result',
      component: WordsResult,
    },
    {
      path: '/postings/:qid',
      name: '/postings',
      component: PostingWords,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/errors',
    }
  ]
})

export default router
