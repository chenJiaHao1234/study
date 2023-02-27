<template>
  <div id="app">
    <addTask :receiveTask="receiveTask" />
    <taskList :tasks="tasks" />
    <taskAllState
      :tasks="tasks"
      :allSelect="allSelect"
      :delAllTask="delAllTask"
    />
  </div>
</template>

<script>
import addTask from "@/components/addTask.vue";
import taskList from "@/components/taskList.vue";
import taskAllState from "@/components/taskAllState.vue";
export default {
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    };
  },
  methods: {
    // 添加任务
    receiveTask(task) {
      this.tasks.unshift(task);
    },

    // 删除任务
    delTask(index) {
      this.tasks.splice(index, 1);
    },

    // 切换任务状态
    changeTask(id) {
      this.tasks.forEach((value) => {
        if (value.id === id) {
          value.state = !value.state;
        }
      });
    },

    // 全选/取消全选
    allSelect(x) {
      this.tasks.forEach((task) => {
        task.state = x;
      });
    },

    //删除已完成任务
    delAllTask() {
      this.tasks = this.tasks.filter((task) => {
        return task.state === false;
      });
    },
  },
  watch: {
    // 保存数据到浏览器本地存储
    tasks: {
      // 开启深度监视
      deep: true,
      handler(val) {
        localStorage.setItem("tasks", JSON.stringify(val));
      },
    },
  },
  components: {
    addTask,
    taskList,
    taskAllState,
  },
  mounted() {
    // 绑定自定义事件
    this.$bus.$on('delTask', this.delTask) // 相当于 @delTask='dalTask'
    this.$bus.$on('changeTask', this.changeTask)
  },
  beforeDestroy() {
    // 解绑自定义事件
    this.$bus.$off('delTask')
    this.$bus.$off('changeTask')
  },
};
</script>

<style>
@import url(./assets/css/base.css);

#app {
  width: 800px;
  height: 400px;
  margin: 100px auto;
  border: 2px solid gray;
  border-radius: 10px;
}
</style>
