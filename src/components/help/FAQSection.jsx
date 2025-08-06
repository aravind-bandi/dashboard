import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by clicking on the 'Track Order' section and entering your order ID and registered email/mobile number."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Some products may have different policies which will be mentioned on the product page."
    },
    {
      question: "How can I change my delivery address?",
      answer: "You can change your delivery address before the order is shipped by contacting our customer support team."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, net banking, UPI, and popular digital wallets."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us through the Contact Us form, live chat, or by calling our customer support number available 24/7."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;