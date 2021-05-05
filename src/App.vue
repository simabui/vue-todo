<template>
  <div id="app">
    <transition name="modal">
      <Modal v-if="modal.show" />
    </transition>
    <Title />
    <div class="container">
      <div class="todo">
        <Form />
        <Statistic />
        <ToDoList />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./components/Title";
import Form from "./components/Form";
import ToDoList from "./components/todo/ToDoList";
import Statistic from "./components/Statistic";
import Modal from "./components/Modal";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Title,
    Form,
    ToDoList,
    Statistic,
    Modal,
  },
  computed: {
    ...mapState(["modal"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

body {
  background: rebeccapurple;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
