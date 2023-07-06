import React from 'react'
import { useInView } from 'react-intersection-observer';
import header_box from '../../res/header-box.png';
import video from '../../res/header-bg.mp4';
import styled from '@emotion/styled';
import './header.css';

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
  });
  return (
    <header className='heading-container'>
      <div>
        <video autoPlay loop muted playsinline className='video-element'>
          <source src={video} type='video/mp4' />
        </video>
        <div className='video-overlay'></div>   
      </div>

      <div className={`sub-header ${inView ? 'floating-animate' : ''}`} ref={ref}>
        <TextBox 
          className={inView ? 'text-animate' : ''} 
          ref={ref}
        >
          <h2> 
            YOU ARE LISTENING TO
          </h2>
          <h1>
            STAN
          </h1>
          <h3>
            PODS
          </h3>
        </TextBox>

        <DojaCat 
          src={header_box} 
          alt="Music Blog built by Stanley Lin"
        />
      </div>
    </header>
  )
}

const TextBox = styled.div`
  color: white;
  font-family: Super Brigade;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 500ms;
  > h1 {
    font-size: 130px;
  }
  > h3 {
    font-size: 130px;
    margin-left: -40px;
  }

  > h2 {
    font-size: 55px;
    margin-left: 40px;
  }

  @media (max-width: 69em) {
    > h1, > h3 {
      font-size: 90px;
    }
    > h2 {
      font-size: 35px;
    }
  }

  @media (max-width: 45em) {
    > h1, > h3 {
      font-size: 70px;
    }
    > h2 {
      font-size: 25px;
    }
  }
  @media (max-width: 35em) {
    > h1, > h3 {
      font-size: 60px;
    }
    > h3 {
      margin-left: -30px;
    }
    > h2 {
      font-size: 20px;
      margin-left: 30px;
    }
  }
  @media (max-width: 30em) {
    > h1, > h3 {
      font-size: 50px;
    }
    > h3 {
      margin-left: -20px;
    }
    > h2 {
      font-size: 17px;
    }
  }
  @media (max-width: 25em) {
    > h1, > h3 {
      font-size: 45px;
    }
    > h3 {
      margin-left: -10px;
    }
    > h2 {
      margin-left: 15px;
      font-size: 15px;
    }
  }
`

const DojaCat = styled.img`
  width: 350px;
  margin-left: -300px;
  margin-top: 140px;
  transition: all 500ms;

  @media (max-width: 69em) {
    width: 250px;
    margin-left: -200px;
  }

  @media (max-width: 45em) {
    width: 200px;
    margin-left: -150px;
    margin-top: 120px;
  }
  @media (max-width: 35em) {
    width: 160px;
    margin-top: 80px;
    margin-left: -90px;
  }
  @media (max-width: 30em) {
    width: 130px;
    margin-top: 80px;
    margin-left: -90px;
  }
  @media (max-width: 25em) {
    width: 120px;
    margin-top: 50px;
    margin-left: -70px;
    margin-right: -20px;
  }
`
export default Header
