<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  mounted() {
    let bs = new BScroll(this.$refs.wrapper, {
      // ...... 详见配置项
      probeType: this.probeType,
      click: true,
      pullUpLoad: true,
      observeDOM: true,
      observeImage: true,
    });
  },
};
</script>

<style scoped>
  
</style>