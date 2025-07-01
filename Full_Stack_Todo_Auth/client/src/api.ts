// Create an api file to get baseUrl everywhere

import axios from "axios";

const api = axios.create({
     baseURL:"http://localhost:5000/api/todo",
     withCredentials:true
})

export default api