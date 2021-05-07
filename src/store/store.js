import Vue from "vue";
import Vuex from "vuex";
import types from "./mutations";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
    todoItem: {},
    modal: {
      show: false,
    },
  },
  mutations: {
    [types.ADD_TO_DO](state, payload) {
      state.todos.unshift(payload);
    },
    [types.SET_COMPLETED](state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id);
      todo.completed = !todo.completed;
    },
    [types.REMOVE_TODO](state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos.splice(index, 1);
    },
    [types.PICK_TODO_ITEM](state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id);
      state.todoItem = todo;
    },
    [types.UPDATE_TODO](state, payload) {
      const { text, priority, pending } = payload;
      state.todos.forEach((todo) => {
        if (todo.id === payload.id) {
          todo.text = text;
          todo.priority = priority;
          todo.pending = pending;
        }
      });
    },
    [types.OPEN_MODAL](state) {
      state.modal.show = true;
    },
    [types.CLOSE_MODAL](state) {
      state.modal.show = false;
    },
  },
  getters: {
    todosCount: (state) => {
      return state.todos.length;
    },
    completedCount: (state) => {
      return state.todos.filter((todo) => todo.completed).length;
    },
    totalPending: (state) => {
      return state.todos.filter((todo) => todo.pending).length;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
