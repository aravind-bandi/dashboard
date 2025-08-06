import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "react-apexcharts";
import "./Chat.css";  // Assuming your CSS will be stored in Chat.css

const Acode = () => {
  const [message, setMessage] = useState(""); // State to store input message
  const chartRef = useRef(null); // For referencing the chart container

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault(); // Prevent form reload
    if (message) {
      console.log("Message sent:", message);
      setMessage(""); // Clear input after sending message
    }
  };

  const progressData = document.querySelectorAll('main .card .progress');

  useEffect(() => {
    progressData.forEach((item) => {
      item.style.setProperty("--value", item.dataset.value);
    });
  }, []);

  // ApexCharts Data & Options
  const chartOptions = {
    series: [
      {
        name: "daily",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "weekly",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2024-09-19T00:00:00.000Z",
        "2024-09-19T01:30:00.000Z",
        "2024-09-19T02:30:00.000Z",
        "2024-09-19T03:30:00.000Z",
        "2024-09-19T04:30:00.000Z",
        "2024-09-19T05:30:00.000Z",
        "2024-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="chat-box">
      {/* <p className="day">
        <span>Today</span>
      </p>
      <div className="msg">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="chat">
          <div className="profile">
            <span className="username">Alan</span>
            <span className="time">18:30</span>
          </div>
          <p>Hello</p>
        </div>
      </div>
      <div className="msg me">
        <div className="chat">
          <div className="profile">
            <span className="time">18:30</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            voluptatum eos quam dolores eligendi exercitationem animi nobis
            reprehenderit laborum! Nulla.
          </p>
        </div>
      </div>
      <div className="msg me">
        <div className="chat">
          <div className="profile">
            <span className="time">18:30</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, architecto!</p>
        </div>
      </div>
      <div className="msg me">
        <div className="chat">
          <div className="profile">
            <span className="time">18:30</span>
          </div>
          <p>Lorem ipsum, dolor sit amet.</p>
        </div>
      </div> */}

      
      {/* <form onSubmit={handleSendMessage}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Type..."
            value={message}
            onChange={handleMessageChange}
          />
          <button type="submit" className="btn-send">
            <i className="bx bxs-send"></i>
          </button>
        </div>
      </form> */}

      
      <div id="chart">
        <ApexCharts
          options={chartOptions}
          series={chartOptions.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default Acode;
