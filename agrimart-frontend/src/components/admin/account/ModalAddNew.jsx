import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const ModalAddNew = (props) => {
  const { show, handleClose, handleUpdateTable } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSaveUser = async () => {
    // let res = await postCreateUser(name, job);
    // console.log(" res:", res);
    // if (res && res.id) {
    //   // success
    //   handleClose();
    //   setName("");
    //   setJob("");
    //   toast.success("Create new user successfully");
    //   // notice demo
    //   handleUpdateTable({ first_name: name, id: res.id });
    // } else {
    //   // error
    //   toast.error("An error occur ..");
    // }
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
          <Modal.Title>Them nguoi dung</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div classNameName="body-add-new">
            <form>
              <div className="mb-3">
                <label className="form-label">Nam</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Job</label>
                <input
                  type="text"
                  className="form-control"
                  value={job}
                  onChange={(event) => setJob(event.target.value)}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveUser()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNew;
