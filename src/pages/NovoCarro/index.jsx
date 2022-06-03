// vitals
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// services
import { useQuery } from 'react-query';
import { useAddCar } from '../../services/postCar';

// components
import NavBar from '../../components/NavBar';
import PageTitle from '../../components/PageTitle';
import Input from '../../components/Input';
import Select from '../../components/Select';

// styles
import NovoCarroStyled from './styles';

function NovoCarro() {
  // states
  const [plate, setPlate] = useState();
  const [brand, setBrand] = useState();
  const [color, setColor] = useState();
  const [incomplete, setIncomplete] = useState(false);
  const [posted, setPosted] = useState(false);

  // Fetching from API with reactQuery
  const fecthOptions = async () => {
    const response = await fetch('http://localhost:3000/brands');
    return response.json();
  };

  const {data, status} = useQuery("options", fecthOptions);
  const { mutate } = useAddCar();

  // Managing errors and delay
  if (status === 'loading') return <div>Carregando...</div>;

  if (status === 'error') return <div>Erro no carregamento</div>;

  // Treating data
  const options = data.map((brand) => brand.name);

  // Submiting responses
  const handleSubmit = (e) => {
    e.preventDefault();
    plate && color ? saveForm() : setIncomplete(true);
  }

  const saveForm = async () => {
    const newCar = {
      name: 'novo',
      plate: plate,
      color: color,
      brand: brand,
    }

    mutate(newCar);
    setPosted(true);
  }

  return (
    <NovoCarroStyled>
      { posted && <Navigate to='/carros' /> }
      <section>
        <nav>
          <NavBar />
        </nav>
        <div className="title-container">
          <PageTitle title="Novo Carro" />
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
          >
            Salvar
          </button>
          <button>
            Voltar
          </button>
        </div>
      </section>
    </NovoCarroStyled>
  )
}

export default NovoCarro;
