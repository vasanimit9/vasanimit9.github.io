import { useEffect } from "react";
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

const routeMap: RouteMapItem[] = [
  {
    link: "/",
    name: "Home",
    component: <Home />,
  },
  {
    link: "/experience",
    name: "Experience",
    component: <Experience />,
  },
  {
    link: "/projects",
    name: " Projects",
    component: <Projects />,
  },
];

function App() {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
  }, []);

  return (
    <div className="page-wrapper with-navbar with-sidebar" style={appStyle}>
      <Navbar title={strings.brand} />
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
