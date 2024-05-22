import axios from "./customizeAxios";

const loginApi = (email, password) => {
    return axios.post("api/login", {email, password});
}

const getAllUsers = (pageNo) => {
    return axios.get(`api/users?pageNo=${pageNo}`)
}

const updateUserInfo = (userId, email, fullName, phone) => {
    return axios.patch(`api/users/${userId}`, {id: userId, fullName: fullName, phone: phone, email: email})
}

const updateAccountStatus = (userId, state) => {
    return axios.patch(`api/users/${userId}/status?status=${state}`)
}

const getUserAddressById = (addressId) => {
    return axios.get(`api/users/addresses/${addressId}`)
}

const getStatisticUser = (month, year) => {
    return axios.get(`api/users/statistic?m=${month}&y=${year}`)
}

const getChartData = (month, year) => {
    return axios.get(`api/users/chart?m=${month}&y=${year}`)
}

export { loginApi, getAllUsers, updateUserInfo, updateAccountStatus, getUserAddressById, getStatisticUser, getChartData };