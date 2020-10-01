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
    <ComponentBusiness 
      left={
        <span>left</span>
      }
      right={
        <span>right</span>
      } />
    </div>
  );
}

export default App;
