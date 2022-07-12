//Libs
import React from "react";
import styled from "styled-components";

//Image
import ImgFormation from "../assets/ImgFormation.png";
import IconFormation from "../assets/IconFormation.png";

//Style
const Container = styled.div`
  width: 100%;
  display: flex;
`;

const ContainerText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6rem;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: Montserrat, ExtraBold;
  font-size: 2rem;
  font-weight: 900;
  color: #0f2260;
  margin-bottom: 1rem;
`;

const BoxContent1 = styled.div`
  width: 20rem;
  height: 8rem;
  display: flex;
`;

const BoxContent2 = styled.div`
  width: 20rem;
  height: 12rem;
  display: flex;
`;

const Circle = styled.div`
  width: 6.5rem;
  height: 5rem;
  border-radius: 50px;
  background-color: #fde7a9;
  display: flex;
  align-items: center;
  justify-content: center;
  border: dotted #FFAC2D 3px;
`;

const IconImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const ContentText = styled.div`
  width: 20rem;
  padding-left: 1rem;

  p {
    font-family: Montserrat, Medium;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const SubTitle = styled.h2`
  font-family: Montserrat, Bold;
  font-size: 1rem;
  color: #0f2260;
  padding-bottom: 0.6rem;
`;

const ImageBox = styled.div`
  width: 50%;
  height: 25rem;
`;

const FormationImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Formation() {
  return (
    <Container id="Formation">
      <ContainerText>
        <Title>Formação</Title>

        <BoxContent1>
          <Circle>
            <IconImage src={IconFormation} alt="Icone de computador" />
          </Circle>
          <ContentText>
            <SubTitle>FRONT-END</SubTitle>
            <p>
              Quem trabalha com Front End é responsável por desenvolver por meio
              do código uma interface gráfica e, normalmente, com as tecnologias
              base da Web: HTML, CSS e JavaScript.
            </p>
          </ContentText>
        </BoxContent1>

        <BoxContent2>
          <Circle>
            <IconImage src={IconFormation} alt="Icone de computador" />
          </Circle>
          <ContentText>
            <SubTitle>BACK-END</SubTitle>
            <p>
              O Back-End trabalha em boa parte dos casos fazendo a ponte entre
              os dados que vem do navegador rumo ao banco de dados e vice-versa,
              sempre aplicando as devidas regras de negócio, validações e
              garantias num ambiente restrito ao usuário final (ou seja, onde
              ele não consegue acessar ou manipular algo).
            </p>
          </ContentText>
        </BoxContent2>
      </ContainerText>
      <ImageBox>
        <FormationImage src={ImgFormation} alt="" />
      </ImageBox>
    </Container>
  );
}
