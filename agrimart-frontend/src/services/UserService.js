import axios from "./customizeAxios";

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`); 
}

const postCreateUser = (name, job) => {
    return axios.post("/api/users", {name, job});
}

const putUpdateUser = (name, job) => {
    return axios.put("/api/users/2", {name, job});
}

const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`);
}

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

export { fetchAllUser, postCreateUser, putUpdateUser, deleteUser, loginApi, 
    getAllUsers, updateUserInfo, updateAccountStatus };