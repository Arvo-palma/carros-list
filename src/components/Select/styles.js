// vitals
import styled from 'styled-components';

const SelectStyled = styled.div`
  width: 30%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  alignt-items: space-between;
  display: flex;

  .brand-select {
    margin-left: 10px;
  }

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  .select-label {
    font-size: 20px;
  }
`;

export default SelectStyled;
