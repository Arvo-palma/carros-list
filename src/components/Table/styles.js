// vitals
import styled from 'styled-components';

const TableStyled = styled.section`     
  .manage-items-container {
    background-color: rgb(250, 250, 250);
    border-collapse: separate;
    border-spacing: 0 0.5em;
    box-shadow: 0 1px 2px 1px rgb(190, 190, 190);
    margin: 0.5em auto auto;
    padding: 0 1em;
    width: 85%;

    .row-header {
      .column-header {
        font-size: 1em;
        font-weight: 400;
      }
    }

    .row-body {

      .column-item {
        background-color: rgb(47, 193, 140);
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        font-size: 1.2em;
        font-weight: 700;
        height: 2em;
        text-align: center;
        width: 4%;
      }
        
      .column-plate {
        background-color: rgb(234, 241, 239);
        font-size: 1.2em;
        height: 2em;
        padding-left: 1em;
        width: 28%;
      }
        
      .column-color {
        background-color: rgb(3, 107, 82);
        color: white;
        font-size: 1.2em;
        font-weight: 700;
        height: 2em;
        text-align: center;
        width: 28%;
      }
        
      .column-brand {
        background-color: rgb(66, 25, 129);
        color: white;
        font-size: 1.2em;
        font-weight: 700;
        height: 2em;
        text-align: center;
        width: 28%;
      }
        
      .column-action {
        background-color: rgb(5, 108, 249);
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        height: 2em;
        text-align: center;
        width: 12%;
      }

      .delete-car, .edit-car, .delete-brand, .edit-brand {
        background-color: rgb(5, 108, 249);
        color: ${({ color }) => color || "white"};
        padding: 3px;
        border: 1px solid ${({ color }) => color || "white"};
        display: inline-block;
        cursor: pointer;
        &:hover {
          background-color: lightblue;
        }
      }
    }
  }
`;

export default TableStyled;
