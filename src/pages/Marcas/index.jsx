// vitals
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// tools
import { useQuery } from 'react-query';
import { useDeleteBrand } from '../../services/deleteBrand';

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
  const { mutate } = useDeleteBrand();

  // Managing errors and delay
  if (status === 'loading') return <div>Carregando...</div>;

  if (status === 'error') return <div>Erro no carregamento</div>;

  // Treating data
  const brandsData = { type: 'marcas', list: data };

  // Edit brand functions
  const editBrand = (target) => {
    const id = target.target.value;;

    setEdit(id);
  }

  // Delete brand functions
  const deleteBrand = (target) => {
    const id = target.target.value;

    const text = "Tem certeza que deseja excluir esta marca?\nEssa ação não poderá ser desfeita."

    if(window.confirm(text) === true) {
      mutate(parseInt(id));
    } else {
      console.log('Exclusão cancelada');
    }
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
