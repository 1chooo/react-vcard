import React, {
  useState,
} from 'react';

// Side Bar info Materials
import profileImage from "../../Assets/images/profile.jpg";
import { MdExpandMore } from "react-icons/md";

import SocialList from './SocialList';
import ContactsList from './ContactsList';

const SideBar: React.FC = ( ) => {

  // Sidebar state
  const [isActive, setIsActive] = useState(false);

  // Sidebar variables
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  // Sidebar toggle functionality for mobile
  const sidebarBtnClickHandler = () => {
    setIsActive(!isActive); // Toggle the isActive state
  };

  // Dynamic class for the sidebar element
  const sidebarClassName = `sidebar ${isActive ? 'active' : ''}`;

  return (
    <aside className={sidebarClassName} ref={sidebarRef} data-sidebar>

      <div className="sidebar-info">
        <figure className="avatar-box">
          <img id="profile-img" src={profileImage} alt="Hugo ChunHo Lin" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Hugo ChunHo Lin">
            Hugo ChunHo Lin
          </h1>
          <p className="title"><strong>Day ONE ⚡️</strong></p>
        </div>

        <button className="info_more-btn" onClick={sidebarBtnClickHandler} data-sidebar-btn>
          <span>Show Contacts</span>
          <MdExpandMore />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ContactsList />

        <div className="separator"></div>

        <SocialList />

      </div>

    </aside>
  );
}

export default SideBar;
