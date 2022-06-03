// vitals
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// services
import { useAddBrand } from '../../services/postBrand';

// components
import NavBar from '../../components/NavBar';
import PageTitle from '../../components/PageTitle';
import Input from '../../components/Input';

// styles
import NovaMarcaStyled from './styles';

function NovaMarca() {
  // states
  const [ID, setID] = useState();
  const [brand, setBrand] = useState();
  const [incomplete, setIncomplete] = useState(false);
  const [posted, setPosted] = useState(false);
  const [redirect, setShouldRedirect] = useState(false);

  // Fetching from API with reactQuery
  const { mutate } = useAddBrand();

  // Submiting responses
  const handleSubmit = (e) => {
    e.preventDefault();
    brand ? saveForm() : setIncomplete(true);
  }

  const saveForm = async () => {
    const newBrand = {
      id: ID,
      name: brand,
    }

    mutate(newBrand);
    setPosted(true);
  }

  return (
    <NovaMarcaStyled>
      { posted && <Navigate to='/marcas' /> }
      { redirect && <Navigate to='/carros' /> }
      <section>
        <nav>
          <NavBar />
        </nav>
        <div className="title-container">
          <PageTitle title="Nova Marca" />
        </div>
        <div className="inputs-container">
          <Input
            type="text"
            onChange={ ({ target: { value } }) => setID(value) }
            name="ID"
            />
          <Input
            type="text"
            onChange={ ({ target: { value } }) => setBrand(value) }
            name="Marca"
          />
        </div>
        { incomplete ? <span className='error-message'>Preencha todos os campos</span> : <></> }
        <div className='buttons-container'>
          <button
            type="submit"
            onClick={ handleSubmit }
            className="submit-button"
          >
            Salvar
          </button>
          <button
            className="return-button"
            onClick={ () => setShouldRedirect(true) }
          >
            Voltar
          </button>
        </div>
      </section>
    </NovaMarcaStyled>
  )
}

export default NovaMarca;
