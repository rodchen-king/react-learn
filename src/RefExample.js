import React from "react";
import "./index.css";

//子组件
class Child extends React.Component {
  handleFocusInput() {
    this.refs.input.focus();
  }

  render() {
    return <input ref='input' />;
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
