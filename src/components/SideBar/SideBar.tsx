import React, { useState, useRef } from 'react';
import profileImage from "../../Assets/images/profile.jpg";
import { MdExpandMore } from "react-icons/md";

import SocialList from './SocialList';
import ContactsList from './ContactsList';

const SideBar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const handleSidebarToggle = () => {
    setIsActive(prevState => !prevState);
  };
  
  const sideBarState = `sidebar ${isActive ? 'active' : ''}`;

  return (
    <aside className={sideBarState} ref={sideBarRef} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            id="profile-img"
            src={profileImage}
            alt="Hugo ChunHo Lin"
            width="80"
            loading="lazy"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Hugo ChunHo Lin">Hugo ChunHo Lin</h1>
          <p className="title">
            <strong>Day ONE ⚡️</strong>
          </p>
        </div>

        <button
          className="info-more-btn"
          onClick={handleSidebarToggle}
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          <MdExpandMore />
        </button>
      </div>

      <div className="sidebar-info-more">
        <div className="separator"></div>

        <ContactsList />

        <div className="separator"></div>

        <SocialList />
      </div>
    </aside>
  );
}

export default SideBar;
