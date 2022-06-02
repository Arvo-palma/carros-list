// vitals
import React from "react";
import PropTypes from 'prop-types';

// styles
import TableStyled from './styles';

// constants
const tableColumns = [
  ['Placa', 'Cor', 'Marca', 'Ações'],
  ['Marca', 'Ações'],
];

function Table({ data, editItem, deleteItem }) {
  return (
    <TableStyled>
      <table className="manage-items-container" cellSpacing="0" cellPadding="0">
        <thead>
        <tr className="row-header">
            { data.type === "carros" ? tableColumns[0].map((column, index) => {
              return (
                <th
                  className={ `column-header-${column} column-header` }
                  key={ index }
                >
                  {column}
                </th>
              );
            }) : tableColumns[1].map((column, index) => {
              return (
                <th
                  className={ `column-header-${column} column-header` }
                  key={ index }
                >
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          { data.type === "carros" ? data.list.map((car, index) => (
            <tr className="row-body" key={ index }>
              <td
                className="column-plate"
                data-testid={ `table-car-plate-${index + 1}` }
              >
                {car.plate}
              </td>
              <td
                className="column-color"
                data-testid={ `table-car-color-${index + 1}` }
              >
                {car.color}
              </td>
              <td
                className="column-brand"
                data-testid={ `table-car-brand-${index + 1}` }
              >
                {car.brand}
              </td>
              <td
                className="column-action"
                data-testid={ `table-car-action-${index + 1}` }
              >
                <button
                    type="button"
                    name="edit"
                    className="edit-car"
                    value={ car.id }
                    data-testid={ `edit-${index + 1}` }
                    onClick={ (e) => editItem(e) }
                  >
                    Editar
                </button>
                <button
                    type="button"
                    name="delete"
                    className="delete-car"
                    value={ car.id }
                    data-testid={ `remove-${index + 1}` }
                    onClick={ (e) => deleteItem(e) }
                  >
                    Excluir
                </button>
              </td>
            </tr>
          )) : data.list.map((brand, index) => (
            <tr className="row-body" key={ brand.id }>
              <td
                className="column-brand"
                data-testid={ `table-brand-row${index + 1}` }
              >
                {brand.name}
              </td>
              <td
                className="column-action"
                data-testid={ `table-brand-action-${index + 1}` }
              >
                <button
                    type="button"
                    name="edit"
                    className="edit-brand"
                    value={ brand.id }
                    data-testid={ `edit-${index + 1}` }
                    onClick={ (e) => editItem(e) }
                  >
                    Editar
                </button>
                <button
                    type="button"
                    name="delete"
                    className="delete-brand"
                    value={ brand.id }
                    data-testid={ `remove-${index + 1}` }
                    onClick={ (e) => deleteItem(e) }
                  >
                    Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableStyled>
  );
}

Table.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape()).isRequired,
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Table;
