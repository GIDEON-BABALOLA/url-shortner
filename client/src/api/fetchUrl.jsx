import axios from "axios"
export const url = axios.create({
    baseURL : "https://urlshortner-dtin.onrender.com",
    withCredentials : true
})