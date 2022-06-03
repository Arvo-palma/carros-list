// vitals
import { useMutation } from 'react-query';
import axios from 'axios';

const updateCar = (id, car) => {
  return axios.put(`http://localhost:3000/cars/${id}`, car)
};

export const useUpdateCar = () => {
  return useMutation(updateCar)
};
