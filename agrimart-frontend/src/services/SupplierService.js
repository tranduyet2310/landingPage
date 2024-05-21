import axios from "./customizeAxios";

const getAllSuppliers = (pageNo) => {
    return axios.get(`api/suppliers?pageNo=${pageNo}`);
}

const getApprovalSuppliers = (pageNo) => {
    return axios.get(`api/suppliers/approval?pageNo=${pageNo}`);
}

const updateSupplierAccountStatus = (supplierId, state) => {
    return axios.patch(`api/suppliers/${supplierId}/status?status=${state}`)
}

const getSupplierById = (supplierId) => {
    return axios.get(`api/suppliers/${supplierId}/info`)
}

const getWarehouseById = (warehouseId) => {
    return axios.get(`api/suppliers/warehouses/${warehouseId}`)
}

export { getAllSuppliers, updateSupplierAccountStatus, getApprovalSuppliers, getSupplierById, getWarehouseById };