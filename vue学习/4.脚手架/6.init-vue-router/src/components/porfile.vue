<template>
  <div>
    <h2>porfile</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>  
</template>

<script>
export default {
  name: 'porfile',
  // 创建
    created() {
        console.log('创建了profile组件');
    },
    // 销毁
    destroyed() {
        console.log('销毁了profile组件');
    }
}
</script>

<style>

</style>