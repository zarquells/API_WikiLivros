import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import './home.css';

const Search = () => {
    const searchURL = import.meta.env.VITE_SEARCHNAME;
    const {name}    = useParams();
    const [books, setBooks] = useState([]);

    const getBooks = async() =>{
        try {
            const res  = await fetch(`${searchURL}${name}`)
            const data = await res.json()

            setBooks(data)
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getBooks()
    }, [books])

  return (
    <div>
        <h1>Buscando por: "{name}"</h1>
        <div  className="colection-books poppins">
            <ul>
            { books.length === 0 ? <p>Carregando...</p> : (
                books.map((book) =>(
                <Link to={`/book/${book._id}`} id={book._id} key={book._id}>
                <li className="contaneir-book">
                    <div className="contaneir-img">
                    <img className="contaneir-img" src={`${book.cover}`}/>
                    </div>
                    <h2>{book.name}</h2>
                    <p>{book.author}</p>
                 </li>
                </Link>
                ))
                )}
            </ul>

        </div>
        
    </div>
  )
}

export default Search;