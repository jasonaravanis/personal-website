import { FC } from "react";
import styled from "styled-components";
import waveBorder from "../images/waveBorders/layered-waves-haikei-2.svg";

interface Props {
  flip?: boolean;
}

interface Flip {
  flip: boolean;
}

const Container = styled.div<Flip>`
  position: relative;
  aspect-ratio: 960/300;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${waveBorder});
  transform: ${(props) => (props.flip ? "rotate(180deg)" : "")};
`;

const WaveBorder: FC<Props> = ({ flip }) => {
  return <Container flip={flip || false}></Container>;
};

export default WaveBorder;
