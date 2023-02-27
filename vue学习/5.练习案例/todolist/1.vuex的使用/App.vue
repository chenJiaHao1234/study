<template>
  <div id="app">
    <count/>
    <hr>
    <addName/>
  </div>
</template>

<script>
import count from './components/count.vue'
import addName from './components/addName.vue';
export default {
  name: 'App',
  components: {
    count,
    addName
  },
  mounted: {
    abc() {
      console.log(this.$store);
    }
  }
}
</script>

<style>

</style>
