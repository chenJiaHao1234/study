<template>
  <div class="contentInfo">
    <div class="uname">
      {{ commentInfo.uname }}
      <span @click="clickmore()" class="more">更多</span>
    </div>
    <div class="content">
      {{ commentInfo.content }}
    </div>
    <div class="contenttime">
      {{ commentInfo.created }}
      {{ commentInfo.style }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    clickmore() {
      console.log('123');
    },
  },
};
</script>

<style scoped>
.contentInfo {
  padding: 10px 5px;
  margin-top: 10px;
  background-color: #eee;
}

.uname,
.content,
.contenttime {
  padding: 3px 0;
}

.more {
  float: right;
  margin-right: 10px;
}
</style>