import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateUserInfo } from "../../../services/UserService";

const ModalEditSupplier = (props) => {
  const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;
  const [email, setEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleEditUser = async () => {
    let result = await updateUserInfo(
      dataUserEdit.id,
      email,
      fullName,
      phoneNumber
    );
    const response = result.data;
    console.log("response ", response);
    console.log("result ", result);
    if (result.status == 200) {
      handleEditUserFromModal({
        fullName: fullName,
        id: dataUserEdit.id,
        phone: phoneNumber,
        email: email,
      });
      handleClose();
      toast.success("Cập nhật thành công");
    } else {
      // error
      toast.error("Có lỗi xuất hiện ...");
    }
  };

  useEffect(() => {
    if (show) {
      setEmail(dataUserEdit.email);
      setContactName(dataUserEdit.contactName);
      setPhoneNumber(dataUserEdit.phone);
    }
  }, [dataUserEdit]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thông tin nhà cung cấp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <form>
              {currentStep === 1 && (
                <>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Email</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      disabled
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>Họ và tên</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={contactName}
                      onChange={(event) => setContactName(event.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>Số điện thoại</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>Địa chỉ</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.address}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>Tỉnh thành</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.province}
                    />
                  </div>

                  <label className="form-label">
                    <b>Trạng thái</b>
                  </label>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <input
                        disabled
                        class="form-check-input me-1"
                        type="checkbox"
                        checked={dataUserEdit.active}
                        value=""
                        aria-label="..."
                      />
                      {dataUserEdit.active
                        ? "Đang kích hoạt"
                        : "Đang chờ kích hoạt"}
                    </li>
                  </ul>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Tên cửa hàng</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.shopName}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Kiểu người bán</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.sellerType}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Mã số thuế</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.tax_number}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      <b>CMND/CCCD/Hộ chiếu</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.cccd}
                    />
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Số tài khoản ngân hàng</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.bankAccountNumber}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Chủ tài khoản</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.bankAccountOwner}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Tên ngân hàng</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.bankName}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <b>Tên chi nhánh</b>
                    </label>
                    <input
                      type="text"
                      disabled
                      className="form-control"
                      value={dataUserEdit.bankBranchName}
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

export default ModalEditSupplier;
