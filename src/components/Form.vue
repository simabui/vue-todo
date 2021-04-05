<template>
  <form class="form" v-on:submit.prevent="onSubmit">
    <Input placeholder="Enter New To Do" name="todo" id="todo" :value="todo" />
    <span v-if="errors.length" class="form__error">Input is empty</span>
    <Button type="submit" class="form__button">></Button>
  </form>
</template>

<script>
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
  methods: {
    onSubmit: function(e) {
      this.todo = e.target.todo.value;
      this.checkForm();
    },
    checkForm: function() {
      this.errors = [];

      if (!this.todo) this.errors.push("Name of todo is required");
      if (this.todo) return;
    },
  },
};
</script>
