import React from "react";
import './index.css';

class DataSource extends React.Component {
  state = {
    info: this.props.DataSource.getBlogPost(1).info,
    comment: ""
  };

  addComment = () => {
    this.props.DataSource.addComment(this.state.comment)
    this.setState({
      comment: ''
    })
  }

  updateBlog = () => {
    this.props.DataSource.updateBlog(1, this.state.info)
  }

  render() {
    return (
      <div className="part">
        <h2>DataSource</h2>
        <div>
          <h3>添加comment</h3>
          <input value={this.state.comment} onChange={(event) => {this.setState({comment: event.target.value})}}></input><button onClick={this.addComment}>添加</button>
        </div>
        <div>
          <h3>更新blog</h3>
          <input value={this.state.info} onChange={(event) => {this.setState({info: event.target.value})}}></input><button onClick={this.updateBlog}>更新</button>
        </div>
      </div>
    );
  }
}

export default DataSource;
