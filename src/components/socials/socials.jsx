import React, { Component } from "react";
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaCodepen
} from "react-icons/fa";
import "./socials.scss";

export class Socials extends Component {
  render() {
    return (
      <div className="socials">
        <div className="socials__telegram">
          <a href="">
            <FaTelegramPlane />
          </a>
        </div>
        <div className="socilas__instagram">
          <a href="">
            <FaInstagram />
          </a>
        </div>
        <div className="socilas__linkedin">
          <a href="">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="socilas__github">
          <a href="">
            <FaGithub />
          </a>
        </div>
        {/* <div className="socials__codepen">
          <a href="">
            <FaCodepen />
          </a>
        </div> */}
      </div>
    );
  }
}

export default Socials;
