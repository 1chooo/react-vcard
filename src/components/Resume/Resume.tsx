import NavBar from "../Navbar";
import Sidebar from "../SideBar/SideBar";
import React from "react";

function Resume() {
    return (
        <main>
            <Sidebar />
            <div className="main-content">
                <NavBar />
                <article
                    className="contact active"
                    data-page="contact"
                >
                    <header>
                        <h2 className="h2 article-title">Resume</h2>
                    </header>
                    <section className="contact-form">

                        <section className="mapbox" data-mapbox="true">
                            <figure><iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.9398617144193!2d121.19272387485687!3d24.968160640940518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c1ec904dcb%3A0xcdc129d4455ce456!2sNational%20Central%20University!5e0!3m2!1sen!2stw!4v1704610088586!5m2!1sen!2stw"
                                width="400" height="300" loading="lazy"></iframe></figure>
                        </section>
                    </section>
                </article>
            </div>
        </main>
    );
}

export default Resume;
