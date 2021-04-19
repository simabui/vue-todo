<template>
  <div class="todo__list">
    <ToDoItem v-for="todo in todos" v-bind:key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ToDoItem from "./ToDoItem";

export default {
  name: "ToDoList",
  components: {
    ToDoItem,
  },
  computed: {
    ...mapState(["todos"]),
  },
};
</script>
<style lang="scss">
.todo__list {
  margin-top: 50px;
}
</style>
