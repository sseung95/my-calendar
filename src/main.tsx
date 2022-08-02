import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { global } from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={global} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
