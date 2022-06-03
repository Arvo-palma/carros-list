// vitals
import { useMutation } from 'react-query';
import axios from 'axios';

const addCar = (newCar) => {
  return axios.post('http://localhost:3000/cars')
};

export const useAddCar = () => {
  return useMutation(addCar)
};
