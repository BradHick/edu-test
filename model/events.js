import Immutable from 'seamless-immutable';
import axios from 'axios';

const API_URL = 'https://frontend-test.agendaedu.com/api/';
const initialState = new Immutable({
  events: [],
  errors: {},
  hasMoreEvents: true,
  eventPage: 1,
  loading: false
});

const event = {
  state: initialState,
  reducers: {
    fetchEventsFulfiled: (state, payload) => {
      if (payload.data.length > 0){
        return state.merge({
          events: state.events.concat(payload.data),
          eventPage: state.eventPage + 1,
          loading: false
        });
      }
      return state.merge({
        loading: false,
        hasMoreEvents: false
      });
    },
    fetchEventsPending: (state) => {
      return state.merge({
        loading: true
      });
    },
    resetEvents: (state) => {
      return state.merge({
        events: [],
        hasMoreEvents: true,
        eventPage: 1,
        errors: {},
        loading: false
      });
    },
    fetchEventsRejected: (state, payload) => {
      return state.merge({
        errors: payload.errors || payload,
        loading: false
      });
    }
  },
  effects: (dispatch) => ({
    fetchEvents(token, state){
      const { eventPage, hasMoreEvents } = state.event;
      if (hasMoreEvents){
        dispatch.event.fetchEventsPending();
        //https://frontend-test.agendaedu.com/api/events?limit=1;page=1
        return axios.get(`${API_URL}events?limit=10;page=${eventPage}`, {headers: {'Content-Type': 'application/json', token: token} })
          .then(res => {
            dispatch.event.fetchEventsFulfiled(res.data);
          })
          .catch(err =>{
            dispatch.event.fetchEventsRejected(err);
          });
      }
    }
  })
};

export default event;