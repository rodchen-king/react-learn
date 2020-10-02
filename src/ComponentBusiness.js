import React from 'react';

class ComponentBusiness extends React.Component {
  state ={
    theme: 'dark'
  }
  render() {
    const { theme } = this.state;

    return <Toolbar theme={theme} />;
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <button>{this.props.theme}</button>;
  }
}

export default ComponentBusiness;
