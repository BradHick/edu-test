import Immutable from 'seamless-immutable';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

const API_URL = 'https://frontend-test.agendaedu.com/api/login';
const initialState = new Immutable({
  email: '',
  token: '',
  loading: false,
  errors: {}
});

const auth = {
  state: initialState,
  reducers: {
    authUserFulfiled: (state, payload) => {
      return state.merge({
        email: payload.email,
        token: payload.token,
        loading: false
      });
    },
    authUserPending: (state) => {
      return state.merge({
        loading: true
      });
    },
    authUserRejected: (state, payload) => {
      return state.merge({
        errors: payload.errors || payload,
        loading: false
      });
    }
  },
  effects: (dispatch) => ({
    login: (user) =>{
      dispatch.auth.authUserPending();
      const { email, password } = user
      return axios.post(API_URL, { email, password })
        .then(res => {
          dispatch.auth.authUserFulfiled({email, token: res.data.token});
          AsyncStorage.setItem('authToken', res.data.token)
            .then(res => console.log('authToken', res))
        })
        .catch(err =>{
          dispatch.auth.authUserRejected(err);
          AsyncStorage.removeItem('authToken')
            .then(res => console.log('authToken', res));
        })
    }
  })
};

export default auth;