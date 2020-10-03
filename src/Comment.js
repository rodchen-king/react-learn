import React from "react";
import './index.css';

class ComponentBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // 假设 "DataSource" 是个全局范围内的数据源变量
      comments: this.props.DataSource.getComments()
    };
  }

  componentDidMount() {
    // 订阅更改
    this.props.DataSource.addChangeListener('comment', this.handleChange);
  }

  componentWillUnmount() {
    // 清除订阅
    this.props.DataSource.removeChangeListener('comment');
  }

  handleChange() {
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: this.props.DataSource.getComments()
    });
  }

  render() {
    return (
      <div className="part">
        <h2>Comment</h2>
        <div>
          <ul>
            {this.state.comments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ComponentBusiness;
