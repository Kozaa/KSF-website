import { createStore } from "vuex";

export default createStore({
  state: {
    recentSort: "map",
    serversSort: "CS:S",
  },
  mutations: {
    setRecentSort(state, option) {
      console.log("setRecentSort");
      state.recentSort = option;
    },
    setServersSort(state, option) {
      console.log("setServerSort");
      state.serversSort = option;
    },
  },
  actions: {},
  modules: {},
});
