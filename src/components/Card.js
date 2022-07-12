//Libs
import React from "react";
import styled from "styled-components";

//Style
const BoxCards = styled.ul`
  width: 16rem;
  height: 15rem;
  list-style: none;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
`;

const ItemPhoto = styled.li`
  font-family: Montserrat, Regular;
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;

const ItemDescription = styled.li`
  font-family: Montserrat, Regular;
  font-size: 0.8rem;
  color: white;
`;

const ContainerImages = styled.div`
  width: 100%;
  height: 15rem;

  img {
    width: 100%;
    height: 100%; 
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  bottom: 3.5rem;
`;

//passando por props o user
export default function Card({ user }) {
  return (
    <BoxCards>
      <ContainerImages>
        <img src={user.photo} alt="Foto dos Colaboradores" />
        <Description>
          <ItemPhoto key={user.name}>{user.name}</ItemPhoto>
          <ItemDescription key={user.description}>
            {user.description}
          </ItemDescription>
        </Description>
      </ContainerImages>
    </BoxCards>
  );
}
