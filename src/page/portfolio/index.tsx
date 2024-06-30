import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';


import Sidebar from "../../components/SideBar/SideBar";
import NavBar from "../../components/Navbar";
import Projects from "../../components/portfolio/projects";
import {
  initializeCustomSelect, filterItemsByCategory
} from "../../utils/domUtils";


const Portfolio = () => {

  const location = useLocation();

  useEffect(() => {
    initializeCustomSelect(filterItemsByCategory);
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
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>
          <Projects />
        </article>
      </div>
    </main>
  );
}

export default Portfolio;
