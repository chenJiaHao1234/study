<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tab {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    background-color: #f6f6f6;
}
</style>