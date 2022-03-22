import { IProject } from "../interfaces/Project";
import skills from "./skills";
import quicksnapGIF from "../images/gifs/quicksnap.gif";

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
];

export default projects;
