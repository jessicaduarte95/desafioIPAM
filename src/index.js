import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './Store/store';
import { Provider } from 'react-redux';
import { Principal } from './Page/Principal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Principal/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
