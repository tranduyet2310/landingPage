import axios from "./customizeAxios";

const getAllCategories = (pageNo) => {
    return axios.get(`api/categories/list?pageNo=${pageNo}`)
}

const createCategory = (categoryName, categoryImage) => {
    const formData = new FormData();
    formData.append('categoryName', categoryName);
    formData.append('file', categoryImage)
    return axios.post('api/categories', formData)
}

const createListSubcategory = (categoryId, subcategoryList) => {
    return axios.post(`api/categories/${categoryId}/subcategories/list`, subcategoryList)
}

const updateCategory = (categoryId, categoryName, categoryImage, isUpdate) => {
    const formData = new FormData();
    formData.append('categoryName', categoryName);
    formData.append('file', categoryImage);
    formData.append('isUpdate', isUpdate)
    return axios.put(`api/categories/${categoryId}`, formData)
}

const updateCategoryInfo = (categoryId, categoryName) => {
    return axios.patch(`api/categories/${categoryId}/info?categoryName=${categoryName}`)
}

const updateListSubcategory = (categoryId, subcategoryList) => {
    return axios.put(`api/categories/${categoryId}/subcategories/list`, subcategoryList)
}

const deleteCategory = (categoryId) => {
    return axios.delete(`api/categories/${categoryId}`)
}

export { getAllCategories, createCategory, createListSubcategory, updateCategory, updateCategoryInfo, updateListSubcategory, deleteCategory };