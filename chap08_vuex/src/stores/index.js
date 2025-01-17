import { createStore } from 'vuex';

import countStore from './countStore';
import todoStore from './todoStore';

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    countStore, todoStore
  }
});
export default store;