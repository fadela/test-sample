import React, { Component } from "react";
import Menu from "./../../components/menu/menu";
import Background from "./../../components/commons/background/background";
import BlueCircle from "../../components/commons/blueCircle/blueCircle";
import "./contact.scss";

class Contact extends Component {
  state = {
    circleClass: ""
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          circleClass: "hide-circle"
        }),
      50
    );
    setTimeout(
      () =>
        this.setState({
          circleClass: "heart"
        }),
      1000
    );

    setTimeout(
      () =>
        this.setState({
          circleClass: " heart transform"
        }),
      2000
    );
  }

  render() {
    return (
      <React.Fragment>
        <Background>
          <Menu />
          <BlueCircle className={this.state.circleClass} />
          {/* <div className="heart"></div> */}
        </Background>
      </React.Fragment>
    );
  }
}

export default Contact;
