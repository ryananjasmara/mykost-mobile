import AsyncStorage from '@react-native-community/async-storage';
import {createStore, action, thunk, persist} from 'easy-peasy';
import Methods from '../services/api/methods';

const storage = {
  async getItem(key) {
    return JSON.parse(await AsyncStorage.getItem(key));
  },
  async setItem(key, data) {
    AsyncStorage.setItem(key, JSON.stringify(data));
  },
  async removeItem(key) {
    AsyncStorage.removeItem(key);
  },
};

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
  clearUser: action((state, payload) => {
    state.user = null;
  }),
};

const store = createStore(
  persist(
    {
      ...userModel,
    },
    {storage},
  ),
);

export default store;
