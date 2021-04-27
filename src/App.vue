<template>
  <div id="app">
    <Modal ref="modal" />
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

export default {
  name: "App",
  components: {
    Title,
    Form,
    ToDoList,
    Statistic,
    Modal,
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
</style>
