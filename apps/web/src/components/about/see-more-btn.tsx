import Link from "next/link";
import React from 'react';
import type { IconType } from "react-icons";

import "@/styles/about/see-more-btn.css"

interface SeeMoreButtonProps {
  badge: string;
  path: string;
  icon: IconType;
}

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ badge, path, icon: Icon }) => {
  return (
    <div className="see-more">
      <Link href={path}>
        <button className="see-more-btn">
          <Icon />
          <span>{badge}</span>
        </button>
      </Link>
    </div>
  );
}

export default SeeMoreButton;
