import React from 'react';
import AvatarBox from './avatar-box';
import InfoContent from './info-content';
import InfoMoreButton from './info-more-button';
import config from '@/config';

import "@/styles/side-bar/sidebar-info.css";

const avatar = config.avatar;

interface SideBarInfoProps {
  onToggle: () => void;
}

const SideBarInfo: React.FC<SideBarInfoProps> = ({ onToggle }) => (
  <div className="sidebar-info">
    <AvatarBox avatar={avatar} />
    <InfoContent />
    <InfoMoreButton onClick={onToggle} />
  </div>
);

export default SideBarInfo;
