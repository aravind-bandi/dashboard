import React from "react";
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const PieBarChart = () => {
  const data = [
    { name: "Milk", value: 20000000 },
    { name: "Curd", value: 5000000000 },
    { name: "Butter", value: 890000000 },
    { name: "Ghee", value: 9890000000 },
  ];

  return (
    <div className="charts-container">
      {/* Pie Chart */}
      <div className="chart-item">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>

      {/* Bar Chart */}
      {/* <div className="chart-item">
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div> */}
    </div>
  );
};

export default PieBarChart;
