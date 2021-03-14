<template>
  <div id="app">
    <Title />
    <Form />
  </div>
</template>

<script>
import Title from "./components/Title";
import Form from "@/components/Form";

export default {
  name: "App",
  components: {
    Title,
    Form,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
