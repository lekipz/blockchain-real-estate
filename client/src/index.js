import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import DrizzleProvider from './drizzle';
import { BrowserRouter } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

ReactDOM.render(
  <React.StrictMode>
    <DrizzleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DrizzleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
