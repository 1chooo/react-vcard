import type { LifeStyle } from '@/types/about';
import "@/styles/about/service-item.css";

interface ServiceItemProps {
  lifestyle: LifeStyle;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ lifestyle }) => {
  return (
    <li className="service-item">
      <div className="mb-2.5 sm:mb-0 sm:mt-2 flex justify-center items-center">
        <lifestyle.icon className="text-orange-yellow-crayola" size={24}/>
      </div>

      <div className="text-center sm:text-left">
        <h4 className="text-white-2 text-lg font-bold mb-[7px]">{lifestyle.title}</h4>
        <p className="text-light-gray text-sm font-light leading-6">{lifestyle.text}</p>
      </div>
    </li>
  );
}

export default ServiceItem;
