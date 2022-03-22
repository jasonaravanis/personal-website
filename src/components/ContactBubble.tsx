import { FC, ReactNode } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import colours from "../styles/colours";
import screens from "../styles/screens";
const Container = styled.a`
  display: grid;
  place-items: center;
  background-color: white;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  padding: 0.5rem;

  @media screen and (min-width: ${screens.sm}) {
    padding: 1rem;
  }
`;

interface Props {
  Icon: ReactNode;
  link: string;
}

const ContactBubble: FC<Props> = ({ Icon, link }) => {
  return (
    <Container href={link} target="_blank">
      <IconContext.Provider
        value={{ color: colours.light.primary, size: "100%" }}
      >
        {Icon}
      </IconContext.Provider>
    </Container>
  );
};

export default ContactBubble;
