import axios from 'axios';

const api = axios.create({
    baseURL: 'https://conscientizapn-backend.herokuapp.com'
});

export default api;