import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { deleteCategory } from "../../../services/CategoryService";

const ModalConfirmCategory = (props) => {
  const { show, handleClose, dataCategoryDelete, handleDeleteCategoryFromModal } =
    props;

  const confirmDelete = async () => {
    let res = await deleteCategory(dataCategoryDelete.id);
    if (res && res.status === 200) {
      toast.success("Xóa thành công");
      handleClose();
      handleDeleteCategoryFromModal(dataCategoryDelete);
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
            Bạn có chắc chắn muốn xóa danh mục
            <b> "{dataCategoryDelete.categoryName}"</b>?
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

export default ModalConfirmCategory;
