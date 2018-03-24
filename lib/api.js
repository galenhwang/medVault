import axios from 'axios';
import { store } from '../store'

store.subscribe(listener)

function listener() {
  let token = store.getState().token
  axios.defaults.headers.common['Authorization'] = `Token token=${token}`;
}

const API_URL = 'http://10.1.102.35:3000/';

const api = {
  async post(path, body = {}) {
    return await axios({
      baseURL:  API_URL,
      url:      path,
      method:  'POST',
      data:     body,
    })
  },
  async put(path, body = {}) {
    return await axios({
      baseURL:  API_URL,
      url:      path,
      method:  'PUT',
      data:     body,
    })
  },
  async get(path, params = {}) {
    return await axios({
      baseURL:  API_URL,
      url:      path,
      method:  'GET',
      params:   params,
    })
  }
}

export default api;
