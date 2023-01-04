import React from "react";
import { Link } from "react-router-dom";
// import useMobile from "../Hooks/PageSize";

const NavigationMenuDesktop = () => {
  return (
    <div>
      <ul className="flex justify-evenly">
        <li>
          <Link to="/" className="text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-blue-500">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenuDesktop;
