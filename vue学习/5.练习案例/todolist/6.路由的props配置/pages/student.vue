<template>
  <div>
    <ul>
      <li v-for="item in msgs">
        <!-- 使用params传递参数时的注意点 -->
        <!-- 1. 需要在配置路由时添加占位符 -->
        <!-- 2. 使用对象写法要求必须使用name配置项，且不能使用path配置项 -->


        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/school/student/msg/${item.id}/${item.title}`">{{ item.title }}</router-link> -->


        <!-- 跳转路由并携带params参数，to的对象写法-->
        <router-link :to="{
          name: 'xiaoxi',
          params: {
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