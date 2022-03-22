import { ISkill } from "./Skill";

export interface IProject {
  image: string;
  title: string;
  url: string;
  repo: string;
  description: string;
  builtWith: ISkill[];
}
