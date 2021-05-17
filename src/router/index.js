import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue')
  },
  {
    path: '/Info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue')
  },
  {
    path: '/List',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },{
    path: '/NavMenu',
    name: 'NavMenu',
    component: () => import(/* webpackChunkName: "about" */ '../views/NavMenu.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
