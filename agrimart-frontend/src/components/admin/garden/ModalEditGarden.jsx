import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import CropsStatusDisplay from "./CropsStatusDisplay";

const ModalEditGarden = (props) => {
  const { show, handleClose, dataFieldEdit, handleEditProductFromModal } =
    props;
  const [estimateYield, setEstimateYield] = useState("");
  const [estimatePrice, setEstimatePrice] = useState("");

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    if (show) {
      setEstimateYield(convertUnit(parseFloat(dataFieldEdit.estimateYield)));
      setEstimatePrice(formatValue(dataFieldEdit.estimatePrice));
    }
  }, [dataFieldEdit]);

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

  const formatValue = (value) => {
    let result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${result} VNĐ`;
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
          <Modal.Title>Chi tiết vườn cây</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <form>
              {currentStep === 1 && (
                <>
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
                    <label className="form-label">Đơn giá tiếp nhận</label>
                    <input
                      type="text"
                      className="form-control"
                      value={estimatePrice}
                      disabled
                    />
                  </div>
                  <label className="form-label">Trạng thái vườn</label>
                  <ul class="list-group">
                    <li class="list-group-item">
                      <input
                        disabled
                        class="form-check-input me-1"
                        type="checkbox"
                        checked="true"
                        value=""
                        aria-label="..."
                      />
                      {dataFieldEdit.isComplete
                        ? "Đã hoàn thành"
                        : "Đang canh tác"}
                    </li>
                  </ul>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <b className="text-center">Lịch sử vườn</b>

                  {dataFieldEdit.fieldDetails &&
                  dataFieldEdit.fieldDetails.length > 0 ? (
                    dataFieldEdit.fieldDetails.map((fieldDetail, index) => (
                      <CropsStatusDisplay
                        cropsStatus={fieldDetail.cropsStatus}
                        dateCreated={fieldDetail.dateCreated}
                        details={fieldDetail.details}
                      />
                    ))
                  ) : (
                    <p className="text-center">Chưa có thông tin về vườn</p>
                  )}
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

export default ModalEditGarden;
