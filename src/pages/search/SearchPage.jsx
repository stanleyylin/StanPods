import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { options, QUERY_SEARCH } from '../../graphql/Queries';
import Search from '../../components/Search';
import './searchpage.css';
import Release from '../../components/Release';
import useQueryPosts from '../../hooks/useQueryPosts';
import Pagination from '../../components/Pagination';
import { useMyContext } from '../../context/store';

const SearchPage = () => {
  const { posts, error} = useQueryPosts({query: QUERY_SEARCH});
  const { slug } = useParams();
  const { totalPage } = useMyContext();

  if(error) return <h2>{error}</h2>
  return (
    <div className='search-container'>
      <Search/>

      {slug && 
        <h2 className='search-results'>
          Blog posts for "{slug.replace(/-/g, ' ')}"
        </h2>
      }

      <div className='search-grid'>
        {posts?.map(post => (
          <Link to={`/${post.category.slug}/${post.slug}`}>
            <Release 
              img={post.coverPhoto.url}
              name={post.title}
              artist={post.artist}
              date={new Date(post.datePublished).toLocaleDateString('en-US', options)}
              category={post.category.name}
            />
          </Link>
        ))}
      </div>

      <Pagination totalPage={slug ? totalPage : 0}/>

    </div>
  )
}

export default SearchPage
