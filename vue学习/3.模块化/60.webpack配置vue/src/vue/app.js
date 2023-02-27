// 再到 app.vue 中把 模板、脚本、样式分开
const app = {
    template: `<div>
                 <h2>{{hi}}</h2>
                 <h2>{{name}}</h2>
               </div>`,
    data() {
        return {
            hi: '你好',
            name: '小明'
        }
    }
}

export default app