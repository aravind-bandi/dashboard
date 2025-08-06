import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiChevronLeft } from 'react-icons/fi';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <button className="checkout-back-button" onClick={() => navigate(-1)}>
          <FiChevronLeft /> Back
        </button>

        <div className="checkout-steps">
          <div className="checkout-step active">
            <span>1</span>
            <p>Shipping Address</p>
          </div>
          <div className="checkout-step">
            <span>2</span>
            <p>Payment Method</p>
          </div>
          <div className="checkout-step">
            <span>3</span>
            <p>Place Order</p>
          </div>
        </div>

        <div className="checkout-shipping-form">
          <h2>Shipping Information</h2>
          <form>
            <div className="checkout-form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className="checkout-form-group">
              <label>Address</label>
              <textarea placeholder="Enter your full address" required></textarea>
            </div>
            <div className="checkout-form-row">
              <div className="checkout-form-group">
                <label>City</label>
                <input type="text" placeholder="Enter your city" required />
              </div>
              <div className="checkout-form-group">
                <label>State</label>
                <input type="text" placeholder="Enter your state" required />
              </div>
            </div>
            <div className="checkout-form-row">
              <div className="checkout-form-group">
                <label>Postal Code</label>
                <input type="text" placeholder="Enter postal code" required />
              </div>
              <div className="checkout-form-group">
                <label>Country</label>
                <select required>
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
            </div>
            <div className="checkout-form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" required />
            </div>
            <button type="submit" className="checkout-continue-btn">
              Continue to Payment
            </button>
          </form>
        </div>

        <div className="checkout-order-summary">
          <h2>Order Summary</h2>
          <div className="checkout-summary-item">
            <span>Subtotal</span>
            <span>₹24,990</span>
          </div>
          <div className="checkout-summary-item">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="checkout-summary-item">
            <span>Tax</span>
            <span>₹2,499</span>
          </div>
          <div className="checkout-summary-item total">
            <span>Total</span>
            <span>₹27,489</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;