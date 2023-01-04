import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <h1 className="font-bold">
        <Link to="/">Rakamin Mini Project</Link>
      </h1>

      <Navigation />
    </header>
  );
};

export default Header;
