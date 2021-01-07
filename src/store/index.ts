import { createStore } from "vuex";

export default createStore({
  state: {
    recentSort: "map",
  },
  mutations: {
    setRecentSort(state, option) {
      state.recentSort = option;
    },
  },
  actions: {},
  modules: {},
});
