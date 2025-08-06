import React from 'react';
import './Analytics.css';

const Analytics = () => {
  // Sales Data
  const salesData = {
    byProduct: [
      { product: 'Product A', sales: 125000, units: 2500 },
      { product: 'Product B', sales: 98000, units: 1800 },
      { product: 'Product C', sales: 75000, units: 1500 },
    ],
    byRegion: [
      { region: 'North', sales: 95000, growth: 12 },
      { region: 'South', sales: 115000, growth: 8 },
      { region: 'East', sales: 88000, growth: 15 },
    ],
    bySegment: [
      { segment: 'Corporate', sales: 150000, percentage: 45 },
      { segment: 'Retail', sales: 100000, percentage: 30 },
      { segment: 'Government', sales: 80000, percentage: 25 },
    ],
  };

  // Inventory Data
  const inventoryData = {
    turnover: [
      { product: 'Product A', turnover: 5.2, industryAvg: 4.8 },
      { product: 'Product B', turnover: 3.8, industryAvg: 3.5 },
      { product: 'Product C', turnover: 2.1, industryAvg: 2.3 },
    ],
    stockLevels: [
      { product: 'Product A', current: 480, min: 200, max: 800 },
      { product: 'Product B', current: 320, min: 150, max: 600 },
      { product: 'Product C', current: 210, min: 100, max: 400 },
    ],
    expiryRisks: [
      { product: 'Product A', quantity: 15, daysToExpiry: 30 },
      { product: 'Product B', quantity: 42, daysToExpiry: 45 },
      { product: 'Product C', quantity: 8, daysToExpiry: 15 },
    ],
  };

  // Customer Insights Data
  const customerData = {
    purchasingPatterns: [
      { pattern: 'Weekly', percentage: 35 },
      { pattern: 'Monthly', percentage: 45 },
      { pattern: 'Quarterly', percentage: 20 },
    ],
    feedback: [
      { aspect: 'Product Quality', rating: 4.5 },
      { aspect: 'Customer Service', rating: 4.2 },
      { aspect: 'Delivery Speed', rating: 3.8 },
    ],
    satisfaction: [
      { segment: 'New Customers', score: 82 },
      { segment: 'Repeat Customers', score: 91 },
      { segment: 'Corporate Clients', score: 88 },
    ],
  };

  // Helper functions
  const getSegmentColor = (segment) => {
    const colors = {
      'Corporate': '#3498db',
      'Retail': '#2ecc71',
      'Government': '#9b59b6',
      'New Customers': '#3498db',
      'Repeat Customers': '#2ecc71',
      'Corporate Clients': '#9b59b6',
      'Weekly': '#3498db',
      'Monthly': '#2ecc71',
      'Quarterly': '#9b59b6'
    };
    return colors[segment] || '#e74c3c';
  };

  const getStatusClass = (value, threshold) => {
    return value >= threshold ? 'positive' : 'warning';
  };

  const getRiskLevel = (days) => {
    if (days <= 30) return { text: 'High', className: 'high' };
    if (days <= 60) return { text: 'Medium', className: 'medium' };
    return { text: 'Low', className: 'low' };
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Analytics & Reporting Dashboard</h1>
      
      <div className="grid-container">
        {/* Sales Report */}
        <div className="report-card">
          <h2 className="card-title">Sales Reports</h2>
          <div className="card-content">
            <div className="report-section">
              <h3>By Product</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Revenue</th>
                      <th>Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.byProduct.map((item, index) => (
                      <tr key={`product-${index}`}>
                        <td>{item.product}</td>
                        <td>${item.sales.toLocaleString()}</td>
                        <td>{item.units.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="report-section">
              <h3>By Region</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Region</th>
                      <th>Sales</th>
                      <th>Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.byRegion.map((item, index) => (
                      <tr key={`region-${index}`}>
                        <td>{item.region}</td>
                        <td>${item.sales.toLocaleString()}</td>
                        <td className={item.growth >= 0 ? 'positive' : 'negative'}>
                          {item.growth}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="report-section">
              <h3>By Customer Segment</h3>
              <div className="chart-container">
                {salesData.bySegment.map((item, index) => (
                  <div key={`segment-${index}`} className="chart-item">
                    <div className="chart-label">
                      <span>{item.segment}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="chart-bar-container">
                      <div 
                        className="chart-bar" 
                        style={{ 
                          width: `${item.percentage}%`, 
                          backgroundColor: getSegmentColor(item.segment)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Inventory Report */}
        <div className="report-card">
          <h2 className="card-title">Inventory Reports</h2>
          <div className="card-content">
            <div className="report-section">
              <h3>Inventory Turnover</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Turnover</th>
                      <th>Industry Avg</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.turnover.map((item, index) => (
                      <tr key={`turnover-${index}`}>
                        <td>{item.product}</td>
                        <td>{item.turnover}x</td>
                        <td>{item.industryAvg}x</td>
                        <td className={getStatusClass(item.turnover, item.industryAvg)}>
                          {item.turnover >= item.industryAvg ? 'Good' : 'Needs Attention'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="report-section">
              <h3>Stock Levels</h3>
              <div className="stock-levels-container">
                {inventoryData.stockLevels.map((item, index) => {
                  const percentage = ((item.current - item.min) / (item.max - item.min)) * 100;
                  const status = 
                    item.current < item.min * 1.1 ? 'low' : 
                    item.current > item.max * 0.9 ? 'high' : 'normal';
                  
                  return (
                    <div key={`stock-${index}`} className="stock-item">
                      <div className="stock-info">
                        <span>{item.product}</span>
                        <span>{item.current} units</span>
                      </div>
                      <div className="stock-bar-container">
                        <div 
                          className={`stock-bar ${status}`}
                          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
                        />
                        <div className="stock-marker" style={{ left: `${(item.min / item.max) * 100}%` }} />
                        <div className="stock-marker" style={{ left: '100%' }} />
                      </div>
                      <div className="stock-range">
                        <span>Min: {item.min}</span>
                        <span>Max: {item.max}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="report-section">
              <h3>Expiry Risks</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Days to Expiry</th>
                      <th>Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.expiryRisks.map((item, index) => {
                      const risk = getRiskLevel(item.daysToExpiry);
                      return (
                        <tr key={`expiry-${index}`}>
                          <td>{item.product}</td>
                          <td>{item.quantity}</td>
                          <td>{item.daysToExpiry}</td>
                          <td className={risk.className}>{risk.text}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Insights */}
        <div className="report-card">
          <h2 className="card-title">Customer Insights</h2>
          <div className="card-content">
            <div className="report-section">
              <h3>Purchasing Patterns</h3>
              <div className="chart-container">
                {customerData.purchasingPatterns.map((item, index) => (
                  <div key={`pattern-${index}`} className="chart-item">
                    <div className="chart-label">
                      <span>{item.pattern}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="chart-bar-container">
                      <div 
                        className="chart-bar" 
                        style={{ 
                          width: `${item.percentage}%`,
                          backgroundColor: getSegmentColor(item.pattern)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="report-section">
              <h3>Customer Feedback</h3>
              <div className="feedback-container">
                {customerData.feedback.map((item, index) => (
                  <div key={`feedback-${index}`} className="feedback-item">
                    <div className="feedback-aspect">{item.aspect}</div>
                    <div className="rating-container">
                      <div className="rating-bar" style={{ width: `${(item.rating / 5) * 100}%` }} />
                      <span className="rating-value">{item.rating.toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="report-section">
              <h3>Satisfaction Scores</h3>
              <div className="satisfaction-container">
                {customerData.satisfaction.map((item, index) => (
                  <div key={`satisfaction-${index}`} className="satisfaction-item">
                    <div className="satisfaction-label">
                      <span>{item.segment}</span>
                      <span>{item.score}%</span>
                    </div>
                    <div className="score-bar-container">
                      <div 
                        className="score-bar" 
                        style={{ 
                          width: `${item.score}%`,
                          backgroundColor: getSegmentColor(item.segment)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;