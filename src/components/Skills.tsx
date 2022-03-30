import styled from "styled-components";
import screens from "../styles/screens";
import { SectionTitle } from "./SectionTitle";
import SkillTile from "./SkillTile";
import skills from "../utils/skills";
import Section from "./Section";
import colours from "../styles/colours";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/Theme";
import DarkMode from "../interfaces/DarkMode";

const ContentContainer = styled.div<DarkMode>`
  background-color: ${(props) =>
    props.darkMode ? colours.dark.two : colours.light.two};
  color: ${colours.light.seven};
  border-radius: 25px;
  padding: 0.2rem 1rem 1rem 1rem;
`;

const SkillSection = styled(motion.div)``;

const SectionSubTitle = styled(motion.h2)`
  font-size: 2rem;
  margin: 0.5rem 0 0.5rem 0;
`;

const SkillGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
  gap: 1rem;

  @media screen and (min-width: ${screens.md}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const frontEndSkills = [
  skills.react,
  skills.sass,
  skills.tailwindcss,
  skills.styledComponents,
  skills.framerMotion,
  skills.reactSpring,
];

const backEndSkills = [
  skills.nodejs,
  skills.express,
  skills.firebase,
  skills.mongoDB,
  skills.mongoose,
  skills.passportjs,
];

const otherSkills = [
  skills.typescript,
  skills.webpack,
  skills.heroku,
  skills.git,
  skills.gitHub,
  skills.jest,
  skills.npm,
];

const animation = {
  visible: {
    transition: {
      type: "tween",
      duration: 1.5,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  hidden: {},
};

const SkillSectionAnimation = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  hidden: {
    x: "20vw",
    opacity: 0,
  },
};

const Skills = () => {
  const darkMode = useTheme();
  return (
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ContentContainer darkMode={darkMode}>
          <SkillSection variants={SkillSectionAnimation}>
            <SectionSubTitle>front-end</SectionSubTitle>
            <SkillGrid>
              {frontEndSkills.map((skill) => (
                <SkillTile key={skill.title} skill={skill} />
              ))}
            </SkillGrid>
          </SkillSection>
          <SkillSection variants={SkillSectionAnimation}>
            <SectionSubTitle>back-end</SectionSubTitle>
            <SkillGrid>
              {backEndSkills.map((skill) => (
                <SkillTile key={skill.title} skill={skill} />
              ))}
            </SkillGrid>
          </SkillSection>
          <SkillSection variants={SkillSectionAnimation}>
            <SectionSubTitle>other</SectionSubTitle>
            <SkillGrid>
              {otherSkills.map((skill) => (
                <SkillTile key={skill.title} skill={skill} />
              ))}
            </SkillGrid>
          </SkillSection>
        </ContentContainer>
      </motion.div>
    </Section>
  );
};

export default Skills;
