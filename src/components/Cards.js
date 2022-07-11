//Libs
import React, { useState } from "react";
import styled from "styled-components";

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


const Container = styled.div`
  border: yellow solid;
`;

const ContentCards = styled.div`
  border: blue solid;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
 
`;

const BoxInput = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding-left: 8rem;
  background-color: #0F2260;
`;

const Input = styled.input`
  border: red solid;
  width: 10rem;
  height: 1.5rem;
  color: white;
  font-size: 1rem;
  font-family: Montserrat, Medium Italic;
  background-color: transparent;
  border: white solid 1px;
`;

const BoxCards = styled.ul`
  border: green solid;
  width: 15rem;
  height: 20rem;
  list-style: none;

li{
  font-family: Montserrat, Regular;
  font-size: 1rem;
  font-weight: 600;
}

p{
  font-family: Montserrat, Regular;
  font-size: 0.8rem; 
}
`;

const ContainerImages = styled.div`
  border: red solid;
  width: 100%;
  height: 15rem;

  img{
    width: 100%;
    height: 100%;
  }
`;

const BoxData = styled.div`
  border: red solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const ListaColaboradores = [
 {
  nome: "Dimitri Duque",
  foto: DimitriDuque
},
{
  nome: "Hugo Sabino",
  foto: HugoSabino
},
{
  nome: "Karla De Melo",
  foto: KarlaDeMelo
},
{
  nome: "Paula Misan",
  foto: PaulaMisan
},
{
  nome: "Thais Brait",
  foto: ThaisBrait
},
{
  nome: "Aline Froés",
  foto: AlineFroes
},
{
  nome: "Aline Nogueira",
  foto: AlineNogueira
},
{
  nome: "Andrea Marinho",
  foto: AndreaMarinho
},
{
  nome: "Cris Dos Prazeres",
  foto: CrisDosPrazeres
},
{
  nome: "Karynne Moreira",
  foto: KarynneMoreira
},
{
  nome: "Luzia Melim",
  foto: LuziaMelim
},
{
  nome: "Mariana Correia",
  foto: MarianaCorreia
},
{
  nome: "Marina Tiago",
  foto: MarinaTiago
},
{
  nome: "Marlon Yuri",
  foto: MarlonYuri
},
{
  nome: "Priscila Tufani",
  foto: PriscilaTufani
},
];

export default function Cards() {
  const [busca, setBusca] = useState("");

    const ListaFiltrada = ListaColaboradores.filter((user) =>
      user.nome.toLowerCase().includes(busca.toLowerCase())
    );

  return (
    <Container>
      <BoxInput>
      <Input
        type="text"
        placeholder="Pesquisar..."
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      /> 
      </BoxInput>

    <ContentCards>

        {ListaFiltrada.map((user) => (

          <BoxCards>

        <ContainerImages> 
          <img src={user.foto} alt="Imagem dos Colaboradores" />
          <BoxData>
          <li key={user.nome}>{user.nome}</li>
          <p>#Voluntários</p>
          </BoxData>
          </ContainerImages>
        
      
        </BoxCards>

        ))}

    </ContentCards>
    </Container>
  );
}