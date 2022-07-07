import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #191970;
  border: red solid;
`;

const Logo = styled.div`
  width: 10%;
  display: flex;
  align-items: flex-start;
  border: pink solid;
`;

const Nav = styled.nav`
  width: 80%;
  display: flex;
  border: gray solid;
`;

const ListHeader = styled.ul`
 width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  border: yellow solid;

  li{
    padding-left: 2rem;
    color: white;

    :hover{
      cursor: pointer;
    }
  }
`;


export default function Header() {
  return(
    <Container>
    <Logo>
      <p>IMG VainaWeb</p>
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
  )
}