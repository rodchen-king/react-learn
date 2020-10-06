import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycle from './LifeCycle';

ReactDOM.render(
  <React.StrictMode>
    <LifeCycle age={12} />
  </React.StrictMode>,
  document.getElementById('root')
);
