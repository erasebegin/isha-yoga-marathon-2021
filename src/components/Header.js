import React from 'react';
import styled from 'styled-components';
import bannerImage from '../images/Banner1.png';

export default function Header() {
  return (
    <HeaderContainer className="banner-wrapper">
      <img
        src={bannerImage}
        className="banner-image"
        alt="banner depicting 3 images: a person meditating, a bowl of salad, and a hand holding a phone that is displaying  a yogic practice"
      />
      <h1>
        YOGA <span>MARATHON</span>
      </h1>
      <h2>INTERNATIONAL DAY OF YOGA</h2>
      <h2>
        19<sup>th</sup> - 20<sup>th</sup> JUNE
      </h2>
      <p className="intro-paragraph">
        Join our international celebrity influencers on a 2 day live marathon of{' '}
        <span className="blue">Yoga</span>,{' '}
        <span className="orange">Meditation</span> and{' '}
        <span className="green">Nutrition</span> around the{' '}
        <b>International Day of Yoga 2021</b>
      </p>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
     display: flex;
      flex-direction: column;
      align-items: center;

      .banner-image {
        max-width: 80%;
        margin: auto;

        @media(max-width: 750px) {
          position: absolute;
          top: 0;
          max-width: 140%;
          float: left;
          transform: translateY(-8%);
        }
      }

      h1 {
        margin-bottom: 1rem;

        @media(max-width: 750px){
          font-size: 2rem;
        }
        
        span {
          font-weight: 400;
        }
      }
      
      h2 {
        font-weight: 400;
        margin-bottom: 1rem;

        @media(max-width: 750px){
          font-size: 1.5rem;
        }
        
        sup {
          font-weight: 600;
        }
      }
      
      .intro-paragraph {
        margin-top: 1.8rem;
        text-align: center;
        line-height: 2.4rem;
        font-size: 2.1rem;
        font-weight: 400;

        @media(max-width: 750px){
          font-size: 1.3rem;
        }

            .blue, .orange, .green {
                font-weight: 500;
            }

            .blue {
                color: var(--blue)
            }

            .orange {
                color: var(--orange)
            }

            .green {
                color: var(--green)
            }
      }
    }
`;
