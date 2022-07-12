//Libs
import React from "react";
import { createGlobalStyle } from "styled-components";

//Components
import Cover from "./components/Cover.js";
import About from "./components/About.js";
import Formation from "./components/Formation.js";
import Team from "./components/Team.js";
import Events from "./components/Events.js";
import Contacts from "./components/Contacts.js";


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Cover/>
      <About/>
      <Formation/>
      <Team/>
      <Events/>
      <Contacts/>
    </>
  );
}
