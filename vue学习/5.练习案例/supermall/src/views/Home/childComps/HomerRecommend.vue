<template>
  <div class="recommends">
    <div class="recommends-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div class="item-title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommends {
    display: flex;
    font-size: 16x;
    padding: 15px 0;
    border-bottom: 10px solid #eee;
}

.recommends .recommends-item {
    flex: 1;
    text-align: center;
}

.recommends-item img {
    width: 65px;
    margin-bottom: 5px;
}
</style>