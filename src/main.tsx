import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/css/app.css';
import './styles/css/redwood.css'; // using redwood to copy oracle styles and apply bustom margins and padding

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
