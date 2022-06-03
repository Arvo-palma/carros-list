// vitals
import { useMutation } from 'react-query';
import axios from 'axios';

const addBrand = (newBrand) => {
  return axios.post('http://localhost:3000/marcas', newBrand)
};

export const useAddBrand = () => {
  return useMutation(addBrand)
};
