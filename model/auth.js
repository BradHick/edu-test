import Immutable from 'seamless-immutable';

const API_URL = 'https://frontend-test.agendaedu.com/api/login';
const initialState = new Immutable({
  email: '',
  token: '',
  loading: false,
  errors: {}
});

const auth = {
  state = initialState,
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
  effects: {
    login: (email, password) =>{
      dispatch.auth.authUserPending();
      return fetch(API_URL, {
        method: 'post',
        body: {
          email,
          password
        }
      })
      .then(respo => respo.json())
      .then(res => {
        dispatch.auth.authUserFulfiled({email, token: res.token});
      })
      .catch(err =>{
        dispatch.auth.authUserRejected(err);
      })
    }
  }
};

export default auth;