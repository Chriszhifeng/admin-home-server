<!--
 * @Author: Chris:)
 * @Date: 2021-05-24 09:28:55
 * @LastEditTime: 2021-05-24 10:00:46
 * @LastEditors: Chris:)
 * @FilePath: /admin-home-server/admin/src/App.vue
-->

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/nav">Nav</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/edit">Edit</router-link> |
    <router-link to="/info">Info</router-link> |
    <router-link to="/list">List</router-link>
  </div>
  <router-view />
</template>