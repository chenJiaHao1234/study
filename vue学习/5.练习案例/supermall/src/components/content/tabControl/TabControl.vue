<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      @click="isClick(index)"
    >
      <span :class="activeClass(index)">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    isClick(index) {
      this.num = index;
      this.$emit('tabclick', index)
    },
    activeClass(index) {
      return { activeTabcontrolItem: index === this.num };
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  background-color: #eee;
  text-align: center;
  font-size: 16px;
  padding: 10px 0;
}
.tab-control-item span {
  padding: 0 5px 2px;
}

.activeTabcontrolItem {
  border-bottom: 2px solid pink;
}
</style>