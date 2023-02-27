<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.tab {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
