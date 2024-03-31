import axios from 'axios';
import { API_ROOT } from '@/utils/constant';

const DAYS = 14;

export const fetchWeatherData = async (cityName) => {
  const response = await axios.get(
    `${API_ROOT}/weather/forecast?city=${cityName}&days=${DAYS}`
  );
  return (
    response.data || {
      error: 'Your city is not exist',
    }
  );
};

export const sendMail = async (data) => {
  const response = await axios.post(`${API_ROOT}/mail/subcribe`, data);
  return response.data;
};

export const unsubcribe = async (email) => {
  const response = await axios.delete(`${API_ROOT}/mail/unsubcribe/${email}`);
  return response.data;
};
