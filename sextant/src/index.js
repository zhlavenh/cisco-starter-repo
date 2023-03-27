// This is where on webpage to display components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Banner, Exhibit} from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <Exhibit />
    <App />
  </React.StrictMode>
);


