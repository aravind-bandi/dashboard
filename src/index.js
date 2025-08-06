import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' to use createRoot
import App from './App';
// import "bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));  // Correctly call createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
