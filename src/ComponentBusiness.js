import React from 'react';
import PropTypes from 'prop-types';

class ComponentBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'class组件',
      count: 0
    }
  }

  handleIncrement = (arg1, arg2, e) => {
    debugger
    console.log('child click')
    e.stopPropagation()
    e.preventDefault()
  }

  handleParentClick (e) {
    console.log('parent click')
  }

  render() {
    const { title } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {title}
          </p>
          <p onClick={(e) => this.handleParentClick(e)}>
            <a href="www.baidu.com" onClick={this.handleIncrement.bind(this, 1, 2)}>点击</a>
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
