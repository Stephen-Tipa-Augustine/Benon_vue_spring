import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },

  {
    path: '/art',
    name: 'Art',
    component: () => import('../views/Art.vue')
  },

  {
    path: '/business',
    name: 'Business',
    component: () => import('../views/Business.vue')
  },

  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },

  {
    path: '/politics',
    name: 'Politics',
    component: () => import('../views/Politics.vue')
  },

  {
    path: '/sports',
    name: 'Sports',
    component: () => import('../views/Sports.vue')
  },

  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success.vue')
  },

  {
    path: '/travel',
    name: 'Travel',
    component: () => import('../views/Travel.vue')
  },

  {
    path: '/logged-out',
    name: 'Logout',
    component: () => import('../views/Logout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
