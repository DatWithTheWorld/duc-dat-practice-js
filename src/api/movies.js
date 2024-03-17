import axios from 'axios';

const host = 'https://json-servers-d58dyas7a-datwiththeworlds-projects.vercel.app/';

export default axios.create({
  baseURL: host,
});
