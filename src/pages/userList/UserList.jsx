import React, { useState, useEffect } from 'react';
import './UserList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function CustomerProfiles() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Emma Johnson',
      email: 'emma.j@example.com',
      phone: '555-1234',
      type: 'Premium',
      orders: 15,
      lastOrder: '2023-06-10',
      preferences: ['Fashion', 'Cosmetics'],
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      status: 'Active',
      notes: 'Loyal customer with high engagement'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      phone: '555-2345',
      type: 'Regular',
      orders: 7,
      lastOrder: '2023-05-28',
      preferences: ['Electronics', 'Gadgets'],
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      status: 'Active',
      notes: 'Interested in new tech products'
    },
    {
      id: 3,
      name: 'Sophia Rodriguez',
      email: 'sophia.r@example.com',
      phone: '555-3456',
      type: 'VIP',
      orders: 22,
      lastOrder: '2023-06-15',
      preferences: ['Home Decor', 'Books'],
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      status: 'Active',
      notes: 'High-value customer, prefers email communication'
    },
    {
      id: 4,
      name: 'David Kim',
      email: 'david.k@example.com',
      phone: '555-4567',
      type: 'Bulk',
      orders: 35,
      lastOrder: '2023-06-05',
      preferences: ['Office Supplies', 'Furniture'],
      photo: 'https://randomuser.me/api/portraits/men/75.jpg',
      status: 'Inactive',
      notes: 'Business customer, seasonal purchases'
    },
    {
      id: 5,
      name: 'Olivia Smith',
      email: 'olivia.s@example.com',
      phone: '555-5678',
      type: 'Premium',
      orders: 18,
      lastOrder: '2023-06-12',
      preferences: ['Jewelry', 'Accessories'],
      photo: 'https://randomuser.me/api/portraits/women/25.jpg',
      status: 'Active',
      notes: 'Frequent buyer, responds well to promotions'
    },
    {
      id: 6,
      name: 'James Wilson',
      email: 'james.w@example.com',
      phone: '555-6789',
      type: 'Regular',
      orders: 5,
      lastOrder: '2023-04-20',
      preferences: ['Sports', 'Outdoor'],
      photo: 'https://randomuser.me/api/portraits/men/22.jpg',
      status: 'Inactive',
      notes: 'Last purchase was camping equipment'
    },
    {
      id: 7,
      name: 'Ava Martinez',
      email: 'ava.m@example.com',
      phone: '555-7890',
      type: 'VIP',
      orders: 30,
      lastOrder: '2023-06-18',
      preferences: ['Luxury', 'Fashion'],
      photo: 'https://randomuser.me/api/portraits/women/33.jpg',
      status: 'Active',
      notes: 'Top-tier customer, personal shopper assigned'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Regular',
    preferences: [],
    status: 'Active',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [viewingCustomer, setViewingCustomer] = useState(null);
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  // Load customers from localStorage on initial render
  useEffect(() => {
    const savedCustomers = localStorage.getItem('customers');
    if (savedCustomers) {
      setCustomers(JSON.parse(savedCustomers));
    }
  }, []);

  // Save customers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePreferenceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        preferences: [...formData.preferences, value]
      });
    } else {
      setFormData({
        ...formData,
        preferences: formData.preferences.filter(item => item !== value)
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingId) {
      setCustomers(customers.map(customer => 
        customer.id === editingId ? { ...formData, id: editingId } : customer
      ));
      setEditingId(null);
    } else {
      const newCustomer = {
        ...formData,
        id: Math.max(...customers.map(c => c.id)) + 1,
        orders: 0,
        lastOrder: 'Never',
        photo: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`
      };
      setCustomers([...customers, newCustomer]);
    }

    setIsFormOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: 'Regular',
      preferences: [],
      status: 'Active',
      notes: ''
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter(customer => customer.id !== id));
    }
  };

  const handleEdit = (customer) => {
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      type: customer.type,
      preferences: [...customer.preferences],
      status: customer.status,
      notes: customer.notes
    });
    setEditingId(customer.id);
    setIsFormOpen(true);
  };

  const handleView = (customer) => {
    setViewingCustomer(customer);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedCustomers = [...customers].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredCustomers = sortedCustomers.filter(customer => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'All' || customer.type === filterType;
    const matchesStatus = filterStatus === 'All' || customer.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const sendEmail = (email) => {
    window.open(`mailto:${email}`, '_blank');
  };

  const callCustomer = (phone) => {
    window.open(`tel:${phone}`, '_blank');
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Type', 'Status', 'Orders', 'Last Order', 'Preferences'];
    const csvContent = [
      headers.join(','),
      ...filteredCustomers.map(customer => [
        customer.id,
        `"${customer.name}"`,
        customer.email,
        customer.phone,
        customer.type,
        customer.status,
        customer.orders,
        customer.lastOrder,
        `"${customer.preferences.join(', ')}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'customers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="customer-profiles">
      <div className="header">
        <div className="header-left">
          <h2>Customer Profiles</h2>
          <div className="stats-summary">
            <div className="stat-card">
              <div className="stat-value">{customers.length}</div>
              <div className="stat-label">Total Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{customers.filter(c => c.status === 'Active').length}</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{customers.filter(c => c.type === 'VIP').length}</div>
              <div className="stat-label">VIPs</div>
            </div>
          </div>
        </div>
        
        <div className="actions">
          <div className="search-filter-container">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-group">
              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="filter-select"
              >
                <option value="All">All Types</option>
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
                <option value="Bulk">Bulk</option>
              </select>
              
              <select 
                value={filterStatus} 
                onChange={(e) => setFilterStatus(e.target.value)}
                className="filter-select"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
          
          <div className="action-buttons">
            <button 
              className="add-btn"
              onClick={() => {
                setIsFormOpen(true);
                setEditingId(null);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  type: 'Regular',
                  preferences: [],
                  status: 'Active',
                  notes: ''
                });
              }}
            >
              <i className="fas fa-plus"></i> Add Customer
            </button>
            
            <button 
              className="export-btn"
              onClick={exportToCSV}
              title="Export to CSV"
            >
              <i className="fas fa-file-export"></i> Export
            </button>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="form-overlay">
          <div className="customer-form">
            <div className="form-header">
              <h3>{editingId ? 'Edit Customer' : 'Add New Customer'}</h3>
              <button 
                className="close-btn"
                onClick={() => setIsFormOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name <span className="required">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label>Email <span className="required">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Phone <span className="required">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="555-1234"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                
                <div className="form-group">
                  <label>Customer Type</label>
                  <select 
                    name="type" 
                    value={formData.type} 
                    onChange={handleInputChange}
                  >
                    <option value="Regular">Regular</option>
                    <option value="Premium">Premium</option>
                    <option value="VIP">VIP</option>
                    <option value="Bulk">Bulk</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Status</label>
                  <div className="status-options">
                    <label className="status-label">
                      <input
                        type="radio"
                        name="status"
                        value="Active"
                        checked={formData.status === 'Active'}
                        onChange={handleInputChange}
                      />
                      <span className="status-indicator active"></span>
                      Active
                    </label>
                    <label className="status-label">
                      <input
                        type="radio"
                        name="status"
                        value="Inactive"
                        checked={formData.status === 'Inactive'}
                        onChange={handleInputChange}
                      />
                      <span className="status-indicator inactive"></span>
                      Inactive
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label>Preferences</label>
                <div className="preference-options">
                  {['Electronics', 'Fashion', 'Home Decor', 'Books', 'Cosmetics', 'Jewelry', 'Sports', 'Outdoor', 'Luxury'].map(pref => (
                    <label key={pref} className="preference-label">
                      <input
                        type="checkbox"
                        value={pref}
                        checked={formData.preferences.includes(pref)}
                        onChange={handlePreferenceChange}
                      />
                      <span className="checkmark"></span>
                      {pref}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label>Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Additional customer information..."
                  rows="3"
                ></textarea>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setIsFormOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {editingId ? 'Update Customer' : 'Add Customer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {viewingCustomer && (
        <div className="view-overlay">
          <div className="customer-detail">
            <div className="detail-header">
              <div className="customer-avatar">
                <img 
                  src={viewingCustomer.photo} 
                  alt={viewingCustomer.name} 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${viewingCustomer.name.replace(' ', '+')}&background=random`;
                  }}
                />
                <h3>{viewingCustomer.name}</h3>
                <span className={`customer-type ${viewingCustomer.type.toLowerCase()}`}>
                  {viewingCustomer.type}
                </span>
                <span className={`customer-status ${viewingCustomer.status.toLowerCase()}`}>
                  {viewingCustomer.status}
                </span>
              </div>
              <button 
                className="close-btn"
                onClick={() => setViewingCustomer(null)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="detail-content">
              <div className="detail-section">
                <h4>Contact Information</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <span>{viewingCustomer.email}</span>
                    <button 
                      className="icon-btn"
                      onClick={() => sendEmail(viewingCustomer.email)}
                      title="Send Email"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <span>{viewingCustomer.phone}</span>
                    <button 
                      className="icon-btn"
                      onClick={() => callCustomer(viewingCustomer.phone)}
                      title="Call Customer"
                    >
                      <i className="fas fa-phone-volume"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="detail-section">
                <h4>Purchase History</h4>
                <div className="purchase-info">
                  <div className="purchase-item">
                    <span className="purchase-label">Total Orders:</span>
                    <span className="purchase-value">{viewingCustomer.orders}</span>
                  </div>
                  <div className="purchase-item">
                    <span className="purchase-label">Last Order:</span>
                    <span className="purchase-value">{viewingCustomer.lastOrder}</span>
                  </div>
                </div>
              </div>
              
              <div className="detail-section">
                <h4>Preferences</h4>
                <div className="preferences">
                  {viewingCustomer.preferences.length > 0 ? (
                    viewingCustomer.preferences.map((pref, index) => (
                      <span key={index} className="preference-tag">{pref}</span>
                    ))
                  ) : (
                    <span className="no-preferences">No preferences specified</span>
                  )}
                </div>
              </div>
              
              {viewingCustomer.notes && (
                <div className="detail-section">
                  <h4>Notes</h4>
                  <p className="customer-notes">{viewingCustomer.notes}</p>
                </div>
              )}
            </div>
            
            <div className="detail-actions">
              <button 
                className="edit-btn"
                onClick={() => {
                  handleEdit(viewingCustomer);
                  setViewingCustomer(null);
                }}
              >
                <i className="fas fa-edit"></i> Edit Profile
              </button>
              <button 
                className="delete-btn"
                onClick={() => {
                  if (window.confirm(`Are you sure you want to delete ${viewingCustomer.name}?`)) {
                    handleDelete(viewingCustomer.id);
                    setViewingCustomer(null);
                  }
                }}
              >
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="customer-table-container">
        <table className="customer-table">
          <thead>
            <tr>
              <th className="name-col" onClick={() => handleSort('name')}>
                Customer {getSortIndicator('name')}
              </th>
              <th className="contact-col">Contact</th>
              <th className="type-col" onClick={() => handleSort('type')}>
                Type {getSortIndicator('type')}
              </th>
              <th className="status-col" onClick={() => handleSort('status')}>
                Status {getSortIndicator('status')}
              </th>
              <th className="orders-col" onClick={() => handleSort('orders')}>
                Orders {getSortIndicator('orders')}
              </th>
              <th className="last-order-col" onClick={() => handleSort('lastOrder')}>
                Last Order {getSortIndicator('lastOrder')}
              </th>
              <th className="preferences-col">Preferences</th>
              <th className="actions-col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map(customer => (
                <tr key={customer.id}>
                  <td className="name-col">
                    <div className="customer-avatar">
                      <img 
                        src={customer.photo} 
                        alt={customer.name} 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${customer.name.replace(' ', '+')}&background=random`;
                        }}
                      />
                      <div>
                        <span className="customer-name">{customer.name}</span>
                        <span className="customer-id">ID: {customer.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="contact-col">
                    <div className="email">{customer.email}</div>
                    <div className="phone">{customer.phone}</div>
                  </td>
                  <td className="type-col">
                    <span className={`customer-type ${customer.type.toLowerCase()}`}>
                      {customer.type}
                    </span>
                  </td>
                  <td className="status-col">
                    <span className={`customer-status ${customer.status.toLowerCase()}`}>
                      <span className="status-dot"></span>
                      {customer.status}
                    </span>
                  </td>
                  <td className="orders-col">
                    <div className="order-count">{customer.orders}</div>
                  </td>
                  <td className="last-order-col">
                    <div className="last-order">{customer.lastOrder}</div>
                  </td>
                  <td className="preferences-col">
                    <div className="preferences">
                      {customer.preferences.slice(0, 2).map((pref, index) => (
                        <span key={index} className="preference-tag">{pref}</span>
                      ))}
                      {customer.preferences.length > 2 && (
                        <span className="more-preferences">+{customer.preferences.length - 2} more</span>
                      )}
                    </div>
                  </td>
                  <td className="actions-col">
                    <div className="action-buttons">
                      <button 
                        className="action-btn view-btn"
                        onClick={() => handleView(customer)}
                        title="View Details"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                      <button 
                        className="action-btn email-btn"
                        onClick={() => sendEmail(customer.email)}
                        title="Send Email"
                      >
                        <i className="fas fa-envelope"></i>
                      </button>
                      <button 
                        className="action-btn call-btn"
                        onClick={() => callCustomer(customer.phone)}
                        title="Call Customer"
                      >
                        <i className="fas fa-phone"></i>
                      </button>
                      <button 
                        className="action-btn edit-btn"
                        onClick={() => handleEdit(customer)}
                        title="Edit"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button 
                        className="action-btn delete-btn"
                        onClick={() => handleDelete(customer.id)}
                        title="Delete"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="no-results-row">
                <td colSpan="8" className="no-results">
                  <i className="fas fa-search"></i>
                  <div>No customers found matching your criteria.</div>
                  <button 
                    className="reset-filters-btn"
                    onClick={() => {
                      setSearchTerm('');
                      setFilterType('All');
                      setFilterStatus('All');
                    }}
                  >
                    Reset Filters
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}