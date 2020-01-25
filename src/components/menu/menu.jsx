import React, { Component } from "react";
import MenuList from "../commons/menu-list/menuList";
import "./menu.scss";
import Bullet from "../commons/bullet/bullet";

class Menu extends Component {
  state = {
    menuList: [
      { name: "home", id: "1", path: "/home" },
      { name: "about me", id: "2", path: "/about-me" },
      { name: "portfolio", id: "3", path: "/portfolio" },
      { name: "contact", id: "4", path: "/contact" }
    ],
    showMenu: true
  };

  handleMenu = () => {
    //show the menu
  };

  render() {
    return (
      <React.Fragment>
        <div className="menu-icon" onClick={this.handleMenu}></div>
        <div className="menu">
          <div className="menu-bar">
            <ul className="menu-list">
              {this.state.menuList.map(m => (
                <MenuList key={m.id} item={m} />
              ))}
            </ul>
          </div>
        </div>
        <div className="menu-bullet">
          <ul className="menu-bullet-list">
            {this.state.menuList.map(m => (
              <Bullet key={m.id} path={m.path} />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
