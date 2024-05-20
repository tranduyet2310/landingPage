import axios from "./customizeAxios";

const getAllProducts = (pageNo) => {
    return axios.get(`api/products/all?pageNo=${pageNo}`)
}

const updateProductState = (productId) => {
    return axios.patch(`api/products/${productId}/state`)
}

const calculateAverageRating = (productId) => {
    return axios.get(`api/reviews/${productId}/average`)
}

export { getAllProducts, updateProductState, calculateAverageRating }