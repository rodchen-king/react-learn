import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ComponentBusiness from './ComponentBusiness';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ComponentBusiness propsValue="123"  />
  </React.StrictMode>,
  document.getElementById('root')
);
