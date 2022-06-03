// vitals
import React from 'react';

// styles
import InputStyled from './styles';

function Input(props) {
  const { type, onChange, name } = props;

  return (
    <InputStyled id="filter-input">
      <label htmlFor={ type } className="input-label">
        { name }
        <input
          id={ type }
          data-testid={`input-${type}`}
          type={type}
          className="filter-input"
          onChange={ onChange }
        />
      </label>
    </InputStyled>
  );
}

export default Input;
