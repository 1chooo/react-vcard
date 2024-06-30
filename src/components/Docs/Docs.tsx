import React from "react";
import {
  useLocation
} from 'react-router-dom';


import NavBar from "../Navbar";
import Sidebar from "../SideBar/SideBar";


const About: React.FC = () => {

  const location = useLocation();

  return (
    <main>

      <Sidebar />
      <div className="main-content">

        <NavBar />

        <article
          className={`docs ${location.pathname === '/docs' ? 'active' : ''}`}
          data-page="docs"
        >

          <header>
            <h2 className="h2 article-title">Docs</h2>
          </header>

        </article>
      </div>
    </main>

  );
}

export default About;
