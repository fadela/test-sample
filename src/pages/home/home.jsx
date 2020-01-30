import React, { Component } from "react";
import BlueCircle from "../../components/commons/blueCircle/blueCircle";
import "./home.scss";
import Menu from "../../components/menu/menu";
import Background from "../../components/commons/background/background";
import Socials from "../../components/socials/socials";
import Button from "../../components/commons/button/Button";
import { FaCodepen } from "react-icons/fa";
import Name from "../../components/commons/name/name";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Background>
          <Menu />
          <Name />
          <BlueCircle />
          <Socials />
          <Button text={"blog"} />
          <div className="round-btn round-btn-position">
            <a href="">EN</a>
          </div>

          <div className="round-btn codepen-position">
            <a href="https://codepen.io/fadela">
              <FaCodepen />
            </a>
          </div>

          <div className="view-resume">
            <a href="">RESUME</a>
          </div>
        </Background>
      </React.Fragment>
    );
  }
}

export default Home;
