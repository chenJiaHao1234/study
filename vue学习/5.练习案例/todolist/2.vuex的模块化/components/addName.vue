<template>
  <div>
    <h4>展示count组件的值: {{sum}}</h4>
    <h4>展示count组件放大10倍的值: {{bigSum}}</h4>
    <input type="text" v-model="student" @keyup.enter="addStudents()">
    <button @click="addStudentsLi()">添加的学生姓李</button>
    <ul>
        <li v-for="item in students"> {{item}} </li>
    </ul>
    
  </div>
</template>

<script>
export default {
    name: 'addName',
    data() {
        return {
            student: '',
        }
    },
    methods: {
        addStudents() {
            this.$store.commit('addNameModule/addStudents', this.student)
            this.student = ''
        },
        addStudentsLi() {
            this.$store.dispatch('addNameModule/addStudentsLi', this.student)
            this.student = ''
        }
    },
    computed: {
        // ...mapState(['sum'])
        sum() {
            return this.$store.state.countModule.sum
        },
        students() {
            return this.$store.state.addNameModule.students
        },
        bigSum() {
            return this.$store.getters['countModule/amplify']
        }
    }
}
</script>

<style>

</style>