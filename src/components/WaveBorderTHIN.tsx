import { FC, ReactNode } from "react";
import styled from "styled-components";
import waveBorder from "../images/waveBorders/layered-waves-haikei-THIN.svg";

interface Props {
  children: ReactNode;
}

const TopWave = styled.div`
  position: relative;
  aspect-ratio: 960/100;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${waveBorder});
`;

const BottomWave = styled(TopWave)`
  transform: rotate(180deg);
`;

const ContentContainer = styled.div`
  display: grid;
  place-items: center;
`;

const WaveBorderThin: FC<Props> = ({ children }) => {
  return (
    <div>
      <TopWave />
      <ContentContainer>{children}</ContentContainer>
      <BottomWave />
    </div>
  );
};

export default WaveBorderThin;
