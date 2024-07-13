// ProjectsData.tsx

import awsEdu101Image from "../Assets/images/projects/aws_edu_101.png";
import testImage from "../Assets/images/projects/portfolio_test.png";
import gymRouteImage from "../Assets/images/projects/gym_route.png";
import thermalCalculatorImage from "../Assets/images/projects/thermal_calculator.png";
import gameScopeImage from "../Assets/images/projects/game_scope.png";
import evolvingBeastsImage from "../Assets/images/projects/evolving_beasts.png";
import reactVcardPortfolioImage from "../Assets/images/projects/react_vcard_portfolio.png";

export const projectTags = [
  "All",
  "Applications",
  "Web development",
  "Line Bot",
  "Data Science",
];

export interface Project {
  title     : string;
  category  : string;
  imageUrl  : string;
  link      : string;
}

export const projectsData: Project[] = [
  {
    title: 'React vCard Portfolio',
    category: 'Web development',
    imageUrl: reactVcardPortfolioImage,
    link: 'https://github.com/1chooo/react-vcard',
  },
  {
    title: 'AWS Educate 101',
    category: 'Line Bot',
    imageUrl: awsEdu101Image,
    link: 'https://github.com/1chooo/aws-line-business-card-workshop',
  },
  {
    title: 'Thermal Calculator',
    category: 'Applications',
    imageUrl: thermalCalculatorImage,
    link: 'https://github.com/1chooo/thermal-calculator',
  },
  {
    title: 'Gym Route',
    category: 'Applications',
    imageUrl: gymRouteImage,
    link: 'https://github.com/1chooo/gym-route',
  },
  {
    title: 'Evolving Beasts',
    category: 'Line Bot',
    imageUrl: evolvingBeastsImage,
    link: 'https://github.com/1chooo/evolving-beasts',
  },
  {
    title: 'Simple AI',
    category: 'Web development',
    imageUrl: testImage,
    link: 'https://github.com/1chooo/simple-ai',
  },
  {
    title: 'Game Scope',
    category: 'Data Science',
    imageUrl: gameScopeImage,
    link: 'https://github.com/1chooo/game-scope',
  },
];
