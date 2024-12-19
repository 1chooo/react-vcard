import React from "react";

interface ContactInfoProps {
  title: string;
  children: React.ReactNode;
}

function ContactInfo({ title, children }: ContactInfoProps) {
  return (
    <div className="contact-info">
      <p className="text-light-gray-70 uppercase mb-1 text-xs	">{title}</p>
      {children}
    </div>
  );
};

export default ContactInfo;
