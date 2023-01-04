import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "@react-spring/web";
import NavigationMenuMobile from "./NavigationMenuMobile";
import NavigationMenuDesktop from "./NavigationMenuDesktop";
import useMobile from "../Hooks/PageSize";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useMobile();

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
    <nav className={isMobile ? "" : "w-1/3"}>
      <span className={isMobile ? "text-xl" : "text-lg"}>
        {isMobile ? (
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <NavigationMenuDesktop />
        )}
      </span>

      {isMobile ? (
        <>
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
                  <NavigationMenuMobile classMenu={() => setShowMenu(false)} />
                </animated.div>
              )
          )}
        </>
      ) : null}
    </nav>
  );
};

export default Navigation;
