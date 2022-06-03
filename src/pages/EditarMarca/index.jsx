// vitals
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// services
import { useMutation } from 'react-query';
import { useEditBrand } from '../../services/editBrand';

// components
import NavBar from '../../components/NavBar';
import PageTitle from '../../components/PageTitle';
import Input from '../../components/Input';

// styles
import EditarMarcaStyled from './styles';

function EditarMarca(props) {
  const { id } = props;

  // states
  const [brand, setBrand] = useState();
  const [ID, setID] = useState(id);
  const [incomplete, setIncomplete] = useState(false);
  const [posted, setPosted] = useState(false);
  const [redirect, setShouldRedirect] = useState(false);

  // Fetching from API with reactQuery
  const { mutate } = useMutation(useEditBrand);

  // Submiting responses
  const handleSubmit = (e) => {
    e.preventDefault();
    brand !== '' ? saveForm() : setIncomplete(true);
  }

  const saveForm = async () => {
    const newBrand = {
      id: ID,
      name: brand,
    }

    const response = mutate(id, newBrand);
    console.log(response);
    setPosted(true);
  }

  return (
    <EditarMarcaStyled>
      { posted && <Navigate to='/marcas' /> }
      { redirect && <Navigate to='/marcas' /> }
      <section>
        <nav>
          <NavBar />
        </nav>
        <div className="title-container">
          <PageTitle title="Editar Marca" />
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
    </EditarMarcaStyled>
  )
}

export default EditarMarca;
