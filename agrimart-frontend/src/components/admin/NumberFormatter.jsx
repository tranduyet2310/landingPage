import React from "react";

const NumberFormatter = ({ number }) => {
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const formattedNumber = formatNumber(number);

  return (
    <div className="mb-3">
      <label className="form-label">Tổng tiền</label>
      <input
        type="text"
        className="form-control"
        value={`${formattedNumber} VNĐ`}
        disabled
      />
    </div>
  );
};

export default NumberFormatter;
