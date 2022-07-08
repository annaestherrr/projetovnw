//Libs
import React from "react";
import styled from "styled-components";

//Components
import HeaderOk from "../components/Header.js";

//Image
import BackgroundVnW from "../assets/BackgroundVnW.png";

const Container = styled.div`
  background-image: url(${BackgroundVnW});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  padding: 8rem;
`;

const TitleBox = styled.div`
  width: 80%;
  display: flex;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: Montserrat, ExtraBold;
  font-size: 2.5rem;
  color: #ffac2d;

  span{
    font-family: Montserrat, Light;
    color: #ff611e;
    font-size: 2rem;
    font-weight: 100;
  }
`;

const WhiteBox = styled.div`
  width: 30rem;
  height: 9rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background-color: white;
  border-radius: 10px;
  border: transparent;

  h2 {
    font-family: Montserrat, Medium;
    font-size: 2rem;
    color: #191970;
  }
`;
const DrawingBox = styled.div`
  width: 27rem;
  display: flex;
  flex-direction: column;
`;

const BallBox = styled.div`
  width: 2.5rem;
  height: 1rem;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
`;

const ItemBall = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 10px;
  background-color: #191970;
`;

const LineDrawing = styled.div`
  width: 26rem;
  height: 0.3rem;
  border-radius: 10px;
  background-color: #191970;
`;

const DateBox = styled.div`
  width: 60%;
  display: flex;
`;

const PInscrição = styled.p`
  font-family: Montserrat, Medium;
  font-size: 1.2rem;
  font-weight: 500;
`;

const PDate = styled.p`
  font-family: Montserrat, Regular;
  font-size: 1.2rem;
  margin-left: 0.3rem;
`;

const LinkBox = styled.div`
  width: 30rem;
  display: flex;
  margin-top: 0.5rem;
`;

const PLink1 = styled.p`
  font-family: Montserrat, Regular;
  color: #fed5b2;
  font-weight: 600;
`;

const PLink2 = styled.p`
  font-family: Montserrat, Regular;
  color: #fed5b2;
  margin-left: 0.3rem;
`;

export default function Cover() {
  return (
    <Container>
      <HeaderOk />
      <Content>
        <TitleBox>
          
          <Title>
            <span>//</span>
            Quer construir uma carreira de sucesso como Desencolvedor(a)
            Front-end?
          </Title>
        </TitleBox>
        <WhiteBox>
          <DrawingBox>
            <BallBox>
              <ItemBall></ItemBall>
              <ItemBall></ItemBall>
              <ItemBall></ItemBall>
            </BallBox>
            <LineDrawing></LineDrawing>
          </DrawingBox>
          <h2>Increva-se no Vai na Web!</h2>
          <DateBox>
            <PInscrição>Incrições</PInscrição>
            <PDate>02 a 21 de Agosto</PDate>
          </DateBox>
        </WhiteBox>
        <LinkBox>
          <PLink1>Link para o formulário:</PLink1>
          <PLink2>bit.ly/CarreiraVaiNaWeb</PLink2>
        </LinkBox>
      </Content>
    </Container>
  );
}
