import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";
import SkillTile from "./SkillTile";
import ReactLogo from "../images/icons/react.png";
import TypeScriptLogo from "../images/icons/typescript.png";
import SassLogo from "../images/icons/sass.png";
import StyledComponentsLogo from "../images/icons/styledComponents.png";
import TailwindLogo from "../images/icons/tailwind.svg";
import FramerMotionLogo from "../images/icons/framerMotion.png";
import ReactSpringLogo from "../images/icons/reactSpring.png";

const StyledSection = styled.section`
  width: 100%;
`;

const SkillSection = styled.div``;

const SectionSubTitle = styled.h2`
  font-size: 2rem;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
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
    </StyledSection>
  );
};

export default Skills;
