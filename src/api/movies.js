import axios from 'axios';

const host = 'https://json-servers-kwwbaq0w2-datwiththeworlds-projects.vercel.app/';

export default axios.create({
  baseURL: host,
  headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      }
});
