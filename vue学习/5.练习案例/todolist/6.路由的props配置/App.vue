<template>
  <div id="app">
    <div class="list">
    <!-- 3. router-link 负责前往指定的浏览器路径。 相当于一个 a标签 to相当于href  -->
    <router-link to="/home" class="home">home</router-link>
    <router-link to="/school"  class="school">school</router-link>
    </div>
    <!-- 4. router-view 负责展示对应浏览器路径的路由组件 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style scoped>
#app {
  width: 400px;
  height: 400px;
  margin: 100px auto;
  border: 2px solid gray;
}
.list {
  display: flex;
  float: left;
  width: 120px;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.content {
  float: left;
  width: 280px;
  height: 100%;
}
.home,
.school {
  display: block;
  width: 80px;
  height: 40px;
  margin-top: 5px;
  text-align: center;
  line-height: 40px;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: skyblue;
  color: #fff;
  text-decoration: none;
}
</style>
