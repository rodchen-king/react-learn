import React from 'react';
import ComponentBusiness from './ComponentBusiness'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          函数组件
        </p>
      </header>
    <ComponentBusiness>
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </ComponentBusiness>
    </div>
  );
}

export default App;
