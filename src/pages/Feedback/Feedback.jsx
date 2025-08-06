import React, { useState } from 'react';
import './feedbackk.css';

const Feedback = () => {
  // Sample feedback data
  const [feedbackList, setFeedbackList] = useState([
    { id: 1, customer: 'Rajesh', rating: 4, comment: 'Great service but delivery was late', date: '2023-06-15', status: 'processed', category: 'delivery' },
    { id: 2, customer: 'Swathi', rating: 5, comment: 'Excellent product quality!', date: '2023-06-16', status: 'new', category: 'product' },
    { id: 3, customer: 'Mahesh', rating: 2, comment: 'Product damaged on arrival', date: '2023-06-17', status: 'in-progress', category: 'damage' },
    { id: 4, customer: 'Priya', rating: 3, comment: 'Average experience, could improve packaging', date: '2023-06-18', status: 'new', category: 'packaging' },
    { id: 5, customer: 'Srinivas', rating: 4, comment: 'Good customer support experience', date: '2023-06-19', status: 'processed', category: 'service' },
    { id: 6, customer: 'Lakshmi', rating: 1, comment: 'Wrong item received', date: '2023-06-20', status: 'in-progress', category: 'delivery' }
  ]);

  // Sample complaints data
  const [complaintsList, setComplaintsList] = useState([
    { id: 1, customer: 'Suman', issue: 'Wrong item received', date: '2023-06-14', status: 'resolved', priority: 'medium', resolution: 'Sent correct item with discount coupon' },
    { id: 2, customer: 'Geetha', issue: 'Missing parts in package', date: '2023-06-16', status: 'in-progress', priority: 'high', resolution: 'Parts shipped separately' },
    { id: 3, customer: 'Vijay', issue: 'Product not working', date: '2023-06-17', status: 'pending', priority: 'critical', resolution: '' },
    { id: 4, customer: 'Krishna', issue: 'Billing discrepancy', date: '2023-06-18', status: 'new', priority: 'low', resolution: '' },
    { id: 5, customer: 'Ananya', issue: 'Late delivery', date: '2023-06-19', status: 'resolved', priority: 'medium', resolution: 'Provided discount for next purchase' },
    { id: 6, customer: 'Ramesh', issue: 'Damaged packaging', date: '2023-06-20', status: 'in-progress', priority: 'high', resolution: 'Replacement being processed' }
  ]);

  // Statistics data
  const [stats, setStats] = useState({
    avgRating: 3.5,
    feedbackCount: 24,
    resolvedComplaints: 18,
    pendingComplaints: 6,
    satisfactionTrend: 'up'
  });

  // Filter states
  const [feedbackFilter, setFeedbackFilter] = useState('all');
  const [complaintsFilter, setComplaintsFilter] = useState('all');

  // Filtered lists
  const filteredFeedback = feedbackFilter === 'all' 
    ? feedbackList 
    : feedbackList.filter(fb => fb.status === feedbackFilter);

  const filteredComplaints = complaintsFilter === 'all' 
    ? complaintsList 
    : complaintsList.filter(c => c.status === complaintsFilter);

  // Update complaint status
  const updateComplaintStatus = (id, newStatus) => {
    setComplaintsList(complaintsList.map(c => 
      c.id === id ? { ...c, status: newStatus } : c
    ));
  };

  // Update feedback status
  const updateFeedbackStatus = (id, newStatus) => {
    setFeedbackList(feedbackList.map(fb => 
      fb.id === id ? { ...fb, status: newStatus } : fb
    ));
  };

  return (
    <div className="feedback-dashboard">
      <header className="feedback-header">
        <h1>Customer Feedback & Complaint Management</h1>
      </header>

      {/* Stats Cards Section */}
      <div className="feedback-isolated-stats">
        <div className="feedback-isolated-stat rating-stat">
          <span className="feedback-isolated-stat-value">{stats.avgRating}</span>
          <span className="feedback-isolated-stat-label">Avg Rating</span>
        </div>
        <div className="feedback-isolated-stat feedback-stat">
          <span className="feedback-isolated-stat-value">{stats.feedbackCount}</span>
          <span className="feedback-isolated-stat-label">Feedback</span>
        </div>
        <div className="feedback-isolated-stat resolved-stat">
          <span className="feedback-isolated-stat-value">{stats.resolvedComplaints}</span>
          <span className="feedback-isolated-stat-label">Resolved</span>
        </div>
        <div className="feedback-isolated-stat pending-stat">
          <span className="feedback-isolated-stat-value">{stats.pendingComplaints}</span>
          <span className="feedback-isolated-stat-label">Pending</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="feedback-isolated-main">
        <section className="feedback-section">
          <div className="feedback-section-header">
            <h2>Customer Feedback</h2>
            <div className="feedback-filter-controls">
              <span>Filter:</span>
              <select 
                value={feedbackFilter} 
                onChange={(e) => setFeedbackFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="in-progress">In Progress</option>
                <option value="processed">Processed</option>
              </select>
            </div>
          </div>
          
          <div className="feedback-cards-container">
            {filteredFeedback.length === 0 ? (
              <div className="feedback-no-items">No feedback matching the filter</div>
            ) : (
              filteredFeedback.map(feedback => (
                <div key={feedback.id} className={`feedback-card ${feedback.status}`}>
                  <div className="feedback-card-header">
                    <span className="feedback-customer">{feedback.customer}</span>
                    <span className="feedback-date">{feedback.date}</span>
                    <span className={`feedback-status-badge ${feedback.status}`}>
                      {feedback.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="feedback-rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`feedback-star ${i < feedback.rating ? 'filled' : ''}`}>★</span>
                    ))}
                  </div>
                  <div className="feedback-comment">
                    {feedback.comment}
                  </div>
                  <div className="feedback-card-footer">
                    <span className={`feedback-category ${feedback.category}`}>
                      {feedback.category}
                    </span>
                    <div className="feedback-action-buttons">
                      <select 
                        value={feedback.status}
                        onChange={(e) => updateFeedbackStatus(feedback.id, e.target.value)}
                        className="feedback-status-select"
                      >
                        <option value="new">New</option>
                        <option value="in-progress">In Progress</option>
                        <option value="processed">Processed</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="complaints-section">
          <div className="feedback-section-header">
            <h2>Complaint Tracking</h2>
            <div className="feedback-filter-controls">
              <span>Filter:</span>
              <select 
                value={complaintsFilter} 
                onChange={(e) => setComplaintsFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>
          
          <div className="feedback-cards-container">
            {filteredComplaints.length === 0 ? (
              <div className="feedback-no-items">No complaints matching the filter</div>
            ) : (
              filteredComplaints.map(complaint => (
                <div key={complaint.id} className={`feedback-complaint-card ${complaint.status} priority-${complaint.priority}`}>
                  <div className="feedback-complaint-header">
                    <span className="feedback-customer">{complaint.customer}</span>
                    <span className="feedback-date">{complaint.date}</span>
                    <span className={`feedback-status-badge ${complaint.status}`}>
                      {complaint.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="feedback-complaint-issue">
                    <strong>Issue:</strong> {complaint.issue}
                  </div>
                  {complaint.resolution && (
                    <div className="feedback-complaint-resolution">
                      <strong>Resolution:</strong> {complaint.resolution}
                    </div>
                  )}
                  <div className="feedback-complaint-footer">
                    <span className={`feedback-priority ${complaint.priority}`}>
                      {complaint.priority}
                    </span>
                    <div className="feedback-action-buttons">
                      <select 
                        value={complaint.status}
                        onChange={(e) => updateComplaintStatus(complaint.id, e.target.value)}
                        className="feedback-status-select"
                      >
                        <option value="new">New</option>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </div>
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

export default Feedback;