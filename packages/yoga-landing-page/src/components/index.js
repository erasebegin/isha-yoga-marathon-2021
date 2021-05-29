import React from "react";
import { connect, styled, Global, css, Head } from "frontity";

// COMPONENTS

import Header from "./Header";
import Accordion from "./Accordion";

// STYLES
import global from "../styles/global.css";

const Root = ({ state }) => {
  // fetch current url
  const data = state.source.get(state.router.link);

  const guests = [
    {
      id: 1,
      name: "Elias Beck",
      description: "Forbes Magazine 30 under 30",
      image: "/Elias.png",
    },
    {
      id: 2,
      name: "Debonita Deore",
      description: "Cosmopoliton Best Travel Blogger",
      image: "/Debonita.png",
    },
    {
      id: 3,
      name: "Elisa Varoud",
      description: "Actress, This is Enchanting",
      image: "/Elisa.png",
    },
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,900;1,200;1,300&family=Merriweather:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global styles={css(global)} />
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

    @media (max-width: 700px) {
      padding-top: 22rem;
    }
    @media (max-width: 500px) {
      padding-top: 15rem;
    }
  }
`;

export default connect(Root);
