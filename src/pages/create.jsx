import { useEffect, useState } from "react";

import Check from '../components/check';

import './create.css';

// const URL = import.meta.env.VITE_URL;

const Create = () => {

  //Enviar novo livro para a API
  const [NovoLivro, setNovoLivro] = useState({
    name: '',
    author: '',
    description: '',
    year: 0
})

  // Pré-visualização da imagem inserida
  const [img, setImg] = useState();
  function exibirImg(e) {
     console.log(e.target.files);
      setImg(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className='Create'>
        <main className='Formulario'>
          {/* Input de imagem */}
            <div className='quadrado'>
              <img src={img} alt=""/>
              <input id="arquivo" type='file' className="filetype" onChange={exibirImg} multiple accept="image/*"></input>
            </div>
          <div className='form-cont'>
          
          {/*Input de formulário*/}
          <div className='form-info'>
            <input type='text'   placeholder='Adicionar um título'></input>      
            <input type='text'   placeholder='Nome do Autor'></input>    
            <input type='number' placeholder='Ano' min='0' max='2025' id='ano'></input>          
            <textarea type='text'placeholder='Insira a sinopse do livro...' id='descricao'></textarea>
          </div>
          <input type='submit'   placeholder='Adicionar livro' id='enviar'></input>
          </div>
        </main>

        <Check/>
    </div>

  );
}

export default Create;