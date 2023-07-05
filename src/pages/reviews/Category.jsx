import React, { useEffect } from 'react'
import Album from '../../components/Release';
import tunnel from '../../res/tunnel.mp4';
import './category.css';
import { CATEGORY_POSTS_ALL, options } from '../../graphql/Queries';
import { Link, useParams, useLocation } from 'react-router-dom';
import useQueryPosts from '../../hooks/useQueryPosts';
import Pagination from '../../components/Pagination';
import { useMyContext } from '../../context/store';
import { useInView } from 'react-intersection-observer';
import NotFound from '../../components/NotFound';

const Category = () => {
  const { posts, error, status} = useQueryPosts({query: CATEGORY_POSTS_ALL});
  const { slug } = useParams();
  const location = useLocation();
  const { totalPage } = useMyContext();
  
  const { ref, inView } = useInView({
    threshold: 0.1, 
  });

  useEffect(() => {
    if (location.search === '') {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 600);
    }
  }, [location]);

  if(error) return <h2>{error}</h2>
  if(status !== 'start' && posts.length === 0) {
    return <NotFound/>
  }
  return (
    <main className='album-container'>
      <header>
        <video autoPlay loop muted className='album-video'>
          <source src={tunnel} type='video/mp4' />
        </video>
        <div className='album-video-overlay'></div> 
        <h1 className={`album-header-title ${inView ? 'zoom-out' : ''}`} ref={ref}>
          {slug.toUpperCase().slice(0, -1)} REVIEWS
        </h1>    
      </header>

      <div className='albums-grid'>
        {posts?.map(post => (
          <Link 
            to={`/${slug}/${post.slug}`}
           key={post.id}
          >
            <Album 
              img={post.coverPhoto.url}
              name={post.title}
              artist={post.artist}
              date={new Date(post.datePublished).toLocaleDateString('en-US', options)}
            />
          </Link>
        ))}
      </div>

      <Pagination totalPage={totalPage}/>
    </main>
  )
}

export default Category
