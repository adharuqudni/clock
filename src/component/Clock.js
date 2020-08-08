import React, { Component } from "react";
import Clock from "react-live-clock";
// import moment from "moment";

class Time extends Component {
  state = {};
  render() {
    return (
      <div className="Time">
        <Clock
          className="widget"
          format="hh:mm:ss"
          ticking={true}
          timezone={"Asia/Jakarta"}
        />
      </div>
    );
  }
}
export default Time;
