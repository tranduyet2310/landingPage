import axios from "./customizeAxios";

const getAllFields = (pageNo) => {
    return axios.get(`api/field?pageNo=${pageNo}`)
}

export { getAllFields }