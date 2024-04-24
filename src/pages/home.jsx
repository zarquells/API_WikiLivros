import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
//não esquecer de importar componentes

// importando variáveis de ambiente para requisições API
const URL = import.meta.env.VITE_API;

const Home = () => {
// método 'async fetch API' feito com criptografia de key
// e parâmetros de UseEffect para efetuar a requisição com o carregamento da página
  // const [topMovies, setTopMovies] = useState([]);

  // const getBooks   = async (url) => {
  //   const response = await fetch(url);
  //   const data     = await response.json();

  //   setTopMovies(data.results);
  // }

  // useEffect(() => {
  //   const viewbooksUrl = `${URL}`;

  //   getBooks(viewbooksUrl);
  // }, [])

  return (
    <p>Olá eu sou seu amiguinho, o Dollynho</p>
  );
};

export default Home;