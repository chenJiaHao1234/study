<template>
  <div class="goodslist">
    <goodslistitem v-for="item in goodslist" :goodItem="item"></goodslistitem>
  </div>
</template>

<script>
import Goodslistitem from "./Goodslistitem.vue";
export default {
  components: {
    Goodslistitem,
  },
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goodslist {
    display: flex;
    flex-wrap: wrap;
}
</style>