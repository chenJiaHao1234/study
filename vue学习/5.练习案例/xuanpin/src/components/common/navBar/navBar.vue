<template>
  <div class="navBar">
    <div 
    v-for="(item, index) in navBarItem" 
    @click="isclick(index)" 
    :class="{active: active == index}"
    class="navBarItem">
      {{ item }}
      <div 
      v-show="active == index"
      class="square"></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    },
  props: {
    navBarItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  mounted() {
    console.log(this.$router.options.routes);
    console.log(this.$route);
  },

  methods: {
    isclick(index) {
      // 路由跳转
      if(this.$route.path !== this.$router.options.routes[index + 1].path) {
        this.$router.push(this.$router.options.routes[index + 1].path);
      // 处于选中的显示状态
        this.active = index
      }
    },
  },
};
</script>

<style scoped>
  .navBar {
    width: 2.6667rem;
    height: 100vh;
    color: #fff;
    background-color: #061d38;
  }

  .navBar .navBarItem {
    position: relative;
    padding: .1333rem 0;
    text-align: center;
  }

  .navBarItem .square {
    position: absolute;
    top: .1333rem;
    right: .0667rem;
    width: .0667rem;
    height: .24rem;
    border-radius: .04rem;
    background-color: #5bb4e9;
  }

  .active {
    background-color: #02182e;

  }
</style>