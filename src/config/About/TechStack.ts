enum ProgrammingLanguage {
  PYTHON = "py",
  GO = "go",
  JAVA = "java",
  CPP = "cpp",
  C = "c",
  REACT = "react",
  TYPESCRIPT = "ts",
  JAVASCRIPT = "js",
  FLUTTER = "flutter",
  BASH = "bash"
}

enum DevOps {
  LINUX = "linux",
  AWS = "aws",
  AZURE = "azure",
  GITHUBACTIONS = "githubactions",
  DOCKER = "docker",
  FASTAPI = "fastapi",
  KUBERNETES = "kubernetes",
  FLASK = "flask",
  GITLAB = "gitlab",
  REDIS = "redis"
}

export interface TechItem {
  name: string;
  iconUrl: string;
}


export const programmingLanguage: TechItem[] = [
  { name: ProgrammingLanguage.PYTHON, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.PYTHON}` },
  { name: ProgrammingLanguage.GO, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.GO}` },
  { name: ProgrammingLanguage.JAVA, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.JAVA}` },
  { name: ProgrammingLanguage.CPP, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.CPP}` },
  { name: ProgrammingLanguage.C, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.C}` },
  { name: ProgrammingLanguage.REACT, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.REACT}` },
  { name: ProgrammingLanguage.TYPESCRIPT, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.TYPESCRIPT}` },
  { name: ProgrammingLanguage.JAVASCRIPT, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.JAVASCRIPT}` },
  { name: ProgrammingLanguage.FLUTTER, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.FLUTTER}` },
  { name: ProgrammingLanguage.BASH, iconUrl: `https://skillicons.dev/icons?i=${ProgrammingLanguage.BASH}` }
];

export const devOps: TechItem[] = [
  { name: DevOps.LINUX, iconUrl: `https://skillicons.dev/icons?i=${DevOps.LINUX}` },
  { name: DevOps.AWS, iconUrl: `https://skillicons.dev/icons?i=${DevOps.AWS}` },
  { name: DevOps.AZURE, iconUrl: `https://skillicons.dev/icons?i=${DevOps.AZURE}` },
  { name: DevOps.GITHUBACTIONS, iconUrl: `https://skillicons.dev/icons?i=${DevOps.GITHUBACTIONS}` },
  { name: DevOps.DOCKER, iconUrl: `https://skillicons.dev/icons?i=${DevOps.DOCKER}` },
  { name: DevOps.FASTAPI, iconUrl: `https://skillicons.dev/icons?i=${DevOps.FASTAPI}` },
  { name: DevOps.KUBERNETES, iconUrl: `https://skillicons.dev/icons?i=${DevOps.KUBERNETES}` },
  { name: DevOps.FLASK, iconUrl: `https://skillicons.dev/icons?i=${DevOps.FLASK}` },
  { name: DevOps.GITLAB, iconUrl: `https://skillicons.dev/icons?i=${DevOps.GITLAB}` },
  { name: DevOps.REDIS, iconUrl: `https://skillicons.dev/icons?i=${DevOps.REDIS}` }
];
