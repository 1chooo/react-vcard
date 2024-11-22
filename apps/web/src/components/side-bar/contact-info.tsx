import React from "react";

interface ContactInfoProps {
  title: string;
  children: React.ReactNode;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ title, children }) => {
  return (
    <div className="contact-info">
      <p className="contact-title">{title}</p>
      {children}
    </div>
  );
};

export default ContactInfo;
