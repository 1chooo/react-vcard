import React from "react";
import profileImage from "../../Assets/images/profile.jpg";
import {
    SiGithub,
} from "react-icons/si";
import {
    FaMedium,
    FaXTwitter,
    FaLinkedinIn,
} from "react-icons/fa6";
import {
    FaLinkedin
} from "react-icons/fa";
import {
    TbFileCv
} from "react-icons/tb";
import {
    HiOutlineMail
} from "react-icons/hi";
import {
    IoMailOutline,
    IoCalendarOutline
} from "react-icons/io5";
import {
    MdPhoneIphone,
    MdOutlineLocationOn,
    MdAttachment
} from "react-icons/md";
import {
    TbPhoneCalling
} from "react-icons/tb";

import SideBarInfo from "./SideBarInfo";

function SideBar() {
    return (
        <aside className="sidebar" data-sidebar="">

            {/* <div className="sidebar-info">
                <figure className="avatar-box">
                    <img id="profile-img" src={profileImage} alt="Hugo ChunHo Lin" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Hugo ChunHo Lin">
                        Hugo ChunHo Lin
                    </h1>
                    <p className="title">Day 1 ⚡️</p>
                </div>
                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>
                    <IonIcon name="chevron-down"></IonIcon>
                </button>
            </div> */}
            <SideBarInfo />

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">

                    <li className="contact-item">

                        <div className="icon-box">
                            {/* <IonIcon name="mail-outline"></IonIcon> */}
                            <HiOutlineMail />
                            {/* <IoMailOutline /> */}
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <a href="mailto:hugo970217@gmail.com" className="contact-link">hugo970217@gmail.com</a>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            {/* <IonIcon name="phone-portrait-outline"></IonIcon> */}
                            {/* <MdPhoneIphone /> */}
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

                            {/* <IonIcon name="calendar-outline"></IonIcon> */}
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>

                            <time dateTime="2002-01-27">Jan. 27, 2002 🐻</time>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            {/* <IonIcon name="location-outline"></IonIcon> */}
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
                        <a href="https://github.com/1chooo" className="social-link" target="_blank">
                            <SiGithub />
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/1chooo/" className="social-link" target="_blank">
                            <FaLinkedinIn />
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://medium.com/@1chooo" className="social-link" target="_blank">
                            <FaMedium />
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://twitter.com/1chooo___" className="social-link" target="_blank">
                            <FaXTwitter />
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="./cv.pdf" className="social-link" target="_blank">
                            {/* <TbFileCv /> */}
                            <MdAttachment />

                        </a>
                    </li>
                </ul>

            </div>

        </aside>
    );
}

export default SideBar;
