import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'http://localhost:3333/',
});


export default instanceAxios;