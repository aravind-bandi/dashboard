import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderId: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        orderId: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="support__contact-form">
      <h2 className="support__title">Contact Us</h2>
      {submitted ? (
        <div className="support__success-message">
          Thank you for contacting us! We'll get back to you within 24 hours.
        </div>
      ) : (
        <form className="support__form" onSubmit={handleSubmit}>
          <div className="support__form-group">
            <label className="support__form-label">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="support__form-input"
              required 
            />
          </div>
          <div className="support__form-group">
            <label className="support__form-label">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="support__form-input"
              required 
            />
          </div>
          <div className="support__form-group">
            <label className="support__form-label">Order ID (if applicable)</label>
            <input 
              type="text" 
              name="orderId" 
              value={formData.orderId} 
              onChange={handleChange} 
              className="support__form-input"
            />
          </div>
          <div className="support__form-group">
            <label className="support__form-label">Subject</label>
            <select 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              className="support__form-select"
              required
            >
              <option value="">Select a subject</option>
              <option value="order">Order Issue</option>
              <option value="delivery">Delivery Problem</option>
              <option value="return">Return/Refund</option>
              <option value="account">Account Help</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="support__form-group">
            <label className="support__form-label">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="support__form-textarea"
              required 
            />
          </div>
          <button type="submit" className="support__form-button">Submit</button>
        </form>
      )}
      <div className="support__contact-info">
        <h3 className="support__subtitle">Other ways to reach us</h3>
        <p className="support__contact-text">Email: support@yourstore.com</p>
        <p className="support__contact-text">Phone: +1 (800) 123-4567 (24/7 support)</p>
      </div>
    </div>
  );
};

export default ContactForm;