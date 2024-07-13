import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import About from "./page/about";
import Contact from "./components/Contact/Contact";
import Resume from "./page/resume";
import Preloader from "../src/components/Pre";
import Blog from "./page/blog";
import Portfolio from "./page/portfolio";
import ScrollToTop from "./components/ScrollToTop";
import Docs from "./components/Docs/Docs";

const routes = [
  { path: "/", component: About },
  { path: "/resume", component: Resume },
  { path: "/portfolio", component: Portfolio },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/docs", component: Docs },
];

interface AppRoutesProps {
  load: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ load }) => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                <ScrollToTop />
                <Preloader load={load} />
                <Component />
              </>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
