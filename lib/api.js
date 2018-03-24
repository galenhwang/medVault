
import axios from 'axios';

const API_URL = 'http://localhost:3000';

function token() {
  return ''
  //return localStorage.getItem('token')
}

function auth() {
  return {'Authorization': `Token token=${token()}`}
}

const api = {
  async post(path, body = {}) {
    return await axios({
      baseURL:  API_URL,
      headers:  auth(),
      url:      path,
      method:  'POST',
      data:     body,
    })
  },
  async get(path, params = {}) {
    return await axios({
      baseURL:  API_URL,
      headers:  auth(),
      url:      path,
      method:  'GET',
      params:   params,
    })
  }
}

export default api;
