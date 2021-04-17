<template>
  <form class="form" v-on:submit.prevent="onSubmit">
    <Input placeholder="Enter New To Do" name="todo" id="todo" :value="todo" v-model="todo" type="input" test="teasd" />
    <span v-if="errors.length" class="form__error">Input is empty</span>
    <Button type="submit" class="form__button">></Button>
  </form>
</template>

<script>
import Input from "./Input";
import Button from "./Button";
import { mapState, mapMutations } from "vuex";

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
        this.addToDo({ todo: this.todo });
        console.log(this.todos);
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
