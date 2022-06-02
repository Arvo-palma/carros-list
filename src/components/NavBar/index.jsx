// vitals
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import NavBarStyled from './styles';

function NavBar() {
  return (
    <NavBarStyled id="navbar">
      <div>
        <Link to="/carros"
          data-testid="nav-carros-page"
        >
          Carros
        </Link>
        <Link to="/marcas"
          data-testid="nav-marcas-page"
        >
          Marcas
        </Link>
      </div>
    </NavBarStyled>
  );
}

export default NavBar;
