import React from "react";
import './index.css';

class ComponentBusiness extends React.Component {

  render() {
    return (
      <div className="part">
        <h2>Comment</h2>
        <div>
          <ul>
            {this.props.data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ComponentBusiness;
