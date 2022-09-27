import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@arco-themes/react-dragon/css/arco.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
