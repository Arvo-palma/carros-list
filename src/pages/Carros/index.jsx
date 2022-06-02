// vitals
import React from 'react';

// tools
import { useQuery } from 'react-query';

// components
import NavBar from '../../components/NavBar';
import Table from '../../components/Table';

function Carros() {
  const fecthCars = async () => {
    const response = await fetch('http://localhost:3000/cars');
    return response.json();
  };

  const {data, status} = useQuery("carros", fecthCars);


  if (status === 'loading') return <div>Carregando...</div>;

  if (status === 'error') return <div>Erro no carregamento</div>;


  const carsData = { type: 'carros', list: data };

  return (
    <section>
      <nav>
        <NavBar />
      </nav>
      <div>
        <Table data={carsData} />
      </div>
    </section>
  )
}

export default Carros;
