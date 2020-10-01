import React from 'react';
import PropTypes from 'prop-types';

class ComponentBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
  }


  render() {

    return (
      <div className="App">
        {this.props.left}
        {this.props.right}

      </div>
    );
  }
}

ComponentBusiness.propTypes = {
  propersValue: PropTypes.string
}

export default ComponentBusiness;
