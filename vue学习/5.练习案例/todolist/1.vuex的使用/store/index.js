import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    // actions 用于响应组件中的动作，处理异步操作 
    // 完成要求后转达到 mutations
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

    // mutations 用于操作数据(state)
    mutations: {
        increase(state, num) {
            // console.log(this.state === state); // mutations 传递的第一个参数就是 state
            state.sum += num
        },
        reduce(state, num) {
            state.sum -= num
        },
        addStudents(state, student) {
            state.students.push(student)
        }
    },

    // state 用于存储数据
    state: {
        sum: 0,
        students: []
    },

    // getters 类似于计算属性 通过已有的数据计算出新的数据, 用于将state中的数据进行加工
    getters: {
        amplify(state) {
            return state.sum * 10
        }
    },

    modules: {

    }
})

export default store