import { React,useState }  from 'react';
import { Link }            from 'react-router-dom';
import { FaSearch }        from "react-icons/fa";

import '../components/style/header.css';

const Header = () => {
  const [search, setSearch] = useState('');

  const clearInput = () =>{
    document.getElementById('input').value = ''
  }

  return (
    <header>
      <Link to='/'>
        <img src='https://i.ibb.co/ChhR5Df/Naciona-Livros.png' alt='logo do website'/>
      </Link>

      <div className='input-contaneir'>
        <form>
          <input type='text' name='search-book' id='input' className='poppins' onChange={(e) =>setSearch(e.target.value)}/>
          <Link to={`/books/${search}`} className='input-contaneir'>
            <button name='search-book' onClick={clearInput}> <FaSearch /> </button>
          </Link>
        </form>
      </div>
      
    </header>
  )
}

export default Header;