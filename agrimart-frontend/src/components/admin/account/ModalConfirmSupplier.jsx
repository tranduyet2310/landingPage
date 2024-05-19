import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { updateSupplierAccountStatus } from "../../../services/SupplierService";

const ModalConfirmSupplier = (props) => {
    const { show, handleClose, dataUserDelete, handleDeleteUserFromModal } =
      props;

    const confirmDelete = async () => {
      let res = await updateSupplierAccountStatus(dataUserDelete.id, !dataUserDelete.active);
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
             Bạn có chắc chắn cập nhật trạng thái cho{" "}
             <b>email="{dataUserDelete.email}"</b>?
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

export default ModalConfirmSupplier