import axios from "axios";

const api = axios.create({
    baseURL: 'http://177.185.112.115:3333'
})

export default api;