import axios from "axios";

export function request(config) {
    // 创建 axios 实例
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })


    // axios 拦截器
    // 拦截器用于发送每次  请求成功/失败(request)  或者  响应成功/失败(response)  进行处理
    // 拦截谁.interceptors.request.use((发送请求成功拦截)config => {

    // }, (发送请求失败拦截)err => {

    // })
    instance1.interceptors.request.use(abc => {
        console.log(abc);
        return abc  // ------- 拦截后处理完需要再发送出去，不然请求数据会失败
    }, err => {
        console.log(err);
    })

    // 发送网络请求
    return instance1(config)
}

