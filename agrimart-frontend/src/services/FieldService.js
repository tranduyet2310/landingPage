import axios from "./customizeAxios";

const getAllFields = (pageNo) => {
    return axios.get(`api/field?pageNo=${pageNo}`)
}

const getFieldById = (fieldId) => {
    return axios.get(`api/field/${fieldId}/detail`)
}

export { getAllFields, getFieldById }