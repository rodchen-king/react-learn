import React from 'react';
import ReactDOM from 'react-dom';
import PropTypeComponent from './PropTypeComponent';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <PropTypeComponent 
        propName={{
          name: 234,
          quantity: '123',
          age: 12
        }}
        propKey={{
          name: 234,
          quantity: '123',
          age: 12
        }} 
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
