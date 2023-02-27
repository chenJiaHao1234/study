<template>
  <ul>
    <taskItem v-for="(item, index) in tasks" :item="item" :index="index" />
  </ul>
</template>

<script>
import taskItem from "./taskItem.vue";
export default {
  props: ["tasks"],
  components: {
    taskItem,
  },
};
</script>

<style scoped>
ul {
  overflow: hidden;
  width: 90%;
  height: 280px;
  margin: 10px 5%;
  overflow-y: auto;
}
li {
  list-style: none;
}
</style>