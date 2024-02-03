import NavBar from "../Navbar";
import React from "react";
import {
  useLocation
} from 'react-router-dom';

import Sidebar from "../SideBar/SideBar";
import { FaRegPaperPlane } from "react-icons/fa";


function Contract() {

  const location = useLocation();

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <article
          className={`resume ${location.pathname === '/contact' ? 'active' : ''}`}
          data-page="contact"
        >
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
          <section className="contact-form">

            <section className="mapbox" data-mapbox="true">
              <figure><iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.9398617144193!2d121.19272387485687!3d24.968160640940518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c1ec904dcb%3A0xcdc129d4455ce456!2sNational%20Central%20University!5e0!3m2!1sen!2stw!4v1704610088586!5m2!1sen!2stw"
                width="400" height="300" loading="lazy"></iframe></figure>
            </section>

            <h3 className="h3 form-title">Contact Form (Working Hard...)</h3>

            <form action="#" className="form" data-form>

              <div className="input-wrapper">
                <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

                <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
              </div>

              <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

              <button className="form-btn" disabled data-form-btn onClick={() => alert('not implemented yet!')}>
                <FaRegPaperPlane />
                <span>Send Message</span>
              </button>

            </form>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Contract;
