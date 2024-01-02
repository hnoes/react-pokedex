import { useState } from 'react';
import axios from 'axios';

function useAxios(baseUrl) {
  const [responses, setResponses] = useState([]);

  const addResponseData = async (endpoint = '') => {
    const url = `${baseUrl}${endpoint}`;
    const response = await axios.get(url);
    setResponses(data => [...data, response.data]);
  };

  return [responses, addResponseData];
}

export default useAxios;
