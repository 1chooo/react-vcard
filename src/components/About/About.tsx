import NavBar from "../Navbar";
import Sidebar from "../SideBar/SideBar";
import React from "react";
import AboutText from "./AboutText";
import AboutHeader from "./AboutHeader";
import {
    useLocation
} from 'react-router-dom';

function About() {

    const location = useLocation();

    return (
        <main>

            <Sidebar />
            <div className="main-content">

                <NavBar />

                <article
                    className={`about ${location.pathname === '/' ? 'active' : ''}`}
                    data-page="about"
                >
                    <AboutHeader />

                    <AboutText />
                    <AboutText />
                    <AboutText />
                    <AboutText />
                </article>
            </div>
        </main>

    );
}

export default About;