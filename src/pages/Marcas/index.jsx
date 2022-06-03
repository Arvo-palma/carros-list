// vitals
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// tools
import { useQuery } from 'react-query';

// components
import NavBar from '../../components/NavBar';
import Table from '../../components/Table';
import PageTitle from '../../components/PageTitle';
import InserButton from '../../components/InsertItemButton';

// styles
import MarcasStyled from './styles';

function Marcas() {
  // state
  const [edit, setEdit] = useState(false);

  // Fetching from API with reactQuery
  const fecthBrands = async () => {
    const response = await fetch('http://localhost:3000/brands');
    return response.json();
  };

  const {data, status} = useQuery("marcas", fecthBrands);

  // Managing errors and delay
  if (status === 'loading') return <div>Carregando...</div>;

  if (status === 'error') return <div>Erro no carregamento</div>;

  // Treating data
  const brandsData = { type: 'marcas', list: data };

  // Edit brand functions
  const editBrand = (target) => {
    const { id } = target.nativeEvent.path[2];

    setEdit(id);
  }

  // Delete brand functions
  const deleteBrand = () => {
    console.log('funcionalidade em desenvolvimento');
  }

  return (
    <MarcasStyled >
      { edit && <Navigate to={`/marcas/${edit}`} /> }
      <section>
        <nav>
          <NavBar />
        </nav>
        <div className="title-container">
          <PageTitle title="Marcas" />
          <InserButton type='marcas' />
        </div>
        <div>
          <Table
            data={brandsData}
            editItem={ editBrand }
            deleteItem={ deleteBrand }
          />
        </div>
      </section>
    </MarcasStyled>
  )
}

export default Marcas;
