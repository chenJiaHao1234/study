<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.nav {
  display: flex;
  height: 49px;
  text-align: center;
  line-height: 49px;
  font-size: 20px;
  color: #fff;
}
.left,
.right {
  width: 20%;
}
.center {
  flex: 1;
}
</style>