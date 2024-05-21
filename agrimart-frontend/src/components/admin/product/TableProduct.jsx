import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import _, { debounce } from "lodash";
import ModalEditProduct from "./ModalEditProduct";
import ModalConfirmProduct from "./ModalConfirmProduct";
import { getAllProducts } from "../../../services/ProductService";
import "../TableUsers.scss";

const TableProduct = (props) => {
  const [listProducts, setListProducts] = useState([]);
  const [totalElement, setTotalElement] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentpage] = useState(0);

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataProductEdit, setDataProductEdit] = useState({});

  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [dataProductDelete, setDataProductDelete] = useState({});

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("id");

  const [keyword, setKeyword] = useState("");

  const handleClose = () => {
    setIsShowModalAddNew(false);
    setIsShowModalEdit(false);
    setIsShowModalDelete(false);
  };
  // notice
  const handleUpdateTable = (product) => {
    getProducts(0);
  };

  const handleEditProductFromModal = (product) => {
    getProducts(0);
  };

  useEffect(() => {
    // call api
    getProducts(0);
  }, []);

  const getProducts = async (page) => {
    let res = await getAllProducts(page);
    console.log("getAllProduct res", res);
    if (res && res.data && res.data.content) {
      setTotalElement(res.data.totalElements);
      setTotalPages(res.data.totalPage);
      setListProducts(res.data.content);
    }
    console.log(">>> check res: ", res);
  };

  const handlePageClick = (event) => {
    console.log("event lib: ", event);
    setCurrentpage(event.selected);
    getProducts(event.selected);
  };

  const handleEditProduct = (product) => {
    setDataProductEdit(product);
    setIsShowModalEdit(true);
  };

  const handleDeleteProduct = (product) => {
    setIsShowModalDelete(true);
    setDataProductDelete(product);
    console.log(product);
  };

  const handleDeleteProductFromModal = (product) => {
    getProducts(0);
  };

  const handleSort = (sortBy, sortField) => {
    setSortBy(sortBy);
    setSortField(sortField);

    let cloneListUsers = _.cloneDeep(listProducts);
    cloneListUsers = _.orderBy(cloneListUsers, [sortField], [sortBy]);
    setListProducts(cloneListUsers);
  };

  const handleSearch = debounce((event) => {
    console.log(event.target.value);
    let term = event.target.value;
    if (term) {
      let cloneListUsers = _.cloneDeep(listProducts);
      cloneListUsers = cloneListUsers.filter((item) =>
        item.categoryName.includes(term)
      );
      setListProducts(cloneListUsers);
    } else {
      getProducts(currentPage);
    }
  }, 500);

  return (
    <>
      <div className="my-3 add-new d-flex justify-content-center align-items-center">
        <span style={{ fontSize: "2rem" }}>
          <b>Danh sách sản phẩm</b>
        </span>
      </div>

      <div className="col-12 col-sm-4 my-3">
        <input
          className="form-control"
          placeholder="Tìm kiếm theo danh mục"
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
                  <span>Tên tên sản phẩm</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down"
                      onClick={() => handleSort("desc", "productName")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up"
                      onClick={() => handleSort("asc", "productName")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>
                <div className="sort-header">
                  <span>Danh mục</span>
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
              <th>Danh mục con</th>
              <th>Tên cửa hàng</th>
              <th>Ảnh minh họa</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {listProducts &&
              listProducts.length > 0 &&
              listProducts.map((item, index) => {
                return (
                  <tr key={`product-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.productName}</td>
                    <td>{item.categoryName}</td>
                    <td>{item.subCategoryName}</td>
                    <td>{item.supplierShopName}</td>
                    <td>
                      <img
                        src={item.images[0].imageUrl}
                        alt="product image"
                        style={{ width: "60px", height: "60px" }}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-warning mx-3"
                        onClick={() => handleEditProduct(item)}
                      >
                        Xem
                      </button>
                      <button
                        className={`btn ${
                          item.active ? "btn-success" : "btn-danger"
                        }`}
                        onClick={() => handleDeleteProduct(item)}
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

      <ModalEditProduct
        show={isShowModalEdit}
        handleClose={handleClose}
        dataProductEdit={dataProductEdit}
        handleEditProductFromModal={handleEditProductFromModal}
      />

      <ModalConfirmProduct
        show={isShowModalDelete}
        handleClose={handleClose}
        dataProductDelete={dataProductDelete}
        handleDeleteProductFromModal={handleDeleteProductFromModal}
      />
    </>
  );
};

export default TableProduct;
