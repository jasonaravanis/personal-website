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

const StyledSection = styled.section`
  width: 100%;
`;

const ContactGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));

  @media screen and (min-width: ${screens.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const Contact = () => {
  return (
    <StyledSection>
      <SectionTitle>Contact</SectionTitle>
      <ContactGrid>
        <ContactBubble
          link="https://twitter.com/IamJasonA"
          Icon={<AiOutlineTwitter />}
        />
        <ContactBubble
          link="https://www.linkedin.com/in/jason-aravanis"
          Icon={<AiOutlineLinkedin />}
        />
        <ContactBubble
          link="https://github.com/Atlas-1510"
          Icon={<AiOutlineGithub />}
        />
        <ContactBubble
          link="mailto:j.aravanis@icloud.com"
          Icon={<AiOutlineMail />}
        />
      </ContactGrid>
    </StyledSection>
  );
};

export default Contact;
