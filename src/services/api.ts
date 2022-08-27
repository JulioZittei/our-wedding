import axios from 'axios';

const env = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://elenejulio.com/api';

const api = axios.create({
  baseURL: `${env}`,
});

export default api;
