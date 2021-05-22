import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/edit.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "about" */ '../views/info.vue')
  },
  {
<<<<<<< HEAD
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/list.vue')
  },
  {
    path: '/navMenu',
    name: 'navMenu',
    component: () => import(/* webpackChunkName: "about" */ '../views/navMenu.vue')
  },
=======
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/list.vue')
>>>>>>> dev
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
