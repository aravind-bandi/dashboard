import React, { useState } from 'react';
import './Invoice.css';

const InvoiceSystem = () => {
  // Navigation state
  const [activeTab, setActiveTab] = useState('invoice');

  // Invoice Generation state
  const [invoices, setInvoices] = useState([]);
  const [currentInvoice, setCurrentInvoice] = useState({
    orderId: '',
    customerName: '',
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    items: [],
    discount: 0,
    notes: '',
    paymentStatus: 'pending'
  });
  const [currentItem, setCurrentItem] = useState({
    productId: '',
    description: '',
    quantity: 1,
    price: 0,
    taxRate: 0
  });

  // Payment Management state
  const [paymentDetails, setPaymentDetails] = useState({
    invoiceId: '',
    method: 'cash',
    amount: 0,
    transactionId: '',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  // Accounts Receivable state
  const [reminderMessage, setReminderMessage] = useState('Dear valued customer, this is a friendly reminder about your outstanding invoice.');

  // Dairy farm products
  const dairyProducts = [
    { id: 1, name: 'Fresh Milk (1L)', price: 2.50, taxRate: 5 },
    { id: 2, name: 'Cheese (500g)', price: 6.00, taxRate: 5 },
    { id: 3, name: 'Yogurt (500g)', price: 3.50, taxRate: 5 },
    { id: 4, name: 'Butter (250g)', price: 4.00, taxRate: 5 },
    { id: 5, name: 'Cream (250ml)', price: 3.00, taxRate: 5 },
    { id: 6, name: 'Farm Eggs (Dozen)', price: 4.50, taxRate: 0 },
    { id: 7, name: 'Organic Milk (1L)', price: 3.50, taxRate: 5 },
    { id: 8, name: 'Farm Delivery Fee', price: 5.00, taxRate: 0 }
  ];

  // Calculate invoice total
  const calculateTotal = (invoice) => {
    const subtotal = invoice.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalTax = invoice.items.reduce((sum, item) => sum + (item.price * item.quantity * item.taxRate / 100), 0);
    const discountAmount = (subtotal * invoice.discount) / 100;
    return (subtotal + totalTax - discountAmount).toFixed(2);
  };

  // Invoice Generation Handlers
  const handleAddItem = () => {
    if (!currentItem.productId) return;
    
    const selectedProduct = dairyProducts.find(p => p.id === currentItem.productId);
    const newItem = {
      ...currentItem,
      name: selectedProduct.name,
      total: currentItem.quantity * currentItem.price,
      taxAmount: (currentItem.quantity * currentItem.price * currentItem.taxRate) / 100
    };
    
    setCurrentInvoice({
      ...currentInvoice,
      items: [...currentInvoice.items, newItem]
    });
    
    setCurrentItem({
      productId: '',
      description: '',
      quantity: 1,
      price: 0,
      taxRate: 0
    });
  };

  const handleRemoveItem = (index) => {
    const newItems = [...currentInvoice.items];
    newItems.splice(index, 1);
    setCurrentInvoice({ ...currentInvoice, items: newItems });
  };

  const handleGenerateInvoice = () => {
    if (!currentInvoice.customerName || currentInvoice.items.length === 0) {
      alert('Please fill in customer name and add at least one item');
      return;
    }

    const total = calculateTotal(currentInvoice);
    const newInvoice = {
      ...currentInvoice,
      id: Date.now(),
      total,
      invoiceNumber: `DF-${new Date().getFullYear()}-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      paymentStatus: 'pending'
    };
    
    setInvoices([...invoices, newInvoice]);
    
    // Reset form
    setCurrentInvoice({
      orderId: '',
      customerName: '',
      date: new Date().toISOString().split('T')[0],
      dueDate: '',
      items: [],
      discount: 0,
      notes: '',
      paymentStatus: 'pending'
    });
    
    alert(`Invoice ${newInvoice.invoiceNumber} generated successfully!`);
  };

  // Payment Management Handlers
  const handleSelectInvoiceForPayment = (invoice) => {
    setPaymentDetails({
      ...paymentDetails,
      invoiceId: invoice.id,
      amount: invoice.total
    });
  };

  const handleProcessPayment = () => {
    if (!paymentDetails.invoiceId || !paymentDetails.amount) {
      alert('Please select an invoice and enter payment amount');
      return;
    }

    const updatedInvoices = invoices.map(inv => 
      inv.id === paymentDetails.invoiceId ? { ...inv, paymentStatus: 'paid' } : inv
    );
    
    setInvoices(updatedInvoices);
    
    // Reset form
    setPaymentDetails({
      invoiceId: '',
      method: 'cash',
      amount: 0,
      transactionId: '',
      date: new Date().toISOString().split('T')[0],
      notes: ''
    });
    
    alert('Payment recorded successfully!');
  };

  // Accounts Receivable Handlers
  const handleSendReminder = (invoice) => {
    if (!reminderMessage.trim()) {
      alert('Please enter a reminder message');
      return;
    }
    
    alert(`Reminder sent to ${invoice.customerName} for invoice ${invoice.invoiceNumber}`);
  };

  // Get overdue invoices
  const getOverdueInvoices = () => {
    const today = new Date();
    return invoices.filter(invoice => {
      if (invoice.paymentStatus === 'paid') return false;
      
      const dueDate = new Date(invoice.dueDate);
      return today > dueDate;
    });
  };

  return (
    <div className='invoicee'>
      <div className='invoice'>
        <div className="invoice-system">
          <header className="header">
            <h1>Dairy Farm Invoice System</h1>
            <div className="farm-info">
              <p>Green Pastures Dairy Farm</p>
              <p>123 Farm Road, Countryside</p>
              <p>Phone: (123) 456-7890 | Email: info@greenpastures.com</p>
            </div>
            <nav className="nav-tabs">
              <button 
                className={activeTab === 'invoice' ? 'active' : ''}
                onClick={() => setActiveTab('invoice')}
              >
                <i className="fas fa-file-invoice"></i> Create Invoice
              </button>
              <button 
                className={activeTab === 'payment' ? 'active' : ''}
                onClick={() => setActiveTab('payment')}
              >
                <i className="fas fa-money-bill-wave"></i> Record Payment
              </button>
              <button 
                className={activeTab === 'receivable' ? 'active' : ''}
                onClick={() => setActiveTab('receivable')}
              >
                <i className="fas fa-clock"></i> Receivables
              </button>
            </nav>
          </header>

          <main className="main-content">
            {activeTab === 'invoice' && (
              <div className="invoice-generation">
                <div className="invoice-form">
                  <div className="form-section">
                    <h3>Customer Information</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Customer Name *</label>
                        <input 
                          type="text" 
                          value={currentInvoice.customerName}
                          onChange={(e) => setCurrentInvoice({...currentInvoice, customerName: e.target.value})}
                          placeholder="Enter customer name"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label>Order/Reference ID</label>
                        <input 
                          type="text" 
                          value={currentInvoice.orderId}
                          onChange={(e) => setCurrentInvoice({...currentInvoice, orderId: e.target.value})}
                          placeholder="Optional order reference"
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label>Invoice Date</label>
                        <input 
                          type="date" 
                          value={currentInvoice.date}
                          onChange={(e) => setCurrentInvoice({...currentInvoice, date: e.target.value})}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label>Due Date *</label>
                        <input 
                          type="date" 
                          value={currentInvoice.dueDate}
                          onChange={(e) => setCurrentInvoice({...currentInvoice, dueDate: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-section">
                    <h3>Dairy Products</h3>
                    <div className="add-item-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>Product *</label>
                          <select 
                            value={currentItem.productId}
                            onChange={(e) => {
                              const productId = e.target.value;
                              const selectedProduct = dairyProducts.find(p => p.id === productId);
                              setCurrentItem({
                                ...currentItem,
                                productId,
                                price: selectedProduct ? selectedProduct.price : 0,
                                taxRate: selectedProduct ? selectedProduct.taxRate : 0,
                                description: selectedProduct ? selectedProduct.name : ''
                              });
                            }}
                            required
                          >
                            <option value="">Select Dairy Product</option>
                            {dairyProducts.map(product => (
                              <option key={product.id} value={product.id}>
                                {product.name} (${product.price.toFixed(2)})
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="form-group">
                          <label>Quantity *</label>
                          <input 
                            type="number" 
                            min="1" 
                            value={currentItem.quantity}
                            onChange={(e) => setCurrentItem({...currentItem, quantity: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="form-row">
                        <div className="form-group">
                          <label>Unit Price ($)</label>
                          <input 
                            type="number" 
                            min="0" 
                            step="0.01" 
                            value={currentItem.price}
                            onChange={(e) => setCurrentItem({...currentItem, price: e.target.value})}
                            disabled
                          />
                        </div>
                        
                        <div className="form-group">
                          <label>Tax Rate (%)</label>
                          <input 
                            type="number" 
                            min="0" 
                            step="0.1" 
                            value={currentItem.taxRate}
                            onChange={(e) => setCurrentItem({...currentItem, taxRate: e.target.value})}
                            disabled
                          />
                        </div>
                      </div>
                      
                      <button 
                        type="button" 
                        onClick={handleAddItem}
                        className="btn-add"
                        disabled={!currentItem.productId}
                      >
                        <i className="fas fa-plus"></i> Add Product
                      </button>
                    </div>
                    
                    {currentInvoice.items.length > 0 && (
                      <div className="items-list">
                        <table>
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Qty</th>
                              <th>Price</th>
                              <th>Tax</th>
                              <th>Total</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentInvoice.items.map((item, index) => (
                              <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{item.taxRate}%</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                  <button 
                                    type="button" 
                                    onClick={() => handleRemoveItem(index)}
                                    className="btn-remove"
                                  >
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                  
                  <div className="form-section">
                    <h3>Summary</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Discount (%)</label>
                        <input 
                          type="number" 
                          min="0" 
                          max="100" 
                          step="1" 
                          value={currentInvoice.discount}
                          onChange={(e) => setCurrentInvoice({...currentInvoice, discount: e.target.value})}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label>Total Amount</label>
                        <input 
                          type="text" 
                          value={`$${calculateTotal(currentInvoice)}`}
                          readOnly 
                          className="total-amount"
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label>Notes</label>
                      <textarea 
                        value={currentInvoice.notes}
                        onChange={(e) => setCurrentInvoice({...currentInvoice, notes: e.target.value})}
                        rows="3" 
                        placeholder="Delivery instructions or special notes..."
                      />
                    </div>
                    
                    <div className="form-actions">
                      <button 
                        type="button" 
                        onClick={handleGenerateInvoice}
                        className="btn-submit"
                        disabled={!currentInvoice.customerName || currentInvoice.items.length === 0}
                      >
                        <i className="fas fa-file-download"></i> Generate Invoice
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'payment' && (
              <div className="payment-management">
                <h2 className="section-title"><i className="fas fa-money-bill-wave"></i> Record Payment</h2>
                
                <div className="payment-container">
                  <div className="invoice-selection">
                    <h3>Unpaid Invoices</h3>
                    {invoices.filter(inv => inv.paymentStatus === 'pending').length === 0 ? (
                      <div className="no-pending">
                        <i className="fas fa-check-circle"></i>
                        <p>No unpaid invoices found.</p>
                      </div>
                    ) : (
                      <ul className="invoice-list">
                        {invoices
                          .filter(inv => inv.paymentStatus === 'pending')
                          .map(invoice => (
                            <li 
                              key={invoice.id} 
                              className={paymentDetails.invoiceId === invoice.id ? 'selected' : ''}
                              onClick={() => handleSelectInvoiceForPayment(invoice)}
                            >
                              <div className="invoice-info">
                                <span className="invoice-number">
                                  {invoice.invoiceNumber}
                                </span>
                                <span className="customer-name">
                                  {invoice.customerName}
                                </span>
                              </div>
                              <div className="invoice-details">
                                <span className="amount">
                                  ${parseFloat(invoice.total).toFixed(2)}
                                </span>
                                <span className="due-date">
                                  Due: {invoice.dueDate ? new Date(invoice.dueDate).toLocaleDateString() : 'N/A'}
                                </span>
                              </div>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                  
                  <div className="payment-form-section">
                    <h3>Payment Details</h3>
                    {paymentDetails.invoiceId ? (
                      <div className="payment-form">
                        <div className="form-group">
                          <label>Payment Method</label>
                          <select 
                            value={paymentDetails.method}
                            onChange={(e) => setPaymentDetails({...paymentDetails, method: e.target.value})}
                          >
                            <option value="cash">Cash</option>
                            <option value="check">Check</option>
                            <option value="bank_transfer">Bank Transfer</option>
                            <option value="credit_card">Credit Card</option>
                          </select>
                        </div>
                        
                        <div className="form-row">
                          <div className="form-group">
                            <label>Amount ($) *</label>
                            <input 
                              type="number" 
                              min="0" 
                              step="0.01" 
                              value={paymentDetails.amount}
                              onChange={(e) => setPaymentDetails({...paymentDetails, amount: e.target.value})}
                              required
                            />
                          </div>
                          
                          <div className="form-group">
                            <label>Payment Date</label>
                            <input 
                              type="date" 
                              value={paymentDetails.date}
                              onChange={(e) => setPaymentDetails({...paymentDetails, date: e.target.value})}
                            />
                          </div>
                        </div>
                        
                        <div className="form-group">
                          <label>Reference/Transaction ID</label>
                          <input 
                            type="text" 
                            value={paymentDetails.transactionId}
                            onChange={(e) => setPaymentDetails({...paymentDetails, transactionId: e.target.value})}
                            placeholder="Check # or transaction reference"
                          />
                        </div>
                        
                        <div className="form-group">
                          <label>Notes</label>
                          <textarea 
                            value={paymentDetails.notes}
                            onChange={(e) => setPaymentDetails({...paymentDetails, notes: e.target.value})}
                            rows="3" 
                            placeholder="Payment details or notes..."
                          />
                        </div>
                        
                        <div className="form-actions">
                          <button 
                            type="button" 
                            onClick={handleProcessPayment}
                            className="btn-process"
                          >
                            <i className="fas fa-check-circle"></i> Record Payment
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="select-invoice-prompt">
                        <i className="fas fa-hand-pointer"></i>
                        <p>Select an unpaid invoice from the list to record payment</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'receivable' && (
              <div className="accounts-receivable">
                <h2 className="section-title"><i className="fas fa-clock"></i> Accounts Receivable</h2>
                
                <div className="overdue-invoices">
                  <h3>Overdue Invoices</h3>
                  
                  {getOverdueInvoices().length === 0 ? (
                    <div className="no-overdue">
                      <i className="fas fa-check-circle"></i>
                      <p>No overdue invoices. Great job!</p>
                    </div>
                  ) : (
                    <div className="table-container">
                      <table className="invoice-table">
                        <thead>
                          <tr>
                            <th>Invoice #</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            <th>Days Overdue</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getOverdueInvoices().map(invoice => (
                            <tr key={invoice.id}>
                              <td>{invoice.invoiceNumber}</td>
                              <td>{invoice.customerName}</td>
                              <td>${invoice.total}</td>
                              <td>{invoice.dueDate ? new Date(invoice.dueDate).toLocaleDateString() : 'N/A'}</td>
                              <td>
                                {invoice.dueDate ? 
                                  Math.floor((new Date() - new Date(invoice.dueDate)) / (1000 * 60 * 60 * 24)) : 
                                  'N/A'}
                              </td>
                              <td>
                                <div className="reminder-actions">
                                  <textarea
                                    value={reminderMessage}
                                    onChange={(e) => setReminderMessage(e.target.value)}
                                    placeholder="Reminder message..."
                                    rows="2"
                                  />
                                  <button 
                                    onClick={() => handleSendReminder(invoice)}
                                    className="btn-remind"
                                  >
                                    <i className="fas fa-envelope"></i> Send Reminder
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
                
                <div className="pending-invoices">
                  <h3>Pending Invoices</h3>
                  
                  {invoices.filter(inv => inv.paymentStatus === 'pending' && 
                    (!inv.dueDate || new Date(inv.dueDate) >= new Date())).length === 0 ? (
                    <div className="no-pending">
                      <i className="fas fa-check-circle"></i>
                      <p>No pending invoices at this time.</p>
                    </div>
                  ) : (
                    <div className="table-container">
                      <table className="invoice-table">
                        <thead>
                          <tr>
                            <th>Invoice #</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoices
                            .filter(inv => inv.paymentStatus === 'pending' && 
                              (!inv.dueDate || new Date(inv.dueDate) >= new Date()))
                            .map(invoice => (
                              <tr key={invoice.id}>
                                <td>{invoice.invoiceNumber}</td>
                                <td>{invoice.customerName}</td>
                                <td>${invoice.total}</td>
                                <td>{invoice.dueDate ? new Date(invoice.dueDate).toLocaleDateString() : 'On delivery'}</td>
                                <td>
                                  <span className="badge badge-pending">Pending</span>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </main>
          
          <footer className="footer">
            <p>Green Pastures Dairy Farm &copy; {new Date().getFullYear()}</p>
            <p>Farm Management System v1.0</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default InvoiceSystem;