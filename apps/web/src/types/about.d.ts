// https://github.com/afiiif/pokemon-world/blob/main/src/types/pokemon.ts

export type LifeStyle = {
  icon  : string;
  title : string;
  text  : string;
}

export type TechStack = {
  id: string;
  src: string;
  alt: string;
}

export type SocialMedia = {
  githubUsername: string;
  mediumUsername: string;
  twitterUsername: string;
  linkedinUsername: string;
}

/**
 * Type definition for the About component.
 *
 * @example
 * about: {
 *   "subHeader": "$ ls -al Hugo 👨🏻‍💻",
 *   "firstName": 'Chun-Ho',
 *   "lastName": 'Lin',
 *   "middleName": "",
 *   "preferredName": "Hugo",
 *   "additionalName": "Hugo",
 *   "pronouns": 'He/Him',
 *   ...
 * }
 * @returns {About} The About component.
 */
export type About = {
  subHeader: string;
  firstName: string;
  lastName: string;
  middleName: string;
  preferredName: string;
  additionalName: string;
  pronouns: string;
  socialMedia: SocialMedia;
  introductions: string[];
  lifestyles: LifeStyle[];
  programmingLanguage: TechStack[];
  devOps: TechStack[];
}
