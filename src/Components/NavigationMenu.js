import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = (props) => {
  return (
    <div>
      <p className="font-bold py-3">Rakamin Mini Project</p>
      <ul>
        <li>
          <Link
            to="/"
            onClick={props.classMenu}
            className="text-blue-500 py-3 border-t border-b block"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={props.classMenu}
            className="text-blue-500 py-3 border-b block"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
