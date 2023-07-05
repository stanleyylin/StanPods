import React, {useEffect} from 'react'
import Header from './Header';
import Info from './Info';
import Albumsp from './Albumsp';
import Tracksp from './Tracksp';
import styled from '@emotion/styled'

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LandingContainer>
      <Header />
      <Info />
      <Albumsp />
      <Tracksp />
    </LandingContainer>
  )
}

const LandingContainer = styled.div`
  padding-bottom: 100px;
  background-color: black;
`

export default Landing
