import React from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteUser } from "../../services/UserService";
import { toast } from "react-toastify";

const ModalConfirm = (props) => {
  const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } =
    props;

  const confirmDelete = async () => {
    let res = await deleteUser(dataUserDelete.id);
    if (res && res.status === 204) {
      toast.success("Delete successfully");
      handleClose();
      handleDeleteUserFromModal(dataUserDelete);
    } else {
      toast.error("Falied to delete");
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
          <Modal.Title>Xoa nguoi dung</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div classNameName="body-add-new">
            Chac chan xoa nguoi dung, <b>email="{dataUserDelete.email}"</b>?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => confirmDelete()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirm;
