"use client";

import React, { useState, useRef } from 'react';
import SideBarInfo from './sidebar-info';
import SocialList from './social-list';
import ContactsList from './contact-list';
import Footer from './footer';

export const SideBar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const handleSidebarToggle = () => {
    setIsActive(prevState => !prevState);
  };
  
  const sideBarState = `sidebar ${isActive ? 'active' : ''}`;

  return (
    <aside className={sideBarState} ref={sideBarRef} data-sidebar>
      <SideBarInfo onToggle={handleSidebarToggle} />
      <div className="sidebar-info-more">
        <div className="separator"></div>
        <ContactsList />
        <div className="separator-no-line"></div>
        <SocialList />
        <div className="separator-footer"></div>
        <Footer />
      </div>
    </aside>
  );
}

export default SideBar;
