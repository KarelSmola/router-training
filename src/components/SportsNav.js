import React from "react";
import { NavLink } from "react-router-dom";

const SportsNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="individual">Individual Sports</NavLink>
        <NavLink to="collective">Collective Sports</NavLink>
      </li>
    </ul>
  );
};

export default SportsNav;
