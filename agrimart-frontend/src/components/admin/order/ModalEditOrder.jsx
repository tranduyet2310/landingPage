import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { getSupplierById } from "../../../services/SupplierService";
import { getUserAddressById } from "../../../services/UserService";
import OrderProductDisplay from "./OrderProductDisplay";

const ModalEditOrder = (props) => {
  const { show, handleClose, dataOrderEdit, handleEditOrderFromModal } =
    props;
  const [supplierId, setSupplierId] = useState("");
  const [supplierContactName, setSupplierContactName] = useState("");
  const [supplierPhone, setSupplierPhone] = useState("");
  const [supplierAddress, setSupplierAddress] = useState("");
  const [userFullname, setUserFullname] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    if (show) {
      getSupplierInfo(dataOrderEdit.id);
      getUserAddress(dataOrderEdit.addressId);
    }
  }, [dataOrderEdit]);

  const getSupplierInfo = async (supplierId) => {
    let res = await getSupplierById(supplierId);
    if (res && res.data) {
      setSupplierId(res.data.id);
      setSupplierContactName(res.data.contactName);
      setSupplierPhone(res.data.phone);
      let address = `${res.data.address}-${res.data.province}`;
      setSupplierAddress(address);
    }
  };

  const getUserAddress = async (addressId) => {
    let res = await getUserAddressById(addressId);
    if (res && res.data) {
      console.log(">>>> check address", res);
      setUserFullname(res.data.userFullName);
      setUserPhone(res.data.phone);
      let address = `${res.data.details}-${res.data.commune}-${res.data.district}-${res.data.province}`;
      setUserAddress(address);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <form>
              {currentStep === 1 && (
                <>
                  <div className="mb-3">
                    <label className="form-label">ID nhà cung cấp</label>
                    <input
                      type="text"
                      className="form-control"
                      value={supplierId}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tên người gửi</label>
                    <input
                      type="text"
                      className="form-control"
                      value={supplierContactName}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      value={supplierPhone}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Địa chỉ</label>
                    <input
                      type="text"
                      className="form-control"
                      value={supplierAddress}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tên người nhận</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userFullname}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Số điện thoại người nhận
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={userPhone}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Địa chỉ giao hàng</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userAddress}
                      disabled
                    />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <b className="text-center">Danh sách sản phẩm</b>

                  {dataOrderEdit.orderDetails &&
                  dataOrderEdit.orderDetails.length > 0 ? (
                    dataOrderEdit.orderDetails.map((detail, index) => (
                      <OrderProductDisplay
                        product={detail.product}
                        quantity={detail.quantity}
                      />
                    ))
                  ) : (
                    <p className="text-center">
                      Không có thông tin về sản phẩm
                    </p>
                  )}
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
          {currentStep < 2 && (
            <Button variant="primary" onClick={handleNext}>
              Tiếp
            </Button>
          )}
          {currentStep === 2 && (
            <Button variant="primary" onClick={handleClose}>
              Đóng
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditOrder;
