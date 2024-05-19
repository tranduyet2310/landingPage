import React from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteUser, updateAccountStatus } from "../../../services/UserService";
import { toast } from "react-toastify";

const ModalConfirm = (props) => {
  const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } =
    props;

  const confirmDelete = async () => {
    // let res = await deleteUser(dataUserDelete.id);
    let currentState = dataUserDelete.status ? 0 : 1
    let res = await updateAccountStatus(dataUserDelete.id, currentState);
    if (res && res.status === 200) {
      toast.success("Cập nhật thành công");
      handleClose();
      handleDeleteUserFromModal(dataUserDelete);
    } else {
      toast.error("Có lỗi xuất hiện ...");
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
          <Modal.Title>Cập nhật trạng thái</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div classNameName="body-add-new">
            Bạn có chắc chắn cập nhật trạng thái cho <b>email="{dataUserDelete.email}"</b>?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={() => confirmDelete()}>
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirm;
