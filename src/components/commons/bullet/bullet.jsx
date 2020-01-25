import React, { Component } from "react";
import "./bullet.scss";
import { Link, NavLink } from "react-router-dom";

export class Bullet extends Component {
  render() {
    return (
      <React.Fragment>
        <li className="menu-bullet-item">
          <NavLink className="menu-bullet-item-link" to={this.props.path}>
            <div className="bullet"></div>
          </NavLink>
        </li>
      </React.Fragment>
    );
  }
}

export default Bullet;
