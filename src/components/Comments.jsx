import React, { useState } from 'react'
import './comments.css';
import { useMyContext } from '../context/store';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';
import { graphcms, CREATE_COMMENT, PUBLISH_COMMENT } from '../graphql/Mutations';

const Comments = ({comments}) => {
  const { slug } = useParams();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const { totalPage } = useMyContext();

  async function handleComment(e) {
    e.preventDefault();
    const obj = { name, comment, slug } 
    setLoading(true);

    const { createComment } = await graphcms.request(CREATE_COMMENT, obj);

    await graphcms.request(PUBLISH_COMMENT, { id: createComment.id });

    setLoading(false);
    window.location.reload();
  }
  return (
    <div className='comments'>
      <h2>Post a Comment</h2>
      
      <form className='post-comment' onSubmit={handleComment}>
        <input 
          type="text" 
          required 
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete='off'
        />

        <textarea 
          cols="30" 
          rows="5" 
          placeholder='Comment'
          requiredvalue={comment}
          onChange={e => setComment(e.target.value)}
          autoComplete='off'
        />
        <button disabled={loading} type='submit'> 
          {loading ? 'Loading...' : 'Post'}
        </button>
      </form>

      <div className='loc'>
        {
          comments?.map(comment => (
            <div className='comment' key={comment.id}>
              <h4>{comment.name}</h4>
              <p>{comment.comment}</p>
            </div>
          ))
        };
        {
          comments?.length === 0 && 
          <p className='be-the-first'> 
            Be the first to comment!
          </p>
        }
      </div>
      
      <Pagination totalPage={totalPage}/>
      
    </div>
  )
}

export default Comments
