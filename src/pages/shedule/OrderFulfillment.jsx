import React, { useState } from "react";
import "./OrderFulfillment.css";

const OrderFulfillment = () => {
  // Sample order data
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", status: "Pending", deliveryDate: "2024-06-15" },
    { id: 2, customer: "Jane Smith", status: "Shipped", deliveryDate: "2024-06-13" },
    { id: 3, customer: "Sam Wilson", status: "Delivered", deliveryDate: "2024-06-10" },
    { id: 4, customer: "Alex Johnson", status: "Pending", deliveryDate: "2024-06-18" },
  ]);

  const [filter, setFilter] = useState("All");

  // Handle status updates
  const updateStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  // Filter orders
  const filteredOrders =
    filter === "All" ? orders : orders.filter((order) => order.status === filter);

  return (
    <div className="order-container shedule">
      <h2>Order Fulfillment and Delivery Management</h2>

      {/* Filter Dropdown */}
      <div className="filter-section">
        <label>Filter by Status:</label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      {/* Order Table */}
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Delivery Date</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td>{order.deliveryDate}</td>
              <td>
                {order.status !== "Delivered" && (
                  <button
                    onClick={() =>
                      updateStatus(
                        order.id,
                        order.status === "Pending" ? "Shipped" : "Delivered"
                      )
                    }
                  >
                    {order.status === "Pending" ? "Mark as Shipped" : "Mark as Delivered"}
                  </button>
                )}
                {order.status === "Delivered" && <span>Completed</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderFulfillment;
