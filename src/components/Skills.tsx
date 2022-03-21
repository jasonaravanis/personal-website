import styled from "styled-components";
import screens from "../styles/screens";
import { SectionTitle } from "./SectionTitle";
import SkillTile from "./SkillTile";
import ReactLogo from "../images/icons/react.png";
import TypeScriptLogo from "../images/icons/typescript.png";
import SassLogo from "../images/icons/sass.png";
import StyledComponentsLogo from "../images/icons/styledComponents.png";
import TailwindLogo from "../images/icons/tailwind.svg";
import FramerMotionLogo from "../images/icons/framerMotion.png";
import ReactSpringLogo from "../images/icons/reactSpring.png";
import NodeLogo from "../images/icons/nodejs.png";
import ExpressLogo from "../images/icons/express.png";
import MongoLogo from "../images/icons/mongodb.png";
import MongooseLogo from "../images/icons/mongoose.png";
import PassportLogo from "../images/icons/passportjs.png";
import FirebaseLogo from "../images/icons/firebase.png";
import GitLogo from "../images/icons/git.png";
import NpmLogo from "../images/icons/npm.png";
import WebpackLogo from "../images/icons/webpack.png";
import HerokuLogo from "../images/icons/heroku.png";
import GitHubLogo from "../images/icons/github.png";
import JestLogo from "../images/icons/jest.png";

const StyledSection = styled.section`
  width: 100%;
`;

const SkillSection = styled.div``;

const SectionSubTitle = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0 0.5rem 0;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  gap: 1rem;

  @media screen and (min-width: ${screens.md}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const Skills = () => {
  return (
    <StyledSection>
      <SectionTitle>Skills</SectionTitle>
      <SkillSection>
        <SectionSubTitle>front-end</SectionSubTitle>
        <SkillGrid>
          <SkillTile link="https://reactjs.org" img={ReactLogo} title="react" />
          <SkillTile
            link="https://www.typescriptlang.org"
            img={TypeScriptLogo}
            title="TypeScript"
          />
          <SkillTile link="https://sass-lang.com" img={SassLogo} title="sass" />
          <SkillTile
            link="https://styled-components.com"
            img={StyledComponentsLogo}
            title="styled components"
          />
          <SkillTile
            link="https://tailwindcss.com"
            img={TailwindLogo}
            title="tailwindcss"
          />
          <SkillTile
            link="https://www.framer.com/motion/"
            img={FramerMotionLogo}
            title="framer motion"
          />
          <SkillTile
            link="https://react-spring.io"
            img={ReactSpringLogo}
            title="react-spring"
          />
        </SkillGrid>
      </SkillSection>
      <SkillSection>
        <SectionSubTitle>back-end</SectionSubTitle>
        <SkillGrid>
          <SkillTile
            link="https://nodejs.org/en/"
            img={NodeLogo}
            title="nodejs"
          />
          <SkillTile
            link="https://expressjs.com"
            img={ExpressLogo}
            title="express"
          />
          <SkillTile
            link="https://www.mongodb.com"
            img={MongoLogo}
            title="mongoDB"
          />
          <SkillTile
            link="https://mongoosejs.com"
            img={MongooseLogo}
            title="mongoose"
          />
          <SkillTile
            link="https://www.passportjs.org"
            img={PassportLogo}
            title="passportjs"
          />
          <SkillTile
            link="https://firebase.google.com"
            img={FirebaseLogo}
            title="firebase"
          />
        </SkillGrid>
      </SkillSection>
      <SkillSection>
        <SectionSubTitle>other</SectionSubTitle>
        <SkillGrid>
          <SkillTile link="https://git-scm.com" img={GitLogo} title="git" />
          <SkillTile link="https://www.npmjs.com" img={NpmLogo} title="npm" />
          <SkillTile
            link="https://webpack.js.org"
            img={WebpackLogo}
            title="webpack"
          />
          <SkillTile
            link="https://www.heroku.com"
            img={HerokuLogo}
            title="heroku"
          />
          <SkillTile
            link="https://github.com"
            img={GitHubLogo}
            title="GitHub"
          />
          <SkillTile link="https://jestjs.io" img={JestLogo} title="jest" />
        </SkillGrid>
      </SkillSection>
    </StyledSection>
  );
};

export default Skills;
