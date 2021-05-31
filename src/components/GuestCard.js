import React from 'react';
import styled from 'styled-components';

export default function GuestCard({
  name = '',
  description = '',
  image = '',
  id = '',
  setCurrentGuestId,
  setShowModal
}) {

  const handleClick = () => {
    setShowModal(true)
    setCurrentGuestId(id)
  }

  return (
    <CardContainer>
      <button onClick={handleClick}>
        <img src={image} alt={name} />
      </button>
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

  button {
    background: none;
    border: none;
    padding: 0;

    img {
      border-radius: 50%;
      max-width: 150px;
      max-height: 150px;
      margin-bottom: 1rem;
      cursor: pointer;

      @media(max-width: 700px) {
        max-width: 200px;
        max-height: 200px;
      }
    }
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
