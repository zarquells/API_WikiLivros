import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import "./style/check.css"

const Check = () => {
  const URL_related = import.meta.env.VITE_URL;

const { _id } = useParams();
  const [allBooks, setRelatedBooks] = useState([]);

  const   getBooks  = async (url) => {
    const response  = await fetch(url);
    const data      = await response.json();

    setRelatedBooks(data.slice(0, 4));
  }

  useEffect(() => {
    const viewbooksUrl = `${URL_related}`;
    getBooks(viewbooksUrl);
  }, [_id]);

  const handleBookClick = (bookId) => {
    history.push(`/book/${bookId}`);
  };

  return (
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
  )
}

export default Check