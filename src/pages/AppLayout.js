import React from "react";
import Navigation from "../components/Navigation";
import HomePage from "./HomePage";

const AppLayout = () => {
  return (
    <div>
      <Navigation />
      <HomePage />
    </div>
  );
};

export default AppLayout;
