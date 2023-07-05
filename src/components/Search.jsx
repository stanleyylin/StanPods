import React, { useState } from 'react'
import './search.css';
import search_button from '../res/search-button.png';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSearch("");
    let value = search.trim().replace(/\s+/g, '-').toLocaleLowerCase();

    navigate(`/search/${value}`)
  };

  return (
    <form  onSubmit={handleSubmit} className='search-bar'>
      <input 
        type="search" 
        placeholder='Search...' 
        required 
        value={search}
        onChange={e => setSearch(e.target.value)} 
      />

      <button type='submit' className='search-button'>
        <img src={search_button} alt='search button'/>
      </button>
    </form>
  )
}

export default Search
