import type { Metadata } from "next";
import AboutText from '@/components/about/about-text';
import GitHubStats from '@/components/about/github-stats';
import TechStack from '@/components/about/tech-stack';
import LifeStyles from '@/components/about/life-styles';
import PageHeader from '@/components/page-header';
import H4 from '@/components/markdown/h4';
import config from '@/config';

const { about } = config;
const { subHeader, pronouns } = about;
const { firstName, lastName } = about;
const { preferredName } = about;
const { title } = config;

export const metadata: Metadata = {
  title: title,
};

const header =
  preferredName === ''
    ? `About ${firstName} ${lastName} 👨🏻‍💻`
    : `About ${preferredName} 👨🏻‍💻`;

const About = () => {
  return (
    <article data-page=''>
      <PageHeader header={header} />
      {/* TODO: #157 */}
      <H4 text={`${subHeader} (${pronouns})`} />
      <br />
      <AboutText />
      <GitHubStats />
      <TechStack />
      <LifeStyles />
    </article>
  );
}

export default About
