// vitals
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// styles
import InserButtonStyled from './styles';

function InserButton(props) {
  const { type } = props;
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const createMode = () => {
    setShouldRedirect(true);
  };

  if (shouldRedirect) return (
    type === 'carros' ? <Navigate to="/carros/novo" /> : <Navigate to="/marcas/novo" />
  );

  return (
    <InserButtonStyled id="insert-button">
      <button
        data-testid={`button-${type}-novo`}
        type="button"
        className="insert-button"
        onClick={ createMode }
      >
        {
          type === 'carros' ? 'Novo Carro' : 'Nova Marca'
        }
      </button>
    </InserButtonStyled>
  );
}

export default InserButton;
