import { FC } from "react";
import styled from "styled-components";
import screens from "../styles/screens";

interface IntBuiltWithTile {
  img: string;
  title: string;
  link: string;
}

const Container = styled.a``;

const Tile = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 13px -5px #7d7d7d;
  box-shadow: 0px 0px 13px -5px #7d7d7d;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  object-fit: contain;
  object-position: center;
  height: 100%;
  width: 100%;
  padding: 0.15rem;
  @media screen and (min-width: ${screens.md}) {
    padding: 0.3rem;
  }
`;

const BuiltWithTile: FC<IntBuiltWithTile> = ({ img, title, link }) => {
  return (
    <Container href={link} target="_blank">
      <Tile>
        <Image src={img} alt={title} />
      </Tile>
    </Container>
  );
};

export default BuiltWithTile;
