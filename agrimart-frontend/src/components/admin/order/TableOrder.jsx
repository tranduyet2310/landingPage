import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import _, { debounce } from "lodash";
import "../TableUsers.scss";
import ModalConfirmOrder from "./ModalConfirmOrder";
import ModalEditOrder from "./ModalEditOrder";
import { getAllOrders } from "../../../services/OrderService";

const TableOrder = (props) => {
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
    let res = await getAllOrders(page);
    console.log("getAllOrders res", res);
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
        item.orderStatus.includes(term)
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

  return (
    <>
      <div className="my-3 add-new d-flex justify-content-center align-items-center">
        <span style={{ fontSize: "2rem" }}>
          <b>Danh sách đơn hàng</b>
        </span>
      </div>

      <div className="col-12 col-sm-4 my-3">
        <input
          className="form-control"
          placeholder="Tìm kiếm theo trạng thái đơn"
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
                  <span>Ngày cập nhật</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "dateUpdated")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "dateUpdated")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>Mã đơn hàng</th>
              <th>Trạng thái thanh toán</th>
              <th>Phương thức thanh toán</th>
              <th>
                <div className="sort-header">
                  <span>Trạng thái</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "orderStatus")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "orderStatus")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>ID Khách hàng</th>
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
                    <td>{item.dateUpdated}</td>
                    <td>{item.orderNumber}</td>
                    <td>{item.paymentStatus}</td>
                    <td>{item.paymentMethod}</td>
                    <td style={getStatusStyle(item.orderStatus)}>
                      {item.orderStatus}
                    </td>
                    <td>{item.userId}</td>
                    <td>
                      <button
                        className="btn btn-primary mx-3"
                        onClick={() => handleEditProduct(item)}
                      >
                        Xem
                      </button>
                      {getButtonStyle(item.orderStatus, item)}
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

      <ModalEditOrder
        show={isShowModalEdit}
        handleClose={handleClose}
        dataOrderEdit={dataOrderEdit}
        handleEditOrderFromModal={handleEditOrderFromModal}
      />

      <ModalConfirmOrder
        show={isShowModalDelete}
        handleClose={handleClose}
        dataOrderDelete={dataOrderDelete}
        handleDeleteOrderFromModal={handleDeleteOrderFromModal}
      />
    </>
  );
};

export default TableOrder;
