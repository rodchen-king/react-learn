import React from "react";
import PropTypes from "prop-types";
import "./index.css";

class PropTypeComponent extends React.Component {
  render() {
    return (
      <div className="part">
        <h2>PropTypeComponent</h2>
      </div>
    );
  }
}

PropTypeComponent.propTypes = {
  propKey: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number.isRequired
  }),
  propName: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number.isRequired
  })
};

export default PropTypeComponent;
