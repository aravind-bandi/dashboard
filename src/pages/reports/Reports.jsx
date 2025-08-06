import React, { useState } from "react";
import "./reports.css";

const Reports = () => {
  // Sales Reports State
  const [salesFilters, setSalesFilters] = useState({
    product: "",
    region: "All",
    customerSegment: "All",
    dateRange: { start: "", end: "" }
  });
  const [salesData, setSalesData] = useState(null);

  // Inventory Reports State
  const [inventoryFilters, setInventoryFilters] = useState({
    product: "",
    category: "All",
    stockStatus: "All"
  });
  const [inventoryData, setInventoryData] = useState(null);

  // Customer Insights State
  const [customerFilters, setCustomerFilters] = useState({
    customerGroup: "All",
    timePeriod: "30days"
  });
  const [customerData, setCustomerData] = useState(null);

  // Mock data generators
  const generateSalesData = () => {
    return {
      summary: {
        totalRevenue: 125000,
        totalUnits: 2450,
        avgOrderValue: 51.02,
        topProduct: "Premium Widget"
      },
      trends: [
        { month: "Jan", revenue: 12000, units: 240 },
        { month: "Feb", revenue: 18000, units: 320 },
        { month: "Mar", revenue: 22000, units: 410 },
        { month: "Apr", revenue: 25000, units: 480 },
        { month: "May", revenue: 28000, units: 520 },
        { month: "Jun", revenue: 30000, units: 580 }
      ],
      byRegion: [
        { region: "North", revenue: 45000, percentage: 36 },
        { region: "South", revenue: 38000, percentage: 30.4 },
        { region: "East", revenue: 28000, percentage: 22.4 },
        { region: "West", revenue: 14000, percentage: 11.2 }
      ],
      bySegment: [
        { segment: "Retail", revenue: 75000, percentage: 60 },
        { segment: "Wholesale", revenue: 35000, percentage: 28 },
        { segment: "Online", revenue: 15000, percentage: 12 }
      ]
    };
  };

  const generateInventoryData = () => {
    return {
      summary: {
        totalProducts: 142,
        outOfStock: 8,
        lowStock: 15,
        expiringSoon: 5
      },
      inventoryHealth: [
        { category: "Electronics", stockLevel: 78, turnover: 2.4 },
        { category: "Clothing", stockLevel: 65, turnover: 3.1 },
        { category: "Home Goods", stockLevel: 82, turnover: 1.8 },
        { category: "Groceries", stockLevel: 45, turnover: 5.2 }
      ],
      expiringSoon: [
        { product: "Organic Milk", expiry: "2023-07-15", quantity: 24 },
        { product: "Yogurt", expiry: "2023-07-18", quantity: 32 },
        { product: "Cheese", expiry: "2023-07-20", quantity: 18 }
      ],
      topSellers: [
        { product: "Wireless Earbuds", sold: 420, currentStock: 35 },
        { product: "Smart Watch", sold: 380, currentStock: 28 },
        { product: "Bluetooth Speaker", sold: 310, currentStock: 42 }
      ]
    };
  };

  const generateCustomerData = () => {
    return {
      summary: {
        totalCustomers: 1245,
        newCustomers: 142,
        repeatCustomers: 723,
        satisfactionScore: 4.2
      },
      purchasePatterns: [
        { category: "Electronics", frequency: 2.4, avgSpend: 125 },
        { category: "Clothing", frequency: 3.8, avgSpend: 45 },
        { category: "Groceries", frequency: 6.2, avgSpend: 28 }
      ],
      feedbackAnalysis: {
        positive: 68,
        neutral: 24,
        negative: 8
      },
      customerSegments: [
        { segment: "High Value", count: 185, revenue: 85000 },
        { segment: "Frequent", count: 320, revenue: 45000 },
        { segment: "Occasional", count: 740, revenue: 35000 }
      ]
    };
  };

  // Handlers
  const handleSalesFilterChange = (e) => {
    const { name, value } = e.target;
    setSalesFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (type, value) => {
    setSalesFilters(prev => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        [type]: value
      }
    }));
  };

  const generateSalesReport = () => {
    // In a real app, this would be an API call with the filters
    setSalesData(generateSalesData());
  };

  const generateInventoryReport = () => {
    setInventoryData(generateInventoryData());
  };

  const generateCustomerInsights = () => {
    setCustomerData(generateCustomerData());
  };

  const exportReport = (type, format) => {
    alert(`Exporting ${type} report as ${format}`);
    // Actual implementation would generate and download the file
  };

  return (
    <div className="analytics-dashboard">
      <header className="dashboard-header">
        <h1>Analytics and Reporting</h1>
        <p className="subtitle">Gain valuable insights into your business performance</p>
      </header>

      {/* Sales Reports Section */}
      <section className="report-section sales">
        <div className="section-header">
          <h2>Sales Reports</h2>
          <p>Detailed reporting on sales by product, region, and customer segment</p>
        </div>
        
        <div className="report-controls">
          <div className="filter-group">
            <label>Product</label>
            <input 
              type="text" 
              name="product"
              value={salesFilters.product}
              onChange={handleSalesFilterChange}
              placeholder="Product name or SKU"
            />
          </div>
          
          <div className="filter-group">
            <label>Region</label>
            <select 
              name="region"
              value={salesFilters.region}
              onChange={handleSalesFilterChange}
            >
              <option value="All">All Regions</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Customer Segment</label>
            <select 
              name="customerSegment"
              value={salesFilters.customerSegment}
              onChange={handleSalesFilterChange}
            >
              <option value="All">All Segments</option>
              <option value="Retail">Retail</option>
              <option value="Wholesale">Wholesale</option>
              <option value="Online">Online</option>
            </select>
          </div>
          
          <div className="filter-group date-range">
            <label>Date Range</label>
            <div className="date-inputs">
              <input 
                type="date" 
                value={salesFilters.dateRange.start}
                onChange={(e) => handleDateChange("start", e.target.value)}
                placeholder="Start date"
              />
              <span>to</span>
              <input 
                type="date" 
                value={salesFilters.dateRange.end}
                onChange={(e) => handleDateChange("end", e.target.value)}
                placeholder="End date"
              />
            </div>
          </div>
          
          <button onClick={generateSalesReport} className="generate-btn">
            Generate Report
          </button>
        </div>

        {salesData && (
          <div className="report-results">
            <div className="summary-cards">
              <div className="summary-card">
                <h3>Total Revenue</h3>
                <p className="value">${salesData.summary.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="summary-card">
                <h3>Units Sold</h3>
                <p className="value">{salesData.summary.totalUnits.toLocaleString()}</p>
              </div>
              <div className="summary-card">
                <h3>Avg Order Value</h3>
                <p className="value">${salesData.summary.avgOrderValue.toFixed(2)}</p>
              </div>
              <div className="summary-card">
                <h3>Top Product</h3>
                <p className="value">{salesData.summary.topProduct}</p>
              </div>
            </div>
            
            <div className="data-actions">
              <button 
                onClick={() => exportReport("sales", "PDF")} 
                className="export-btn"
              >
                Export PDF
              </button>
              <button 
                onClick={() => exportReport("sales", "CSV")} 
                className="export-btn"
              >
                Export CSV
              </button>
            </div>
            
            <div className="data-tables">
              <div className="data-table">
                <h4>Sales Trends</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Revenue</th>
                      <th>Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.trends.map((item, index) => (
                      <tr key={index}>
                        <td>{item.month}</td>
                        <td>${item.revenue.toLocaleString()}</td>
                        <td>{item.units.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="data-table">
                <h4>Sales by Region</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Region</th>
                      <th>Revenue</th>
                      <th>% of Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.byRegion.map((item, index) => (
                      <tr key={index}>
                        <td>{item.region}</td>
                        <td>${item.revenue.toLocaleString()}</td>
                        <td>{item.percentage}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Inventory Reports Section */}
      <section className="report-section inventory">
        <div className="section-header">
          <h2>Inventory Reports</h2>
          <p>Insights into inventory turnover, stock levels, and expiry risks</p>
        </div>
        
        <div className="report-controls">
          <div className="filter-group">
            <label>Product</label>
            <input 
              type="text" 
              name="product"
              value={inventoryFilters.product}
              onChange={(e) => setInventoryFilters({...inventoryFilters, product: e.target.value})}
              placeholder="Product name or SKU"
            />
          </div>
          
          <div className="filter-group">
            <label>Category</label>
            <select 
              name="category"
              value={inventoryFilters.category}
              onChange={(e) => setInventoryFilters({...inventoryFilters, category: e.target.value})}
            >
              <option value="All">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home Goods">Home Goods</option>
              <option value="Groceries">Groceries</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Stock Status</label>
            <select 
              name="stockStatus"
              value={inventoryFilters.stockStatus}
              onChange={(e) => setInventoryFilters({...inventoryFilters, stockStatus: e.target.value})}
            >
              <option value="All">All</option>
              <option value="InStock">In Stock</option>
              <option value="LowStock">Low Stock</option>
              <option value="OutOfStock">Out of Stock</option>
            </select>
          </div>
          
          <button onClick={generateInventoryReport} className="generate-btn">
            Generate Report
          </button>
        </div>

        {inventoryData && (
          <div className="report-results">
            <div className="summary-cards">
              <div className="summary-card">
                <h3>Total Products</h3>
                <p className="value">{inventoryData.summary.totalProducts}</p>
              </div>
              <div className="summary-card warning">
                <h3>Out of Stock</h3>
                <p className="value">{inventoryData.summary.outOfStock}</p>
              </div>
              <div className="summary-card warning">
                <h3>Low Stock</h3>
                <p className="value">{inventoryData.summary.lowStock}</p>
              </div>
              <div className="summary-card danger">
                <h3>Expiring Soon</h3>
                <p className="value">{inventoryData.summary.expiringSoon}</p>
              </div>
            </div>
            
            <div className="data-actions">
              <button 
                onClick={() => exportReport("inventory", "PDF")} 
                className="export-btn"
              >
                Export PDF
              </button>
              <button 
                onClick={() => exportReport("inventory", "CSV")} 
                className="export-btn"
              >
                Export CSV
              </button>
            </div>
            
            <div className="data-tables">
              <div className="data-table">
                <h4>Inventory Health by Category</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Stock Level</th>
                      <th>Turnover (months)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.inventoryHealth.map((item, index) => (
                      <tr key={index}>
                        <td>{item.category}</td>
                        <td>{item.stockLevel}%</td>
                        <td>{item.turnover}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="data-table">
                <h4>Products Expiring Soon</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Expiry Date</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.expiringSoon.map((item, index) => (
                      <tr key={index}>
                        <td>{item.product}</td>
                        <td>{item.expiry}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Customer Insights Section */}
      <section className="report-section customer">
        <div className="section-header">
          <h2>Customer Insights</h2>
          <p>Data on purchasing patterns, feedback, and satisfaction levels</p>
        </div>
        
        <div className="report-controls">
          <div className="filter-group">
            <label>Customer Group</label>
            <select 
              name="customerGroup"
              value={customerFilters.customerGroup}
              onChange={(e) => setCustomerFilters({...customerFilters, customerGroup: e.target.value})}
            >
              <option value="All">All Customers</option>
              <option value="HighValue">High Value</option>
              <option value="Frequent">Frequent</option>
              <option value="New">New Customers</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Time Period</label>
            <select 
              name="timePeriod"
              value={customerFilters.timePeriod}
              onChange={(e) => setCustomerFilters({...customerFilters, timePeriod: e.target.value})}
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
              <option value="12months">Last 12 Months</option>
            </select>
          </div>
          
          <button onClick={generateCustomerInsights} className="generate-btn">
            Generate Insights
          </button>
        </div>

        {customerData && (
          <div className="report-results">
            <div className="summary-cards">
              <div className="summary-card">
                <h3>Total Customers</h3>
                <p className="value">{customerData.summary.totalCustomers}</p>
              </div>
              <div className="summary-card">
                <h3>New Customers</h3>
                <p className="value">{customerData.summary.newCustomers}</p>
              </div>
              <div className="summary-card">
                <h3>Repeat Customers</h3>
                <p className="value">{customerData.summary.repeatCustomers}</p>
              </div>
              <div className="summary-card">
                <h3>Satisfaction Score</h3>
                <p className="value">{customerData.summary.satisfactionScore}/5</p>
              </div>
            </div>
            
            <div className="data-actions">
              <button 
                onClick={() => exportReport("customer", "PDF")} 
                className="export-btn"
              >
                Export PDF
              </button>
              <button 
                onClick={() => exportReport("customer", "CSV")} 
                className="export-btn"
              >
                Export CSV
              </button>
            </div>
            
            <div className="data-tables">
              <div className="data-table">
                <h4>Purchase Patterns</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Avg Frequency</th>
                      <th>Avg Spend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerData.purchasePatterns.map((item, index) => (
                      <tr key={index}>
                        <td>{item.category}</td>
                        <td>{item.frequency} purchases/month</td>
                        <td>${item.avgSpend}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="data-table">
                <h4>Customer Segments</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Segment</th>
                      <th>Customers</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerData.customerSegments.map((item, index) => (
                      <tr key={index}>
                        <td>{item.segment}</td>
                        <td>{item.count}</td>
                        <td>${item.revenue.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Reports;