import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
