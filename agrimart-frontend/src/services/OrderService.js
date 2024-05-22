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

const getStatisticOrder = (month, year) => {
    return axios.get(`api/orders/statistic?m=${month}&y=${year}`)
}

const getStatisticRevenue = (month, year) => {
    return axios.get(`api/orders/revenue?m=${month}&y=${year}`)
}

const getOrderData = (month, year) => {
    return axios.get(`api/orders/chart?m=${month}&y=${year}`)
}

const getPieChartData = (month, year) => {
    return axios.get(`api/orders/pie?m=${month}&y=${year}`)
} 

export { getAllOrders, updateOrderStatus, getAllCooperations, updateCooperationStatus, getStatisticOrder, getStatisticRevenue, getOrderData, getPieChartData }