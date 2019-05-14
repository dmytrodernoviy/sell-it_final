import axios from 'axios';
import { logOut } from '../action-creators/authorize';

export default {
  setupInterceptors: (store, history) => {

      axios.interceptors.response.use(response => {
        return response;
      }, error => {

      if (error.response.status === 401) {
        store.dispatch(logOut())
        history.push("/login-page")
      }

      if (error.response.status === 404) {
         history.push('/not-found');
      }

      return Promise.reject(error);
    });
  },
};