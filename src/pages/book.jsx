import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./book.css";

const URL         = import.meta.env.VITE_SEARCHID;
const URL_related = import.meta.env.VITE_URL;

const Book = () => {
  const { _id } = useParams();
  const [book, setBook] = useState(null);

  const getBook    = async (URL) => {
    try{
      const response = await fetch(URL);
      const data     = await response.json();
      setBook(data);
    }catch(error){
      console.error('Error fetching related books data:', error);
    }
  };

  const [allBooks, setRelatedBooks] = useState([]);

  const   getBooks  = async (url) => {
    const response  = await fetch(url);
    const data      = await response.json();

    setRelatedBooks(data.slice(0, 4));
  }

  useEffect(() => {
    const bookURL = `${URL}${_id}`;
    getBook(bookURL);

    const viewbooksUrl = `${URL_related}`;
    getBooks(viewbooksUrl);
  }, [_id]);

  const handleBookClick = (bookId) => {
    history.push(`/book/${bookId}`);
  };

  return (
    <div className="book">
      {book && (
        <div className="book-contaneir">
          <div className="contaneir-img">
            {/* <img className="contaneir-img" src={`${book.cover}`}/> */}
            <img className="contaneir-img" src="https://th.bing.com/th/id/R.abb8f56e32745ccce1ca80dcce9a939b?rik=EyHichvsM9XXJw&pid=ImgRaw&r=0"/>
          </div>

          <div className="about-book">
            <div className="titles-contaneir poppins">
              <h2>{book.name}</h2>
              <p>{book.author}</p>
              <p id="year">({book.year})</p>
            </div>

            <p className="description">"{book.description}"</p>
          </div>

        </div>
        
      )}

      <div className="more-contaneir">
      <h1>Confira mais:</h1>
        <div className="list_books">
          {allBooks.map((book) => (
            <Link to={`/book/${book._id}`} key={book._id} onClick={() => handleBookClick(relatedBook._id)}>
              <ul>
                <li className="contaneir-book">
                  <div className="contaneir-img">
                    <img className="contaneir-img" src={`${book.cover}`}/>
                  </div>
                  <h2>{book.name}</h2>
                  <p>{book.author}</p>
                </li>
              </ul>
            </Link>
          ))}
        </div>

        <Link to="/">
          <button>Ver biblioteca</button>
        </Link>
      </div>

    </div>
  );
};

export default Book;