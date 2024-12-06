import Link from "next/link";
import React from 'react';
import type { IconType as ReactIconType } from "react-icons";
import type { Icon as OcticonsType } from "@primer/octicons-react";
import { sendGTMEvent } from "@/components/google";

interface SeeMoreButtonProps {
  badge: string;
  path: string;
  icon: ReactIconType | OcticonsType;
}

// TODO: customize button onclick effect https://articles.readytowork.jp/google-analytics-in-next-js-a26cc2b28db5
const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ badge, path, icon: Icon }) => {
  return (
    <div className="flex justify-center">
      <Link href={path}>
        <button
          className="hover:scale-105 active:scale-95 rounded-xl shadow-lg bg-border-gradient-onyx hover:bg-orange-yellow-crayola-dark z-0 cursor-pointer text-orange-yellow-crayola px-5 py-3 font-bold"
          onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'GTM-PDJ3NF4Q' })}>
          <span>{badge}</span>
          <Icon className="ml-2 group-hover:ml-2 group-hover:scale-110"/>
        </button>
      </Link>
    </div>
  );
}

export default SeeMoreButton;