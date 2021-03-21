import React, { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { RouteMapItem } from "../types";
import halfmoon from "halfmoon";

interface SidebarProps {
  routeMap: RouteMapItem[];
}

const Sidebar = (props: SidebarProps) => {
  const location = useLocation();

  const onClickLink = useCallback(() => {
    if (window.innerHeight > window.innerWidth) {
      halfmoon.toggleSidebar();
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {props.routeMap.map((routeData, index) => {
          const classList = ["sidebar-link"];
          if (routeData.link === location.pathname) {
            classList.push("active");
          }
          return (
            <Link
              key={index}
              to={routeData.link}
              onClick={onClickLink}
              className={classList.join(" ")}
            >
              {routeData.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
