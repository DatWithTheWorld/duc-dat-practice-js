import axios from 'axios';

const host = 'https://json-servers-kwwbaq0w2-datwiththeworlds-projects.vercel.app/';

export default axios.create({
  baseURL: host,
});
