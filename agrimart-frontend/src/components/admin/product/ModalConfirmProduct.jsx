import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateProductState } from "../../../services/ProductService";

const ModalConfirmProduct = (props) => {
  const { show, handleClose, dataProductDelete, handleDeleteProductFromModal } =
    props;

  const confirmDelete = async () => {
    let res = await updateProductState(dataProductDelete.id);
    if (res && res.status === 200) {
      toast.success("Cập nhật thành công");
      handleClose();
      handleDeleteProductFromModal(dataProductDelete);
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
            Bạn có chắc chắn {dataProductDelete.active ? "hủy kích hoạt" : "kích hoạt"} cho sản phẩm
            <b> "{dataProductDelete.productName}"</b>?
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

export default ModalConfirmProduct;
