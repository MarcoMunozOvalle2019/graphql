  import axios from 'axios';

  const search = async () => {
    try {
      return axios.get('http://localhost:83/api/v1/productos/todos')
    } catch (error) {
      console.error(error)
      return error
    }
  }


  const Client = { search };
  export default Client;
  
