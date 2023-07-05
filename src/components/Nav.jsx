import React, { useState, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const { pathname } = useLocation();

  const [visible, setVisible] = useState(false);

  function toggleNav() {
    setVisible(!visible);
  }

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  return (
    <nav className={scrolled ? "primary-scrolled" : "primary"}>
      <Link to="/" className="logo"></Link>

      <button
        onClick={toggleNav}
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded={visible}
      >
        <span className="sr-only">Menu</span>
      </button>

      <ul id="primary-navigation" className={`primary-navigation ${visible ? 'visible' : ''}`}>
        <Link to="/albums" className='test'>
          <li className={pathname.match(/\/albums/) ? 'active link' : 'link'}>
            ALBUMS
          </li>
        </Link>
        <Link to="/tracks" className='test'>
          <li className={pathname.match(/\/tracks/) ? 'active link' : 'link'}>
            TRACKS
          </li>
        </Link>
        <Link to="/search" className='test'>
          <li className={pathname.match(/\/search/) ? 'active link' : 'link'}>
            SEARCH
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;