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
import ScrollToTop from "./components/ScrollToTop";
import { 
  Document, 
  Page, 
  pdfjs 
} from "react-pdf";
import onePageResume from "./Assets/Documents/cv.pdf";

// import PDFViewer from "./components/Resume/PDFViewer";

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
              <Resume />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Preloader load={load} />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/cv"
          element={
            <>
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <Navigate
              to="/" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
