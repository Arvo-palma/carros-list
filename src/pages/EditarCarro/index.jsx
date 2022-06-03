// vitals
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// services
import { useMutation, useQuery } from 'react-query';
import { useUpdateCar } from '../../services/editCar';

// components
import NavBar from '../../components/NavBar';
import PageTitle from '../../components/PageTitle';
import Input from '../../components/Input';
import Select from '../../components/Select';

// styles
import EditarCarroStyled from './styles';

function EditarCarro(props) {
  const { id } = props;
  // states
  const [plate, setPlate] = useState();
  const [brand, setBrand] = useState();
  const [color, setColor] = useState();
  const [incomplete, setIncomplete] = useState(false);
  const [posted, setPosted] = useState(false);
  const [redirect, setShouldRedirect] = useState(false);

  // Fetching from API with reactQuery
  const fecthOptions = async () => {
    const response = await fetch('http://localhost:3000/brands');
    return response.json();
  };

  const {data, status} = useQuery("options", fecthOptions);
  const { mutate } = useMutation(useUpdateCar);

  // Managing errors and delay
  if (status === 'loading') return <div>Carregando...</div>;

  if (status === 'error') return <div>Erro no carregamento</div>;

  // Treating data
  const options = data.map((brand) => brand.name);
  options.unshift('');

  // Submiting responses
  const handleSubmit = (e) => {
    e.preventDefault();
    plate && color && brand !== '' ? saveForm() : setIncomplete(true);
  }

  const saveForm = async () => {
    const newCar = {
      id,
      name: 'sem nome',
      plate: plate,
      color: color,
      brand: brand,
    }

    const response = mutate(id, newCar);
    console.log(response);
    setPosted(true);
  }

  return (
    <EditarCarroStyled>
      { posted && <Navigate to='/carros' /> }
      { redirect && <Navigate to='/carros' /> }
      <section>
        <nav>
          <NavBar />
        </nav>
        <div className="title-container">
          <PageTitle title="Editar Carro" />
        </div>
        <div className="inputs-container">
          <Input
            type="text"
            onChange={ ({ target: { value } }) => setPlate(value) }
            name="Placa"
            />
          <Select
            id="brand-selector"
            name="Marca"
            options={ options }
            onChange={ ({ target: { value } }) => setBrand(value) }
          />
          <Input
            type="text"
            onChange={ ({ target: { value } }) => setColor(value) }
            name="Cor"
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
    </EditarCarroStyled>
  )
}

export default EditarCarro;
