<template>
  <div>
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <mainTab v-show = "this.$route.path.indexOf('detail')==-1"></mainTab>
    <!-- <maintab v-show="this.$route.path.indexOf('detail')==-1"></maintab> -->
  </div>
</template>

<script>
import mainTab from "@/components/content/maintab/mainTab.vue";
export default {
  components: {
    mainTab,
  },

  mounted() {
    console.log(this.$route);
  }
};
</script>

<style>
@import url(./assets/css/base.css);

/* body {
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
} */
</style>
