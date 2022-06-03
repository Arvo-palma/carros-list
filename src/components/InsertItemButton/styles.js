// vitals
import styled from 'styled-components';

const InserButtonStyled = styled.div`
  .insert-button {
    width: 100%;
    background-color: white;
    color: ${({ color }) => color || "green"};
    padding: 10px;
    border: 1px solid ${({ color }) => color || "green"};
    display: inline-block;
    margin: 5px;
    cursor: pointer;
    &:hover {
      background-color: lightblue;
    }
  }
`;

export default InserButtonStyled;
