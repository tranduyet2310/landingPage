import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import _, { debounce } from "lodash";
import "../TableUsers.scss";
import { getAllCooperations } from "../../../services/OrderService";
import ModalEditCooperation from "./ModalEditCooperation";
import ModalConfirmCooperation from "./ModalConfirmCooperation";

const TableCooperation = (props) => {
  const [listOrders, setListOrders] = useState([]);
  const [totalElement, setTotalElement] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentpage] = useState(0);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataOrderEdit, setDataOrderEdit] = useState({});

  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataOrderDelete, setDataOrderDelete] = useState({});

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("id");

  const [keyword, setKeyword] = useState("");

  const handleClose = () => {
    setIsShowModalAddNew(false);
    setIsShowModalEdit(false);
    setIsShowModalDelete(false);
  };
  // notice
  const handleUpdateTable = (order) => {
    getOrders(0);
  };

  const handleEditOrderFromModal = (order) => {
    getOrders(0);
  };

  useEffect(() => {
    // call api
    getOrders(0);
  }, []);

  const getOrders = async (page) => {
    let res = await getAllCooperations(page);
    console.log("getAllCooperations res", res);
    if (res && res.data && res.data.content) {
      setTotalElement(res.data.totalElements);
      setTotalPages(res.data.totalPage);
      setListOrders(res.data.content);
    }
  };

  const handlePageClick = (event) => {
    console.log("event lib: ", event);
    setCurrentpage(event.selected);
    getOrders(event.selected);
  };

  const handleEditProduct = (order) => {
    setDataOrderEdit(order);
    setIsShowModalEdit(true);
  };

  const handleDeleteProduct = (order) => {
    setIsShowModalDelete(true);
    setDataOrderDelete(order);
    console.log(order);
  };

  const handleDeleteOrderFromModal = (order) => {
    getOrders(0);
  };

  const handleSort = (sortBy, sortField) => {
    setSortBy(sortBy);
    setSortField(sortField);

    let cloneListUsers = _.cloneDeep(listOrders);
    cloneListUsers = _.orderBy(cloneListUsers, [sortField], [sortBy]);
    setListOrders(cloneListUsers);
  };

  const handleSearch = debounce((event) => {
    console.log(event.target.value);
    let term = event.target.value;
    if (term) {
      let cloneListUsers = _.cloneDeep(listOrders);
      cloneListUsers = cloneListUsers.filter((item) =>
        item.cropsName.includes(term)
      );
      setListOrders(cloneListUsers);
    } else {
      getOrders(currentPage);
    }
  }, 500);

  const getStatusStyle = (status) => {
    switch (status) {
      case "CANCELLED":
        return { color: "red" };
      case "COMPLETED":
      case "DELIVERING":
        return { color: "green" };
      case "PROCESSING":
      case "CONFIRMED":
        return { color: "#FF9900" };
      default:
        return {};
    }
  };

  const getButtonStyle = (status, item) => {
    switch (status) {
      case "CANCELLED":
        return (
          <button className="btn btn-secondary" disabled>
            Đã hủy
          </button>
        );
      case "COMPLETED":
        return (
          <button className="btn btn-secondary" disabled>
            Đã giao hàng
          </button>
        );
      case "DELIVERING":
        return (
          <button
            className="btn btn-success"
            onClick={() => handleDeleteProduct(item)}
          >
            Giao hàng
          </button>
        );
      case "PROCESSING":
      case "CONFIRMED":
        return (
          <button className="btn btn-warning" disabled>
            Đang xử lý
          </button>
        );
      default:
        return (
          <button className="btn btn-warning" disabled>
            Cập nhật
          </button>
        );
    }
  };

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
          <b>Danh sách đơn hàng hợp tác</b>
        </span>
      </div>

      <div className="col-12 col-sm-4 my-3">
        <input
          className="form-control"
          placeholder="Tìm kiếm theo loại cây trồng"
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
                  <span>Ngày tạo</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "dateCreated")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "dateCreated")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>Tên khách hàng</th>
              <th>Số điện thoại</th>
              <th>Loại cây trồng</th>
              <th>Số lượng đặt</th>
              <th>
                <div className="sort-header">
                  <span>Trạng thái</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "cooperationStatus")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "cooperationStatus")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {listOrders &&
              listOrders.length > 0 &&
              listOrders.map((item, index) => {
                return (
                  <tr key={`order-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.dateCreated}</td>
                    <td>{item.fullName}</td>
                    <td>{item.contact}</td>
                    <td>{item.cropsName}</td>
                    <td>{convertUnit(parseFloat(item.requireYield))}</td>
                    <td style={getStatusStyle(item.cooperationStatus)}>
                      {item.cooperationStatus}
                    </td>
                    <td>
                      <button
                        className="btn btn-primary mx-3"
                        onClick={() => handleEditProduct(item)}
                      >
                        Xem
                      </button>
                      {getButtonStyle(item.cooperationStatus, item)}
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

      <ModalEditCooperation
        show={isShowModalEdit}
        handleClose={handleClose}
        dataOrderEdit={dataOrderEdit}
        handleEditOrderFromModal={handleEditOrderFromModal}
      />

      <ModalConfirmCooperation
        show={isShowModalDelete}
        handleClose={handleClose}
        dataOrderDelete={dataOrderDelete}
        handleDeleteOrderFromModal={handleDeleteOrderFromModal}
      />
    </>
  );
};

export default TableCooperation;
