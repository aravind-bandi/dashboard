import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaShoppingCart, FaMoneyBillWave,
  FaComments, FaBell,
  FaSearch, FaFilter, FaPlus,
  FaEdit, FaTrash, FaCheckCircle, FaTimesCircle
} from 'react-icons/fa';
import './user.css';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [segmentFilter, setSegmentFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('profile');
  const [newMessage, setNewMessage] = useState('');
  const [notification, setNotification] = useState({
    type: 'promotional',
    subject: '',
    content: ''
  });

  // Enhanced mock data
  useEffect(() => {
    const mockCustomers = [
      {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main St, New York, NY 10001',
        joinDate: 'Jan 15, 2022',
        lastLogin: 'Today, 2:45 PM',
        segment: 'premium',
        status: 'active',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        orders: [
          { id: 101, date: 'May 10, 2023', amount: 120.50, status: 'delivered', items: 3 },
          { id: 102, date: 'Jun 15, 2023', amount: 85.75, status: 'shipped', items: 2 },
          { id: 103, date: 'Jul 2, 2023', amount: 210.00, status: 'processing', items: 5 }
        ],
        paymentMethods: [
          { type: 'Visa', last4: '4242', expiry: '12/25', primary: true },
          { type: 'PayPal', email: 'john.smith@example.com', primary: false }
        ],
        preferences: {
          communication: ['email', 'sms'],
          favoriteCategories: ['Electronics', 'Books'],
          marketingConsent: true
        },
        stats: {
          totalOrders: 12,
          totalSpent: 1850.25,
          avgOrderValue: 154.19,
          lastOrderDate: 'Jul 2, 2023'
        },
        communications: [
          { 
            type: 'email', 
            date: 'Jun 1, 2023', 
            subject: 'Your order has shipped', 
            content: 'Your order #102 has been shipped and will arrive in 2-3 business days.',
            read: true 
          },
          { 
            type: 'promotional', 
            date: 'Jun 15, 2023', 
            subject: 'Summer Sale - 20% Off', 
            content: 'Enjoy 20% off all electronics this weekend!',
            read: false 
          }
        ]
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
        phone: '+1 (555) 987-6543',
        address: '456 Oak Ave, Los Angeles, CA 90001',
        joinDate: 'Nov 22, 2021',
        lastLogin: 'Yesterday, 5:30 PM',
        segment: 'wholesale',
        status: 'active',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        orders: [
          { id: 201, date: 'Apr 5, 2023', amount: 450.00, status: 'delivered', items: 10 },
          { id: 202, date: 'May 18, 2023', amount: 320.50, status: 'processing', items: 8 }
        ],
        paymentMethods: [
          { type: 'Mastercard', last4: '5555', expiry: '06/24', primary: true }
        ],
        preferences: {
          communication: ['email'],
          favoriteCategories: ['Office Supplies'],
          marketingConsent: true
        },
        stats: {
          totalOrders: 8,
          totalSpent: 3250.75,
          avgOrderValue: 406.34,
          lastOrderDate: 'May 18, 2023'
        },
        communications: [
          { 
            type: 'email', 
            date: 'May 20, 2023', 
            subject: 'Special bulk order discount', 
            content: 'As a wholesale customer, you qualify for an additional 5% discount on orders over $500.',
            read: false 
          }
        ]
      }
    ];
    setCustomers(mockCustomers);
    setSelectedCustomer(mockCustomers[0]);
  }, []);

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSegment = segmentFilter === 'all' || customer.segment === segmentFilter;
    return matchesSearch && matchesSegment;
  });

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const updatedCustomer = {
      ...selectedCustomer,
      communications: [
        ...selectedCustomer.communications,
        {
          type: 'message',
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          content: newMessage,
          read: false
        }
      ]
    };
    
    setSelectedCustomer(updatedCustomer);
    setCustomers(customers.map(c => c.id === updatedCustomer.id ? updatedCustomer : c));
    setNewMessage('');
  };

  const handleSendNotification = () => {
    if (!notification.subject || !notification.content) return;
    
    const updatedCustomer = {
      ...selectedCustomer,
      communications: [
        ...selectedCustomer.communications,
        {
          type: notification.type,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          subject: notification.subject,
          content: notification.content,
          read: false
        }
      ]
    };
    
    setSelectedCustomer(updatedCustomer);
    setCustomers(customers.map(c => c.id === updatedCustomer.id ? updatedCustomer : c));
    setNotification({ type: 'promotional', subject: '', content: '' });
  };

  const handleUpdateSegment = (segment) => {
    const updatedCustomer = {
      ...selectedCustomer,
      segment
    };
    
    setSelectedCustomer(updatedCustomer);
    setCustomers(customers.map(c => c.id === updatedCustomer.id ? updatedCustomer : c));
  };

  const handleProcessReturn = (orderId) => {
    const updatedCustomer = {
      ...selectedCustomer,
      orders: selectedCustomer.orders.map(order => 
        order.id === orderId ? { ...order, status: 'returned' } : order
      )
    };
    
    setSelectedCustomer(updatedCustomer);
    setCustomers(customers.map(c => c.id === updatedCustomer.id ? updatedCustomer : c));
  };

  const handleDeleteCustomer = (customerId) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter(c => c.id !== customerId));
      if (selectedCustomer?.id === customerId) {
        setSelectedCustomer(customers.length > 1 ? customers[0] : null);
      }
    }
  };

  return (
    <div className="customer-management">
      <div className="customer-header">
        <div className="header-content">
          <h1>Customer Management</h1>
          <p>Manage customer profiles, orders, and communications</p>
        </div>
        <div className="header-actions">
          <Link to="/customers/new" className="add-customer-btn">
            <FaPlus /> New Customer
          </Link>
        </div>
      </div>

      <div className="customer-container">
        {/* Customer List Sidebar */}
        <div className="customer-list">
          <div className="list-controls">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <label>
                <FaFilter /> Filter by:
              </label>
              <select
                value={segmentFilter}
                onChange={(e) => setSegmentFilter(e.target.value)}
              >
                <option value="all">All Customers</option>
                <option value="regular">Regular</option>
                <option value="premium">Premium</option>
                <option value="wholesale">Wholesale</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>

          <div className="customer-items">
            {filteredCustomers.map(customer => (
              <div
                key={customer.id}
                className={`customer-item ${selectedCustomer?.id === customer.id ? 'active' : ''}`}
                onClick={() => setSelectedCustomer(customer)}
              >
                <div className="customer-avatar">
                  <img src={customer.avatar} alt={customer.name} />
                </div>
                <div className="customer-info">
                  <h3>{customer.name}</h3>
                  <p>{customer.email}</p>
                  <div className="customer-meta">
                    <span className={`segment-tag ${customer.segment}`}>
                      {customer.segment}
                    </span>
                    <span className="order-count">{customer.orders.length} orders</span>
                  </div>
                </div>
                <div className="customer-status">
                  {customer.status === 'active' ? (
                    <FaCheckCircle className="active-icon" />
                  ) : (
                    <FaTimesCircle className="inactive-icon" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Detail View */}
        {selectedCustomer ? (
          <div className="customer-detail">
            <div className="customer-profile-header">
              <div className="profile-avatar">
                <img src={selectedCustomer.avatar} alt={selectedCustomer.name} />
              </div>
              <div className="profile-info">
                <div className="profile-main">
                  <h2>{selectedCustomer.name}</h2>
                  <div className="profile-actions">
                    <button className="edit-btn">
                      <FaEdit /> Edit
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDeleteCustomer(selectedCustomer.id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>
                <div className="profile-meta">
                  <p><FaEnvelope /> {selectedCustomer.email}</p>
                  <p><FaPhone /> {selectedCustomer.phone}</p>
                  <div className="segment-control">
                    <label>Customer Segment:</label>
                    <select
                      value={selectedCustomer.segment}
                      onChange={(e) => handleUpdateSegment(e.target.value)}
                    >
                      <option value="regular">Regular</option>
                      <option value="premium">Premium</option>
                      <option value="wholesale">Wholesale</option>
                      <option value="business">Business</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="customer-tabs">
              <button
                className={activeTab === 'profile' ? 'active' : ''}
                onClick={() => setActiveTab('profile')}
              >
                <FaUser /> Profile
              </button>
              <button
                className={activeTab === 'orders' ? 'active' : ''}
                onClick={() => setActiveTab('orders')}
              >
                <FaShoppingCart /> Orders
              </button>
              <button
                className={activeTab === 'payments' ? 'active' : ''}
                onClick={() => setActiveTab('payments')}
              >
                <FaMoneyBillWave /> Payments
              </button>
              <button
                className={activeTab === 'communications' ? 'active' : ''}
                onClick={() => setActiveTab('communications')}
              >
                <FaComments /> Communications
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'profile' && (
                <div className="profile-details">
                  <div className="detail-section">
                    <h3>Customer Overview</h3>
                    <div className="stats-grid">
                      <div className="stat-card">
                        <div className="stat-label">Member Since</div>
                        <div className="stat-value">{selectedCustomer.joinDate}</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-label">Last Login</div>
                        <div className="stat-value">{selectedCustomer.lastLogin}</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-label">Total Orders</div>
                        <div className="stat-value">{selectedCustomer.stats.totalOrders}</div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-label">Total Spent</div>
                        <div className="stat-value">${selectedCustomer.stats.totalSpent.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Contact Information</h3>
                    <div className="detail-grid">
                      <div className="detail-item">
                        <div className="detail-label"><FaEnvelope /> Email</div>
                        <div className="detail-value">{selectedCustomer.email}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label"><FaPhone /> Phone</div>
                        <div className="detail-value">{selectedCustomer.phone}</div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label"><FaMapMarkerAlt /> Address</div>
                        <div className="detail-value">{selectedCustomer.address}</div>
                      </div>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Preferences</h3>
                    <div className="detail-grid">
                      <div className="detail-item">
                        <div className="detail-label">Communication</div>
                        <div className="detail-value">
                          {selectedCustomer.preferences.communication.join(', ')}
                        </div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Favorite Categories</div>
                        <div className="detail-value">
                          {selectedCustomer.preferences.favoriteCategories.join(', ')}
                        </div>
                      </div>
                      <div className="detail-item">
                        <div className="detail-label">Marketing Consent</div>
                        <div className="detail-value">
                          {selectedCustomer.preferences.marketingConsent ? 'Yes' : 'No'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="orders-list">
                  <div className="section-header">
                    <h3>Order History</h3>
                    <div className="order-stats">
                      <span>Total: {selectedCustomer.stats.totalOrders} orders</span>
                      <span>${selectedCustomer.stats.totalSpent.toFixed(2)} spent</span>
                    </div>
                  </div>
                  <div className="orders-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Items</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedCustomer.orders.map(order => (
                          <tr key={order.id}>
                            <td>#{order.id}</td>
                            <td>{order.date}</td>
                            <td>{order.items}</td>
                            <td>${order.amount.toFixed(2)}</td>
                            <td>
                              <span className={`status-badge ${order.status}`}>
                                {order.status}
                              </span>
                            </td>
                            <td>
                              <button className="view-btn">View</button>
                              {order.status === 'delivered' && (
                                <button 
                                  className="return-btn"
                                  onClick={() => handleProcessReturn(order.id)}
                                >
                                  Return
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'payments' && (
                <div className="payment-methods">
                  <h3>Payment Methods</h3>
                  <div className="methods-grid">
                    {selectedCustomer.paymentMethods.map((method, index) => (
                      <div key={index} className={`method-card ${method.primary ? 'primary' : ''}`}>
                        <div className="method-header">
                          <div className="method-type">{method.type}</div>
                          {method.primary && <span className="primary-badge">Primary</span>}
                        </div>
                        <div className="method-details">
                          {method.last4 && (
                            <>
                              <div className="card-number">•••• •••• •••• {method.last4}</div>
                              <div className="card-expiry">Expires {method.expiry}</div>
                            </>
                          )}
                          {method.email && (
                            <div className="payment-email">{method.email}</div>
                          )}
                        </div>
                        <div className="method-actions">
                          <button className="edit-btn">Edit</button>
                          {!method.primary && <button className="remove-btn">Remove</button>}
                        </div>
                      </div>
                    ))}
                    <div className="add-method-card">
                      <button className="add-btn">
                        <FaPlus /> Add Payment Method
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'communications' && (
                <div className="communications-container">
                  <div className="communications-list">
                    <h3>Communication History</h3>
                    <div className="comm-filters">
                      <select>
                        <option>All Types</option>
                        <option>Emails</option>
                        <option>Notifications</option>
                        <option>Messages</option>
                      </select>
                      <select>
                        <option>All Time</option>
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last Year</option>
                      </select>
                    </div>
                    <div className="comm-items">
                      {selectedCustomer.communications.map((comm, index) => (
                        <div key={index} className={`comm-item ${!comm.read ? 'unread' : ''}`}>
                          <div className="comm-header">
                            <span className={`comm-type ${comm.type}`}>{comm.type}</span>
                            <span className="comm-date">{comm.date}</span>
                          </div>
                          {comm.subject && <div className="comm-subject">{comm.subject}</div>}
                          <div className="comm-content">{comm.content}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="communication-actions">
                    <div className="action-section">
                      <h3>Send Message</h3>
                      <textarea
                        placeholder="Type your message to the customer..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        rows="4"
                      />
                      <div className="action-buttons">
                        <button 
                          className="send-btn"
                          onClick={handleSendMessage}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>

                    <div className="action-section">
                      <h3>Send Notification</h3>
                      <div className="notification-form">
                        <div className="form-group">
                          <label>Notification Type</label>
                          <select
                            value={notification.type}
                            onChange={(e) => setNotification({...notification, type: e.target.value})}
                          >
                            <option value="promotional">Promotional</option>
                            <option value="order">Order Update</option>
                            <option value="support">Support</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Subject</label>
                          <input
                            type="text"
                            placeholder="Notification subject"
                            value={notification.subject}
                            onChange={(e) => setNotification({...notification, subject: e.target.value})}
                          />
                        </div>
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            placeholder="Notification content..."
                            value={notification.content}
                            onChange={(e) => setNotification({...notification, content: e.target.value})}
                            rows="4"
                          />
                        </div>
                        <div className="action-buttons">
                          <button 
                            className="send-btn"
                            onClick={handleSendNotification}
                          >
                            <FaBell /> Send Notification
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="no-customer-selected">
            <div className="empty-state">
              <h3>No Customer Selected</h3>
              <p>Select a customer from the list to view details</p>
              <Link to="/customers/new" className="add-customer-btn">
                <FaPlus /> Add New Customer
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerManagement;