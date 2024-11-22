"use client";

import React, { useState, useRef } from 'react';
import SideBarInfo from './sidebar-info';
import SocialList from './social-list';
import ContactsList from './contact-list';
import Footer from './footer';

// We need to refactor to send the props to the SideBarInfoMore component
export const SideBarInfoMore: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const handleSidebarToggle = () => {
    setIsActive(prevState => !prevState);
  };

  const sideBarState = `sidebar ${isActive ? 'active' : ''}`;

  return (
    <div className="sidebar-info-more">
      <div className="separator"></div>
      <ContactsList />
      <div className="separator-no-line"></div>
      <SocialList />
      <div className="separator-footer"></div>
      <Footer />
    </div>
  );
}

export default SideBarInfoMore;
