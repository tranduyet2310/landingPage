import React, { useEffect, useState } from "react";
import FeaturedInfo from "./FeaturedInfo";
import LineChartComponent from "./LineChart";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";
import StatisticInfo from "./StatisticInfo";
import {
  getCropsNameStatistic,
  getGardenSource,
} from "../../../services/FieldService";
import { getChartData } from "../../../services/UserService";
import { getOrderData, getPieChartData } from "../../../services/OrderService";

const Home = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [accountData, setAccountData] = useState([]);
  const [gardenData, setGardenData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [orderStatusData, setOrderStatusData] = useState([]);
  const [cropsNameData, setCropsNameData] = useState([]);

  const getFieldPieChartData = async (year) => {
    let res = await getCropsNameStatistic(year);
    if (res && res.data) {
      setCropsNameData(res.data);
    }
  };

  const getOrderPieCharData = async (month, year) => {
    let res = await getPieChartData(month, year);
    if (res && res.data) {
      setOrderStatusData(res.data);
    }
  };

  const getOrderBarChartData = async (month, year) => {
    let res = await getOrderData(month, year);
    if (res && res.data) {
      setOrderData(res.data);
    }
  };

  const getAccountLineChartData = async (month, year) => {
    let res = await getChartData(month, year);
    if (res && res.data) {
      setAccountData(res.data);
    }
  };

  const getGardenLineChartData = async (month, year) => {
    let res = await getGardenSource(month, year);
    if (res && res.data) {
      setGardenData(res.data);
    }
  };

  useEffect(() => {
    setCurrentDate(getCurrentDate());
    setCurrentMonth(getCurrentMonth());
    setCurrentYear(getCurrentYear());
  }, []);

  useEffect(() => {
    if(currentDate && currentMonth && currentYear){
      getGardenLineChartData(currentMonth, currentYear);
      getAccountLineChartData(currentMonth, currentYear);
      getOrderBarChartData(currentMonth, currentYear);
      getOrderPieCharData(currentMonth, currentYear);
      getFieldPieChartData(currentYear);
    }
  }, [currentDate, currentMonth, currentYear]);

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const getCurrentMonth = () => {
    const date = new Date();
    const month = String(date.getMonth() + 1);
    return month;
  };

  const getCurrentYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <>
      <div className="home">
        <div className="customize-table">
          {currentDate && currentMonth && currentYear && (
            <>
              <FeaturedInfo
                currentDate={currentDate}
                currentMonth={currentMonth}
                currentYear={currentYear}
              />
              <StatisticInfo
                currentDate={currentDate}
                currentMonth={currentMonth}
                currentYear={currentYear}
              />
            </>
          )}
        </div>

        {gardenData && (
          <LineChartComponent
            title="Thống kê vườn & sản lượng"
            dataSource={gardenData}
            dataKey="name"
            xValue="garden"
            yValue="yields"
            isGarden="true"
          />
        )}

        {accountData && (
          <LineChartComponent
            title="Thống kê người dùng & nhà cung cấp "
            dataSource={accountData}
            dataKey="name"
            xValue="user"
            yValue="supplier"
            isGarden="false"
          />
        )}

        {orderData && (
          <BarChartComponent
            title="Thống kê đơn hàng & doanh thu"
            dataSource={orderData}
            dataKey="name"
            xValue="order"
            yValue="revenue"
          />
        )}
        <div className="chart-row">
          {orderStatusData && (
            <PieChartComponent
              title="Chi tiết đơn hàng"
              dataSource={orderStatusData}
              value="value"
            />
          )}

          {cropsNameData && (
            <PieChartComponent
              title="Cơ cấu cây trồng tại vườn"
              dataSource={cropsNameData}
              value="value"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
