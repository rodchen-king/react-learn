import React from "react";
import "./index.css";

//子组件
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleFocusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return <input ref={this.inputRef} />;
  }
}

//父组件
class RefExample extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.myRef.current.handleFocusInput();
  }
  render() {
    return <Child ref={this.myRef} />;
  }
}

export default RefExample;
