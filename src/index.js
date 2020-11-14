import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './lazy';

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
