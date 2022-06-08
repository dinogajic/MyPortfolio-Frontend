import Vue from 'vue'
import VueRouter from 'vue-router'
import { Auth } from '@/services'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/edit-profile',
    name: 'EditProfile',
    component: () => import('../views/EditProfile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/"];
  const loginNeeded = !publicPages.includes(to.path);
  const user = Auth.getUser();

  if(loginNeeded && !user) {
    next('/login');
    return;
  }
  
  next();

})

export default router
