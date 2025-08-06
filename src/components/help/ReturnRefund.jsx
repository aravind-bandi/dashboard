import React, { useState } from 'react';

const ReturnRefund = () => {
  const [step, setStep] = useState(1);
  const [orderId, setOrderId] = useState('');
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const [returnMethod, setReturnMethod] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the return request to your backend
    console.log('Return request submitted:', { orderId, reason, details, returnMethod });
    setIsSubmitted(true);
  };

  return (
    <div className="return-refund">
      <h2>Returns & Refunds</h2>
      
      {isSubmitted ? (
        <div className="success-message">
          <h3>Return Request Submitted Successfully!</h3>
          <p>Your return request for order #{orderId} has been received.</p>
          <p>We'll process your request within 2-3 business days and send you a return shipping label if applicable.</p>
          <p>You'll receive an email confirmation shortly with next steps.</p>
          <button onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setOrderId('');
            setReason('');
            setDetails('');
            setReturnMethod('');
          }}>
            Start New Return
          </button>
        </div>
      ) : (
        <div className="return-process">
          <div className="progress-steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Order Details</div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Return Reason</div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Return Method</div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="step-content">
                <h3>Enter Order Details</h3>
                <div className="form-group">
                  <label>Order ID</label>
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                    placeholder="Enter your order ID"
                  />
                </div>
                <p>You can find your order ID in your order confirmation email.</p>
              </div>
            )}
            
            {step === 2 && (
              <div className="step-content">
                <h3>Why are you returning this item?</h3>
                <div className="form-group">
                  <label>Reason for Return</label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                  >
                    <option value="">Select a reason</option>
                    <option value="wrong">Wrong item received</option>
                    <option value="damaged">Item arrived damaged</option>
                    <option value="quality">Poor quality</option>
                    <option value="size">Wrong size/fit</option>
                    <option value="change">Changed my mind</option>
                    <option value="other">Other reason</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Additional Details</label>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Provide any additional details about your return"
                  />
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="step-content">
                <h3>Select Return Method</h3>
                <div className="return-options">
                  <label className="return-option">
                    <input
                      type="radio"
                      name="returnMethod"
                      value="pickup"
                      checked={returnMethod === 'pickup'}
                      onChange={() => setReturnMethod('pickup')}
                      required
                    />
                    <div className="option-content">
                      <h4>Schedule a Pickup</h4>
                      <p>We'll arrange for a courier to pick up the item from your address.</p>
                    </div>
                  </label>
                  
                  <label className="return-option">
                    <input
                      type="radio"
                      name="returnMethod"
                      value="dropoff"
                      checked={returnMethod === 'dropoff'}
                      onChange={() => setReturnMethod('dropoff')}
                    />
                    <div className="option-content">
                      <h4>Drop Off at Nearest Center</h4>
                      <p>Return the item at one of our partner drop-off locations.</p>
                    </div>
                  </label>
                </div>
                
                <div className="return-policy">
                  <h4>Return Policy</h4>
                  <ul>
                    <li>Items must be returned within 30 days of delivery</li>
                    <li>Items must be unused, with original tags and packaging</li>
                    <li>Refunds will be processed within 5-7 business days after we receive the return</li>
                    <li>Original shipping charges are non-refundable</li>
                  </ul>
                </div>
              </div>
            )}
            
            <div className="form-navigation">
              {step > 1 && (
                <button type="button" onClick={handleBack} className="back-button">
                  Back
                </button>
              )}
              
              {step < 3 ? (
                <button type="button" onClick={handleNext} className="next-button">
                  Next
                </button>
              ) : (
                <button type="submit" className="submit-button">
                  Submit Return Request
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReturnRefund;