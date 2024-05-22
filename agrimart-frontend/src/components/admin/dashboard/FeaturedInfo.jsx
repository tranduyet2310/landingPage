import React, { useEffect, useState } from "react";
import "./FeaturedInfo.scss";
import { countAllProducts } from "../../../services/ProductService";
import { getStatisticUser } from "../../../services/UserService";
import {
  countRegisterAccount,
  getStatisticSupplier,
} from "../../../services/SupplierService";

const FeaturedInfo = (props) => {
  const { currentDate, currentMonth, currentYear } = props;

  const [totalUser, setTotalUser] = useState(0);
  const [totalSupplier, setTotalSupplier] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const [gapProduct, setGapProduct] = useState(0);
  const [totalRegistration, setTotalRegistration] = useState(0);
  const [gapUser, setGapUser] = useState(0);
  const [gapSupplier, setGapSupplier] = useState(0);
  // const [previousMonthProduct, setPreProduct] = useState(0);

  const countTotalProduct = async (month, year) => {
    let res = await countAllProducts(month, year);
    if (res && res.data) {
      setTotalProduct(res.data.total);
      setGapProduct(res.data.gaps);
      // setPreProduct(res.data.previous);
    }
  };

  const getStatisticForUser = async (month, year) => {
    let res = await getStatisticUser(month, year);
    if (res && res.data) {
      setTotalUser(res.data.total);
      setGapUser(res.data.gaps);
    }
  };

  const countTotalRegister = async (year) => {
    let res = await countRegisterAccount(year);
    if (res && res.data) {
      setTotalRegistration(res.data.message);
    }
  };

  const getStatisticForSupplier = async (month, year) => {
    let res = await getStatisticSupplier(month, year);
    if (res && res.data) {
      setTotalSupplier(res.data.total);
      setGapSupplier(res.data.gaps);
    }
  };

  useEffect(() => {
    countTotalProduct(currentMonth, currentYear);
    getStatisticForUser(currentMonth, currentYear);
    countTotalRegister(currentYear);
    getStatisticForSupplier(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  return (
    <div className="featured-container">
      <div className="featuredItem">
        <span className="featuredTitle">Tổng sản phẩm</span>
        <div className="featuredMoneyContainer">
          <i className="fa-solid fa-wheat-awn" style={{ color: "#FFD43B" }}></i>
          <span className="featuredMoney">{totalProduct} sản phẩm</span>
          <span className="featuredMoneyRate">
            {gapProduct}{" "}
            <i
              className={
                gapProduct > 0
                  ? "fa-solid fa-arrow-up featuredIcon"
                  : "fa-solid fa-arrow-down featuredIcon negative"
              }
            ></i>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Tổng người dùng</span>
        <div className="featuredMoneyContainer">
          <i className="fa-solid fa-user" style={{ color: "#74C0FC" }}></i>
          <span className="featuredMoney">{totalUser}</span>
          <span className="featuredMoneyRate">
            {gapUser}{" "}
            <i
              className={
                gapUser > 0
                  ? "fa-solid fa-arrow-up featuredIcon"
                  : "fa-solid fa-arrow-down featuredIcon negative"
              }
            ></i>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Tổng nhà cung cấp</span>
        <div className="featuredMoneyContainer">
          <i className="fa-solid fa-user-tie" style={{ color: "#74C0FC" }}></i>
          <span className="featuredMoney">{totalSupplier}</span>
          <span className="featuredMoneyRate">
            {gapSupplier}{" "}
            <i
              className={
                gapSupplier > 0
                  ? "fa-solid fa-arrow-up featuredIcon"
                  : "fa-solid fa-arrow-down featuredIcon negative"
              }
            ></i>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Tổng đăng ký bán hàng</span>
        <div className="featuredMoneyContainer">
          <i
            className="fa-regular fa-address-card"
            style={{ color: "#74C0FC" }}
          ></i>
          <span className="featuredMoney">{totalRegistration} đăng ký mới</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
