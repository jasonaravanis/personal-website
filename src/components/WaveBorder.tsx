import { FC, ReactNode } from "react";
import styled from "styled-components";
import { useTheme } from "../contexts/Theme";
import waveBorder from "../images/waveBorders/layered-waves-haikei.svg";
import darkWaveBorder from "../images/waveBorders/layered-waves-haikei-DARK.svg";
import DarkMode from "../interfaces/DarkMode";

interface Props {
  children: ReactNode;
}

// code works when assigning image within TopWave like this:
// background-image: url(${(props) => props.darkMode ? darkWaveBorder : waveBorder});
// However eslint throws an error which looks like a bug (see https://github.com/styled-components/vscode-styled-components/issues/176)
// so created this function just to get around the eslint error
function chooseImage(darkMode: boolean): string {
  return darkMode ? darkWaveBorder : waveBorder;
}

const TopWave = styled.div<DarkMode>`
  position: relative;
  aspect-ratio: 960/100;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => chooseImage(props.darkMode)});
`;

const BottomWave = styled(TopWave)<DarkMode>`
  transform: rotate(180deg);
`;

const ContentContainer = styled.div`
  display: grid;
  place-items: center;
`;

const WaveBorderThin: FC<Props> = ({ children }) => {
  const darkMode = useTheme();
  return (
    <div>
      <TopWave darkMode={darkMode} />
      <ContentContainer>{children}</ContentContainer>
      <BottomWave darkMode={darkMode} />
    </div>
  );
};

export default WaveBorderThin;
