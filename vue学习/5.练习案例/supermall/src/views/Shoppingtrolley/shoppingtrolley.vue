<template>
  <div>
    <!-- 顶部导航栏 -->
    <navbar class="navbar">
        <div slot="center">
          购物车
          ({{cartlength}})
        </div>
    </navbar>

    <!-- 购物车内容 -->
    <better-scroll class="scroll">
      <shopping-content :cartList="cartList" />
    </better-scroll>

    <!-- 价格结算 -->
    <settle class="settle" :cartList="cartList"/>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navBar.vue";
import BetterScroll from '@/components/common/BetterScroll/BetterScroll.vue'
import shoppingContent from "./childComps/shoppingContent.vue";
import settle from "./childComps/settle.vue";

import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      cartList: []
    }
  },

  created() {
    this.cartList = this.$store.state.cartList
    console.log(this.cartList);
    
  },

  components: {
    navbar,
    BetterScroll,
    shoppingContent,
    settle
  },

  computed: {
    // 👇mapGetters 辅助函数的使用。
    // 👇mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
    ...mapGetters(['cartlength'])
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: pink;
  z-index: 99;
}

.scroll {
  height: calc(100vh - 98px);
  margin-top: 49px;
  overflow: hidden;
}

.settle {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  z-index: 100;
}
</style>