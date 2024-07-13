import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';


import Sidebar from "../../components/SideBar/SideBar";
import NavBar from "../../components/Navbar";
import Projects from "../../components/portfolio/projects";
import Header from "../../components/Header";
import {
  initializeCustomSelect, filterItemsByCategory
} from "../../utils/domUtils";


const Portfolio = () => {

  const location = useLocation();

  useEffect(() => {
    initializeCustomSelect(filterItemsByCategory);
    document.title = "Portfolio - Hugo ChunHo Lin (1chooo) | Portfolio";
  }, []);

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <article
          className={`portfolio ${location.pathname === '/portfolio' ? 'active' : ''}`}
          data-page="portfolio"
        >
          <Header title="Hugo's Portfolio" />
          <Projects />
        </article>
      </div>
    </main>
  );
}

export default Portfolio;
