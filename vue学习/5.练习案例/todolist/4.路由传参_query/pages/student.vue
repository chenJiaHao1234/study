<template>
  <div>
    <ul>
      <li v-for="item in msgs">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- <router-link :to="`/school/student/msg?id=${item.id}&title=${item.title}`">{{ item.title }}</router-link> -->

        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link :to="{
          path: '/school/student/msg',
          query: {
            id: item.id,
            title: item.title
          }
        }">{{ item.title }}</router-link>
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
};
</script>

<style>
li {
  list-style: none;
}
</style>