import Vue from 'vue'
import store from '../store/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/dashboard/',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardPage.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/login/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue'),
    meta: {

    },
  },
  {
    path: '/reset-password/',
    name: 'reset-password',
    component: () => import(/* webpackChunkName: "reset" */ '../views/ResetPage.vue'),
    meta: {

    },
  },
  {
    path: '/register/',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterPage.vue'),
    meta: {

    },
  },
  {
    path: '/settings/',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsPage.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/new-session/',
    name: 'new-session',
    component: () => import(/* webpackChunkName: "newsession" */ '../views/NewSessionPage.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/history/',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '../views/HistoryPage.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/profile/',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfilePage.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/progress/',
    name: 'progress',
    component: () => import(/* webpackChunkName: "progress" */ '../views/ProgressPage.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/routines/',
    name: 'routines',
    component: () => import(/* webpackChunkName: "routines" */ '../views/RoutinesPage.vue'),
    meta: {
      requiresAuth: true
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
    
  if ((to.name == 'login' || to.name == 'register') && store.getters.isLoggedIn) {
      next('/dashboard')
      return
  }

  if (to.name == 'home' && store.getters.isLoggedIn) {
      next('/dashboard')
      return
  }

  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
          next()
          return
      }
      next('/login')
  } else {
      next()
  }
})

export default router
