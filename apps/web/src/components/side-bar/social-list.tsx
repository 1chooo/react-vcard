import Link from "next/link";
import type { Icon } from "@primer/octicons-react";
import type { IconType } from "react-icons";

interface SocialLink {
  url: string;
  icon: Icon | IconType | React.FC;
  name: string;
}

interface SocialListProps {
  socialLinks: SocialLink[];
}

const SocialList: React.FC<SocialListProps> = ({ socialLinks }) => {
  return (
    <ul className="social-list">
      {socialLinks.map(({ url, icon: Icon, name }) => (
        <li className="social-item" key={name}>
          <Link
            href={url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialList;

