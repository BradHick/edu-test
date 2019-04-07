import Immutable from 'seamless-immutable';

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
      if (payload.length > 0){
        return state.merge({
          events: state.events.concat(payload),
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
    fetchCommits(params,state){
      const { eventPage, hasMoreEvents } = state.event;
      if (hasMoreEvents){
        dispatch.event.fetchCommitsPending();
        //https://frontend-test.agendaedu.com/api/events?limit=1;page=1
        return fetch(`https://frontend-test.agendaedu.com/api/events?limit=10;page=${eventPage}`)
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