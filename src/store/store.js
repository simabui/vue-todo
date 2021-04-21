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
    [types.SET_COMPLETED](state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id);
      todo.completed = !todo.completed;
    },
    [types.REMOVE_TODO](state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos.splice(index, 1);
    },
  },
  getters: {
    todosCount: (state) => {
      return state.todos.length;
    },
    completedCount: (state) => {
      return state.todos.filter((todo) => todo.completed).length;
    },
  },
});

export default store;
