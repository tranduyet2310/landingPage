import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { calculateAverageRating } from "../../../services/ProductService";

const ModalEditProduct = (props) => {
  const { show, handleClose, dataProductEdit, handleEditProductFromModal } =
    props;
  const [productName, setProductName] = useState("");
  const [id, setId] = useState("");
  const [rating, setRating] = useState("");
  const [standardPrice, setStandardPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const fetchAverageRating = async (id) => {
    let res = await calculateAverageRating(id);
    if (res && res.data) {
      if (res.data.averageRating === 0) {
        setRating("5.0");
      } else {
        setRating(res.data.averageRating);
      }
    }
  };

  const formatValue = (value) => {
    let result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${result} VNĐ`;
  };

  useEffect(() => {
    if (show) {
      setId(dataProductEdit.id);
      setProductName(dataProductEdit.productName);
      fetchAverageRating(dataProductEdit.id);
      setStandardPrice(formatValue(dataProductEdit.standardPrice));
      setDiscountPrice(formatValue(dataProductEdit.discountPrice));
    }
  }, [dataProductEdit]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <form>
              {currentStep === 1 && (
                <>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Tên sản phẩm</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={productName}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>Thông tin mô tả</b>
                    </label>
                    <textarea
                      type="text"
                      disabled
                      className="form-control"
                      value={dataProductEdit.description}
                      style={{ height: "125px", resize: "none" }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>Danh mục sản phẩm</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataProductEdit.categoryName}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>Danh mục con</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataProductEdit.subCategoryName}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Đánh giá</b>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value={rating}
                        disabled
                      />
                      <span className="input-group-text">
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#FFD43B" }}
                        ></i>
                      </span>
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>ID cửa hàng</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataProductEdit.supplierId}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Tên cửa hàng</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataProductEdit.supplierShopName}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Giá bán</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={standardPrice}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Giá khuyến mãi</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={discountPrice}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>Số lượng sản phẩm</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataProductEdit.quantity}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>Số lượng đã bán</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataProductEdit.sold}
                    />
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Hình ảnh sản phẩm</b>
                    </label>
                    <br />
                    <div className="image-container">
                      {dataProductEdit.images.map((image, index) => (
                        <img
                          src={image.imageUrl}
                          alt="product image"
                          style={{
                            width: "100px",
                            height: "100px",
                            margin: "5px",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Sản phẩm có sẵn</b>
                    </label>
                    <ul class="list-group">
                      <li class="list-group-item">
                        <input
                          disabled
                          class="form-check-input me-1"
                          type="checkbox"
                          checked="true"
                          value=""
                          aria-label="..."
                        />
                        {dataProductEdit.available
                          ? "Hiện đang có sẵn"
                          : "Hiện đang không có sẵn"}
                      </li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Sản phẩm sắp ra mắt</b>
                    </label>
                    <ul class="list-group">
                      <li class="list-group-item">
                        <input
                          disabled
                          class="form-check-input me-1"
                          type="checkbox"
                          checked="true"
                          value=""
                          aria-label="..."
                        />
                        {dataProductEdit.new
                          ? "Sản phẩm sắp ra mắt"
                          : "Sản phẩm đang bán"}
                      </li>
                    </ul>
                    <label className="form-label">
                      <b>Trạng thái</b>
                    </label>
                    <ul class="list-group">
                      <li class="list-group-item">
                        <input
                          disabled
                          class="form-check-input me-1"
                          type="checkbox"
                          checked="true"
                          value=""
                          aria-label="..."
                        />
                        {dataProductEdit.active
                          ? "Đang kích hoạt"
                          : "Đang chờ kích hoạt"}
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {currentStep > 1 && (
            <Button variant="secondary" onClick={handlePrevious}>
              Trước
            </Button>
          )}
          {currentStep < 3 && (
            <Button variant="primary" onClick={handleNext}>
              Tiếp
            </Button>
          )}
          {currentStep === 3 && (
            <Button variant="primary" onClick={handleClose}>
              Đóng
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditProduct;
