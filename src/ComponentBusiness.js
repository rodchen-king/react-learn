import React from 'react';
import PropTypes from 'prop-types';

class ComponentBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'class组件',
      count: 0,
      numbers : [1, 2, 3, 4, 5]
    }
  }

  handleAddNewItemClick = (e) => {
    this.setState((preState) => {
      return {
        numbers: [preState.numbers.length + 1].concat(preState.numbers)
      }
    })
  }

  handleDelteteItemClick = (deleteItem) => {
    debugger
    this.setState((preState) => {
      return {
        numbers: preState.numbers.filter(item => item !== deleteItem)
      }
    })
  }

  handleReverseClick = () => {
    this.setState((preState) => {
      return {
        numbers: [...preState.numbers].reverse()
      }
    })
  }

  render() {
    const { title, numbers } = this.state;
    const listItems = numbers.map((number, index) =>
      <li key={index.toString()}> <span>{number}</span><input /><button onClick={() => {this.handleDelteteItemClick(number)}}>delete</button></li>
    );
    return (
      <div className="App">
        <div className="App-header">
          <p>
            {title}
          </p>
          <ul>{listItems}</ul>
        </div>
        <div>
          <button onClick={this.handleAddNewItemClick}>
            头部添加一个item
          </button>
          <button onClick={this.handleReverseClick}>
            反序数组
          </button>
        </div>
      </div>
    );
  }
}

ComponentBusiness.propTypes = {
  propersValue: PropTypes.string
}

export default ComponentBusiness;
