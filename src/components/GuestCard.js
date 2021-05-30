import React from "react";
import styled from "styled-components";

export default function GuestCard({ name = "", description = "", image = "" }) {
  return (
    <CardContainer>
      <img src={image} alt={name}/>
      <h3>{name}</h3>
      <p>{description}</p>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 775px) {
    margin-bottom: 3rem;
  }

  img {
    border-radius: 50%;
    max-width: 150px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  p {
      padding: 0 1rem;
  }
`;
