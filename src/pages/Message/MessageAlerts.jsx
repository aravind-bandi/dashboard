import React, { useState, useEffect } from 'react';
import './message.css';

const MessageAlerts = () => {
  // Sample data for inventory alerts
  const [inventoryAlerts, setInventoryAlerts] = useState([
    { id: 1, type: 'low-stock', product: 'Vitamin C 1000mg', currentStock: 5, threshold: 10, date: '2023-06-15', read: false },
    { id: 2, type: 'expiry', product: 'Omega-3 Fish Oil', expiryDate: '2023-07-20', daysLeft: 19, read: false },
    { id: 3, type: 'replenishment', product: 'Probiotic 50B CFU', supplier: 'HealthPlus', orderBy: '2023-06-25', read: false },
    { id: 4, type: 'low-stock', product: 'Magnesium 400mg', currentStock: 8, threshold: 15, date: '2023-06-16', read: true },
  ]);

  // Sample data for order updates
  const [orderUpdates, setOrderUpdates] = useState([
    { id: 1, type: 'new-order', orderId: 'ORD-1001', customer: 'John Smith', items: 3, total: 45.99, date: '2023-06-18 09:30', read: false },
    { id: 2, type: 'cancellation', orderId: 'ORD-1002', customer: 'Sarah Johnson', reason: 'Duplicate order', date: '2023-06-18 10:15', read: false },
    { id: 3, type: 'reschedule', orderId: 'ORD-1003', customer: 'Michael Brown', newDate: '2023-06-20', originalDate: '2023-06-18', date: '2023-06-18 11:45', read: true },
  ]);

  // Count unread notifications
  const unreadInventoryCount = inventoryAlerts.filter(alert => !alert.read).length;
  const unreadOrderCount = orderUpdates.filter(order => !order.read).length;

  // Mark notification as read
  const markAsRead = (type, id) => {
    if (type === 'inventory') {
      setInventoryAlerts(alerts => 
        alerts.map(alert => 
          alert.id === id ? { ...alert, read: true } : alert
        )
      );
    } else {
      setOrderUpdates(orders => 
        orders.map(order => 
          order.id === id ? { ...order, read: true } : order
        )
      );
    }
  };

  // Mark all as read
  const markAllAsRead = (type) => {
    if (type === 'inventory') {
      setInventoryAlerts(alerts => 
        alerts.map(alert => ({ ...alert, read: true }))
      );
    } else {
      setOrderUpdates(orders => 
        orders.map(order => ({ ...order, read: true }))
      );
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Inventory Management Dashboard</h1>
        <div className="notification-badges">
          <span className="inventory-badge">{unreadInventoryCount} inventory alerts</span>
          <span className="order-badge">{unreadOrderCount} order updates</span>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="alerts-section inventory-alerts">
          <div className="section-header">
            <h2>Inventory Alerts</h2>
            <button 
              className="mark-all-read"
              onClick={() => markAllAsRead('inventory')}
              disabled={unreadInventoryCount === 0}
            >
              Mark All as Read
            </button>
          </div>
          
          <div className="alerts-container">
            {inventoryAlerts.length === 0 ? (
              <div className="no-alerts">No inventory alerts at this time</div>
            ) : (
              inventoryAlerts.map(alert => (
                <div 
                  key={alert.id} 
                  className={`alert-card ${alert.type} ${alert.read ? 'read' : 'unread'}`}
                  onClick={() => markAsRead('inventory', alert.id)}
                >
                  {!alert.read && <div className="unread-indicator"></div>}
                  <div className="alert-icon">
                    {alert.type === 'low-stock' && <span className="icon">⚠️</span>}
                    {alert.type === 'expiry' && <span className="icon">⏳</span>}
                    {alert.type === 'replenishment' && <span className="icon">🔄</span>}
                  </div>
                  <div className="alert-content">
                    <h3>
                      {alert.type === 'low-stock' && `Low Stock: ${alert.product}`}
                      {alert.type === 'expiry' && `Expiring Soon: ${alert.product}`}
                      {alert.type === 'replenishment' && `Replenishment Needed: ${alert.product}`}
                    </h3>
                    <p>
                      {alert.type === 'low-stock' && 
                        `Current stock: ${alert.currentStock} (Threshold: ${alert.threshold})`}
                      {alert.type === 'expiry' && 
                        `Expires on ${alert.expiryDate} (${alert.daysLeft} days left)`}
                      {alert.type === 'replenishment' && 
                        `Order from ${alert.supplier} by ${alert.orderBy}`}
                    </p>
                    <div className="alert-date">{alert.date}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="alerts-section order-updates">
          <div className="section-header">
            <h2>Order Updates</h2>
            <button 
              className="mark-all-read"
              onClick={() => markAllAsRead('orders')}
              disabled={unreadOrderCount === 0}
            >
              Mark All as Read
            </button>
          </div>
          
          <div className="alerts-container">
            {orderUpdates.length === 0 ? (
              <div className="no-alerts">No order updates at this time</div>
            ) : (
              orderUpdates.map(order => (
                <div 
                  key={order.id} 
                  className={`alert-card ${order.type} ${order.read ? 'read' : 'unread'}`}
                  onClick={() => markAsRead('orders', order.id)}
                >
                  {!order.read && <div className="unread-indicator"></div>}
                  <div className="alert-icon">
                    {order.type === 'new-order' && <span className="icon">🆕</span>}
                    {order.type === 'cancellation' && <span className="icon">❌</span>}
                    {order.type === 'reschedule' && <span className="icon">📅</span>}
                  </div>
                  <div className="alert-content">
                    <h3>
                      {order.type === 'new-order' && `New Order: ${order.orderId}`}
                      {order.type === 'cancellation' && `Order Cancelled: ${order.orderId}`}
                      {order.type === 'reschedule' && `Order Rescheduled: ${order.orderId}`}
                    </h3>
                    <p>
                      {order.type === 'new-order' && 
                        `Customer: ${order.customer}, ${order.items} items, Total: $${order.total}`}
                      {order.type === 'cancellation' && 
                        `Customer: ${order.customer}, Reason: ${order.reason}`}
                      {order.type === 'reschedule' && 
                        `Customer: ${order.customer}, New date: ${order.newDate} (was ${order.originalDate})`}
                    </p>
                    <div className="alert-date">{order.date}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default MessageAlerts;