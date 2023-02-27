const path = require('path')

module.exports = { // -------------------------- 通过 commonjs 导出一个对象
    entry: './index.js',     //--------------- 告诉 webpack 要打包文件的路径 
    
    output: { //------------------------------- 告诉 webpack 打包好放在哪里
        path: path.resolve(__dirname, 'dist'), // -------- 打包好的文件路径
        filename: 'burdle.js', // ------------------------ 打包好的文件名称
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}