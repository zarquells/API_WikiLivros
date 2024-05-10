import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

import '../components/style/header.css';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img src='./src/assets/logo.svg' alt='logo do website'/>
      </Link>

      <div className='input-contaneir'>
        <input type='text' name='search-book' id='input'/>
        <Link to='book' className='input-contaneir'>
          <button name='search-book'> <FaSearch /> </button>
        </Link>
      </div>
      
    </header>
  )
}

export default Header;