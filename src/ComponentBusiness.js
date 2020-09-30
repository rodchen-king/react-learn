import React from 'react';
import PropTypes from 'prop-types';

class ComponentBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'class组件'
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {title}
          </p>
        </header>
      </div>
    );
  }
}

ComponentBusiness.propTypes = {
  propersValue: PropTypes.string
}

export default ComponentBusiness;
