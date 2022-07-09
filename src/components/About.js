//Libs
import React from "react";
import styled from "styled-components";

//Image
import LogoVnW from "../assets/LogoVnW2.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

const ImageBox = styled.div`
  width: 50%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 18rem;
  height: 18rem
`;

const TextContainer = styled.div`
  width: 50%;
  height: 25rem;
`;

const TextBox = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    font-family: Montserrat, Medium;
    font-size: 13px;
    font-weight: 500;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: Montserrat, ExtraBold;
    color: #0f2260;
    font-size: 2rem;
    font-weight: 900;
 
  }
`;
export default function About() {
  return (
    <Container id="About">
      <ImageBox>
        <LogoImage src={LogoVnW} alt="Logo Vai na Web" />
      </ImageBox>
      <TextContainer>
        <TitleBox>
          <h1>Sobre o Vai na Web</h1>
        </TitleBox>
        <TextBox>
          <p>
            Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando
            e transformando a vida de jovens das classes C, D e E do Rio de
            Janeiro e de outros 18 estados do Brasil.{" "}
          </p>
          <p>
            Muito mais do que compartilhar conhecimento de programação
            front-end, o programa oferece aulas de inglês e desenvolvimento de
            habilidades humanas e socioemocionais, que preparam os futuros
            desenvolvedores para o mundo do trabalho e oferecem um espaço em que
            é possível descobrir a riqueza de áreas que a tecnologia tem.{" "}
          </p>
          <p>
            Com o objetivo de acentuar a potência mundial que é a juventude, o
            Vai na Web tem se tornado cada vez mais um lugar de transformação.
            Através da cultura do afeto, a equipe do programa entende que
            “educar não é impor informação, é trocar” e sua maior riqueza,
            segundo a coordenadora executiva, Cris dos Prazeres, “é respeitar a
            geração da juventude que está nesse processo de compartilhar”.
          </p>
        </TextBox>
      </TextContainer>
    </Container>
  );
}
