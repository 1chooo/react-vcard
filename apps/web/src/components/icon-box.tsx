import { IconType } from "react-icons";
import "@/styles/icon-box.css";

interface IconBoxProps {
  icon: IconType;
}

function IconBox({ icon: Icon }: IconBoxProps) {
  return (
    <div className="icon-box">
      <Icon />
    </div>
  );
};

export default IconBox;
