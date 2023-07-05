import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { graphcms } from '../graphql/Queries';
import { useMyContext } from '../context/store';

const useQueryPosts = ({query, limit = 3, main = false }) => {
  const { slug } = useParams();
  const { search, pathname } = useLocation();

  const page = Number(new URLSearchParams(search).get('page')) || 1;
  const skip = (page - 1) * limit;
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');
  
  const { setLoading, setTotalPage } = useMyContext();

  useEffect(() => {
    setTotalPage(1);
  }, [pathname, setTotalPage]);

  useEffect(() => {
    setStatus('start')
    setLoading(true);
    if(slug || main) {
      graphcms.request(query, { slug, limit, skip })
      .then(res => {
        setStatus('success')
        const count = res?.countConnection?.aggregate?.count || 0;
        setTotalPage(Math.ceil(count / limit));
        setPosts(res.posts);
        setError(null);
      })
      .catch(error => {
        setStatus('error')
        setTotalPage(1);
        setPosts([]);
        setError(error.message);
      })
      .finally(() => setLoading(false))
    } else {
      setStatus('error');
      setPosts([]);
      setError(null);
      setLoading(false);
    }
  }, [main, setLoading, setTotalPage, query, slug, limit, skip])

  return { posts, error, status }
}

export default useQueryPosts
