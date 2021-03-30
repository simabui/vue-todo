<template>
  <input v-bind:placeholder="placeholder" v-bind:type="type"  v-bind:value="value" class="input"/>
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "input",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    }
  },
};
</script>

<style  lang="scss" scoped>
.input{
  width: 100%;
}
</style>
