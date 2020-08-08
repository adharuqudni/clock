import React, { Component } from "react";
import "./App.css";
import Clock from "./component/Clock";
import Button from "./component/Button";
import { Switch } from "antd";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  state = {
    toogleButton: true,
  };
  toogleSwitch = () => {
    this.setState({
      toogleButton: !this.state.toogleButton,
    });
  };
  render() {
    return (
      <div className="App">
        <Button />
        <div className="toogleButton">
          <Switch onClick={this.toogleSwitch} className="toogleSwitch" />
          <h4 className="ampm">light or dark</h4>
        </div>
        <CSSTransition
          in={this.state.toogleButton}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Clock className="Time" />
        </CSSTransition>
      </div>
    );
  }
}
export default App;
