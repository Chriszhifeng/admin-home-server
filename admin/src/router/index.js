/*
 * @Author: Chris:)
 * @Date: 2021-05-23 22:11:46
 * @LastEditTime: 2021-05-24 09:27:40
 * @LastEditors: Chris:)
 * @FilePath: /admin-home-server/admin/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/home.vue')
  },
  {
    path: '/nav',
    name: 'nav',
<<<<<<< HEAD
    component: () => import('../views/nav.vue')
=======
    component: () => import( '../views/nav.vue')
>>>>>>> dev
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
    component: () => import('../views/about.vue')
=======
    component: () => import( '../views/about.vue')
>>>>>>> dev
  },
  {
    path: '/edit',
    name: 'edit',
<<<<<<< HEAD
    component: () => import('../views/edit.vue')
=======
    component: () => import( '../views/edit.vue')
>>>>>>> dev
  },
  {
    path: '/info',
    name: 'info',
<<<<<<< HEAD
    component: () => import('../views/info.vue')
=======
    component: () => import( '../views/info.vue')
>>>>>>> dev
  },
  {
    path: '/list',
    name: 'list',
<<<<<<< HEAD
    component: () => import('../views/list.vue')
=======
    component: () => import( '../views/list.vue')
>>>>>>> dev
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
