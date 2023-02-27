// 要求：在终端只输入 webpack 就让 src 文件夹内的内容 打包好在 dist 生成 burdle文件

// 第一步 终端初始化 npm init (因为需要用到 node)
const path = require('path')


// webpack.config.js  这个文件名称是固定的
module.exports = { // -------------------------- 通过 commonjs 导出一个对象
    entry: './src/main.js', //--------------- 告诉 webpack 要打包文件的路径 
    
    output: { //------------------------------- 告诉 webpack 打包好放在哪里
        path: path.resolve(__dirname, 'dist'), // -------- 打包好的文件路径
        filename: 'burdle.js', // ------------------------ 打包好的文件名称
    }, 
}