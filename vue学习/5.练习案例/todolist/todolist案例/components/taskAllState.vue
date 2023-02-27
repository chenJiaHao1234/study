<template>
  <div class="taskAllState">
    <input
      class="input"
      type="checkbox"
      :checked="abc.length === tasks.length && abc.length !== 0"
      @click="all"
    />
    <span>已完成{{ abc.length }} /全部{{ tasks.length }}</span>
    <button class="btn" @click="delAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ["tasks", "allSelect", 'delAllTask'],
  methods: {
    all(e) {
      console.log(e.target.checked);
      this.allSelect(e.target.checked);
    },

    delAll() {
      this.delAllTask()
    },
  },
  computed: {
    abc() {
      let a = this.tasks.filter((task) => {
        return task.state;
      });
      return a;
    },
  },
};
</script>

<style>
/* -320px */
.taskAllState {
  width: 90%;
  height: 46px;
  line-height: 46px;
  margin: 0 5%;
}

.input {
  margin: 0 5px;
}

.btn {
  float: right;
  margin-top: 7px;
  margin-right: 5px;
  width: 120px;
  height: 32px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: rgba(255, 0, 0, 0.473);
  color: #fff;
}
</style>