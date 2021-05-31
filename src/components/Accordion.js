import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import GuestCard from './GuestCard';

function AccordionSection({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (title === 'How do I join?') {
      setIsOpen(true);
    }
  }, []);

  return (
    <SectionContainer>
      <div className="title-container">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
        <h2>{title}</h2>
      </div>
      <div
        className="body-container"
        style={{ opacity: isOpen ? 1 : 0, maxHeight: isOpen ? 10000 : 0 }}
      >
        {isOpen && children}
      </div>
    </SectionContainer>
  );
}

export default function Accordion({ guests, setCurrentGuestId, setShowModal }) {
  return (
    <AccordionContainer>
      <AccordionSection title="Event details and highlights">
        <p className="event-details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          harum similique, et hic tenetur tempora necessitatibus nam eaque
          tempore quis dicta excepturi perferendis vel incidunt, dolor optio?
          Praesentium, voluptatem? Quibusdam?
        </p>
      </AccordionSection>
      <AccordionSection title="How do I join?">
        <div className="how-to-join">
          <h2 className="accordion-section-title">
            Our featured guests on{' '}
            <b>
              Saturday 19<sup>th</sup>
            </b>
          </h2>
          <div className="guest-cards">
            {guests.map((guest) => (
              <GuestCard
                key={guest.id}
                id={guest.id}
                name={guest.name}
                description={guest.description}
                image={guest.image}
                setCurrentGuestId={setCurrentGuestId}
                setShowModal={setShowModal}
              />
            ))}
          </div>
          <h2 className="accordion-section-title">
            Our featured guests on{' '}
            <b>
              Sunday 20<sup>th</sup>
            </b>
          </h2>
          <div className="guest-cards">
            {guests.map((guest, index) => (
              <GuestCard
                key={index}
                id={guest.id}
                name={guest.name}
                description={guest.description}
                image={guest.image}
                setCurrentGuestId={setCurrentGuestId}
                setShowModal={setShowModal}
              />
            ))}
          </div>
        </div>
      </AccordionSection>
    </AccordionContainer>
  );
}

const SectionContainer = styled.div`
  .title-container {
    display: flex;
    align-items: center;
    padding: 1rem;
    padding-bottom: 0.5rem;

    @media (max-width: 700px) {
      margin-bottom: 3rem;
    }

    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      font-size: 2.5rem;
      color: var(--mustard);
      padding: 0;
      margin-right: 1rem;
      cursor: pointer;
    }

    h2 {
      font-weight: 400;

      @media (max-width: 700px) {
        font-size: 1.5rem;
      }
    }
  }

  .body-container {
    transition: 400ms;
  }
`;
const AccordionContainer = styled.div`
  margin-top: 2rem;

  .event-details {
    font-size: 2rem;
    font-weight: 200;
    font-style: italic;
    margin-left: 4.5rem;
  }

  .how-to-join {
    .accordion-section-title {
      font-weight: 400;
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 3rem;

      h2 {
        @media (max-width: 700px) {
          font-size: 1rem;
        }
      }
    }

    .guest-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      max-width: 750px;
      margin: auto;
      margin-bottom: 5rem;

      @media (max-width: 700px) {
        justify-content: center;
        flex-direction: column;
        margin-bottom: 3rem;
      }
    }
  }
`;
