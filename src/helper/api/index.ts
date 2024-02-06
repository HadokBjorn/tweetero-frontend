import axios from "axios";

const api = axios.create({
    baseURL: "http://localhos:8080",
})

export default api;