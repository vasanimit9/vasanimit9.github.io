import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import halfmoon from "halfmoon";
import React from "react";

interface Props {
  title?: string;
}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar justify-content-between">
      <div className="navbar-content">
        <button
          className="btn"
          type="button"
          onClick={() => halfmoon.toggleSidebar()}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="navbar-brand">{props.title}</div>
      <div className="navbar-content">
        <button
          className="btn"
          type="button"
          title="toggle dark mode"
          onClick={() => halfmoon.toggleDarkMode()}
        >
          <FontAwesomeIcon icon={halfmoon.darkModeOn ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
