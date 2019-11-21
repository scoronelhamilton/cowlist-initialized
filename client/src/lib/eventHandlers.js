import axios from 'axios';

let eventHandlers = {
  searchCows: () => {
    return axios.get('/cows');
  },
  
  addCow: (data) => {
    return axios.post('/cows', data);
  },
  deleteCow: (id) => {
    return axios.delete('/cows', {
      data: {id: id}
    })
  }
};

export default eventHandlers;