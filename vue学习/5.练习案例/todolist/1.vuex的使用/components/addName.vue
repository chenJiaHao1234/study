<template>
  <div>
    <input type="text" v-model="student" @keyup.enter="addStudents()">
    <ul>
        <li v-for="item in $store.state.students"> {{item}} </li>
    </ul>
    <h4>展示count组件的值: {{sum}}</h4>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'addName',
    data() {
        return {
            student: '',
        }
    },
    methods: {
        addStudents() {
            this.$store.commit('addStudents', this.student)
            this.student = ''
        }
    },
    computed: {
        ...mapState(['sum'])
    }
}
</script>

<style>

</style>