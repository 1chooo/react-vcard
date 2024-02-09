import React from "react";
import NavBar from "../Navbar";
import Sidebar from "../SideBar/SideBar";
import DownloadCV from "./DownloadCV";
import Education from "./Education";
import Working from "./Working";
import Teaching from "./Teaching";


import {
  useLocation
} from 'react-router-dom';


const Resume: React.FC = () => {

  const location = useLocation();

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <article
          className={`resume ${location.pathname === '/resume' ? 'active' : ''}`}
          data-page="resume"
        >
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>

          <DownloadCV />

          <Education />

          <Working />

          <Teaching />
        </article>
      </div>
    </main>
  );
}

export default Resume;
