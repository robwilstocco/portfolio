import './styles/reset.css';
import './styles/global.css';
import './styles/animations.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout/Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);