import axios from 'axios';
import Config from 'react-native-config';
// import * as authActions from '../Redux/actions/auth-actions';
// import ModalService from './ModalService';

export const convertToBearerToken = (token) => `Bearer ${token}`;

export class SingletonAPI {
  static instance;
  //   static store;
  //   static isRefreshing = false;
  //   static refreshSubscribers = [];

  static getInstance() {
    if (!SingletonAPI.instance) {
      const instance = axios.create({
        baseURL: Config.SERVER_BASE_URL,
        // headers
        // ...
        // https://github.com/axios/axios
      });

      //   instance.interceptors.response.use(response => response, error => {
      //     if(!error.response)
      //       return Promise.reject('');

      //     const { response: { status } } = error;
      //     const { dispatch } = SingletoneTubeAPI.store;

      //     if (status === 401) {
      //       // clear the data creadted from last login
      //       dispatch(authActions.logout());

      //       // guide to log in to get fresh token
      //       ModalService.openAuthModal();
      //     }

      //     // const originalRequest = config;
      //     // const { dispatch, getState } = SingletoneTubeAPI.store;

      //     // if (status === 401) {
      //     //   if (!SingletoneTubeAPI.isRefreshing) {
      //     //     SingletoneTubeAPI.isRefreshing = true;
      //     //     const { email, password } = getState().authStateReducer;
      //     //     dispatch(authActions.login(email, password))
      //     //       .then(() => {
      //     //         SingletoneTubeAPI.isRefreshing = false;
      //     //         SingletoneTubeAPI.onRrefreshed();
      //     //       });
      //     //   }

      //     //   const retryOrigReq = new Promise((resolve, reject) => {
      //     //     SingletoneTubeAPI.subscribeTokenRefresh(() => {
      //     //       // replace the expired token and retry
      //     //       originalRequest.headers.Authorization =
      //     //         convertToBearerToken(getState().authStateReducer.token);
      //     //       resolve(axios(originalRequest));
      //     //     });
      //     //   });
      //     //   return retryOrigReq;
      //     // }

      //     return Promise.reject(error);
      //   });

      SingletonAPI.instance = instance;
    }

    return SingletonAPI.instance;
  }

  //   static subscribeTokenRefresh(cb) {
  //     SingletoneTubeAPI.refreshSubscribers.push(cb);
  //   }

  //   static onRrefreshed() {
  //     SingletoneTubeAPI.refreshSubscribers.map((cb) => cb());
  //   }

  // static bindStore(store) {
  //   SingletoneTubeAPI.store = store;
  // }
}

// const bindStoreToeTubeAPI = SingletoneTubeAPI.bindStore;
// export { bindStoreToeTubeAPI };

const eTubeAPI = SingletonAPI.getInstance();
export default eTubeAPI;
