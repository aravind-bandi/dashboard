import React, { useState } from 'react';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');

  const handleTrackOrder = (e) => {
    e.preventDefault();
    setError('');
    
    // Validate inputs
    if (!orderId.trim() || !email.trim()) {
      setError('Please enter both order ID and email');
      return;
    }
    
    // Simulate API call to fetch order details
    // In a real app, you would make an actual API call here
    setTimeout(() => {
      // Mock response
      const mockOrder = {
        id: orderId,
        status: 'Shipped',
        date: '2023-06-15',
        estimatedDelivery: '2023-06-20',
        items: [
          { name: 'Product 1', quantity: 1, price: 29.99 },
          { name: 'Product 2', quantity: 2, price: 14.99 }
        ],
        total: 59.97,
        shippingAddress: '123 Main St, City, Country',
        trackingNumber: 'TRK123456789',
        carrier: 'Fast Delivery Co.'
      };
      
      setOrderDetails(mockOrder);
    }, 1000);
  };

  return (
    <div className="order-tracking">
      <h2>Track Your Order</h2>
      <form onSubmit={handleTrackOrder}>
        <div className="form-group">
          <label>Order ID</label>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter your order ID"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter the email used for ordering"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Track Order</button>
      </form>
      
      {orderDetails && (
        <div className="order-details">
          <h3>Order Details</h3>
          <div className="order-status">
            <strong>Status:</strong> {orderDetails.status}
          </div>
          <div className="order-info">
            <div>
              <strong>Order Date:</strong> {orderDetails.date}
            </div>
            <div>
              <strong>Estimated Delivery:</strong> {orderDetails.estimatedDelivery}
            </div>
            <div>
              <strong>Tracking Number:</strong> {orderDetails.trackingNumber}
            </div>
            <div>
              <strong>Carrier:</strong> {orderDetails.carrier}
            </div>
          </div>
          
          <div className="order-items">
            <h4>Items Ordered</h4>
            <ul>
              {orderDetails.items.map((item, index) => (
                <li key={index}>
                  {item.name} (Qty: {item.quantity}) - ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="order-total">
              <strong>Total:</strong> ${orderDetails.total.toFixed(2)}
            </div>
          </div>
          
          <div className="shipping-address">
            <h4>Shipping Address</h4>
            <p>{orderDetails.shippingAddress}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;