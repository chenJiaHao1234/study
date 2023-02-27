<template>
  <swiper class="DetailSwiper">
    <swiper-item v-for="item in swiperImages" >
      <div><img :src="item" alt=""/></div>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  props: {
    swiperImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  created() {
    
  },
  
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.DetailSwiper {
  height: 200px;
  overflow: hidden;
}
</style>