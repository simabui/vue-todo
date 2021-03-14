<template>
  <input v-bind:placeholder="placeholder" />
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "input",
    },
    name: {
      type: String,
      default: "name",
    },
  },
};
</script>

<style scoped></style>
