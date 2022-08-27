import axios from 'axios';

// const apiKey = process.env.DATO_READ_ONLY_API_TOKEN;

const api = axios.create({
  baseURL: `https://wedy.com/graphql`,
});

// api.defaults.headers.post['Authorization'] = `${apiKey}`;
// api.defaults.headers.post['Content-Type'] = 'aplication/json';
// api.defaults.headers.post['Accept'] = 'aplication/json';

export default api;
