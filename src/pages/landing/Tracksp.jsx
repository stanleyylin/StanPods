import React from 'react';
import './albumsp.css';
import moon from '../../res/moon.png'
import { Link } from 'react-router-dom';
import { TRACK_POSTS, options } from '../../graphql/Queries';
import useQueryPosts from '../../hooks/useQueryPosts';

const Tracksp = () => {
  
  const { posts, error} = useQueryPosts({query: TRACK_POSTS, main: true});

  if(error) return <h2>{error}</h2>
  return (
    <div className='album-container'>
      <img src={moon} className='moon2' alt=''/>

      <Link to={'/tracks'}>
        <h1 className='albums-header'>TRACK REVIEWS</h1>
      </Link>

      {posts.length > 0 && 
      <main>
        <aside>
          <Link to={`/tracks/${posts[1].slug}`}>
            <div className='side-album'>
              <img src={posts[1].coverPhoto.url} alt='album cover'/>
              <div className='side-text'>
                <h2>{posts[1].title}</h2>
                <p>{posts[1].artist}</p>
                <p>{new Date(posts[1].datePublished).toLocaleDateString('en-US', options)}</p>
              </div>
            </div>
          </Link>

          <Link to={`/tracks/${posts[2].slug}`}>
            <div className='side-album'>
              <img src={posts[2].coverPhoto.url} alt='album cover'/>
              <div className='side-text'>
                <h2>{posts[2].title}</h2>
                <p>{posts[2].artist}</p>
                <p>{new Date(posts[2].datePublished).toLocaleDateString('en-US', options)}</p>
              </div>
            </div>
          </Link>

          <Link to={`/tracks/${posts[3].slug}`}>
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

        <Link to={`/tracks/${posts[0].slug}`}>
          <div className='highlight-album'>
            <img src={posts[0].coverPhoto.url} alt='album cover'/>
            <div className='side-thang'>
              <h2>{posts[0].title}</h2>
              <p>{posts[0].artist}</p>
              <p>{new Date(posts[0].datePublished).toLocaleDateString('en-US', options)}</p>
            </div>
          </div>
        </Link>
      </main>
      }
    </div>
  )
}

export default Tracksp
