import axios from "axios";

const request =  function (config) {
    // 创建axios实例
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //发送网络请求
    return instance1(config)
}

const request2 = function(config) {
    // 创建axios实例
    const instance2 = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })
    
    //发送网络请求
    return instance2(config)
}

export {
    request,
    request2
}