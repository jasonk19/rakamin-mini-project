import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <h1 className="font-bold">Rakamin Mini Project</h1>

      <Navigation />
    </header>
  );
};

export default Header;
