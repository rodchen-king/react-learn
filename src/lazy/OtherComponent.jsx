import React from 'react';

class OtherComponent extends React.Component {
  componentDidMount() {
    console.log('compontDidMount')
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  render() {
    return (
      <div>
        OtherComponent
      </div>
    );
  }
}

export default OtherComponent;