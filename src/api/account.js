import service from './../utils/request';


export function Login(data) {
    // service.request({
    //     url: '',
    //     method: 'get'
    // })
    const url = '/login/';
    return service.post(url, data);

}
export function getCode(data) {
    // service.request({
    //     url: '',
    //     method: 'get'
    // })
    const url = '/getSms/';
    return service.post(url, data);

}