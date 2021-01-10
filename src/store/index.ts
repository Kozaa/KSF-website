import { createStore } from "vuex";

export default createStore({
  state: {
    recentSort: "map",
    serversSort: "CS:S",
  },
  mutations: {
    setRecentSort(state, option) {
      state.recentSort = option;
    },
    setServersSort(state, option) {
      state.serversSort = option;
    },
  },
  actions: {},
  modules: {},
});
