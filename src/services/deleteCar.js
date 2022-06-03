// vitals
import { useMutation } from 'react-query';
import axios from 'axios';

const deleteCar = (id) => {
  return axios.delete(`http://localhost:3000/cars/${id}`)
};

export const useDeleteCar = () => {
  return useMutation(deleteCar)
};
