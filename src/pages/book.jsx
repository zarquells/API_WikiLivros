import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./book.css";

const URL = import.meta.env.VITE_SEARCHID;

const Book = () => {
  const { _id } = useParams();
  const [book, setBook] = useState(null);

  const getBook    = async (URL) => {
    const response = await fetch(URL);
    const data     = await response.json();
    console.log(data);
    setBook(data);
  };

  useEffect(() => {
    const bookURL = `${URL}${_id}`;
    getBook(bookURL);
    
  }, []);

  return (
  <div className="movie-page">
    {book && (
      <p>{book.name}</p>
    )}
  </div>
  );
};

export default Book;