import axios from 'axios';

const baseURL = 'https://example.com.br';

const api = axios.create({
  baseURL,
});

export default api;
