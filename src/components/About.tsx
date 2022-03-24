import styled from "styled-components";
import colours from "../styles/colours";
import DarkMode from "../interfaces/DarkMode";
import { useTheme } from "../contexts/Theme";
import screens from "../styles/screens";
import { SectionTitle } from "./SectionTitle";
import Section from "./Section";
import headshot from "../images/photos/headshot.jpeg";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  @media screen and (min-width: ${screens.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Aside = styled.aside`
  max-width: 70vw;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: white;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const Photo = styled.img`
  object-fit: cover;
  height: 100%;
`;

const TextContainer = styled.div<DarkMode>`
  display: grid;
  place-items: center;
  margin: 1rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.textWhite : colours.light.textBlack};
`;

const Quote = styled.span<DarkMode>`
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
  display: grid;
  place-items: center;
  margin: 1rem;
  color: ${(props) =>
    props.darkMode ? colours.dark.highlight : colours.light.highlight};
  text-align: center;

  @media screen and (min-width: ${screens.md}) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
`;

const About = () => {
  const darkMode = useTheme();
  return (
    <Section id="about" lightBackground="#C5DEDD" darkBackground="black">
      <SectionTitle>About</SectionTitle>
      <Layout>
        <Aside>
          <Photo src={headshot} alt="headshot of Jason" />
          <Quote darkMode={darkMode}>
            "A career based on creativity, constant learning, and cutting edge
            technology. The potential to touch the lives of billions. What's not
            to love?"
          </Quote>
        </Aside>
        <TextContainer darkMode={darkMode}>
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
    </Section>
  );
};

export default About;
