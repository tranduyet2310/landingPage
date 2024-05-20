import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import _, { debounce } from "lodash";
import { getAllCategories } from "../../../services/CategoryService";
import ModalAddCategory from "./ModalAddCategory";
import ModalEditCategory from "./ModalEditCategory";
import ModalConfirmCategory from "./ModalConfirmCategory";
import "../TableUsers.scss";

const TableCategory = (props) => {
  const [listCategories, setListCategories] = useState([]);
  const [totalElement, setTotalElement] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataCategoryEdit, setDataCategoryEdit] = useState({});

  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataCategoryDelete, setDataCategoryDelete] = useState({});

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("id");

  const [keyword, setKeyword] = useState("");

  const handleClose = () => {
    setIsShowModalAddNew(false);
    setIsShowModalEdit(false);
    setIsShowModalDelete(false);
  };
  // notice
  const handleUpdateTable = (category) => {
    getCategories(0);
  };

  const handleEditCategoryFromModal = (category) => {
    getCategories(0);
  };

  useEffect(() => {
    // call api
    getCategories(0);
  }, []);

  const getCategories = async (page) => {
    let res = await getAllCategories(page);
    console.log("getAllCategory res", res);
    if (res && res.data && res.data.content) {
      setTotalElement(res.data.totalElements);
      setTotalPages(res.data.totalPage);
      setListCategories(res.data.content);
    }
    console.log(">>> check res: ", res);
  };

  const handlePageClick = (event) => {
    console.log("event lib: ", event);
    getCategories(+event.selected + 1);
  };

  const handleEditCategory = (category) => {
    setDataCategoryEdit(category);
    setIsShowModalEdit(true);
  };

  const handleDeleteCategory = (category) => {
    setIsShowModalDelete(true);
    setDataCategoryDelete(category);
    console.log(category);
  };

  const handleDeleteCategoryFromModal = (category) => {
    getCategories(0);
  };

  const handleSort = (sortBy, sortField) => {
    setSortBy(sortBy);
    setSortField(sortField);

    let cloneListUsers = _.cloneDeep(listCategories);
    cloneListUsers = _.orderBy(cloneListUsers, [sortField], [sortBy]);
    setListCategories(cloneListUsers);
  };

  const handleSearch = debounce((event) => {
    console.log(event.target.value);
    let term = event.target.value;
    if (term) {
      let cloneListUsers = _.cloneDeep(listCategories);
      cloneListUsers = cloneListUsers.filter((item) =>
        item.categoryName.includes(term)
      );
      setListCategories(cloneListUsers);
    } else {
      getCategories(0);
    }
  }, 500);

  return (
    <>
      <div className="my-3 add-new d-sm-flex flex-column flex-sm-row">
        <span>
          <b>Danh sách danh mục sản phẩm</b>
        </span>
        <button
          className="btn btn-primary mt-3 mt-sm-0 ms-sm-3"
          onClick={() => setIsShowModalAddNew(true)}
        >
          <i class="fa-solid fa-circle-plus"></i>
          &nbsp; Thêm danh mục
        </button>
      </div>

      <div className="col-12 col-sm-4 my-3">
        <input
          className="form-control"
          placeholder="Tìm kiếm theo tên"
          // value={keyword}
          onChange={(event) => handleSearch(event)}
        />
      </div>

      <div className="customize-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <div className="sort-header">
                  <span>ID</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "id")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "id")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>
                <div className="sort-header">
                  <span>Tên danh mục</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "categoryName")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "categoryName")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>Ảnh minh họa</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {listCategories &&
              listCategories.length > 0 &&
              listCategories.map((item, index) => {
                return (
                  <tr key={`category-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.categoryName}</td>
                    <td>
                      <img
                        src={item.categoryImage}
                        alt="category image"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-warning mx-3"
                        onClick={() => handleEditCategory(item)}
                      >
                        Sửa
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteCategory(item)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />

      <ModalAddCategory
        show={isShowModalAddNew}
        handleClose={handleClose}
        handleUpdateTable={handleUpdateTable}
      />

      <ModalEditCategory
        show={isShowModalEdit}
        handleClose={handleClose}
        dataCategoryEdit={dataCategoryEdit}
        handleEditCategoryFromModal={handleEditCategoryFromModal}
      />

      <ModalConfirmCategory
        show={isShowModalDelete}
        handleClose={handleClose}
        dataCategoryDelete={dataCategoryDelete}
        handleDeleteCategoryFromModal={handleDeleteCategoryFromModal}
      />
    </>
  );
};

export default TableCategory;
