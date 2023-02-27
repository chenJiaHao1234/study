<template>
  <div class="tab-item" @click="isclick()">
    <div v-if="!active">
      <slot name="noactive"></slot>
    </div>
    <div v-else>
      <slot name="active"></slot>
    </div>
    <div :style="activestyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activecolor: 'pink',
    };
  },
  props: {
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    isclick() {
      if(this.$route.path != this.link) {
        this.$router.push(this.link)
      }
     
    },
  },
  computed: {
    active() {
        return this.$route.path === this.link
    },
    activestyle() {
      if(this.active) {
        return {color: this.activecolor}
      }
    }
  },
};
</script>

<style>
.tab-item {
  flex: 1;
  font-size: 12px;
  text-align: center;
}
.tab-item img {
  width: 30px;
}
</style>