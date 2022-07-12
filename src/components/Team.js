//Libs
import React, { useState } from "react";
import styled from "styled-components";

//Component
import Card from "../components/Card.js";

//Image
import DimitriDuque from "../assets/DimitriDuque-1.jpg";
import HugoSabino from "../assets/HugoSabino-2.jpg";
import KarlaDeMelo from "../assets/KarlaDeMelo-3.jpg";
import PaulaMisan from "../assets/PaulaMisan-4.jpg";
import ThaisBrait from "../assets/ThaisBrait-5.jpg";
import AlineFroes from "../assets/AlineFroes-6.jpg";
import AlineNogueira from "../assets/AlineNogueira-7.jpg";
import AndreaMarinho from "../assets/AndreaMarinho-8.jpg";
import CrisDosPrazeres from "../assets/CrisDosPrazeres-9.jpg";
import KarynneMoreira from "../assets/KarynneMoreira-10.jpg";
import LuziaMelim from "../assets/LuziaMelim-11.jpg";
import MarianaCorreia from "../assets/MarianaCorreia-12.jpg";
import MarinaTiago from "../assets/MarinaTiago-13.jpg";
import MarlonYuri from "../assets/MarlonYuri-14.jpg";
import PriscilaTufani from "../assets/PriscilaTufani-15.jpg";
import Lupa from "../assets/Lupa.png";

//Style
const Container = styled.div`
  margin: 9rem;
`;

const Title = styled.h1`
  font-family: Montserrat, ExtraBold;
  font-size: 2rem;
  font-weight: 900;
  color: #0f2260;
  margin-bottom: 2rem;
`;

const ContentCards = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const BoxInput = styled.label`
  width: 98.7%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding-left: 8rem;
  background-color: #0f2260;
  position: relative;
`;

const MagnifyingGlass = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  margin-left: 145px;
`;

const Input = styled.input`
  width: 11rem;
  height: 1.7rem;
  color: white;
  font-size: 1rem;
  font-family: Montserrat, Medium Italic;
  background-color: transparent;
  border: white solid 1px;
  border-radius: 3px;
  outline: none;
  padding: 0.1rem;

  ::placeholder {
    color: white;
  }
`;

const ListaColaboradores = [
  {
    name: "Dimitri Duque",
    photo: DimitriDuque,
    description: "#voluntários",
  },
  {
    name: "Hugo Sabino",
    photo: HugoSabino,
    description: "#voluntários",
  },
  {
    name: "Karla De Melo",
    photo: KarlaDeMelo,
    description: "#voluntários",
  },
  {
    name: "Paula Misan",
    photo: PaulaMisan,
    description: "#voluntários",
  },
  {
    name: "Thais Brait",
    photo: ThaisBrait,
    description: "#voluntários",
  },
  {
    name: "Aline Froés",
    photo: AlineFroes,
    description: "#CEO",
  },
  {
    name: "Aline Nogueira",
    photo: AlineNogueira,
    description: "#Agente Socioemocional",
  },
  {
    name: "Andrea Marinho",
    photo: AndreaMarinho,
    description: "#Psicóloga",
  },
  {
    name: "Cris Dos Prazeres",
    photo: CrisDosPrazeres,
    description: "#Coordenadora Executiva",
  },
  {
    name: "Karynne Moreira",
    photo: KarynneMoreira,
    description: "#Facilitadora Técnica",
  },
  {
    name: "Luzia Melim",
    photo: LuziaMelim,
    description: "#Agente Socioemocional",
  },
  {
    name: "Mariana Correia",
    photo: MarianaCorreia,
    description: "#Coordenadora Administrativa",
  },
  {
    name: "Marina Tiago",
    photo: MarinaTiago,
    description: "#Agente de Estratégia",
  },
  {
    name: "Marlon Yuri",
    photo: MarlonYuri,
    description: "#Instrutor Técnico",
  },
  {
    name: "Priscila Tufani",
    photo: PriscilaTufani,
    description: "#Agente de Estratégia",
  },
];

export default function Team() {
  const [search, setSearch] = useState("");

  const ListaFiltrada = ListaColaboradores.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container id="Team">
      <Title>Equipe</Title>
      <BoxInput>
        <Input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <MagnifyingGlass src={Lupa} alt="Lupa"></MagnifyingGlass>
      </BoxInput>
      <ContentCards>
        {ListaFiltrada.map((user) => (
          <Card user={user} />
        ))}
      </ContentCards>
    </Container>
  );
}
