<template>
  <form class="form-main" v-on:submit.prevent="onSubmit">
    <Input placeholder="Enter New To Do"  class="form__input"/>
  </form>
</template>

<script>
import Input from "./Input";
export default {
  name: "Form",
  components: {
    Input,
  },
  data:function(){
    return {
      form: {}
    }
  },
  methods: {
    onSubmit: function(e){
      console.log(e)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
