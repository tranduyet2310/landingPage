import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateUserInfo } from "../../../services/UserService";

const ModalEditUser = (props) => {
  const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
      setFullName(dataUserEdit.fullName);
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
          <Modal.Title>Cập nhật người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Họ và tên</label>
                <input
                  type="text"
                  className="form-control"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>
              <label className="form-label">Trạng thái</label>
              <ul class="list-group">
                <li class="list-group-item">
                  <input
                    disabled
                    class="form-check-input me-1"
                    type="checkbox"
                    checked={dataUserEdit.status}
                    value=""
                    aria-label="..."
                  />
                  Đang kích hoạt
                </li>
              </ul>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleEditUser()}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditUser;
