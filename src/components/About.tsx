import styled from "styled-components";
import colours from "../styles/colours";
import DarkMode from "../interfaces/DarkMode";
import { useTheme } from "../contexts/Theme";
import screens from "../styles/screens";

const StyledSection = styled.section``;

const SectionTitle = styled.h1`
  font-size: 3rem;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${screens.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const TextContainer = styled.div`
  display: grid;
  place-items: center;
  /* margin: 1rem; */
`;

const Quote = styled.aside<DarkMode>`
  font-size: 1.5rem;
  margin: 1rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.primary : colours.light.primary};
  text-align: center;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const About = () => {
  const darkMode = useTheme();
  return (
    <StyledSection>
      <SectionTitle>About</SectionTitle>
      <Layout>
        <TextContainer>
          <Quote darkMode={darkMode}>
            "A career based on creativity, constant learning, and cutting edge
            technology. The potential to touch the lives of billions. What's not
            to love?"
          </Quote>
        </TextContainer>
        <TextContainer>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            odit doloribus distinctio nihil consectetur, placeat veritatis.
            Dolores libero assumenda exercitationem ullam, sapiente voluptatibus
            consequatur unde eos aut saepe iusto mollitia.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            odit doloribus distinctio nihil consectetur, placeat veritatis.
            Dolores libero assumenda exercitationem ullam, sapiente voluptatibus
            consequatur unde eos aut saepe iusto mollitia.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            odit doloribus distinctio nihil consectetur, placeat veritatis.
            Dolores libero assumenda exercitationem ullam, sapiente voluptatibus
            consequatur unde eos aut saepe iusto mollitia.
          </Paragraph>
        </TextContainer>
      </Layout>
    </StyledSection>
  );
};

export default About;
