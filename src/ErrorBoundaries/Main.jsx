import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    return <div>
      {this.state.form()}
    </div>; 
  }
}

export default ErrorBoundary;