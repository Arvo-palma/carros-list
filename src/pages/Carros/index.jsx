// vitals
import React from 'react';

// tools
import { useQuery } from 'react-query';

// components
import NavBar from '../../components/NavBar';
import Table from '../../components/Table';
import PageTitle from '../../components/PageTitle';
import InserButton from '../../components/InsertItemButton';

// styles
import CarrosStyled from './styles';

function Carros() {
  // Fetching from API with reactQuery
  const fecthCars = async () => {
    const response = await fetch('http://localhost:3000/cars');
    return response.json();
  };

  const {data, status} = useQuery("carros", fecthCars);

  // Managing errors and delay
  if (status === 'loading') return <div>Carregando...</div>;

  if (status === 'error') return <div>Erro no carregamento</div>;

  // Treating data
  const carsData = { type: 'carros', list: data };

  return (
    <CarrosStyled>
      <section>
        <nav>
          <NavBar />
        </nav>
        <div className="title-container">
          <PageTitle title="Carros" />
          <InserButton type='carros' />
        </div>
        <div>
          <Table data={carsData} />
        </div>
      </section>
    </CarrosStyled>
  )
}

export default Carros;
