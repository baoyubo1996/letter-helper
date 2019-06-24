import request from '../plugin/axios'
export function A (data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}