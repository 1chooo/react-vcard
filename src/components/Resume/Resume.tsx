import React from "react";
import NavBar from "../Navbar";
import Sidebar from "../SideBar/SideBar";
import Education from "./Education";
import Working from "./Working";
import Teaching from "./Teaching";
import Skills from "./Skills";


import {
  useLocation
} from 'react-router-dom';

import { IoCloudDownloadOutline } from "react-icons/io5";

function Resume() {

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

          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <IoCloudDownloadOutline />
              </div>

              <a href="./cv.pdf" target="_blank" className="code-highlight-yellow" style={{ fontWeight: 'bold' }}>
                <u>Download Hugo's full academic CV</u>
              </a>
            </div>
          </section>

          <Education />

          <Working />

          <Teaching />

          <Skills />
        </article>
      </div>
    </main>
  );
}

export default Resume;
