
import axios from 'axios';

export const API = `${process.env.REACT_APP_API_BASE_ROUTE}/pokemon?limit=151`;

export const fetchData = async query => {
  const url = `${API}/search?query=${query}`;

  return await axios.get(url);
};

fetchData('react');