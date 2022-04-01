import { FC, ReactNode } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import screens from "../styles/screens";

interface Props {
  Icon: ReactNode;
  link: string;
  hoverBackgroundColor: string;
  hoverIconColor: string;
}

interface IHoverColor {
  hoverBackgroundColor?: string;
  hoverIconColor?: string;
}

const Container = styled.a<IHoverColor>`
  display: grid;
  place-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0.5rem;
  color: black;
  transition: all 200ms ease-in-out;

  @media screen and (min-width: ${screens.sm}) {
    padding: 1rem;
  }

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverIconColor};
  }
`;

const ContactBubble: FC<Props> = ({
  Icon,
  link,
  hoverBackgroundColor,
  hoverIconColor,
}) => {
  return (
    <Container
      href={link}
      target="_blank"
      hoverBackgroundColor={hoverBackgroundColor}
      hoverIconColor={hoverIconColor}
    >
      <IconContext.Provider value={{ size: "100%" }}>
        {Icon}
      </IconContext.Provider>
    </Container>
  );
};

export default ContactBubble;
