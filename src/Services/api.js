import axios from "axios";

const api = axios.create({
    baseURL: "https://689bcb8758a27b18087c2ef6.mockapi.io/api/v1/productosderopa",
});

export default api;