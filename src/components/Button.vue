<template>
  <button v-bind:type="type" v-on:click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    onClick: {
      type: Function,
      default: () => null,
    },
  },
};
</script>

<style scoped></style>
