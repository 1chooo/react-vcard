import React from "react";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbPhoneCalling } from "react-icons/tb";
import ContactItem from "@/components/side-bar/contact-item";

import "@/styles/side-bar/contact-list.css";

function ContactsList() {
  return (
    <ul className="contacts-list">
      <ContactItem icon={HiOutlineMail} title="Email">
        <Link href="mailto:hugo970217@gmail.com" className="contact-link block">
          hugo970217@gmail.com
        </Link>
      </ContactItem>

      <ContactItem icon={TbPhoneCalling} title="Phone">
        <p className="contact-link">404 Not Found 📲</p>
      </ContactItem>

      <ContactItem icon={IoCalendarOutline} title="Birthday">
        <time dateTime="2002-01-27" className="block">January 27, 2002 🐻</time>
      </ContactItem>

      <ContactItem icon={MdOutlineLocationOn} title="Location">
        <address className="not-italic">Taipei, Taiwan 🇹🇼</address>
      </ContactItem>
    </ul>
  );
};

export default ContactsList;
