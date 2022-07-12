//Libs
import React from "react";
import styled from "styled-components";

//Image
import ImgEventos from "../assets/ImgEventos.png";

//Style
const Container = styled.div`
  width: 100%;
  margin-bottom: 6rem;
`;

const Title = styled.h1`
  font-family: Montserrat, ExtraBold;
  font-size: 2rem;
  font-weight: 900;
  color: #0f2260;
  margin-bottom: 2rem;
  margin-left: 10rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const BoxImage = styled.div`
  width: 80%;
  margin-left: 3rem;

  img {
    width: 100%;
  }
`;

const BoxText = styled.div`
  width: 15%;
  margin-left: -4rem;

  h2 {
    color: #0f2260;
    font-size: 1.2rem;
    font-family: Montserrat, Bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
    font-weight: 500;
    font-family: Montserrat, Medium;
  }
`;

export default function Events() {
  return (
    <Container id="Events">
      <Title>Eventos</Title>
      <Content>
        <BoxImage>
          <img src={ImgEventos} alt="Imagem de um evento Tech Girls" />
        </BoxImage>
        <BoxText>
          <h2>Tech Girls</h2>
          <p>
            Com o objetivo de promover network entre mulheres de tecnologia,
            conectar talentos femininos com oportunidades no mercado da
            tecnologia, oferecer experiências de troca através de eventos com
            mulheres que já têm experiência no mercado da tecnologia, acelerar
            os talentos com ajuda para custeio de luz e internet para facilitar
            o processo de estudo, promover mentoria para as participantes do
            grupo.
          </p>
        </BoxText>
      </Content>
    </Container>
  );
}
