import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { quotes } from '../data';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({
  currentGuest,
  currentEvent,
  showModal,
  setShowModal,
  guestUrlMatch
}) {
  const {
    id: guestId,
    name,
    descriptionShort,
    descriptionFull,
    image: guestImage
  } = currentGuest ?? {};

  const {
    title,
    subtitle,
    date,
    time = '',
    isAM,
    image: eventImage
  } = currentEvent ?? {};

  const [BST, setBST] = useState([0, 'AM']);
  const [CST, setCST] = useState([0, 'AM']);

  const closeModal = (event) => {
    if (event.target.classList.contains('outer-container')) {
      setShowModal(false);
    }
  };

  const generateRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    const extractedNumber = time.match(/^[0-9]*/g);
    const trimmedNumber = extractedNumber.slice(0, 2);
    const convertedNumber = parseInt(trimmedNumber);
    setBST([convertedNumber + 1, isAM ? 'am' : 'pm']);
    setCST([convertedNumber + 2, isAM ? 'am' : 'pm']);

    if (convertedNumber + 1 > 12) {
      const AMPM = !isAM;
      setBST([convertedNumber - 11, AMPM ? 'am' : 'pm']);
    }
    if (convertedNumber + 2 > 12) {
      const AMPM = !isAM;
      setCST([convertedNumber - 10, AMPM ? 'am' : 'pm']);
    }
  }, []);

  console.log({guestId})
  console.log({guestUrlMatch})

  return (
    <ModalContainer
      showModal={showModal}
      onClick={(event) => closeModal(event)}
      className="outer-container"
    >
      <div className="modal-inner-container">
        <button className="close-button" onClick={() => setShowModal(false)}>
          <AiOutlineClose />
        </button>
        <div className="modal-header">
          <div className="header-left">
            <h1>{name}</h1>
            <p>{descriptionShort}</p>
          </div>
          <div className="header-right">
            <img src={eventImage} alt={title} />
            <div className="event-title">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div className="header-right-mobile">
            <img src={eventImage} alt={title} />
            <div className="event-title">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
          <div className="modal-body-top">
            <img src={guestImage} alt={name} />
            <p>{descriptionFull}</p>
          </div>
          <div className="modal-body-bottom">
            <h3>When?</h3>
            <p>
              {`${date} at ${time}${isAM ? 'am' : 'pm'} GMT (${
                BST[0] + BST[1]
              } BST/${CST[0] + CST[1]} CEST)`}
            </p>
            <h3>Where?</h3>
            <p>
              Watch live on <a href="#">@{name}</a>
            </p>
            <blockquote>
              {`"${quotes[generateRandom(quotes.length - 1)]}" - `}
              <span>Sadhguru</span>
            </blockquote>
          </div>
        </div>
        <div
          className="email-overlay"
          style={{ display: guestId === guestUrlMatch ? 'none' : 'flex' }}
        >
          <form>
            <input type="email" placeholder="Email Address" />
            <button>View full details</button>
          </form>
        </div>
      </div>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.showModal ? 1 : 0)};
  pointer-events: ${(props) => (props.showModal ? 'initial' : 'none')};
  transition: opacity 200ms ease-in-out;

  .modal-inner-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    padding: 0;
    max-width: 650px;
    min-width: 500px;

    @media (max-width: 600px) {
      min-width: 300px;
      width: 90%;
    }

    .close-button {
      position: absolute;
      right: 0;
      top: 0;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      padding: 0;
      padding-right: 0.3rem;
      padding-top: 0.2rem;
    }

    .modal-header {
      padding: 0.5rem 1rem;
      background: var(--beige);
      display: flex;
      justify-content: space-between;

      .header-left {
        h1 {
          color: var(--mustardDark);
          font-size: 2rem;
          font-family: 'Merriweather', serif;
          margin-bottom: 0.2em;
        }

        p {
          color: var(--greyDark);
          font-size: 1.1rem;
        }
      }

      .header-right {
        display: flex;
        align-items: center;
        padding: 0 1rem;

        @media (max-width: 600px) {
          display: none;
        }

        img {
          max-width: 50px;
          max-height: 50px;
          padding-right: 1rem;
        }

        .event-title {
          display: flex;
          flex-direction: column;
          text-align: center;

          h3 {
            font-size: 1.2rem;
            margin-bottom: 0.3rem;
          }

          p {
            font-size: 0.9rem;
            font-weight: bold;
          }
        }
      }
    }

    .modal-body {
      .header-right-mobile {
        display: none;

        @media (max-width: 600px) {
          display: flex;
          justify-content: center;
          padding: 1rem;
          padding-bottom: 0;

          img {
            max-width: 50px;
            max-height: 50px;
            padding-right: 1rem;
          }

          .event-title {
            display: flex;
            flex-direction: column;
            text-align: center;

            h3 {
              font-size: 1.2rem;
              margin-bottom: 0.3rem;
            }

            p {
              font-size: 0.9rem;
              font-weight: bold;
            }
          }
        }
      }
      .modal-body-top {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        margin: 1rem;
        border-top: 1px solid var(--beigeDark);
        border-bottom: 1px solid var(--beigeDark);

        @media (max-width: 600px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: none;
        }

        img {
          max-width: 200px;
          max-height: 200px;
          padding: 1rem 1.5rem 1rem 0;
          border-radius: 50%;

          @media (max-width: 600px) {
            padding: 0;
          }
        }

        p {
          border-left: 1px solid var(--beigeDark);
          padding: 1rem 1.5rem 0;
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--greyDark);

          @media (max-width: 600px) {
            padding: 1rem 0;
            border: none;
            font-size: 1.2rem;
          }
        }
      }
      .modal-body-bottom {
        padding: 0 1rem 1rem;
        font-size: 0.9rem;

        h3 {
          color: var(--mustardDark);
          font-weight: 600;
          font-size: 0.8rem;
          font-family: 'Merriweather', serif;
          margin-top: 1rem;
          margin-bottom: 0.2rem;
        }

        blockquote {
          margin-top: 1rem;
          font-style: italic;
        }
      }
    }
    .email-overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(
        0deg,
        rgba(251, 247, 240, 1) 54%,
        rgba(251, 247, 240, 0.8718837876947654) 79%,
        rgba(251, 247, 240, 0.6281863087031687) 91%,
        rgba(251, 247, 240, 0.2164216028208158) 100%
      );

      form {
        display: flex;
        flex-direction: column;

        input {
          padding: 0.5rem 1rem;
          margin-bottom: 1em;
          border-radius: 5px;
          border: 1px solid var(--greyDark);

          &::placeholder {
            font-family: 'Fira Sans', sans-serif;
            font-size: 1rem;
          }
        }

        button {
          background: var(--orangeDark);
          font-family: 'Fira Sans', sans-serif;
          font-size: 1.2rem;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 0.8rem 2rem;
        }
      }
    }
  }
`;
