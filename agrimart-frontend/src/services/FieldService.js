import axios from "./customizeAxios";

const getAllFields = (pageNo) => {
    return axios.get(`api/field?pageNo=${pageNo}`)
}

const getFieldById = (fieldId) => {
    return axios.get(`api/field/${fieldId}/detail`)
}

const getStatisticField = (month, year) => {
    return axios.get(`api/field/statistic?m=${month}&y=${year}`)
}

const getStatisticCooperation = (month, year) => {
    return axios.get(`api/cooperation/statistic?m=${month}&y=${year}`)
}

const getGardenSource = (month, year) => {
    return axios.get(`api/field/chart?m=${month}&y=${year}`)
}

const getCropsNameStatistic = (year) => {
    return axios.get(`api/field/pie?y=${year}`)
}

export { getAllFields, getFieldById, getStatisticField, getStatisticCooperation, getGardenSource, getCropsNameStatistic }