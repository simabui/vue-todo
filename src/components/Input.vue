<template>
  <input
    v-bind:placeholder="placeholder"
    v-bind:type="type"
    v-bind:id="id"
    v-bind:name="name"
    v-bind:value="value"
    v-on:input="onChange"
    class="input"
  />
</template>

<script>
export default {
  name: "Input",
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: "input",
    },
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: transparent;
  border-bottom: 1px solid #000;

  &:focus {
    outline: transparent;
  }
}
</style>
