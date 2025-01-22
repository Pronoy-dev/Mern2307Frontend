import axios from "axios";

const axiosinstance = axios.create({
    baseURL: import.meta.env.VITE_DOMAIN_NAME 
});

export {axiosinstance}