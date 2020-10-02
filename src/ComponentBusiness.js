import React from "react";

const { Provider, Consumer } = React.createContext({ theme: "初始值", theme1: "初始值1" });

class ComponentBusiness extends React.Component {
  state = {
    theme: {
      theme: "dark",
    },
    theme1: {
      theme: "dark",
    },
  };
  render() {
    const { theme, theme1 } = this.state;

    return (
      <div>
        <div>
          <Provider value={theme}>
            <button
              onClick={() => {
                this.setState((preState) => {
                  return { theme: { theme: preState.theme.theme + "--" } };
                });
              }}
            >
              更新context
            </button>
            <Toolbar />
          </Provider>
          <span>
            <Consumer>{(_value) => <button>{_value.theme}</button>}</Consumer>
          </span>
        </div>


        <div>
          <Provider value={theme1}>
            <button
              onClick={() => {
                this.setState((preState) => {
                  return { theme1: { theme: preState.theme1.theme + "--" } };
                });
              }}
            >
              更新context1
            </button>
            <Toolbar />
          </Provider>
          <span>
            <Consumer>{(_value) => <button>{_value.theme1}</button>}</Consumer>
          </span>
        </div>
      </div>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Consumer>{(_value) => <button>{_value.theme}</button>}</Consumer>;
  }
}

function Toolbar1(props) {
  return (
    <div>
      <ThemedButton1 />
    </div>
  );
}

class ThemedButton1 extends React.Component {
  render() {
    return <Consumer>{(_value) => <button>{_value.theme}</button>}</Consumer>;
  }
}

export default ComponentBusiness;
