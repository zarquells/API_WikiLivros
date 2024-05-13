import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Check from "../components/check";

import "./book.css";

const URL         = import.meta.env.VITE_SEARCHID;

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

  useEffect(() => {
    const bookURL = `${URL}${_id}`;
    getBook(bookURL);

  }, [_id]);

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

      <Check/>

    </div>
  );
};

export default Book;