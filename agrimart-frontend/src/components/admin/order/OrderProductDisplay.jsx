import React, { useEffect, useState } from "react";
import { getWarehouseById } from "../../../services/SupplierService";

const OrderProductDisplay = ({ product, quantity }) => {
  const [warehouseInfo, setWarehouseInfo] = useState("");
  const [standardPrice, setStandardPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");

  const formatValue = (value) => {
    let result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${result} VNĐ`;
  };

  const getWarehouseInfo = async (warehouseId) => {
    let res = await getWarehouseById(warehouseId);
    console.log(">>> check warehouse ", res);
    if (res && res.data) {
      let address = `${res.data.detail}-${res.data.commune}-${res.data.district}-${res.data.province}`;
      setWarehouseInfo(address);
    }
  };
  useEffect(() => {
    getWarehouseInfo(product.warehouseId);
    setStandardPrice(formatValue(product.standardPrice));
    setDiscountPrice(formatValue(product.discountPrice));
  }, [product]);

  return (
    <form className="border p-4 rounded">
      <div className="d-flex align-items-center">
        <img
          src={product.images[0].imageUrl}
          alt="Sản phẩm"
          className="img-fluid"
          style={{ width: "60px", height: "60px", marginRight: "10px" }}
        />
        <p>
          <strong>{product.productName}</strong>
        </p>
      </div>
      <i>Đơn giá:</i>{" "}
      {product.discountPrice > 0 ? discountPrice : standardPrice}
      <br />
      <i>Số lượng:</i> {quantity}
      <br />
      <i>Địa chỉ lấy hàng:</i> {warehouseInfo}
    </form>
  );
};

export default OrderProductDisplay;
