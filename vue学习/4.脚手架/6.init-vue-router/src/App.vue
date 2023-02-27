<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-link to="/home" tag="button">我的</router-link>

    <!-- ↓通过代码跳转路由 -->
    <button @click="click()">点击</button>


    <!-- 动态绑定路由 -->
    <!-- 1. 创建一个组件 -->
    <!-- 2. 在 router 中配置动态路由, 
            然后需要在路径后面拼接内容 :userId(userId可以自定义)
            (这一步是为了在页面中能拿到用户id) -->

    <!-- 3. 为了能让用户id在路径显示，需要动态拿到用户id。
            把用户id以对象属性的方式存到vue中,
            然后把属性名用 v-bind 在router-link 中绑定 -->
            <!-- data() {
                return {
                    userId: 'lisi'
                    }
                } -->

    <!-- 4. 在页面中拿到用户id
            this.$route.params.userId
            (↑具体看下 user组件。这里的 userId 对应第二步的 userId) -->
    <router-link :to="'/user/' + userId" tag="button">用户</router-link>

    <!-- 地址中拿到用户id  name: 'xiaoming', age: '23' -->
    <router-link :to="{path: '/porfile', query: {name: '小明', age: '23'}}" tag="button">档案</router-link>
    
    <!-- 被 keep-alive 包裹的 router-view组件 不会被频繁创建和销毁 -->
    <!-- exclude(不包括) 的组件将正常被创建和销毁，注意这里分隔时不能加空格 -->
    <keep-alive exclude="porfile,user">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "lisi",
    };
  },
  methods: {
    click() {
      // 通过代码的方式修改路由
      // 问：$router 属性那里来的？
      // 答：vue-router 在所有组件中都添加了 $router 属性
      // 类似 location.pushState 但是是通过 $router
      this.$router.push("/aburt");
      console.log("我被点击了");
    },
  },
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}; */

.abc {
  color: blueviolet;
}
</style>
