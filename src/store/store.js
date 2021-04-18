import Vue from "vue";
import Vuex from "vuex";
import types from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    [types.ADD_TO_DO](state, payload) {
      state.todos.push(payload);
    },
  },
});

export default store;
