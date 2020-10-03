import React from "react";
import './index.css';

class ComponentBusiness extends React.Component {
  render() {
    return (
      <div className="part">
        <h2>Article</h2>

        <div>
          {this.props.data.info}
        </div>
      </div>
    );
  }
}

export default ComponentBusiness;
