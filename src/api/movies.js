import axios from 'axios';

<<<<<<< HEAD
const host = 'http://localhost:3021/';
=======
const host = 'https://amv-15rl.onrender.com/';
>>>>>>> 1b92a31c81e9c356a8deef4b13607fe06fa5332f

export default axios.create({
  baseURL: host,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
