import React from "react";

// Side Bar info Materials
import profileImage from "../../Assets/images/profile.jpg";
import { MdExpandMore } from "react-icons/md";

// Social List Icons
import {
  SiGithub,
} from "react-icons/si";
import {
  FaMedium,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  MdAttachment
} from "react-icons/md";

// Contacts List Icons
import {
  HiOutlineMail
} from "react-icons/hi";
import {
  IoCalendarOutline
} from "react-icons/io5";
import {
  MdOutlineLocationOn,
} from "react-icons/md";
import {
  TbPhoneCalling
} from "react-icons/tb";

function SideBar() {
  return (
    <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">
        <figure className="avatar-box">
          <img id="profile-img" src={profileImage} alt="Hugo ChunHo Lin" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Hugo ChunHo Lin">
            Hugo ChunHo Lin
          </h1>
          <p className="title">Day 1 ⚡️</p>
        </div>
        {/* 這裡要加上，如果點擊了 data-sidebar-btn 要把 sidebar 變 sidebar active */}
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <MdExpandMore />
          {/* <IonIcon name="chevron-down"></IonIcon> */}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <HiOutlineMail />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:hugo970217@gmail.com" className="contact-link">hugo970217@gmail.com</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <TbPhoneCalling />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="#" className="contact-link">404 Not Found 📲</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <IoCalendarOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2002-01-27">Jan. 27, 2002 🐻</time>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <MdOutlineLocationOn />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Taipei, Taiwan 🇹🇼</address>
            </div>

          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a
              href="https://github.com/1chooo"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/1chooo/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://medium.com/@1chooo"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://twitter.com/1chooo___"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </li>

          <li className="social-item">
            <a
              href="./cv.pdf"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdAttachment />
            </a>
          </li>
        </ul>

      </div>

    </aside>
  );
}

export default SideBar;
