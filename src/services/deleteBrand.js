// vitals
import { useMutation } from 'react-query';
import axios from 'axios';

const deleteBrand = (id) => {
  return axios.delete(`http://localhost:3000/brands/${id}`)
};

export const useDeleteBrand = () => {
  return useMutation(deleteBrand)
};
