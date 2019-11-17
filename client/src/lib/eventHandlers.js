import axios from 'axios';

let eventHandlers = {
  searchCows: () => {
    return axios.get('/cows');
  },
  
  addCow: (data) => {
    return axios.post('/cows', data);
  }
};

export default eventHandlers;