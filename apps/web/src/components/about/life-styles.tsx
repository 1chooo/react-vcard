import H4 from '@/components/markdown/h4';
import ServiceItem from './service-item';

import config from '@/config';
import type { LifeStyle } from '@/types/about';

const { about } = config;
const { lifestyles } = about;
const subHeader = "$ ls -al Life Style";

const LifeStyles: React.FC = () => {
  return (
    <section className="service">
      <H4 text={subHeader} />

      <ul className="service-list">
        {lifestyles.map((lifestyle: LifeStyle) => (
          <ServiceItem lifestyle={lifestyle} key={lifestyle.title} />
        ))}
      </ul>
    </section>
  );
}

export default LifeStyles;
