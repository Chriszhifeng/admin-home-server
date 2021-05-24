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
    component: () => import('../views/nav.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/about.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('../views/edit.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/info.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/list.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
