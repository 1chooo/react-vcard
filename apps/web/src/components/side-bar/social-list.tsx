import Link from "next/link";

import { SiGithub } from "react-icons/si";
import { FaMedium, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdAttachment, MdOutlineSignpost } from "react-icons/md";

import config from "@/config";

const { about } = config;

const { socialMedia } = about;
const { githubUsername, twitterUsername, linkedinUsername, mediumUsername } = socialMedia;

const socialLinks = [
	{ url: `https://github.com/${githubUsername}`, icon: <SiGithub />, name: 'GitHub' },
	{ url: `https://www.linkedin.com/in/${linkedinUsername}/`, icon: <FaLinkedinIn />, name: 'LinkedIn' },
	{ url: `https://medium.com/@${mediumUsername}`, icon: <FaMedium />, name: 'Medium' },
	{ url: `https://twitter.com/${twitterUsername}`, icon: <FaXTwitter />, name: 'Twitter' },
	{ url: `https://blog.1chooo.com`, icon: <MdOutlineSignpost />, name: 'Blog' },
	{ url: `./cv.pdf`, icon: <MdAttachment />, name: 'CV' },
];

const SocialList: React.FC = () => {
	return (
		<ul className="social-list">
			{socialLinks.map(({ url, icon, name }) => (
				<li className="social-item" key={name}>
					<Link
						href={url}
						className="social-link"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={name}
					>
						{icon}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default SocialList;
