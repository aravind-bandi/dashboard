// import "./Chart.css";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// export default function Chart() {
//     const data = [
//         {
//           name: "Jan",
//          "Active user": 76000,
          
//         },
//         {
//           name: 'Feb',
//           "Active user": 48100,
          
//         },
//         {
//           name: 'March',
//           "Active user": 8100,
//         },
//         {
//           name: ' Apirl',
//          "Active user": 48100,
//         },
//         {
//           name: 'May',
//           "Active user": 4810,
//         },
//         {
//           name: 'June',
//           "Active user": 48100,
//         },
//         {
//           name: 'July',
//          "Active user": 5100,
//         },
//         {
//             name: 'Aug',
//             "Active user": 4000,
            
//           },
//           {
//             name: 'Sep',
//             "Active user": 1600,
            
//           },
//           {
//             name: 'Oct',
//             "Active user": 36000,
            
//           },
//           {
//             name: 'Nov',
//             "Active user": 4000,
            
//           },
//           {
//             name:"Dec",
//             "Active user": 7000,
            
//           },
//       ];
//   return (
//     <div className="Chart">
//       <h3 className="charttitle">Sales Analytics</h3>
//       <ResponsiveContainer width="100%" aspect={4 / 1} className="clr">
//         <LineChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" stroke="#555obd" />
//           <YAxis />
//                     <Tooltip />
//                     <Legend />
//           <Line type="monotone" dataKey="Active user"  stroke="#555obd"/>
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  // Sample data for sales
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [500, 800, 600, 900, 1200, 1500],
        borderColor: 'rgb(59, 130, 246)', // Tailwind blue-500
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4, // Smooth curve
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#374151', // Tailwind gray-700
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#1F2937', // Tailwind gray-900
        titleColor: '#FFFFFF', // Tailwind white
        bodyColor: '#E5E7EB', // Tailwind gray-200
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#6B7280', 
        },
      },
      y: {
        ticks: {
          color: '#6B7280', 
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-blue  mb-4">Sales Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;


// import React from "react";
// import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

// const Chart = () => {
//   const data = [
//     { name: "Milk", value: 20000000 },
//     { name: "Curd", value: 5000000000 },
//     { name: "Butter", value: 890000000 },
//     { name: "Ghee", value: 9890000000 },
//   ];

//   return (
//     <div className="Chart">
//       <div className="chart-item">
//         <PieChart width={400} height={400}>
//           <Pie
//             dataKey="value"
//             isAnimationActive={false}
//             data={data}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           />
//           <Tooltip />
//         </PieChart>
//       </div>
//       <div className="chart-item">
//         <BarChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//           barSize={20}
//         >
//           <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
//         </BarChart>
//       </div>
//     </div>
//   );
// };

// export default Chart;
