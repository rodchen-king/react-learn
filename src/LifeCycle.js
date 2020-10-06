/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: Math.random() * 100,
    };
    this.childRef = React.createRef();
    console.log('parent constructor')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("parent getDerivedStateFromProps");

    if (nextProps.isUpdate) {
      return { str: "getDerivedStateFromProps update state" };
    }

    return null;
  }

  // componentWillReceiveProps(nextProps, prevState) {
  //   debugger
  //     console.log("componentWillReceiveProps()");
  // }

  componentDidMount() {
    console.log("parent componentDidMount");
    // this.setState({
    //   str: "str",
    // });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("parent shouldComponentUpdate");
    return true; // 记得要返回true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("parent getSnapshotBeforeUpdate");
    return {
      name: "componentWillUpdate",
    };
  }

  // componentWillUpdate(prevProps, prevState) {
  //   console.log("componentWillUpdate");
  //   return {
  //     name: 'componentWillUpdate'
  //   }
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }

  propsChange() {
    console.info("更新父组件state");
    this.setState({
      num: Math.random() * 100,
    });
  }

  setLifeCycleState() {
    console.info("更新子组件state");
    this.childRef.current.setTheState();
  }

  forceLifeCycleUpdate() {
    console.info("强制更新子组件");
    this.childRef.current.forceItUpdate();
  }

  parentForceUpdate() {
    console.info("强制更新父组件");
    this.forceUpdate();
  }

  render() {
    console.log("parent render")

    return (
      <div>
        <button
          className="weui_btn weui_btn_primary"
          onClick={this.propsChange.bind(this)}
        >
          更新父组件state
        </button>
        <br />
        <button
          className="weui_btn weui_btn_primary"
          onClick={this.setLifeCycleState.bind(this)}
        >
          更新子组件state
        </button>
        <br />
        <button
          className="weui_btn weui_btn_primary"
          onClick={this.forceLifeCycleUpdate.bind(this)}
        >
          forceUpdate 子组件
        </button>
        <br />
        <button
          className="weui_btn weui_btn_primary"
          onClick={this.parentForceUpdate.bind(this)}
        >
          forceUpdate 父组件
        </button>
        <Message ref={this.childRef} num={this.state.num}></Message>
      </div>
    );
  }
}

class Message extends Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
    this.state = { str: "hello", name: "rodchen" };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("child getDerivedStateFromProps");

    if (nextProps.isUpdate) {
      return { str: "getDerivedStateFromProps update state" };
    }

    return null;
  }

  // componentWillReceiveProps(nextProps, prevState) {
  //   debugger
  //     console.log("componentWillReceiveProps()");
  // }

  componentDidMount() {
    console.log("child componentDidMount");
    // this.setState({
    //   str: "str",
    // });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate");
    return true; // 记得要返回true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("child getSnapshotBeforeUpdate");
    return {
      name: "componentWillUpdate",
    };
  }

  // componentWillUpdate(prevProps, prevState) {
  //   console.log("componentWillUpdate");
  //   return {
  //     name: 'componentWillUpdate'
  //   }
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

  setTheState() {
    let s = "hello";
    if (this.state.str === s) {
      s = "HELLO";
    }
    this.setState({
      str: s,
    });
  }

  forceItUpdate() {
    this.forceUpdate();
  }

  render() {
    console.log("child render");
    return (
      <div>
        <span>
          Props:<h2>{this.props.num}</h2>
        </span>
        <br />
        <span>
          State:<h2>{this.state.str}</h2>
        </span>
      </div>
    );
  }
}

export default LifeCycle;
