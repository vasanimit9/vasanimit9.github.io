import { useEffect, useState } from "react";
import halfmoon from "halfmoon";
import "halfmoon/css/halfmoon.min.css";
import Navbar from "./components/Navbar";
import strings from "./strings";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Route } from "react-router";
import { RouteMapItem } from "./types";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTasks, faTools } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const routeMap: RouteMapItem[] = [
    {
      icon: <FontAwesomeIcon icon={faHome} />,
      link: "/",
      name: "Home",
      component: <Home />,
    },
    {
      icon: <FontAwesomeIcon icon={faTools} />,
      link: "/experience",
      name: "Experience",
      component: <Experience darkMode={darkMode} />,
    },
    {
      icon: <FontAwesomeIcon icon={faTasks} />,
      link: "/projects",
      name: " Projects",
      component: <Projects />,
    },
  ];

  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);

  useEffect(() => {
    const darkModeDetect = () => {
      if (document.body.classList.contains("dark-mode")) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    darkModeDetect();

    const observer = new MutationObserver(darkModeDetect);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper with-navbar with-sidebar" style={appStyle}>
      <Navbar title={strings.brand} darkMode={darkMode} />
      <Sidebar routeMap={routeMap} />
      <div className="content-wrapper">
        {routeMap.map((routeData, index) => {
          return (
            <Route key={index} path={routeData.link} exact>
              {routeData.component}
            </Route>
          );
        })}
      </div>
    </div>
  );
}

const appStyle: React.CSSProperties = {
  fontFamily: "Varela Round",
};

export default App;
