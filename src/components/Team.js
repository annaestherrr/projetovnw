//Libs
import React, { useState } from "react";
import styled from "styled-components";

import Cards from "../components/Cards.js"

const Container = styled.div`
 border: red solid;
 padding: 8rem;
`;

const Title = styled.h1`
  font-family: Montserrat, ExtraBold;
  font-size: 2rem;
  font-weight: 900;
  color: #0f2260;
  margin-bottom: 0.6rem;
`;

export default function Team(){
  return (
  <Container>
  <Title>Equipe</Title>
  <Cards/>
  </Container>
  )
}