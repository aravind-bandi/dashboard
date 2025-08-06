import React, { useState, useEffect, useRef } from 'react';

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hi there! How can I assist you today?";
    } else if (lowerCaseMessage.includes('order') || lowerCaseMessage.includes('purchase')) {
      return "For order inquiries, please provide your order number and I'll check the status for you.";
    } else if (lowerCaseMessage.includes('return') || lowerCaseMessage.includes('refund')) {
      return "Our return policy allows returns within 30 days of purchase. Would you like me to start the return process for you?";
    } else if (lowerCaseMessage.includes('delivery') || lowerCaseMessage.includes('shipping')) {
      return "Standard delivery takes 3-5 business days. We also offer express shipping for an additional fee.";
    } else if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost')) {
      return "Pricing varies by product. Could you specify which item you're inquiring about?";
    } else if (lowerCaseMessage.includes('thank') || lowerCaseMessage.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('phone')) {
      return "You can reach our customer service at 1-800-123-4567 or email support@example.com.";
    } else if (lowerCaseMessage.includes('hours') || lowerCaseMessage.includes('open')) {
      return "Our support team is available 24/7 through this chat. Our physical stores are open from 9AM to 9PM daily.";
    } else {
      return "Thanks for your message. Our support team will get back to you shortly with more specific information.";
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: newMessage }]);
    setNewMessage('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = getBotResponse(newMessage);
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="live-chat">
      <h2>Live Chat Support</h2>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.sender}`}
            >
              {message.text}
            </div>
          ))}
          {isTyping && (
            <div className="message bot typing">
              <span className="typing-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <div className="chat-info">
        <p>Our average response time is under 2 minutes</p>
        <p>Chat hours: 24/7</p>
      </div>
    </div>
  );
};

export default LiveChat;