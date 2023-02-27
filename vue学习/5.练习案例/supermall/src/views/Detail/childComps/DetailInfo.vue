<template>
  <div>
    <div>
        {{detailInfo.key}}
    </div>
    <div v-for="item in detailInfo.list" class="previewImages">
      <img :src="item" alt="" @load="imgLoad()" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    imgLoad() {
      this.$emit('imgLoad')
      // console.log('123');
    }
  }
};
</script>

<style scoped>
.previewImages {
    width: 100vw;
}

.previewImages img {
    width: 100%;
}
</style>