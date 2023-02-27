<template>
  <div>
    <h2>当前值为：{{ sum }}</h2>
    <h3>当前值的10倍为: {{ amplify }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase(num)">+</button>
    <button @click="reduce(num)">-</button>
    <button @click="oddNumber(num)">值为奇数才+1</button>
    <button @click="increaseWait(num)">一秒后+1</button>
    <h4>展示addName组件中的学生名: {{students}}</h4>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: "count",
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    // 1. 四个方法都有对象写法和数组写法，且写法都相同(此案例使用数组写法)

    // 2. 拿mapMutations举例
    // 对象写法：格式为 ...mapMutations({key: value})
    // ...mapMutations({increase: 'increase', reduce: 'reduce'})
    // 数组写法：格式为 ...mapMutations([]), 使用数组写法要求 count中方法名 和 Mutations中方法名一样
    // ...mapMutations(['increase', 'reduce'])
    
    // 3. mapActions 和 mapMutations 使用时如果需要传递参数时需要在模板中写好

    // -----------------------------------------------------------------
    // mapMutations 的使用
    // increase() {
    //   this.$store.commit("increase", this.num);
    // },
    // reduce() {
    //   this.$store.commit("reduce", this.num);
    // },
    ...mapMutations(['increase', 'reduce']),
    
    // ------------------------------------------------------------------
    // mapActions 的使用
    // oddNumber() {
    //   this.$store.dispatch("oddNumber", this.num);
    // },
    // increaseWait() {
    //   this.$store.dispatch("increaseWait", this.num);
    // },
    ...mapActions(['oddNumber', 'increaseWait'])
  },
  computed: {
    // mapState 的使用
    // sum() {
    //     return this.$store.state.sum
    // },
    ...mapState(['sum', 'students']),
    // ---------------------------------------------------------------------
    // mapGetters 的使用
    // amplify() {
    //     return this.$store.getters.amplify
    // },
    ...mapGetters(['amplify'])
  }
};
</script>

<style>
</style>