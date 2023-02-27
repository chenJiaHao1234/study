<template>
  <div class="theme">
    {{title}}
    <div class="btn">返回主界面</div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>

<style scoped>
  .theme {
    height: .5333rem;
    line-height: .5333rem;
    text-align: center;
    background-color: #061d3a;
    color: #fff;
  }

  .theme .btn {
    float: right;
    width: 1.3333rem;
    height: .4267rem;
    margin-top: .0533rem;
    margin-right: .1333rem;
    line-height: .4267rem;
    font-size: .1867rem;
    border-radius: .0667rem;
    background-color: #3ea4ee;
  }
</style>