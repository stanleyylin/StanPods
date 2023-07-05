import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QUERY_ONE_POST, options } from '../../graphql/Queries';
import Comments from '../../components/Comments';
import './review.css';
import useQueryPosts from '../../hooks/useQueryPosts';
import NotFound from '../../components/NotFound';
import styled from '@emotion/styled';
const Review = () => {
  const { posts, error, status } = useQueryPosts({query: QUERY_ONE_POST, limit: 4});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if(error) return <h2>{error}</h2>
  if(status !== 'start' && posts.length === 0) {
    return <NotFound/>
  }
  return (
    <article>
      {posts.length > 0 && 
        <header className='post-header'>
          <div className='main-post-info'>
            <Link to={`/${posts[0].category.slug}`}>
              <p className='category'>{posts[0].category.name}</p>
            </Link>
            <h1>{posts[0].title}</h1>
            <h2>{posts[0].artist}</h2>
            <p>{posts[0].year}</p>
          </div>

          <div className='image-circle'>
            <img src={posts[0].coverPhoto.url} alt='album-cover'/>
            <div className='circle'>
              <p>{posts[0].rating}</p>
            </div>          
          </div>
        </header>
      }
      <div className='divider'>
        <div className='square1'></div>
        <div className='line'></div>
        <div className='square2'></div>
      </div>
      
      {posts.length > 0 && 
        <div className='subtitle'>
          <p>
            <b>Reviewed:</b> {new Date(posts[0].datePublished).toLocaleDateString('en-US', options)}</p>
          <p>
            <b>Genre:</b> {posts[0].genre}
          </p>
          <p>
           <b>Label:</b> {posts[0].label}
          </p>
        </div>
      }
      
      {posts.length > 0 && 
        <div class='content' dangerouslySetInnerHTML={{__html: posts[0].content.html}} />
      }

      {status === 'start' ? 
      <Block>
      </Block> :
      <Comments comments={posts[0]?.comments}/>}

    </article>
  )
}

const Block = styled.div`
  background-color: black;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: GoodTime;
`

export default Review
