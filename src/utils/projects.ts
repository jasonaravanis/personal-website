import { IProject } from "../interfaces/Project";
import skills from "./skills";
import quicksnapGIF from "../images/gifs/quicksnap.gif";
import fakebookGIF from "../images/gifs/fakebook.gif";

const projects: IProject[] = [
  {
    title: "QuickSnap",
    image: quicksnapGIF,
    url: "https://quicksnap-58e9a.web.app",
    repo: "https://github.com/Atlas-1510/quicksnap",
    description:
      "QuickSnap is a media-sharing platform based on Instagram, which allows users to share photos, send messages, and like, comment, and save posts.",
    builtWith: [
      skills.react,
      skills.firebase,
      skills.framerMotion,
      skills.tailwindcss,
    ],
  },
  {
    title: "Fakebook",
    image: fakebookGIF,
    url: "https://secret-fjord-25520.herokuapp.com",
    repo: "https://github.com/Atlas-1510/facebook",
    description:
      "Fakebook is a simplified clone of Meta's Facebook platform. Users can create profiles, connect with each other, share messages, post photos, and like and comment on content.",
    builtWith: [
      skills.typescript,
      skills.react,
      skills.nodejs,
      skills.mongoDB,
      skills.express,
      skills.tailwindcss,
      skills.heroku,
      skills.jest,
    ],
  },
];

export default projects;
