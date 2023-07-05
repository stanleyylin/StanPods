import React from 'react'
import { useInView } from 'react-intersection-observer';
import header_box from '../../res/header-box.png';
import video from '../../res/header-bg.mp4';
import './header.css';

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
  });
  return (
    <header className='heading-container'>
      <div>
        <video autoPlay loop muted className='video-element'>
          <source src={video} type='video/mp4' />
        </video>
        <div className='video-overlay'></div>   
      </div>

      <div className={`sub-header ${inView ? 'floating-animate' : ''}`} ref={ref}>
        <div className={`header-titles ${inView ? 'text-animate' : ''}`} ref={ref}>
          <h2> 
            YOU ARE LISTENING TO
          </h2>
          <h1>
            STAN
          </h1>
          <h3>
            PODS
          </h3>
        </div>

        <img 
          src={header_box} 
          alt="Music Blog built by Stanley Lin"
          className='doja-cat'/>
      </div>
    </header>
  )
}

export default Header
