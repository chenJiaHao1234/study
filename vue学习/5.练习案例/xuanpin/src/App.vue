<template>
  <div id="app">
    <div class="navBar">
      <nav-bar
      :navBarItem="['店铺注册', '仓储管理', '头程管理', '采购管理', '商品管理']"
    />
    </div>

    <div class="center">
      <theme :title='"标题内容"'/>
      <detail />
      <router-view />
    </div>
  </div>
</template>

<script>
import navBar from "./components/common/navBar/navBar.vue";
import theme from "./components/common/theme/theme.vue";
import detail from "./components/common/detail/detail.vue"
export default {
  
  components: {
    navBar,
    theme,
    detail
  },

  // created() {
  //   console.log(this.$router.options.routes);
  // }
};
</script>

<style>
@import url(./assets/css/base.css);
body {
  overflow: hidden;
}
/* #app {
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
} */
.navBar {
  float: left;
}
/* .center {
  float: left;
  width: calc(100vw - 200px);
} */
</style>
