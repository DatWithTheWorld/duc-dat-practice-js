import axios from 'axios';

const host = 'localhost:3021/';

export default axios.create({
  baseURL: host,
});
