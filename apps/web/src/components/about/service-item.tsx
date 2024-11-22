import Image from 'next/image';
import type { LifeStyle } from '@/types/about';
import "@/styles/about/service-item.css";


interface ServiceItemProps {
  lifestyle: LifeStyle;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ lifestyle }) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        <Image
          src={lifestyle.icon}
          alt={lifestyle.title}
          width={30}
          height={30}
        />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{lifestyle.title}</h4>
        <p className="service-item-text">{lifestyle.text}</p>
      </div>
    </li>
  );
}

export default ServiceItem;
