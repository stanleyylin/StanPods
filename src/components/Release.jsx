import React from 'react'
import './release.css';

const Release = ({img, name, artist, date, category}) => {
  return (
    <div className='album-box'>
      <img src={img} alt='cover'/>
      <div className='album-info'>
        <h2 className='text-sparkle'>{name}</h2>
        <p>{artist}</p>
        <p>{date}</p>
        <div className='categorical'>
          {category ? <p>{category}</p> : <p></p>}   
        </div>
      </div>  
    </div>
  )
}

export default Release
