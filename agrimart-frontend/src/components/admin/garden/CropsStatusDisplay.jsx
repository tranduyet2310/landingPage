import React from "react";
import makeLandImage from "../../../../public/images/make-land.png";
import harvesterImage from "../../../../public/images/harvester.png";
import germinationImage from "../../../../public/images/germination.png";
import fruitingImage from "../../../../public/images/fruiting.png";
import floweringImage from "../../../../public/images/flowering.png";
import pestPreventionImage from "../../../../public/images/pest-prevention.png";
import sowSeedImage from "../../../../public/images/sow-seed.png";
import takeCareImage from "../../../../public/images/take-care.png";

const CropsStatusDisplay = ({ cropsStatus, dateCreated, details }) => {
  const renderContent = () => {
    switch (cropsStatus) {
      case "MAKE_LAND":
        return (
          <div className="d-flex align-items-center">
            <img
              src={makeLandImage}
              alt="Làm đất"
              className="img-fluid"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p>
              <strong>Đang làm đất</strong>
            </p>
          </div>
        );
      case "SOW_SEED":
        return (
          <div className="d-flex align-items-center">
            <img
              src={sowSeedImage}
              alt="Gieo hạt"
              className="img-fluid"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p>
              <strong>Đang gieo hạt giống</strong>
            </p>
          </div>
        );
      case "GERMINATION":
        return (
          <div className="d-flex align-items-center">
            <img
              src={germinationImage}
              alt="Nảy mầm"
              className="img-fluid"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p>
              <strong>Đang giai đoạn nảy mầm</strong>
            </p>
          </div>
        );
      case "TAKE_CARE":
        return (
          <div className="d-flex align-items-center">
            <img
              src={takeCareImage}
              alt="Chăm sóc"
              className="img-fluid"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p>
              <strong>Trong giai đoạn chăm sóc</strong>
            </p>
          </div>
        );
      case "PEST_PREVENTION":
        return (
          <div className="d-flex align-items-center">
            <img
              src={pestPreventionImage}
              alt="Trừ sâu bệnh"
              className="img-fluid"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p>
              <strong>Giai đoạn phòng trừ sâu bệnh</strong>
            </p>
          </div>
        );
      case "HARVEST":
        return (
          <div className="d-flex align-items-center">
            <img
              src={harvesterImage}
              alt="Thu hoạch"
              className="img-fluid"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p>
              <strong>Giai đoạn thu hoạch</strong>
            </p>
          </div>
        );
      case "FLOWERING":
        return (
          <div className="d-flex align-items-center">
            <img
              src={floweringImage}
              alt="Ra hoa"
              className="img-fluid"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p>
              <strong>Trong giai đoạn ra hoa</strong>
            </p>
          </div>
        );
      case "FRUITING":
        return (
          <div className="d-flex align-items-center">
            <img
              src={fruitingImage}
              alt="Kết trái"
              className="img-fluid"
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <p>
              <strong>Giai đoạn kết trái</strong>
            </p>
          </div>
        );
      default:
        return <p className="text-center">Chưa có thông tin về vườn</p>;
    }
  };
  return (
    <form className="border p-4 rounded">
      {renderContent()}
      <i>Thời gian: {dateCreated}</i>
      <br />
      Chi tiết: {details}
    </form>
  );
};

export default CropsStatusDisplay;
