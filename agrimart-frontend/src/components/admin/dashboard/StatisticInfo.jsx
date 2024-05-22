import React, { useEffect, useState } from "react";
import "./FeaturedInfo.scss";
import {
  getStatisticCooperation,
  getStatisticField,
} from "../../../services/FieldService";
import {
  getStatisticOrder,
  getStatisticRevenue,
} from "../../../services/OrderService";

const StatisticInfo = (props) => {
  const { currentDate, currentMonth, currentYear } = props;

  const [totalOrder, setTotalOrder] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalYields, setTotalYields] = useState(0);
  const [totalGarden, setTotalGarden] = useState(0);
  const [gapOrder, setGapOrder] = useState(0);
  const [gapRevenue, setGapRevenue] = useState(0);
  const [gapYields, setGapYields] = useState(0);
  const [gapGarden, setGapGarden] = useState(0);

  const getStatisticForField = async (month, year) => {
    let res = await getStatisticField(month, year);
    if (res && res.data) {
      setTotalGarden(res.data.total);
      setGapGarden(res.data.gaps);
    }
  };

  const getStatisticForCooperation = async (month, year) => {
    let res = await getStatisticCooperation(month, year);
    if (res && res.data) {
      setTotalYields(convertUnit(res.data.current));
      setGapYields(convertUnit(Math.abs(res.data.gaps)));
    }
  };

  const getStatisticForOrder = async (month, year) => {
    let res = await getStatisticOrder(month, year);
    if (res && res.data) {
      setTotalOrder(res.data.current);
      setGapOrder(res.data.gaps);
    }
  };

  const getStatisticForRevenue = async (month, year) => {
    let res = await getStatisticRevenue(month, year);
    if (res && res.data) {
      setTotalRevenue(formatMoney(res.data.current));
      setGapRevenue(formatMoney(Math.abs(res.data.gaps)));
    }
  };

  useEffect(() => {
    getStatisticForField(currentMonth, currentYear);
    getStatisticForCooperation(currentMonth, currentYear);
    getStatisticForOrder(currentMonth, currentYear);
    getStatisticForRevenue(currentMonth, currentYear);
  }, []);

  const convertUnit = (kg) => {
    if (kg >= 1000) {
      return `${(kg / 1000).toFixed(2)} tấn`;
    } else if (kg >= 100) {
      return `${(kg / 100).toFixed(2)} tạ`;
    } else if (kg >= 10) {
      return `${(kg / 10).toFixed(2)} yến`;
    } else {
      return `${kg} kg`;
    }
  };

  const formatMoney = (value) => {
    if (value >= 1000000000) {
      return value / 1000000000 + "B";
    } else if (value >= 1000000) {
      return value / 1000000 + "M";
    } else if (value >= 1000) {
      return value / 1000 + "K";
    }
    return value;
  };

  return (
    <div className="featured-container">
      <div className="featuredItem">
        <span className="featuredTitle">Tổng đơn hàng</span>
        <div className="featuredMoneyContainer">
          <i className="fa-solid fa-truck" style={{ color: "#74C0FC" }}></i>
          <span className="featuredMoney">{totalOrder}</span>
          <span className="featuredMoneyRate">
            {gapOrder}{" "}
            <i
              className={
                gapOrder > 0
                  ? "fa-solid fa-arrow-up featuredIcon"
                  : "fa-solid fa-arrow-down featuredIcon negative"
              }
            ></i>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Tổng doanh thu</span>
        <div className="featuredMoneyContainer">
          <i
            className="fa-solid fa-sack-dollar"
            style={{ color: "#FFD43B" }}
          ></i>
          <span className="featuredMoney">{totalRevenue}</span>
          <span className="featuredMoneyRate">
            {gapRevenue}{" "}
            <i
              className={
                gapRevenue > 0
                  ? "fa-solid fa-arrow-up featuredIcon"
                  : "fa-solid fa-arrow-down featuredIcon negative"
              }
            ></i>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Tổng sản lượng hợp tác</span>
        <div className="featuredMoneyContainer">
          <i className="fa-solid fa-coins" style={{ color: "#FFD43B" }}></i>
          <span className="featuredMoney">{totalYields}</span>
          <span className="featuredMoneyRate">
            {gapYields}{" "}
            <i
              className={
                gapYields > 0
                  ? "fa-solid fa-arrow-up featuredIcon"
                  : "fa-solid fa-arrow-down featuredIcon negative"
              }
            ></i>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Tổng số vườn</span>
        <div className="featuredMoneyContainer">
          <i
            className="fa-brands fa-pagelines"
            style={{ color: "#63E6BE" }}
          ></i>
          <span className="featuredMoney">{totalGarden}</span>
          <span className="featuredMoneyRate">
            {gapGarden}{" "}
            <i
              className={
                gapGarden > 0
                  ? "fa-solid fa-arrow-up featuredIcon"
                  : "fa-solid fa-arrow-down featuredIcon negative"
              }
            ></i>
          </span>
        </div>
        <span className="featuredSub">So với tháng trước</span>
      </div>
    </div>
  );
};

export default StatisticInfo;
