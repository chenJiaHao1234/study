<template>
  <div id="app">
    <!-- 3. router-link 负责前往指定的浏览器路径。 相当于一个 a标签 to相当于href  -->
    <router-link to="/home">home</router-link><br>
    <router-link to="/school">school</router-link>
    <!-- 4. router-view 负责展示对应浏览器路径的路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>

</style>
