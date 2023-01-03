import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  // "fixed bg-white top-0 left-0 w-4/5 h-full z-50"
  // "bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"

  const maskTransition = useTransition(showMenu, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransition = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {maskTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}

      {menuTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 p-3"
            >
              <NavigationMenu classMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}
    </nav>
  );
};

export default Navigation;
