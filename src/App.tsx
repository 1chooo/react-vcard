import React, {
  useState,
  useEffect
} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


import './App.css';


import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";
import Preloader from "../src/components/Pre";
import Blog from "./components/Blog/Blog";
import Portfolio from "./components/Portfolio/Portfolio";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <Preloader load={load} />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/resume"
          element={
            <>
              <ScrollToTop />
              <Preloader load={load} />
              <Resume />
              <Footer />
            </>
          }
        />

        <Route
          path="/portfolio"
          element={
            <>
              <ScrollToTop />
              <Preloader load={load} />
              <Portfolio />
              <Footer />
            </>
          }
        />

        <Route
          path="/blog"
          element={
            <>
              <ScrollToTop />
              <Preloader load={load} />
              <Blog />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <ScrollToTop />
              <Preloader load={load} />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
