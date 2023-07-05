import React from 'react'
import styled from '@emotion/styled'
import astronaut from '../res/astronaut-full.webp';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={astronaut} alt='404 Error Astronaut'/>
      <h1>404 Error</h1>
      <h2>Page Not Found</h2>
    </NotFoundContainer>
  )
}

const NotFoundContainer = styled.div`
  height: 90vh;
  background-color: black;
  font-family: GoodTime;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  transition: all 500ms;
  > h1 {
    font-size: 75px;
    color: rgba(255, 255, 255, 0.95);
    transition: inherit;
  }
  > h2 {
    font-size: 50px;
    color: rgba(255, 255, 255, 0.8);
    transition: inherit;
  }

  > img {
    transition: inherit;
    width: 200px;
    margin-top: 50px;
    margin-bottom: 40px;
    animation: floating 4s ease-in-out infinite;
  }
  @media (max-width: 45em) {
    > h1 {
      font-size: 50px;
    }
    > h2 {
      font-size: 30px;
    }
    > img {
      width: 150px;
    }
  }
  @media (max-width: 35em) {
    > h1 {
      font-size: 38px;
    }
    > h2 {
      font-size: 26px;
    }
    > img {
      width: 120px;
    }
  }
  @media (max-width: 35em) {
    > h1 {
      font-size: 33px;
    }
    > h2 {
      font-size: 23px;
    }
  }
`

export default NotFound
