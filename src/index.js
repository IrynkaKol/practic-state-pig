import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from 'components/App';
import { App } from './components/exemple-1/App';
import { GlobalStyle } from 'components/GlobalStyle';
//import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);