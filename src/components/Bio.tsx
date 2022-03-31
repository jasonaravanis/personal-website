import styled from "styled-components";
import colours from "../styles/colours";
import DarkMode from "../interfaces/DarkMode";
import { useTheme } from "../contexts/Theme";
import screens from "../styles/screens";
import { SectionTitle } from "./SectionTitle";
import headshot from "../images/photos/headshot.jpeg";
import { motion } from "framer-motion";

const Layout = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  place-items: center;

  @media screen and (min-width: ${screens.md}) {
    grid-template-columns: 1fr 1fr;
  } */
`;

const Aside = styled.aside<DarkMode>`
  margin: 1rem;
  aspect-ratio: 5 / 2;
  width: clamp(330px, 50vw, 500px);
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    props.darkMode ? colours.dark.seven : colours.light.seven};
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  @media screen and (min-width: ${screens.md}) {
    float: right;
  }
`;

const Photo = styled.img`
  object-fit: cover;
  height: 100%;
`;

const TextContainer = styled.div<DarkMode>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.darkMode ? colours.dark.two : colours.light.two};
  padding: 1rem;
  border-radius: 25px;
  color: ${(props) =>
    props.darkMode ? colours.dark.seven : colours.light.seven};

  @media screen and (min-width: ${screens.md}) {
    display: block;
  }
`;

const Quote = styled.span<DarkMode>`
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
  display: grid;
  place-items: center;
  margin: 0.5rem;
  color: ${(props) => (props.darkMode ? colours.dark.one : colours.light.one)};
  text-align: center;

  @media screen and (min-width: ${screens.lg}) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  margin: 0.25rem 0 0.25rem 0;
`;

const About = () => {
  const darkMode = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 1.2,
        delay: 0.5,
      }}
    >
      <SectionTitle>About</SectionTitle>
      <Layout>
        <TextContainer darkMode={darkMode}>
          <Paragraph>
            Back in early 2020 I had a great job as an economist. So, why did I
            become a self-taught developer?
          </Paragraph>
          <Paragraph>
            While economic forecasting was interesting, I find deeper value in
            creating something that solves a real world problem. Whether that's
            building a website, an API, or a mobile app, I love the ability to
            connect the dots and create something real. The ability to scale a
            small app into something that reaches billions of users continually
            amazes me.
          </Paragraph>
          <Aside darkMode={darkMode}>
            <Photo src={headshot} alt="headshot of Jason" />
            <Quote darkMode={darkMode}>
              "A career based on creativity, constant learning, and cutting edge
              technology. The potential to touch the lives of billions. What's
              not to love?"
            </Quote>
          </Aside>
          <Paragraph>
            In my mind, the best parts of web development come from the
            intersection of cutting edge technology, creative design, and the
            relentless pursuit of doing things just a little bit more
            efficiently.
          </Paragraph>
          <Paragraph>
            In many ways, economics and programming aren't so different. It's
            all about breaking a big problem into small parts, working well in a
            team, and effective use of resources.
          </Paragraph>
          <Paragraph>
            Check out my projects below, and get in touch if you like what you
            see!
          </Paragraph>
        </TextContainer>
      </Layout>
    </motion.div>
  );
};

export default About;
