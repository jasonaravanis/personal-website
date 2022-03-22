import { IProject } from "../interfaces/Project";
import skills from "./skills";
import quicksnapGIF from "../images/gifs/quicksnap.gif";
import fakebookGIF from "../images/gifs/fakebook.gif";
import wheresWaldoGIF from "../images/gifs/wheresWaldo.gif";
import shoppingCartGIF from "../images/gifs/shoppingCart.gif";
import resumeBuilderGIF from "../images/gifs/resumeBuilder.gif";
import weatherGIF from "../images/gifs/weather.gif";

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
  {
    title: "Where's Waldo?",
    image: wheresWaldoGIF,
    url: "https://my-attempt-b7181.web.app/",
    repo: "https://github.com/Atlas-1510/where-is-waldo",
    description:
      "This is an implementation of the classic 'Where's Waldo' game, where a user competes to find hidden targets as quickly as possible.",
    builtWith: [
      skills.react,
      skills.firebase,
      skills.reactSpring,
      skills.styledComponents,
      skills.jest,
    ],
  },
  {
    title: "Shopping Cart",
    image: shoppingCartGIF,
    url: "https://atlas-1510.github.io/shopping-cart",
    repo: "https://github.com/Atlas-1510/shopping-cart",
    description:
      "This is a mock up of a shopping cart web application, as part of The Odin Project syllabus. Images and inspiration come from the Knights of Suburbia cycling website.",
    builtWith: [skills.react, skills.styledComponents, skills.reactSpring],
  },
  {
    title: "Resume Builder",
    image: resumeBuilderGIF,
    url: "https://atlas-1510.github.io/cv-project/",
    repo: "https://github.com/Atlas-1510/cv-project",
    description:
      "This React application creates a formatted resume based on user input of personal details, experience, and education history. The resume can be printed or saved as a PDF.",
    builtWith: [skills.react, skills.styledComponents],
  },
  {
    title: "Weather Search",
    image: weatherGIF,
    url: "https://atlas-1510.github.io/weather-app/",
    repo: "https://github.com/Atlas-1510/weather-app",
    description:
      "This application allows a user to view weather and local time for their current location, or a custom location. Units can be changed from metric to imperial. The project use the Nominatim API for latitude/longitude lookup, and OpenWeatherMap API to get weather data for those coordinates. The geolocation API is used to get weather at user location.",
    builtWith: [skills.sass, skills.webpack, skills.npm, skills.git],
  },
];

export default projects;
