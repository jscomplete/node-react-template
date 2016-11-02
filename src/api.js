import axios from 'axios';

export const fetchItems = () => {
  return axios.get('/api/items')
              .then(resp => resp.data);
};
