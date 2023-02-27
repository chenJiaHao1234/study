<template>
    <div>
        <h2 class="color">{{ hi }}</h2>
        <h2>{{ name }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hi: "你好",
            name: "小明",
        };
    },
};
</script>

<style>
  .color {
    color: pink;
  }
</style>