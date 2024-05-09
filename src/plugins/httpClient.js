import axios from 'axios';
// const baseUrl = 'http://127.0.0.1:8000';
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});
const httpClient = {

  get: async (url) => {
    const {data}  = await instance.get(url);
    return data;
  }
}

export default httpClient
