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
  color: ${colours.light.primary};
`;

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
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
    </Section>
  );
};

export default Contact;