import React, { useEffect } from "react";
import {
  useLocation
} from 'react-router-dom';

import { abouts } from "../../config/about";

import NavBar from "../../components/Navbar";
import Sidebar from "../../components/SideBar/SideBar";
import AboutText from "../../components/About/AboutText";
import LifeStyles from "../../components/About/LifeStyles";
import Github from "../../components/About/Github";
import TechStack from "../../components/About/TechStack";
// import Clients from "../components/About/Clients";
// import Testimonial from "../components/About/Testimonial";
import Header from "../../components/Header";


const About: React.FC = () => {

  const location = useLocation();
  useEffect(() => {
    document.title = "Hugo ChunHo Lin (1chooo) | Portfolio";
  }, []);

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <article
          className={`about ${location.pathname === '/' ? 'active' : ''}`}
          data-page="about"
        >
          <Header title={abouts.header} />
          <AboutText />
          <TechStack />
          <LifeStyles />
          <Github />
          {/* <Clients /> */}
          {/* <Testimonial /> */}
        </article>
      </div>
    </main>
  );
}

export default About;
