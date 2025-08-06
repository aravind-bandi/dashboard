import React, { useState } from "react";
import { Table, Card, Button, Form, Row, Col } from "react-bootstrap";

import "./sales.css"

const Sales = () => {
  // Dummy data for sales table
  const [salesData, setSalesData] = useState([
    { id: 1, product: "Milk", price: 1200, quantity: 2, date: "2024-06-10" },
    { id: 2, product: "Curd", price: 800, quantity: 3, date: "2024-06-11" },
    { id: 3, product: "Cheese", price: 200, quantity: 5, date: "2024-06-12" },
    { id: 4, product: "Ghee", price: 200, quantity: 2, date: "2024-06-12" },
  ]);

  // Filter states
  const [search, setSearch] = useState("");

  // Calculate metrics
  const totalSales = salesData.length;
  const totalRevenue = salesData.reduce(
    (sum, sale) => sum + sale.price * sale.quantity,
    0
  );

  // Filtered data
  const filteredData = salesData.filter((sale) =>
    sale.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4 sales">
      {/* Header */}
      {/* <h2 className="mb-4">Sales Dashboard</h2> */}

      {/* Metrics Section */}
      <Row className="mb-4 row">
        <Col>
          <Card bg="success" text="white" className="text-center p-3">
            <Card.Body>
              <Card.Title>Total Sales</Card.Title>
              <Card.Text>{totalSales}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg="info" text="white" className="text-center p-3">
            <Card.Body>
              <Card.Title>Total Revenue</Card.Title>
              <Card.Text>${totalRevenue}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Search Filter */}
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Search by product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="primary" onClick={() => setSearch("")}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Sales Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.product}</td>
              <td>${sale.price}</td>
              <td>{sale.quantity}</td>
              <td>{sale.date}</td>
            </tr>
          ))}
          {filteredData.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">
                No sales found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Sales;
