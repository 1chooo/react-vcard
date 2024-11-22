import { IconType } from "react-icons";
import "@/styles/icon-box.css";

interface IconBoxProps {
  icon: IconType;
}

const IconBox: React.FC<IconBoxProps> = ({ icon: Icon }) => (
  <div className="icon-box">
    <Icon />
  </div>
);

export default IconBox;
