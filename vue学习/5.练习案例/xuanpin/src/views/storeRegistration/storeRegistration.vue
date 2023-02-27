<template>
  <div class="storeRegistration">
    <store-status :titles="['注册店铺', '未注册店铺']" />
    <batter-scroll class="center">
      <shop-info class="shopInfo" />
    </batter-scroll>
  </div>
</template>

<script>
import storeStatus from "./components/storeStatus.vue";
import batterScroll from "@/components/common/batterScroll/batterScroll.vue";
import shopInfo from "./components/shopInfo.vue";
export default {
  components: {
    storeStatus,
    batterScroll,
    shopInfo,
  },
  
};
</script>

<style scoped>
.storeRegistration {
  position: relative;
}
.center {
  overflow: hidden;
  position: absolute;
  top: -0.1333rem;
  left: 1.6rem;
  width: 13.3333rem;
  height: 7.3333rem;
  padding: .4rem;
  background-color: #fff;
  box-shadow: 0px .04rem .1333rem 0px rgba(0, 0, 0, 0.2);
}
</style>