<template>
  <div id="app">
    <!-- <router-link to="/home"></router-link> -->
    <router-view></router-view>
    <main-tab></main-tab>
  </div>
</template>

<script>
import mainTab from "@/components/tabbar/mainTab.vue";

export default {
  name: "App",
  
  components: {
    mainTab,
  },
};
</script>

<style>
/* 引入初始样式 */
@import url(./assets/css/base.css);
</style>
