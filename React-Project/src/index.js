import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './component/App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
