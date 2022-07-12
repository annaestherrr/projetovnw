//Libs
import React from "react";
import styled from "styled-components";

//Image
import ImgContatos from "../assets/ImgContatos.png";
import IconFacebook from "../assets/facebook.png";
import IconInstagram from "../assets/insta.png";
import IconLinkedIn from "../assets/linkedin.png";
import IconMedium from "../assets/medium.png";
import IconYoutube from "../assets/youtube.png";

//Styled
const Container = styled.div`
  background-image: url(${ImgContatos});
  width: 100%;
  height: 20rem;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #ffffff;
    font-size: 2rem;
    font-family: Montserrat, ExtraBold;
    margin-left: 9rem;
  }
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin-left: 9rem;
  margin-top: 5rem;

  p {
    width: 15rem;
    color: #ffffff;
    font-size: 1rem;
    font-family: Montserrat, Bold;
    font-weight: 500;
  }
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;

  :hover {
    cursor: pointer;
  }
`;

export default function Contacts() {
  return (
    <Container id="Contacts">
      <h1>Contatos</h1>
      <Content>
        <p>
          Siga nossas redes sociais e fique conectado com todas as novidades.
        </p>
        <a href="https://www.facebook.com/">
          <Icon src={IconFacebook} alt="Icone do Facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <Icon src={IconInstagram} alt="Icone do Instagram" />
        </a>
        <a href="https://www.linkedin.com/">
          <Icon src={IconLinkedIn} alt="Icone do LinkedIn" />
        </a>
        <a href="https://www.medium.com/">
          =
          <Icon src={IconMedium} alt="Icone do Medium" />
        </a>
        <a href="https://www.youtube.com/">
          <Icon src={IconYoutube} alt="Icone do Youtube" />
        </a>
      </Content>
    </Container>
  );
}
