import axios from "axios";

const port = 3000
const host = '127.0.0.1'
const querystring = require("querystring");

const AxiosExamples = {
    getRequest: () => {
        return axios.request({
            method: "GET",
            url: '/get',
            baseURL: 'http://' + host + ':' + port,
        })
    },
    postRequest: () => {
        return axios.request({
            method: "POST",
            url: '/post',
            baseURL: 'http://' + host + ':' + port,
        })
    }
}


export {AxiosExamples}
