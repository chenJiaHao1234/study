<template>
  <tab>
    <tab-item link="/home">
      <img src="@/assets/img/tabbar/home.png" alt="" slot="noactive">
      <img src="@/assets/img/tabbar/home-active.png" alt="" slot="active">
      <span slot="item-text">首页</span>
    </tab-item>
    <tab-item link="/classify">
      <img src="@/assets/img/tabbar/classify.png" alt="" slot="noactive">
      <img src="@/assets/img/tabbar/classify-active.png" alt="" slot="active">
      <span slot="item-text">分类</span>
    </tab-item>
    <tab-item link="/shoppingTrolley">
      <img src="@/assets/img/tabbar/shoppingTrolley.png" alt="" slot="noactive">
      <img src="@/assets/img/tabbar/shoppingTrolley-active.png" alt="" slot="active">
      <span slot="item-text">购物车</span>
    </tab-item>
    <tab-item link="/login">
      <img src="@/assets/img/tabbar/login.png" alt="" slot="noactive">
      <img src="@/assets/img/tabbar/login-active.png" alt="" slot="active">
      <span slot="item-text">我的</span>
    </tab-item>
  </tab>
</template>

<script>
import tab from "@/components/common/tabbar/Tab.vue";
import tabItem from "@/components/common/tabbar/TabItem.vue";
export default {
  components: {
    tab,
    tabItem,
  },
};
</script>

<style>
</style>