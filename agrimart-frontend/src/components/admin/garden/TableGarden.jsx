import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import _, { debounce } from "lodash";
import { getAllFields } from "../../../services/FieldService";
import ModalEditGarden from "./ModalEditGarden";
import "../TableUsers.scss";

const TableGarden = (props) => {
  const [listFields, setListFields] = useState([]);
  const [totalElement, setTotalElement] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataFieldEdit, setDataFieldEdit] = useState({});

  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataFieldDelete, setDataFieldDelete] = useState({});

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("id");

  const [keyword, setKeyword] = useState("");

  const handleClose = () => {
    setIsShowModalAddNew(false);
    setIsShowModalEdit(false);
    setIsShowModalDelete(false);
  };
  // notice
  const handleUpdateTable = (field) => {
    getFields(0);
  };

  const handleEditProductFromModal = (field) => {
    getFields(0);
  };

  useEffect(() => {
    // call api
    getFields(0);
  }, []);

  const getFields = async (page) => {
    let res = await getAllFields(page);
    console.log("getAllFields res", res);
    if (res && res.data && res.data.content) {
      setTotalElement(res.data.totalElements);
      setTotalPages(res.data.totalPage);
      setListFields(res.data.content);
    }
  };

  const handlePageClick = (event) => {
    console.log("event lib: ", event);
    getFields(event.selected);
  };

  const handleEditProduct = (field) => {
    setDataFieldEdit(field);
    setIsShowModalEdit(true);
  };

  const handleDeleteProduct = (field) => {
    setIsShowModalDelete(true);
    setDataFieldDelete(field);
    console.log(field);
  };

  const handleDeleteProductFromModal = (field) => {
    getFields(0);
  };

  const handleSort = (sortBy, sortField) => {
    setSortBy(sortBy);
    setSortField(sortField);

    let cloneListUsers = _.cloneDeep(listFields);
    cloneListUsers = _.orderBy(cloneListUsers, [sortField], [sortBy]);
    setListFields(cloneListUsers);
  };

  const handleSearch = debounce((event) => {
    console.log(event.target.value);
    let term = event.target.value;
    if (term) {
      let cloneListUsers = _.cloneDeep(listFields);
      cloneListUsers = cloneListUsers.filter((item) =>
        item.cropsName.includes(term)
      );
      setListFields(cloneListUsers);
    } else {
      getFields(0);
    }
  }, 500);

  const convertUnit = (kg) => {
    if (kg >= 1000) {
      return `${(kg / 1000).toFixed(1)} tấn`;
    } else if (kg >= 100) {
      return `${(kg / 100).toFixed(1)} tạ`;
    } else if (kg >= 10) {
      return `${(kg / 10).toFixed(1)} yến`;
    } else {
      return `${kg} kg`;
    }
  };

  return (
    <>
      <div className="my-3 add-new d-flex justify-content-center align-items-center">
        <span style={{ fontSize: "2rem" }}>
          <b>Danh sách vườn cây</b>
        </span>
      </div>

      <div className="col-12 col-sm-4 my-3">
        <input
          className="form-control"
          placeholder="Tìm kiếm theo tên cây trồng"
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
                  <span>Vụ mùa</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "season")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "season")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>
                <div className="sort-header">
                  <span>Loại cây trồng</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "cropsType")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "cropsType")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>Tên cây trồng</th>
              <th>Diện tích vườn</th>
              <th>Sản lượng dự kiến</th>
              <th>Nhà cung cấp</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {listFields &&
              listFields.length > 0 &&
              listFields.map((item, index) => {
                return (
                  <tr key={`field-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.season}</td>
                    <td>{item.cropsType}</td>
                    <td>{item.cropsName}</td>
                    <td>{item.area}</td>
                    <td>
                      {convertUnit(parseFloat(item.estimateYield))}
                    </td>
                    <td>{item.supplierContactName}</td>
                    <td>
                      <button
                        className="btn btn-warning mx-3"
                        onClick={() => handleEditProduct(item)}
                      >
                        Xem chi tiết
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

      <ModalEditGarden
        show={isShowModalEdit}
        handleClose={handleClose}
        dataFieldEdit={dataFieldEdit}
        handleEditProductFromModal={handleEditProductFromModal}
      />

    </>
  );
};

export default TableGarden;
