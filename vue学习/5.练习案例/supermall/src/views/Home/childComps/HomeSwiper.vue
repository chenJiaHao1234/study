<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload()" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";
export default {
  data() {
    return {
      isload: true,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },

  methods: {
    imgload() {
      if (this.isload) {
        console.log("图片加载完成");
        this.$emit("swiperimgload");
        this.isload = false
      }
    },
  },
};
</script>

<style>
</style>