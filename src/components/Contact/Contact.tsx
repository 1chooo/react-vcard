import NavBar from "../Navbar";
import React from "react";
import {
  useLocation
} from 'react-router-dom';

import { mapAddress } from "../../config/ContactData";

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

            <section
              className="mapbox"
              data-mapbox="true"
            >
              <figure>
                <iframe
                  title="map address"
                  src={mapAddress}
                  width="400"
                  height="300"
                  loading="lazy"
                ></iframe>
              </figure>
            </section>

            <h3 className="h3 form-title">Contact Form</h3>

            <form
              action="#"
              className="form"
              data-form
            >

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
