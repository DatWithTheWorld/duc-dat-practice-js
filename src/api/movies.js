import axios from 'axios';

const host = 'http://localhost:3021/';

export default axios.create({
  baseURL: host,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
