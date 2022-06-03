// vitals
import styled from 'styled-components';

const EditarCarroStyled = styled.section`
  .title-container {
    alignt-items: space-between;
    display: flex;
  }

  .submit-button, .return-button {
    margin-left: 5%;
    background-color: #036b52;
    color: ${({ color }) => color || "white"};
    padding: 3px;
    border: 1px solid ${({ color }) => color || "white"};
    display: inline-block;
    cursor: pointer;
    &:hover {
    background-color: lightblue;
  }
`;

export default EditarCarroStyled;
