import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wheel from './wheel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Wheel />
  </React.StrictMode>
);

