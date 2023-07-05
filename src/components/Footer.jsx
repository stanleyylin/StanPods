import React from 'react'
import spotify from '../res/socials/spotify-128.png';
import linkedin from '../res/socials/linkedin.png';
import github from '../res/socials/github.png';
import stanley from '../res/socials/logo.png';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <FooterContainer>
      <div className='line'></div>
      <div className='second-row'>
        <p>
          <strong>&#169;</strong> <span>STANPODS</span> <br />
          RUN & BUILT BY STANLEY
        </p>
        <Socials>
          <a href="https://stanleylin.ca"
          target="_blank" rel="noopener noreferrer">
            <img src={stanley} alt=''/>
          </a>
          <a href="https://github.com/stanleyylin"
          target="_blank" rel="noopener noreferrer">
            <img src={github} alt=''/>
          </a>
          <a href="https://www.linkedin.com/in/stanleylinuw"
          target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt=''/>
          </a>
          <a href="https://open.spotify.com/user/7yxx1zei79i5tvrqyv6kcvhj8?si=26a1de10251c44f2"
          target="_blank" rel="noopener noreferrer">
            <img src={spotify} alt=''/>
          </a>
        </Socials>
      </div>
      
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 180px;
  background-color: black;
  align-items: center;
  .line {
    height: 2px;
    width: 90vw;
    background-color: white;
  }
  .second-row {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    p {
      margin-top: 20px;
      line-height: 2;
      color: white;
      font-family: GoodTime;
      @media (max-width: 40em) {
        text-align: center;
      }
      span {
        font-family: Super Brigade;
        font-size: 34px;
        @media (max-width: 50em) {
          font-size: 28px;
        }
        @media (max-width: 40em) {
          font-size: 20px;
          text-align: center;
        }
      }
      strong {
        font-size: 25px;
        @media (max-width: 50em) {
          font-size: 20px;
        }
        @media (max-width: 40em) {
          font-size: 15px;
          text-align: center;
        }
      }
    }

    @media (max-width: 40em) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 40em) {
    height: 220px;
  }
  @media (max-width: 30em) {
    height: 190px;
  }
`

const Socials = styled.div`
  display: flex;
  img {
    width: 50px;
    height: 50px;
    margin-right: 12px;
    margin-left: 12px;
    margin-top: 52px;
    transition: all 500ms;
    :hover {
      transform: translateY(-6px);
    }
    @media (max-width: 50em) {
      margin-top: 30px;
      width: 40px;
      height: 40px;
    }
    @media (max-width: 40em) {
      width: 33px;
      height: 33px;
    }
    @media (max-width: 30em) {
      width: 28px;
      margin-left: 15px;
      margin-right: 15px;
      height: 28px;
    }
  }
`

export default Footer
