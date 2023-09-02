import React from 'react'
import { useInView } from 'react-intersection-observer';
import border from '../../res/border.png';
import './info.css';
import bars from '../../res/bars.gif';
import left from '../../res/left-airpod.webp';
import right from '../../res/right-airpod.webp';
import tunnel from '../../res/tunnel.mp4';

const Info = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
  });

  return (
    <div className={`infos ${inView ? 'zoom-out' : ''}`} ref={ref}>
      <div>
        <video autoPlay loop muted playsinline className='video-element1'>
            <source src={tunnel} type='video/mp4' />
          </video>
        <div className='video-overlay1'></div>     
      </div>

      <div className='info-container'>
        <div className='top-line'>
          <img src={border} className='top-left' alt=''/>
          <p>STAN</p>
          <img src={border} className='top-right' alt=''/>
        </div>
      
        <div className='center'>
          <img src={bars} className='bars-left' alt=''/>
          <img src={left} className='pod-left' alt='left airpod'/>

          <p className='description'>
            WELCOME TO MY MUSIC BLOG.<br /> YOU ARE NOW LISTENING TO MY STANPODS.
          </p>
          <img src={right} className='pod-right' alt='right airpod'/>

          <img src={bars} className='bars-right' alt=''/>
        </div>

        <p className='sign-off'>
          WITH LOVE, <br />
          <span className='stanley'>
            STANLEY
          </span>
        </p>
        
        <div className='bottom-line'>
          <img src={border} className='bottom-left' alt=''/>
          <p>PODS</p>
          <img src={border} className='bottom-right' alt=''/>
        </div>
      </div>

     
    </div>
  )
}

export default Info
