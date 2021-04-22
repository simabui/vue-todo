<template>
  <div class="todo__list">
    <transition-group name="list" tag="ul">
      <ToDoItem v-for="todo in todos" v-bind:key="todo.id" :todo="todo" />
    </transition-group>
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
  position: relative;
}

// animation
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-leave-active {
  width: 100%;
  position: absolute;
}
.list-enter,
.list-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
// smooth moving in lists
.list-move {
  transition: all 1s;
}
</style>
