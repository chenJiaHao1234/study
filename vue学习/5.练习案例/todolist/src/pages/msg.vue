<template>
  <ul>
    <li>id: {{id}}</li>
    <li>消息: {{title}}</li>
    <li>{{a}}</li>
    <li>{{b}}</li>
  </ul>
</template>

<script>
export default {
  props: ['id', 'title', 'a', 'b']
}
</script>

<style>

</style>