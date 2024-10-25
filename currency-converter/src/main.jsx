// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot from react-dom/client
import App from './App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);