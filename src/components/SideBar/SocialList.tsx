import {
	SiGithub,
} from "react-icons/si";
import {
	FaMedium,
	FaXTwitter,
	FaLinkedinIn,
} from "react-icons/fa6";
import {
	MdAttachment,
	MdOutlineSignpost,
} from "react-icons/md";



const SocialList: React.FC = () => {
	return (
		<ul className="social-list">

			<li className="social-item">
				<a
					href="https://github.com/1chooo"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiGithub />
				</a>
			</li>

			<li className="social-item">
				<a
					href="https://www.linkedin.com/in/1chooo/"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedinIn />
				</a>
			</li>

			<li className="social-item">
				<a
					href="https://medium.com/@1chooo"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaMedium />
				</a>
			</li>

			<li className="social-item">
				<a
					href="https://twitter.com/1chooo___"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaXTwitter />
				</a>
			</li>

			<li className="social-item">
				<a
					href="https://blog.1chooo.com"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<MdOutlineSignpost />
				</a>
			</li>

			<li className="social-item">
				<a
					href="./cv.pdf"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<MdAttachment />
				</a>
			</li>
		</ul>
	);
}

export default SocialList;
