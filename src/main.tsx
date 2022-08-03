import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { global } from './styles/global';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Global styles={global} />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
