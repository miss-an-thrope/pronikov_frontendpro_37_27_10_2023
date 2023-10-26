// React tools
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './components/App';

// styles
import './assets/scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);