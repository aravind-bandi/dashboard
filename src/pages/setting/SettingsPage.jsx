import React, { useState, useRef } from 'react';
import './SettingsPage.css';

const SettingsPage = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    notifications: true,
    newsletter: false,
    address: {
      street: '',
      city: '',
      state: '',
      pincode: '',
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings updated successfully!');
    console.log('Updated Data:', formData);
    
    // Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      notifications: true,
      newsletter: false,
      address: {
        street: '',
        city: '',
        state: '',
        pincode: '',
      },
    });

    // Reset form validation
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div className="account-settings">
      <div className="account-header">
        <h1 className="account-title">Account Settings</h1>
        <p className="account-subtitle">Manage your profile, preferences, and security</p>
      </div>

      <div className="account-content">
        <form onSubmit={handleSubmit} ref={formRef}>
          {/* Personal Information Section */}
          <div className="account-section">
            <h2 className="section-heading">Personal Information</h2>
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-input"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="text-input"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Change Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="text-input"
                placeholder="Enter new password"
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="account-section">
            <h2 className="section-heading">Shipping Address</h2>
            <div className="input-group">
              <label className="input-label">Street</label>
              <input
                type="text"
                name="street"
                value={formData.address.street}
                onChange={handleAddressChange}
                className="text-input"
                placeholder="Enter street address"
              />
            </div>

            <div className="input-group">
              <label className="input-label">City</label>
              <input
                type="text"
                name="city"
                value={formData.address.city}
                onChange={handleAddressChange}
                className="text-input"
                placeholder="Enter city"
              />
            </div>

            <div className="input-group">
              <label className="input-label">State</label>
              <input
                type="text"
                name="state"
                value={formData.address.state}
                onChange={handleAddressChange}
                className="text-input"
                placeholder="Enter state"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.address.pincode}
                onChange={handleAddressChange}
                className="text-input"
                placeholder="Enter pincode"
              />
            </div>
          </div>

          {/* Preferences Section */}
          <div className="account-section">
            <h2 className="section-heading">Preferences</h2>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
                className="checkbox"
              />
              <label htmlFor="notifications" className="checkbox-label">
                Receive order notifications
              </label>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="checkbox"
              />
              <label htmlFor="newsletter" className="checkbox-label">
                Subscribe to newsletter
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button type="submit" className="primary-btn">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;