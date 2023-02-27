import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

// count组件 使用 mapState等4个方法 进行vuex模块化
// 简单说就是在 使用前 指定某一个模块
// 格式：...mapState('模块'['数据名1','数据名2','数据名3'...])
const count = {
    // namespaced 命名空间 在使用 mapState等方法时需要加上 namespaced: true
    namespaced: true,
    actions: {
        oddNumber(context, num) {
            console.log(context, num);
            if (context.state.sum % 2) {
                context.commit('increase', num)
            }
        },
        increaseWait(context, num) {
            setTimeout(() => {
                context.commit('increase', num)
            }, 1000)
        }
    },
    mutations: {
        increase(state, num) {
            // console.log(this.state === state); // mutations 传递的第一个参数就是 state
            state.sum += num
        },
        reduce(state, num) {
            state.sum -= num
        },
    },
    state: {
        sum: 0,
    },
    getters: {
        amplify(state) {
            return state.sum * 10
        }
    }
}

// addName组件 不使用 mapState等4个方法 进行vuex模块化
const addName = {
    namespaced: true,
    actions: {
        addStudentsLi(context, student) {
            if(student.indexOf('李') === 0) {
                context.commit('addStudents', student)
            } else {
                alert('添加的学生不是姓李')
            }
        }
    },
    mutations: {
        addStudents(state, student) {
            state.students.push(student)
        }
    },
    state: {
        students: []
    },
    getters: {}
}

const store = new Vuex.Store({
    modules: {
        countModule: count,
        addNameModule: addName
    }
})

export default store