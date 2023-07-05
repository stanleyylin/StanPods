import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom';

const Counter = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: GoodTime;
  margin-bottom: 100px;

  p {
    color: rgb(227, 227, 227);
    margin-left: 45px;
    margin-right: 45px;
    transition: all 500ms;
    :hover {
      transform: scale(1.05);
    }
    @media (max-width: 39em) {
      font-size: 14px;
    }
    @media (max-width: 29em) {
      font-size: 13px;
      margin-left: 30px;
      margin-right: 30px;
    }
    @media (max-width: 25em) {
      font-size: 13px;
      margin-left: 5px;
      margin-right: 5px;
    }
  }
`
const Numbers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  li {
    color: white;
    margin-left: 12px;
    margin-right: 12px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 500ms;
    :is(:hover, .ready) {
      color: black;
      background-color: white;
    }
  }
  @media (max-width: 39em) {
    li {
      margin-top: 5px;
    }
    width: 160px;
  }
  @media (max-width: 30em) {
    li {
      margin: 0;
      margin-left: 5px;
      margin-right: 5px;
    }
    width: 180px;
  }
`
const Pagination = ({totalPage}) => {
  const { search } = useLocation();
  const [pageNumbers, setPageNumbers] = useState([]);
  const page = Number(new URLSearchParams(search).get('page')) || 1;

  useEffect(() => {
    if(totalPage <= 1) return;
    
    if(totalPage <= 5) {
      
      const newArr = [...Array(totalPage)].map((_, i) => i + 1);
      return setPageNumbers(newArr);
    }

    let newArr = [];

    for(let i = 1; i <= 5; ++i) {
      if(page <= 2) {
        newArr.push(i);
      }
      if(page > 2 && page < totalPage - 2) {
        newArr.push(page + i - 3)
      }
      if(page >= totalPage - 2) {
        newArr.push(i - 5 + totalPage)
      }
    }

    setPageNumbers(newArr);
    
  }, [totalPage, page])

  if(totalPage <= 1) return null;
  return (
    <Counter>
      <Link to={`?page=${page - 1 <= 1 ? 1 : page - 1}`}>
        <p>PREV</p>
      </Link>

      <Numbers>
        {
          pageNumbers.map(num => (
            <Link to={`?page=${num}`} key={num}>
              <li className={page === num ? 'ready' : ''}>{num}</li>
            </Link>
          ))
        }

      </Numbers>

      <Link to={`?page=${page + 1 >= totalPage ? totalPage : page + 1}`}>
        <p>NEXT</p>
      </Link>
    </Counter>
  )
}

export default Pagination
