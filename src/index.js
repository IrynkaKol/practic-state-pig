import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from 'components/App';
import { App } from './components/exemple-1/App';
import { App2 } from './components/exemple-2/App2';
import { App3 } from './components/exemple-3/App3';
import { GlobalStyle } from 'components/GlobalStyle';
//import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
    <GlobalStyle />
  </React.StrictMode>
);
