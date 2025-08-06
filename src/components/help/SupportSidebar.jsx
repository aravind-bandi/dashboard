import React from 'react';

const SupportSidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'chat', label: 'Live Chat' },
    { id: 'track', label: 'Track Order' },
    { id: 'return', label: 'Returns & Refunds' },
    { id: 'payment', label: 'Payment Issues' },
    { id: 'account', label: 'Account Help' },
    { id: 'delivery', label: 'Delivery Info' },
  ];

  return (
    <div className="support-sidebar">
      <ul>
        {menuItems.map(item => (
          <li 
            key={item.id}
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => setActiveSection(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupportSidebar;