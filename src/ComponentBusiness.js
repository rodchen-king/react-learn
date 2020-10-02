import React from "react";

const ThemeContext = React.createContext({ theme: "初始值", theme1: "初始值1" });

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
          <ThemeContext.Provider value={theme}>
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
          </ThemeContext.Provider>
          <span>
            <ThemeContext.Consumer>{(_value) => <button>{_value.theme}</button>}</ThemeContext.Consumer>
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
  static contextType = ThemeContext;
  render() {
    console.log(this.context)
    return <ThemeContext.Consumer>{(_value) => <button>{_value.theme}</button>}</ThemeContext.Consumer>;
  }
}

export default ComponentBusiness;
