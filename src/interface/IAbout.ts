export interface ILifeStyle {
  icon  : string;
  title : string;
  text  : string;
}

export interface ITechStack {
  name: string;
  iconUrl: string;
}

interface IAbout {
  header: string;
  subHeader: string;
  pronouns: string;
  description: string[];
  lifestyle: ILifeStyle[];
  programmingLanguage: ITechStack[];
  devOps: ITechStack[];
}

export default IAbout;


