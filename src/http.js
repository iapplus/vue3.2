import axios from "./axios";


export function get(url, params) {
    let params_ = new URLSearchParams()
    params_.append('phone', 1202)
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res)
        }).then(err => {
            reject(err)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(function (res) {
            resolve(res)
        }).then(function (err) {
            resolve(err)
        })
    })
}
