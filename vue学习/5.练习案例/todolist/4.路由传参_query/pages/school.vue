<template>
  <div class="box">
    <div class="list">
      <div>我是school组件</div>
      <router-link to="/school/student" class="student">展示student组件</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style scoped>
.box {
  display: flex;
  height: 100%;
}
.list,
.content {
  flex: 1;
}
.student {
  display: block;
  width: 130px;
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