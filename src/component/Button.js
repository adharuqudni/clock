import React, { Component } from "react";
import Menu from "./Menu";

class Btn extends Component {
  state = {
    isToogle: false,
    buttonClass: "button",
    btnClass: "btn",
  };
  toogleSwitch = () => {
    this.setState({
      isToogle: !this.state.isToogle,
      buttonClass: this.state.isToogle ? "button" : "buttonToogle",
      btnClass: this.state.isToogle ? "btn" : "btnToogle",
    });
  };
  render() {
    let modal;
    if (this.state.isToogle) {
      modal = <Menu />;
    }
    return (
      <div className="sider">
        <div className={this.state.buttonClass} onClick={this.toogleSwitch}>
          <span className={this.state.btnClass}> </span>
          <span className={this.state.btnClass}> </span>
          <span className={this.state.btnClass}> </span>
          <span className={this.state.btnClass}> </span>
        </div>
        {modal}
      </div>
    );
  }
}
export default Btn;
