import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateCooperationStatus } from "../../../services/OrderService";

const ModalConfirmCooperation = (props) => {
  const { show, handleClose, dataOrderDelete, handleDeleteOrderFromModal } =
    props;

  const confirmUpdate = async () => {
    let res = await updateCooperationStatus(dataOrderDelete.id, "DELIVERING");
    if (res && res.status === 200) {
      toast.success("Cập nhật thành công");
      handleClose();
      handleDeleteOrderFromModal(dataOrderDelete);
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
          <Modal.Title>Cập nhật trạng thái đơn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div classNameName="body-add-new">
            Bạn có chắc chắn muốn cập nhật trạng thái cho đơn hàng này?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={() => confirmUpdate()}>
            Đồng ý
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirmCooperation;
