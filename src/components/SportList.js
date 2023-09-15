import React from "react";
import { Outlet } from "react-router-dom";
import SportsNav from "./SportsNav";

const SportList = () => {
  return (
    <div>
      <SportsNav />
      <Outlet />
      <footer>Sport list Copyright 2023</footer>
    </div>
  );
};

export default SportList;
