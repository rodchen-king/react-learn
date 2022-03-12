/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2020-12-02 18:33:34
 * @LastEditTime: 2021-10-15 17:26:25
 * @LastEditors: rodchen
 */
// Toggle.js
import React, { useState } from "react";

export const Toggle = props => {
  debugger
  const [on, setOn] = useState(false);
  const toggle = () => setOn(prev => !prev);
  const {Render} = props
  return (
    <div>
      {Render({
        on,
        toggle
      })}
    </div>
  );
};


const Child = ({ on, toggle }) => (
  <>
    {on && <nav>Nav</nav>}
    <button onClick={toggle}>click me</button>
  </>
)

class MouseTracker extends React.Component {
  
  render() {
    debugger
    
    return (
      <div>
        <Toggle
          Render={Child}
        />
      </div>
    );
  }
}

export default MouseTracker;
