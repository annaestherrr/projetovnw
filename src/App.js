//Libs
import React from "react";
import { createGlobalStyle } from "styled-components";

//Components
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}
