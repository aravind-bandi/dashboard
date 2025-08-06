import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManageAccount.css";

const ManageAccount = ({ userRole = "admin" }) => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    username: "Aravind",
    email: "aravind@example.com",
    role: "Customer",
    status: "Active",
    lastLogin: "2024-12-17T14:30:00Z",
    createdAt: "2023-01-01",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    phone: "9848985869",
    address: "504, kukatpally, hyd",
    twoFactorEnabled: true,
    loginHistory: [
      { date: "2024-12-17T14:30:00Z", device: "iPhone 13", location: "Hyd" },
      { date: "2024-12-15T09:15:00Z", device: "MacBook Pro", location: "SDPT" },
      { date: "2024-12-10T18:45:00Z", device: "Android Pixel 6", location: "Wrngl" }
    ]
  });

  const [showResetForm, setShowResetForm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [tempAccount, setTempAccount] = useState({ ...account });

  const handleResetPassword = () => {
    if (password === confirmPassword) {
      alert("Password has been reset successfully!");
      setShowResetForm(false);
      setPassword("");
      setConfirmPassword("");
    } else {
      alert("Passwords do not match!");
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete this account? This action cannot be undone.")) {
      alert("Account deleted!");
      // Add deletion logic here
      navigate("/");
    }
  };

  const handleStatusChange = (status) => {
    setAccount({ ...account, status });
  };

  const handleRoleChange = (role) => {
    setAccount({ ...account, role });
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate("/login");
    alert("You have been logged out successfully");
  };

  const handleEdit = () => {
    setTempAccount({ ...account });
    setIsEditing(true);
  };

  const handleSave = () => {
    setAccount(tempAccount);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempAccount({ ...tempAccount, [name]: value });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="managee">
    <div className="account-dashboard">
      <div className="account-sidebar">
        <div className="account-profile">
          <img src={account.profileImage} alt="Profile" className="profilee-image" />
          <h3>{account.username}</h3>
          <p className={`account-badge ${account.role.toLowerCase()}`}>{account.role}</p>
          <p className={`status-badge ${account.status.toLowerCase()}`}>{account.status}</p>
        </div>
        
        <nav className="account-nav">
          <button 
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            <i className="fas fa-user"></i> Overview
          </button>
          <button 
            className={activeTab === "security" ? "active" : ""}
            onClick={() => setActiveTab("security")}
          >
            <i className="fas fa-shield-alt"></i> Security
          </button>
          <button 
            className={activeTab === "activity" ? "active" : ""}
            onClick={() => setActiveTab("activity")}
          >
            <i className="fas fa-history"></i> Activity
          </button>
          {userRole === "admin" && (
            <button 
              className={activeTab === "admin" ? "active" : ""}
              onClick={() => setActiveTab("admin")}
            >
              <i className="fas fa-cog"></i> Admin Tools
            </button>
          )}
        </nav>
        
        <button className="logout-btn" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
      
      <div className="account-content">
        {activeTab === "overview" && (
          <div className="overview-section">
            <div className="section-header">
              <h2>Account Overview</h2>
              {!isEditing ? (
                <button className="edit-btn" onClick={handleEdit}>
                  <i className="fas fa-edit"></i> Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button className="save-btn" onClick={handleSave}>
                    <i className="fas fa-save"></i> Save
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    <i className="fas fa-times"></i> Cancel
                  </button>
                </div>
              )}
            </div>
            
            <div className="account-details">
              <div className="detail-group">
                <label>Username</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="username" 
                    value={tempAccount.username} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <p>{account.username}</p>
                )}
              </div>
              
              <div className="detail-group">
                <label>Email Address</label>
                {isEditing ? (
                  <input 
                    type="email" 
                    name="email" 
                    value={tempAccount.email} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <p>{account.email}</p>
                )}
              </div>
              
              <div className="detail-group">
                <label>Phone Number</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    name="phone" 
                    value={tempAccount.phone} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <p>{account.phone}</p>
                )}
              </div>
              
              <div className="detail-group">
                <label>Address</label>
                {isEditing ? (
                  <textarea 
                    name="address" 
                    value={tempAccount.address} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <p>{account.address}</p>
                )}
              </div>
              
              <div className="detail-group">
                <label>Account Created</label>
                <p>{formatDate(account.createdAt)}</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "security" && (
          <div className="security-section">
            <h2>Security Settings</h2>
            
            <div className="security-card">
              <div className="security-info">
                <h3>Password</h3>
                <p>Last changed 3 months ago</p>
              </div>
              <button 
                className="change-password-btn" 
                onClick={() => setShowResetForm(!showResetForm)}
              >
                Change Password
              </button>
            </div>
            
            <div className="security-card">
              <div className="security-info">
                <h3>Two-Factor Authentication</h3>
                <p>{account.twoFactorEnabled ? "Enabled" : "Disabled"}</p>
              </div>
              <button className={`toggle-2fa-btn ${account.twoFactorEnabled ? "enabled" : "disabled"}`}>
                {account.twoFactorEnabled ? "Disable" : "Enable"}
              </button>
            </div>
            
            {showResetForm && (
              <div className="reset-password-form">
                <h3>Reset Password</h3>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                  />
                </div>
                <div className="form-actions">
                  <button onClick={handleResetPassword} className="save-btn">
                    Save Password
                  </button>
                  <button onClick={() => setShowResetForm(false)} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {activeTab === "activity" && (
          <div className="activity-section">
            <h2>Account Activity</h2>
            
            <div className="activity-card">
              <h3>Last Login</h3>
              <p>{formatDate(account.lastLogin)}</p>
            </div>
            
            <div className="login-history">
              <h3>Login History</h3>
              <div className="history-table">
                <div className="table-header">
                  <span>Date</span>
                  <span>Device</span>
                  <span>Location</span>
                </div>
                {account.loginHistory.map((login, index) => (
                  <div className="table-row" key={index}>
                    <span>{formatDate(login.date)}</span>
                    <span>{login.device}</span>
                    <span>{login.location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "admin" && userRole === "admin" && (
          <div className="admin-section">
            <h2>Admin Tools</h2>
            
            <div className="admin-card">
              <h3>Account Status</h3>
              <div className="status-controls">
                <button
                  className={`status-btn ${account.status === "Active" ? "active" : ""}`}
                  onClick={() => handleStatusChange("Active")}
                >
                  Active
                </button>
                <button
                  className={`status-btn ${account.status === "Suspended" ? "suspended" : ""}`}
                  onClick={() => handleStatusChange("Suspended")}
                >
                  Suspended
                </button>
              </div>
            </div>
            
            <div className="admin-card">
              <h3>Account Role</h3>
              <div className="role-controls">
                <select
                  value={account.role}
                  onChange={(e) => handleRoleChange(e.target.value)}
                >
                  <option value="Customer">Customer</option>
                  <option value="Employee">Employee</option>
                  <option value="Manager">Manager</option>
                  <option value="Admin">Administrator</option>
                </select>
              </div>
            </div>
            
            <div className="admin-card danger-zone">
              <h3>Danger Zone</h3>
              <div className="danger-actions">
                <button className="reset-sessions-btn">
                  Reset All Sessions
                </button>
                <button className="delete-btn" onClick={handleDeleteAccount}>
                  Delete Account Permanently
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default ManageAccount;