import React, { useState } from 'react';
import styled from 'styled-components';
import {guests, events} from './data';

// COMPONENTS
import Header from './components/Header';
import Accordion from './components/Accordion';
import Modal from './components/Modal';

// STYLES
import './styles/global.css';

const App = () => {

  const [currentGuestId, setCurrentGuestId] = useState('1001');
  const [currentEvent, setCurrentEvent] = useState({});
  const [showModal, setShowModal] = useState(false);

  const getGuestById = (id) => {
    const filteredArr = guests.filter((guest) => id === guest.id);
    return filteredArr[0];
  };

  const getEventById = (id) => {
    const filteredArr = events.filter((event) => id === event.id);
    console.log({filteredArr})
    return filteredArr[0];
  };

  return (
    <>
      <RootContainer>
        <div className="inner-container">
          <Header />
          <Accordion
            guests={guests}
            setCurrentGuestId={setCurrentGuestId}
            setShowModal={setShowModal}
          />
          <Modal
            currentGuest={getGuestById(currentGuestId)}
            currentEvent={getEventById(getGuestById(currentGuestId).eventId)}
            events={currentEvent}
            showModal={showModal}
            setShowModal={setShowModal}
          />
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
