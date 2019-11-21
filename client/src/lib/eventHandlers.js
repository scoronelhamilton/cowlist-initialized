import axios from 'axios';

let eventHandlers = {
  searchCows: () => {
    return axios.get('/cows');
  },
  
  addCow: (data) => {
    return axios.post('/cows', data);
  },
  updateCow: (data) => {
    return axios.put('/cows', data)
  },
  deleteCow: (id) => {
    return axios.delete(`/cows/${id}`)
  }
};

export default eventHandlers;