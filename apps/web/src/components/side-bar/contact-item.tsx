import React from "react";
import IconBox from "../icon-box";
import ContactInfo from "./contact-info";

import { IconType } from "react-icons";

interface ContactItemProps {
  icon: IconType;
  title: string;
  children: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, children }) => {
  return (
    <li className="contact-item">
      <IconBox icon={icon} />
      <ContactInfo title={title}>{children}</ContactInfo>
    </li>
  );
};

export default ContactItem;
