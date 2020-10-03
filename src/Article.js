import React from "react";
import './index.css';

class ComponentBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: this.props.DataSource.getBlogPost(1)
    };
  }

  componentDidMount() {
    this.props.DataSource.addChangeListener('dataSource', this.handleChange);
  }

  componentWillUnmount() {
    this.props.DataSource.removeChangeListener('dataSource');
  }

  handleChange() {
    this.setState({
      blogPost: this.props.DataSource.getBlogPost(1)
    });
  }

  render() {
    return (
      <div className="part">
        <h2>Article</h2>

        <div>
          {this.state.blogPost.info}
        </div>
      </div>
    );
  }
}

export default ComponentBusiness;
