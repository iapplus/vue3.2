import axios from 'axios'

let x = axios.create({
    baseURL:'/xxx',
})



x.interceptors.request.use(config => {
    console.log("请求开始")
//     // 配置token
//     if (store.getters.token) {
//         config.headers['x-requested-key'] = `ZXWL${getToken()}`
//     }
// // 配置content-Type
//     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//     // elementUI的loading
//     load = Loading.service({ fullscreen: true })
    return config
}, error => {
    return Promise.reject(error)
})

// 接收
x.interceptors.response.use(response => {
    // response.data
    // response.data.code
    console.log("请求结束")
    // load.close()
    return response
}, error => {
    return Promise.reject(error)
})
export default x
