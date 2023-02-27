<template>
  <li class="taskItem">
    <input
      type="checkbox"
      class="input"
      :checked="item.state"
      @click="handleCheck(item.id)"
    />
    <span>{{ index + 1 }}. {{ item.taskName }}</span>
    <button class="btn" @click="del(index)">删除</button>
  </li>
</template>

<script>
export default {
  props: ['item', 'index'],
  methods: {
    // 删除任务
    del(index) {
      // this.delTask(index);
      this.$bus.$emit('delTask', index)
    },

    // 切换任务状态
    handleCheck(id) {
      // this.changeTask(id);
      this.$bus.$emit('changeTask', id)
    },
  },
};
</script>

<style scoped>
.taskItem {
  height: 40px;
  line-height: 40px;
  background-color: #f2f2f2;
}

.input {
  margin: 0 5px;
}

.btn {
  float: right;
  margin-top: 4px;
  margin-right: 20px;
  width: 50px;
  height: 32px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: skyblue;
  color: #fff;
}
</style>