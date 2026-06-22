import axios from 'axios';

const api = axios.create({
  baseURL: 'http://209.89.210.199:3333',
});

export default api;