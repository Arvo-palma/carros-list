// vitals
import React from 'react';
import PropTypes from 'prop-types';

// styles
import SelectStyled from './styles';

function Select (props) {
  const { id, onChange, name, options, value } = props;
  return (
    <SelectStyled>
      <label htmlFor={ id } className="select-label">
        { name }
        <select
          id={ id }
          onChange={ onChange }
          value={ value }
          className="brand-select"
        >
          {
            options.map((option, index) => (
              <option
                value={ option }
                key={ index }
              >
                { option }
              </option>))
          }
        </select>
      </label>
    </SelectStyled>
  );
}

const { string, func, object, arrayOf, oneOfType } = PropTypes;

Select.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  name: string,
  value: string,
  options: oneOfType([arrayOf(string), arrayOf(object)]),
};

Select.defaultProps = {
  name: '',
  options: [],
};

export default Select;
