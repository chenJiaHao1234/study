<template>
  <tab>
      <tab-item link="/home" activecolor="green">
        <img slot="item-icon" src="@/assets/images/tab/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/images/tab/login.png" alt="">
        <p slot="item-text">首页</p>
      </tab-item>

      <tab-item link="/classify" activecolor="blue">
        <img slot="item-icon" src="@/assets/images/tab/classify.png" alt="">
        <img slot="item-icon-active" src="@/assets/images/tab/login.png" alt="">
        <p slot="item-text">分类</p>
      </tab-item>

      <tab-item link="/shopping" activecolor="gray">
        <img slot="item-icon" src="@/assets/images/tab/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/images/tab/login.png" alt="">
        <p slot="item-text">购物车</p>
      </tab-item>

      <tab-item link="/login" activecolor="yellow">
        <img slot="item-icon" src="@/assets/images/tab/classify.png" alt="">
        <img slot="item-icon-active" src="@/assets/images/tab/login.png" alt="">
        <p slot="item-text">我的</p>
      </tab-item>
    </tab>
</template>

<script>
import tab from "./tab.vue";
import tabItem from "./tabItem.vue"

export default {
    components: {
        tab,
        tabItem
    }
}
</script>

<style>

</style>