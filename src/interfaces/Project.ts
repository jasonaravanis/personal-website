import { IBuiltWith } from "./BuiltWith";

export interface IProject {
  image: string;
  title: string;
  url: string;
  repo: string;
  description: string;
  builtWith: IBuiltWith[];
}
