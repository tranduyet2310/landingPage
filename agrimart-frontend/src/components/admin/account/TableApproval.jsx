import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import _, { debounce } from "lodash";
import "../TableUsers.scss";
import { getApprovalSuppliers } from "../../../services/SupplierService";
import ModalEditSupplier from "./ModalEditSupplier";
import ModalConfirmSupplier from "./ModalConfirmSupplier";

const TableApproval = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});

  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataUserDelete, setDataUserDelete] = useState({});

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("id");

  const [keyword, setKeyword] = useState("");

  const handleClose = () => {
    setIsShowModalAddNew(false);
    setIsShowModalEdit(false);
    setIsShowModalDelete(false);
  };
  // notice
  const handleUpdateTable = (user) => {
    setListUsers([user, ...listUsers]);
  };

  const handleEditUserFromModal = (user) => {
    let cloneListUsers = _.cloneDeep(listUsers);
    let index = listUsers.findIndex((item) => item.id === user.id);
    cloneListUsers[index].fullName = user.fullName;
    cloneListUsers[index].email = user.email;
    cloneListUsers[index].phone = user.phone;
    setListUsers(cloneListUsers);
  };

  useEffect(() => {
    // call api
    getSuppliers(0);
  }, []);

  const getSuppliers = async (page) => {
    let res = await getApprovalSuppliers(page);
    console.log("getAllUser res", res);
    if (res && res.data && res.data.content) {
      setTotalUsers(res.data.totalElements);
      setTotalPages(res.data.totalPage);
      setListUsers(res.data.content);
    }
    console.log(">>> check res: ", res);
  };

  const handlePageClick = (event) => {
    console.log("event lib: ", event);
    getSuppliers(+event.selected + 1);
  };

  const handleEditUser = (user) => {
    setDataUserEdit(user);
    setIsShowModalEdit(true);
  };

  const handleDeleteUser = (user) => {
    setIsShowModalDelete(true);
    setDataUserDelete(user);
    console.log(user);
  };

  const handleDeleteUserFromModal = (user) => {
    getSuppliers(0);
  };

  const handleSort = (sortBy, sortField) => {
    setSortBy(sortBy);
    setSortField(sortField);

    let cloneListUsers = _.cloneDeep(listUsers);
    cloneListUsers = _.orderBy(cloneListUsers, [sortField], [sortBy]);
    setListUsers(cloneListUsers);
  };

  const handleSearch = debounce((event) => {
    console.log(event.target.value);
    let term = event.target.value;
    if (term) {
      let cloneListUsers = _.cloneDeep(listUsers);
      cloneListUsers = cloneListUsers.filter((item) =>
        item.email.includes(term)
      );
      setListUsers(cloneListUsers);
    } else {
      getSuppliers(0);
    }
  }, 500);

  return (
    <>
      <div className="my-3 add-new d-flex justify-content-center align-items-center">
        <span style={{ fontSize: "2rem" }}>
          <b>Danh sách phê duyệt bán hàng</b>
        </span>
      </div>

      <div className="col-12 col-sm-4 my-3">
        <input
          className="form-control"
          placeholder="Tìm kiếm theo email"
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
              <th>Email</th>
              <th>
                <div className="sort-header">
                  <span>Họ và tên</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "contactName")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "contactName")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>Tên cửa hàng</th>
              <th>Số điện thoại</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <tr key={`user-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.contactName}</td>
                    <td>{item.shopName}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button
                        className="btn btn-warning mx-3"
                        onClick={() => handleEditUser(item)}
                      >
                        Xem
                      </button>
                      <button
                        className={`btn ${
                          item.active ? "btn-success" : "btn-danger"
                        }`}
                        onClick={() => handleDeleteUser(item)}
                      >
                        Cập nhật
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

      <ModalEditSupplier
        show={isShowModalEdit}
        handleClose={handleClose}
        dataUserEdit={dataUserEdit}
        handleEditUserFromModal={handleEditUserFromModal}
      />

      <ModalConfirmSupplier
        show={isShowModalDelete}
        handleClose={handleClose}
        dataUserDelete={dataUserDelete}
        handleDeleteUserFromModal={handleDeleteUserFromModal}
      />
    </>
  );
};

export default TableApproval;
