import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { getSupplierById } from "../../../services/SupplierService";
import { getUserAddressById } from "../../../services/UserService";
import NumberFormatter from "../NumberFormatter";
import { getFieldById } from "../../../services/FieldService";

const ModalEditCooperation = (props) => {
  const { show, handleClose, dataOrderEdit, handleEditProductFromModal } =
    props;
  const [supplierId, setSupplierId] = useState("");
  const [supplierContactName, setSupplierContactName] = useState("");
  const [supplierPhone, setSupplierPhone] = useState("");
  const [supplierAddress, setSupplierAddress] = useState("");
  const [userFullname, setUserFullname] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [estimatePrice, setEstimatePrice] = useState("");
  const [estimateYield, setEstimateYield] = useState("");

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    if (show) {
      getSupplierInfo(dataOrderEdit.supplierId);
      getUserAddress(dataOrderEdit.addressId);
      getFieldInfo(dataOrderEdit.fieldId);
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
      if (res.data.userFullName && res.data.phone) {
        setUserFullname(res.data.userFullName);
        setUserPhone(res.data.phone);
      } else {
        setUserFullname(dataOrderEdit.fullName);
        setUserPhone(dataOrderEdit.contact);
      }

      if (
        res.data.details &&
        res.data.commune &&
        res.data.district &&
        res.data.province
      ) {
        let address = `${res.data.details}-${res.data.commune}-${res.data.district}-${res.data.province}`;
        setUserAddress(address);
      } else {
        setUserAddress("Chưa cập nhật địa chỉ giao hàng");
      }
    }
  };

  const getFieldInfo = async (fieldId) => {
    let res = await getFieldById(fieldId);
    if (res && res.data) {
      if (res.data.estimatePrice === 0) {
        setEstimatePrice("Nông hộ chưa thiết lập giá");
      } else {
        let value = res.data.estimatePrice
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setEstimatePrice(`${value} VNĐ`);
      }
      if (res.data.estimateYield === 0) {
        setEstimateYield("Nông hộ chưa thiết lập sản lượng");
      } else {
        let value = convertUnit(res.data.estimateYield);
        setEstimateYield(value);
      }
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết hợp tác</Modal.Title>
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
                    <label className="form-label">Đại diện nhà cung cấp</label>
                    <input
                      type="text"
                      className="form-control"
                      value={supplierContactName}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Số điện thoại nhà cung cấp
                    </label>
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
                    <label className="form-label">Tên khách hàng</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userFullname}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Số điện thoại khách hàng
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
                  <div className="mb-3">
                    <label className="form-label">Sản lượng đặt hàng</label>
                    <input
                      type="text"
                      className="form-control"
                      value={convertUnit(
                        parseFloat(dataOrderEdit.requireYield)
                      )}
                      disabled
                    />
                  </div>
                  <NumberFormatter number={dataOrderEdit.investment} />
                  <div className="mb-3">
                    <label className="form-label">Mô tả yêu cầu</label>
                    <textarea
                      type="text"
                      disabled
                      className="form-control"
                      value={dataOrderEdit.description}
                      style={{ height: "100px", resize: "none" }}
                    />
                  </div>
                  <b className="text-center">Thông tin vườn</b>
                  <div className="mb-3">
                    <label className="form-label">ID Vườn</label>
                    <input
                      type="text"
                      className="form-control"
                      value={dataOrderEdit.fieldId}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Tên cây trồng</label>
                    <input
                      type="text"
                      className="form-control"
                      value={dataOrderEdit.cropsName}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Sản lượng dự kiến</label>
                    <input
                      type="text"
                      className="form-control"
                      value={estimateYield}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Giá chấp nhận (tính theo đơn vị: 1 kg){" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={estimatePrice}
                      disabled
                    />
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

export default ModalEditCooperation;
