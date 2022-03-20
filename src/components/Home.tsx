import styled from "styled-components";
import screens from "../styles/screens";
import professional from "../images/professional.png";
import colours from "../styles/colours";

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Zeyada";

  @media screen and (min-width: ${screens.md}) {
    flex-direction: row;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrimaryTitle = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 5rem;
  background: #ff1b6b;
  background: -webkit-linear-gradient(to right, #ff1b6b 0%, #45caff 100%);
  background: -moz-linear-gradient(to right, #ff1b6b 0%, #45caff 100%);
  background: linear-gradient(to right, #ff1b6b 0%, #45caff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: ${screens.md}) {
    align-items: flex-start;
    font-size: 7rem;
  }

  @media screen and (min-width: ${screens.lg}) {
    align-items: flex-start;
    font-size: 10rem;
  }
`;

const Subtitle = styled.span`
  position: relative;
  top: -3vw;
  font-family: "Raleway";
  font-size: 2rem;
  color: ${colours.light.primary};

  @media screen and (min-width: ${screens.md}) {
    align-items: flex-start;
    font-size: 2.5rem;
  }

  @media screen and (min-width: ${screens.lg}) {
    align-items: flex-start;
    font-size: 3rem;
  }
`;

const ProfessionalPhoto = styled.img`
  margin: 2rem;
  width: 15rem;
  border-radius: 20px;

  @media screen and (min-width: ${screens.md}) {
    width: 18rem;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <TitleContainer>
        <PrimaryTitle>
          <span>Jason</span>
          <span>Aravanis</span>
        </PrimaryTitle>
        <Subtitle>Full Stack Developer</Subtitle>
      </TitleContainer>
      <ProfessionalPhoto src={professional} alt="Professional headshot" />
    </StyledHome>
  );
};

export default Home;
