import React from "react";
import { Link } from "react-router-dom";
import routes from "../Utils/Routes";

const NavigationMenuDesktop = () => {
  return (
    <div>
      <ul className="flex justify-evenly">
        {routes.map((route) => (
          <li>
            <Link to={route.path} className="text-blue-500">
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenuDesktop;
