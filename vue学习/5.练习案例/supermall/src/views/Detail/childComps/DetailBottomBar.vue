<template>
  <div class="bottomBar">
    <div class="tabBar">
      <tab class="tab">
        <TabItem>
          <img src="@/assets/img/tabbar/kefu.png" alt="" slot="noactive" />
        </TabItem>
        <TabItem>
          <img src="@/assets/img/tabbar/shop.png" alt="" slot="noactive" />
        </TabItem>
        <TabItem @click.native="goShoppingtrolley()">
          <img
            src="@/assets/img/tabbar/detailshopping.png"
            alt=""
            slot="noactive"
          />
        </TabItem>
      </tab>
    </div>

    <div class="btn">
      <div class="joinShoppingCart" @click="addShoppingCart()">加入购物车</div>
      <div class="purchase">立即购买</div>
    </div>
  </div>
</template>

<script>
import Tab from "@/components/common/tabbar/Tab.vue";
import TabItem from "@/components/common/tabbar/TabItem.vue";
export default {
  components: {
    Tab,
    TabItem,
  },

  methods: {
    // 跳转到购物车界面
    goShoppingtrolley() {
      this.$router.push('/shoppingTrolley')
    },

    // 添加商品到购物车
    addShoppingCart() {
      this.$emit('addCart')
    }
  }
};
</script>

<style scoped>
.bottomBar {
  display: flex;
}

.bottomBar .tabBar {
  flex: 1;
}

.tabBar .tab {
  position: static;
  overflow: hidden;
  background-color: #fff;
}

.tab img {
  width: 100%;
  transform: translate(-4px, -5px);
}

.bottomBar .btn {
  flex: 1;
  display: flex;
  text-align: center;
}

.joinShoppingCart,
.purchase {
  flex: 1;
  line-height: 49px;
  color: #fff;
}

.joinShoppingCart {
  background-color: orange;
}

.purchase {
  background-color: red;
}
</style>