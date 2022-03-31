import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";
import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";

import ContactBubble from "./ContactBubble";
import screens from "../styles/screens";
import colours from "../styles/colours";
import Section from "./Section";
import DarkMode from "../interfaces/DarkMode";
import { useTheme } from "../contexts/Theme";

const Footer = styled.footer<DarkMode>`
  background-color: ${(props) =>
    props.darkMode ? colours.dark.one : colours.light.one};
  color: ${colours.light.seven};
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const CentralContainer = styled.div`
  padding: 1rem;
  width: 90vw;
  max-width: ${screens.lg};
`;

const ContactGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));

  @media screen and (min-width: ${screens.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const ResumePrompt = styled.span`
  display: block;
  text-align: center;
  margin: 2rem;
  font-size: 3rem;
`;

const Contact = () => {
  const darkMode = useTheme();
  return (
    <Footer darkMode={darkMode} id="contact">
      <CentralContainer>
        <SectionTitle color="white">Contact</SectionTitle>
        <ContactGrid>
          <ContactBubble
            link="https://twitter.com/IamJasonA"
            Icon={<AiOutlineTwitter />}
            hoverBackgroundColor="#009EF7"
            hoverIconColor="white"
          />
          <ContactBubble
            link="https://www.linkedin.com/in/jason-aravanis"
            Icon={<AiOutlineLinkedin />}
            hoverBackgroundColor="#0072b1"
            hoverIconColor="white"
          />
          <ContactBubble
            link="https://github.com/Atlas-1510"
            Icon={<AiOutlineGithub />}
            hoverBackgroundColor="#171515"
            hoverIconColor="white"
          />
          <ContactBubble
            link="mailto:j.aravanis@icloud.com"
            Icon={<AiOutlineMail />}
            hoverBackgroundColor="#A73946"
            hoverIconColor="white"
          />
        </ContactGrid>
        <ResumePrompt>Click here to download my resume!</ResumePrompt>
      </CentralContainer>
    </Footer>
  );
};

export default Contact;
