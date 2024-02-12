import axios from "axios";

const productsApi = axios.create({
    baseURL: "http://localhost:3100",
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

export { productsApi };