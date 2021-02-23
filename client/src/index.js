import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import DrizzleProvider from './drizzle';

ReactDOM.render(
  <React.StrictMode>
    <DrizzleProvider>
      <App />
    </DrizzleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
