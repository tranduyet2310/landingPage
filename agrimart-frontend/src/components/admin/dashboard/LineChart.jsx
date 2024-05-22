import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Chart.scss";

const formatYAxisForAccount = (value) => {
  if (value >= 1000000000) {
    return value / 1000000000 + "B";
  } else if (value >= 1000000) {
    return value / 1000000 + "M";
  } else if (value >= 1000) {
    return value / 1000 + "K";
  }
  return value;
};

const formatYAxisForGarden = (value) => {
  if (value >= 1000) {
    return value / 1000 + " tấn";
  } else if (value >= 100) {
    return value / 100 + " tạ";
  } else if (value >= 10) {
    return value / 10 + " yến";
  }
  return `${value} kg`;
};

const LineChartComponent = ({
  title,
  dataSource,
  dataKey,
  xValue,
  yValue,
  isGarden,
}) => {
  return (
    <>
      <div className="chart-container">
        <h4 className="chartTitle">{title}</h4>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={dataSource}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={dataKey} />
            <YAxis
              tickFormatter={
                isGarden === "true" ? formatYAxisForGarden : formatYAxisForAccount
              }
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={xValue}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey={yValue} stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default LineChartComponent;
