// Toggle.js
import React, { useState } from "react";

export const Toggle = props => {
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
