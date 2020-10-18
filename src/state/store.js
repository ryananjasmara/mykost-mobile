import {createStore, action, thunk, persist} from 'easy-peasy';
import Methods from '../services/api/methods';

const userModel = {
  user: null,
  // api call / effect
  fetchUser: thunk(async (actions, payload) => {
    const response = await Methods.login(payload);
    actions.setUser(response);
  }),
  // actions
  setUser: action((state, payload) => {
    state.user = payload;
  }),
};

const store = createStore(
  persist({
    ...userModel,
  }),
);

export default store;
