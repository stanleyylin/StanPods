import React from 'react';
import moon from '../../res/moon.png';
import './albumsp.css';
import { Link } from 'react-router-dom';
import { ALBUM_POSTS, options } from '../../graphql/Queries';
import useQueryPosts from '../../hooks/useQueryPosts';

const Albumsp = () => {
  const { posts, error} = useQueryPosts({query: ALBUM_POSTS, main: true});

  if(error) return <h2>{error}</h2>
  return (
    <div className='album-container'>
      <img src={moon} className='moon1' alt=''/>

      <Link to={'/albums'}>
        <h1 className='albums-header'>ALBUM REVIEWS</h1>
      </Link>

      {posts.length > 0 && 
      <main>
        <Link to={`/albums/${posts[0].slug}`}>
          <div className='highlight-album shifter'>
            <img src={posts[0].coverPhoto.url} alt='album cover'/>
            <div className='side-thang'>
              <h2>{posts[0].title}</h2>
              <p>{posts[0].artist}</p>
              <p>{new Date(posts[0].datePublished).toLocaleDateString('en-US', options)}</p>
            </div>
          </div>
        </Link>

        <aside>
          <Link to={`/albums/${posts[1].slug}`}>
            <div className='side-album'>
              <img src={posts[1].coverPhoto.url} alt='album cover'/>
              <div className='side-text'>
                <h2>{posts[1].title}</h2>
                <p>{posts[1].artist}</p>
                <p>{new Date(posts[1].datePublished).toLocaleDateString('en-US', options)}</p>
              </div>
            </div>
          </ Link>

          <Link to={`/albums/${posts[2].slug}`}>
            <div className='side-album'>
              <img src={posts[2].coverPhoto.url} alt='album cover'/>
              <div className='side-text'>
                <h2>{posts[2].title}</h2>
                <p>{posts[2].artist}</p>
                <p>{new Date(posts[2].datePublished).toLocaleDateString('en-US', options)}</p>
              </div>
            </div>

          </Link>

          <Link to={`/albums/${posts[3].slug}`}>
            <div className='side-album'>
              <img src={posts[3].coverPhoto.url} alt='album cover'/>
              <div className='side-text'>
                <h2>{posts[3].title}</h2>
                <p>{posts[3].artist}</p>
                <p>{new Date(posts[3].datePublished).toLocaleDateString('en-US', options)}</p>
              </div>
            </div>
          </Link>
          
        </aside>
      </main>} 
    </div>
  )
}

export default Albumsp
