import Vue from "vue";
import Vuex from "vuex";
import { ADD_TO_DO } from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    [ADD_TO_DO](state, payload) {
      state.todos.push(payload);
    },
  },
});

export default store;
