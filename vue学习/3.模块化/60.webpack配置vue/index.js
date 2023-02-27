import { name, age, sum } from "./src/js/aaa.js";

// 引入 vue
import Vue from 'vue';

// 引入 app 标签的内容
// import app from './src/vue/app.js'
import app from './src/vue/app.vue'

new Vue ({
    el: '#apps',
    template: '<app></app>',
    components: {
        app,
    }
})