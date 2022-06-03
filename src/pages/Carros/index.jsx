// vitals
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

// services
import { useQuery } from 'react-query';

// components
import NavBar from '../../components/NavBar';
import Table from '../../components/Table';
import PageTitle from '../../components/PageTitle';
import InserButton from '../../components/InsertItemButton';
import Input from '../../components/Input';
import Select from '../../components/Select';

// styles
import CarrosStyled from './styles';

function Carros() {
  // state
  const [edit, setEdit] = useState(false);
  const [filterPlate, setFilterPlate] = useState();
  const [filterBrand, setFilterBrand] = useState();
  const [filter, setFilter] = useState(false);

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
  const options = data.map((car) => car.brand);
  options.unshift('');

  // Filters functions
  const filter1 = data.filter((car) => {
    return car.plate.includes(filterPlate)
  });

  const filter2 = filter1.filter((car) => {
    return car.plate.includes(filterBrand)
  });

  const filterByPlate = (e) => {
    setFilterPlate(e.target.value);
    const filteredData = { type: 'carros', list: filter2 };
    console.log('funcionalidade em desenvolvimento');
    setFilter(filteredData);
  }

  const filterByBrand = (e) => {
    setFilterBrand(e.target.value);
    const filteredData = { type: 'carros', list: filter2 };
    console.log('funcionalidade em desenvolvimento');
    setFilter(filteredData);
  }


  // Edit car functions
  const editCar = (target) => {
    const { id } = target.nativeEvent.path[2];

    setEdit(id);
  }

  // Delete car functions
  const deleteCar = () => {
    console.log('funcionalidade em desenvolvimento');
  }

  return (
    <CarrosStyled>
      { edit && <Navigate to={`/carros/${edit}`} /> }
      <section>
        <nav>
          <NavBar />
        </nav>
        <div className="title-container">
          <PageTitle title="Carros" />
          <InserButton type='carros' />
        </div>
        <div className="filters-container">
          <Input type="text" onChange={ (e) => filterByPlate(e) } name="Filtrar por placa" />
          <Select
            id="brand-filter"
            name="Filtrar por marca"
            options={ options }
            onChange={ (e) => filterByBrand(e) }
          />
        </div>
        <div>
          <Table
            data={carsData}
            editItem={ editCar }
            deleteItem={ deleteCar }
          />
        </div>
      </section>
    </CarrosStyled>
  )
}

export default Carros;
