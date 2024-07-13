import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { FaRegPaperPlane } from "react-icons/fa";

import MapBox from "./MapBox";
import NavBar from "../Navbar";
import Sidebar from "../SideBar/SideBar";

const Contract: React.FC = () => {

  const location = useLocation();
  useEffect(() => {
    document.title = "Contract - Hugo ChunHo Lin (1chooo) | Portfolio";
  }, []);

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
            <MapBox />
            <h3 className="h3 form-title">Contact Form</h3>
            <form action="#" className="form" data-form>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  className="form-input"
                  placeholder="Full name"
                  required
                  data-form-input
                />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email address"
                  required
                  data-form-input
                />
              </div>
              <textarea
                name="message"
                className="form-input"
                placeholder="Your Message"
                required
                data-form-input
              ></textarea>
              <button
                className="form-btn"
                disabled
                data-form-btn
                onClick={() => alert('not implemented yet!')}
              >
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
