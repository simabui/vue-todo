<template>
  <form class="form" v-on:submit.prevent="onSubmit">
    <Input placeholder="Enter New To Do" name="todo" id="todo" :value="todo" v-model="todo" />
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
    onSubmit: function() {
      const isValid = this.checkForm();
      if (isValid) {
        console.log({ todo: this.todo });
      }
    },
    checkForm: function() {
      this.errors = [];

      if (!this.todo) {
        this.errors.push("Name of todo is required");
        return false;
      }

      if (this.todo) return true;
    },
  },
};
</script>
