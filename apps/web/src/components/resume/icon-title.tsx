import { IconType } from "react-icons";
import IconBox from "../icon-box";


interface IconTitleProps {
  icon: IconType,
  title: string
}

const IconTitle: React.FC<IconTitleProps> = ({ icon: Icon, title }) => (
  <div className="title-wrapper">
    <IconBox icon={Icon} />
    <h3 className="h3">{title}</h3>
  </div>
);

export default IconTitle;
