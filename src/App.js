import React from "react";
import styled from "styled-components";

// COMPONENTS
import Header from "./components/Header";
import Accordion from "./components/Accordion";

// STYLES
import "./styles/global.css";

// GUEST IMAGES
import elias from './images/Elias.png'
import debonita from './images/Debonita.png'
import elisa from './images/Elisa.png'

const App = () => {

  const generateId = (index) => {
    return "100" + index.toString()
  }

  const guests = [
    {
      id: generateId(1),
      name: "Elias Beck",
      description: "Forbes Magazine 30 under 30",
      image: elias,
    },
    {
      id: generateId(2),
      name: "Debonita Deore",
      description: "Cosmopoliton Best Travel Blogger",
      image: debonita,
    },
    {
      id: generateId(3),
      name: "Elisa Varoud",
      description: "Actress, This is Enchanting",
      image: elisa,
    },
  ];

  return (
    <>
      <RootContainer>
        <div className="inner-container">
          <Header />
          <Accordion guests={guests} />
        </div>
      </RootContainer>
    </>
  );
};

const RootContainer = styled.div`
  width: 100%;
  margin: 0;

  .inner-container {
    max-width: 1200px;
    margin: auto;
    padding: 1rem;
    padding-bottom: 8rem;

    @media (max-width: 750px) {
      padding-top: 22rem;
    }
    @media (max-width: 500px) {
      padding-top: 18rem;
    }
  }
`;

export default App;
