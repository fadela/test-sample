import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./menuList.scss";

const MenuList = ({ item }) => {
  return (
    <li className="menu-item">
      <NavLink className="menu-link" to={item.path}>
        {item.name}
      </NavLink>
    </li>
  );
};

export default MenuList;
