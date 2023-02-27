<template>
  <input
    type="text"
    placeholder="输入任务名称，按回车确认"
    v-model="value"
    @keyup.enter="addTask"
  />
</template>

<script>
export default {
  props: ["receiveTask"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    // 添加任务
    addTask() {
      if (this.value !== "") {
        const task = {
          id: Date.now(),
          taskName: this.value,
          state: false,
        };
        this.receiveTask(task);
        this.value = "";
      } else {
        alert('任务内容不能为空')
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 90%;
  height: 40px;
  margin: 10px 5% 0;
  padding-left: 5px;
}
</style>