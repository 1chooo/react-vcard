import React from "react";
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

function ContactsList() {
    return (
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
    );
}

export default ContactsList;
