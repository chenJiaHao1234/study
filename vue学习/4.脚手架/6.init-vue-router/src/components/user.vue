<template>
  <div>
    <h2>动态路由</h2>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: 'user',
    computed: {
        userId() {
            // $route 是当前处于活跃的路由 
            // params
            // 下面这段代码的作用是 拿到当前处于活跃的路由的用户id
            return this.$route.params.userId
        }
    },
    // 创建
    created() {
        console.log('创建了user组件');
    },
    // 销毁
    destroyed() {
        console.log('销毁了user组件');
    }
}
</script>

<style>

</style>