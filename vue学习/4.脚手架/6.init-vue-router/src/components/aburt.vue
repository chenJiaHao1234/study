<template>
  <div>
    <h2>aburt组件</h2>
  </div>  
</template>

<script>
export default {
  name: 'aburt',
  // 创建
    created() {
        console.log('创建了aburt组件');
    },
    // 销毁
    destroyed() {
        console.log('销毁了aburt组件');
    }
}
</script>

<style>

</style>