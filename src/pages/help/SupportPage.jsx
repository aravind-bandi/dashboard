import React, { useState } from 'react';
import SupportHeader from '../../components/help/SupportHeader';
import SupportSidebar from '../../components/help/SupportSidebar';
import FAQSection from '../../components/help/FAQSection';
import ContactForm from '../../components/help/ContactForm';
import LiveChat from '../../components/help/LiveChat';
import OrderTracking from '../../components/help/OrderTracking';
import ReturnRefund from '../../components/help/ReturnRefund';
import './SupportPage.css';

const SupportPage = () => {
  const [activeSection, setActiveSection] = useState('faq');
  
  const renderSection = () => {
    switch(activeSection) {
      case 'faq':
        return <FAQSection />;
      case 'contact':
        return <ContactForm />;
      case 'chat':
        return <LiveChat />;
      case 'track':
        return <OrderTracking />;
      case 'return':
        return <ReturnRefund />;
      default:
        return <FAQSection />;
    }
  };

  return (
    <div className="support-page">
      <SupportHeader />
      <div className="support-container">
        <SupportSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <div className="support-content">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;