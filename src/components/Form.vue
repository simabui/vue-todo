<template>
  <form class="form" v-on:submit.prevent="onSubmit">
    <Input placeholder="Enter New To Do" name="todo" id="todo" :value="todo" v-model="todo" type="input" test="teasd" />
    <span v-if="errors.length" class="form__error">Input is empty</span>
    <Button type="submit" class="form__button">
      <i class="fas fa-arrow-right"></i>
    </Button>
  </form>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import Button from "./Button";

export default {
  name: "Form",
  components: {
    Input,
    Button,
  },
  data: function() {
    return {
      errors: [],
      todo: null,
    };
  },
  computed: {
    // spread store states
    ...mapState(["todos"]),
  },
  methods: {
    // spread store mutations
    ...mapMutations(["addToDo"]),
    onSubmit: function() {
      const isValid = this.checkForm();
      if (isValid) {
        // add to store
        this.addToDo({
          text: this.todo,
          completed: false,
          priority: "normal",
          id: uuidv4(),
        });
      }
    },
    checkForm: function() {
      this.errors = [];

      if (!this.todo) {
        this.errors.push("Name of todo is required");
        return false;
      }

      return true;
    },
  },
};
</script>
