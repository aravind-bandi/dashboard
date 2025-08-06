import React from 'react';

const SupportHeader = () => {
  return (
    <div className="support-header">
      <h1>Help & Support</h1>
      <p>We're here to help you with any questions or issues</p>
      <div className="search-bar">
        <input type="text" placeholder="Search help articles..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SupportHeader;