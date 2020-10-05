import React from 'react'

// 此函数接收一个组件...
function WithSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  class WithSubscription extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(this.props.DataSource, props)
      };
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      this.props.DataSource.addChangeListener(this.props.name, this.handleChange);
    }

    componentWillUnmount() {
      this.props.DataSource.removeChangeListener(this.props.name);
    }

    handleChange() {
      this.setState({
        data: selectData(this.props.DataSource, this.props)
      });
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent ref={this.props.forwardedRef} data={this.state.data} {...this.props} />;
    }
  };
  debugger
  return React.forwardRef((props, ref) => {
    return <WithSubscription {...props} forwardedRef={ref} />;
  });
}

export default WithSubscription;