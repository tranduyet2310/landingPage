import React from "react";
import "./Chart.scss";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const formatYAxis = (tickItem) => {
  if (tickItem >= 1000000000) {
    return tickItem / 1000000000 + "B";
  } else if (tickItem >= 1000000) {
    return tickItem / 1000000 + "M";
  } else if (tickItem >= 1000) {
    return tickItem / 1000 + "K";
  }
  return tickItem;
};

const BarChartComponent = ({ title, dataSource, dataKey, xValue, yValue }) => {
  return (
    <>
      <div className="chart-container">
        <h4 className="chartTitle">{title}</h4>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <BarChart data={dataSource}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={dataKey} />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey={xValue}
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey={yValue}
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BarChartComponent;
