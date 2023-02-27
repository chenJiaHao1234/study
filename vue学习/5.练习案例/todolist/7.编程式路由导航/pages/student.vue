<template>
  <div>
    <ul>
      <li v-for="item in msgs">
        <button @click="changeRoute(item)">{{item.title}}</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgs: [
        { id: '001', title: "百度" },
        { id: '002', title: "新浪" },
        { id: '003', title: "微博" },
      ],
    };
  },
  methods: {
    changeRoute(item) {
      console.log(this.$router);
      // 编程式路由导航 第一种写法(注：使用的是 params传参，/id/title为传递的参数)
      // this.$router.push('/school/student/msg/id/title')

      // 编程式路由导航 第二种写法(对象形式)
      this.$router.push({
        name: 'xiaoxi',
        params: {
          id: item.id,
          title: item.title
        }
      })
    }
  }
};
</script>

<style>
li {
  list-style: none;
}
</style>