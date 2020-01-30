import React, { Component } from "react";
import Background from "./../../components/commons/background/background";
import Socials from "../../components/socials/socials";
import Menu from "./../../components/menu/menu";
import BlueCircle from "../../components/commons/blueCircle/blueCircle";
import "./AboutMe.scss";
import Name from "../../components/commons/name/name";

class AboutMe extends Component {
  state = {
    circleClass: "",
    nameClass: ""
  };

  componentWillMount() {
    setTimeout(
      () =>
        this.setState({
          circleClass: "anim-circle-class",
          nameClass: "anim-name-class"
        }),
      100
    );
  }

  // componentWillUnmount() {
  //   this.setState({
  //     circleClass: "",
  //     nameClass: ""
  //   });
  // }

  render() {
    return (
      <React.Fragment>
        <Background>
          <Menu />
          <Name className={this.state.nameClass} />
          <BlueCircle className={this.state.circleClass} />
          <Socials />
        </Background>
      </React.Fragment>
    );
  }
}

export default AboutMe;
