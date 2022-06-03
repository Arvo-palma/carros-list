// vitals
import { useMutation } from 'react-query';
import axios from 'axios';

const editBrand = (id, brand) => {
  return axios.put(`http://localhost:3000/brands/${id}`, brand)
};

export const useEditBrand = () => {
  return useMutation(editBrand)
};
