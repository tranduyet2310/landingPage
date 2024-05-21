import axios from "./customizeAxios";

const getAllOrders = (pageNo) => {
    return axios.get(`api/orders?pageNo=${pageNo}&sortDir=desc&sortBy=dateUpdated`)
}

const updateOrderStatus = (orderId, orderStatus) => {
    return axios.patch(`api/orders/${orderId}?orderStatus=${orderStatus}`)
}

const getAllCooperations = (pageNo) => {
    return axios.get(`api/cooperation/list?pageNo=${pageNo}`)
}

const updateCooperationStatus = (cooperationId, status) => {
    return axios.patch(`api/cooperation/${cooperationId}`, {cooperationStatus : status})
}

export { getAllOrders, updateOrderStatus, getAllCooperations, updateCooperationStatus }