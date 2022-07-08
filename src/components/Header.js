//Libs
import React from "react";
import styled from "styled-components";

//Image
import LogoVnW from "../assets/LogoVnW.png";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Logo = styled.div`
  width: 10%;
  height: 3.5rem;

  img {
    width: 4rem;
    height: 3rem;
    position: fixed;

    :hover {
      cursor: pointer;
    }
  }
`;

const Nav = styled.nav`
  width: 90%;
  display: flex;
`;

const ListHeader = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  li {
    font-family: Montserrat, Regular;
    font-size: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: white;
    text-align: center;
    border: transparent solid 2px;
    border-radius: 12px;

    :hover {
      cursor: pointer;
      border-color: #FFAC2D;
      transition: all 0.5s;
    }
  }
`;

export default function Header() {
  return (
    <Container >
      <Logo>
        <img src={LogoVnW} alt="Logo Vai na Web" />
      </Logo>
      <Nav>
        <ListHeader>
          <li>Sobre</li>
          <li>Formação</li>
          <li>Equipe</li>
          <li>Eventos</li>
          <li>Contatos</li>
        </ListHeader>
      </Nav>
    </Container>
  );
}
