import React from "react";
import { Link } from "react-router-dom";
import routes from "../Utils/Routes";
// import useMobile from "../Hooks/PageSize";

const NavigationMenuMobile = (props) => {
  return (
    <div>
      <p className="font-bold py-3">Rakamin Mini Project</p>
      <ul>
        {routes.map((route, index) => (
          <li>
            <Link
              to={route.path}
              onClick={props.classMenu}
              className={`text-blue-500 py-3 border-b block ${
                index === 0 ? "border-t" : ""
              }`}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationMenuMobile;
