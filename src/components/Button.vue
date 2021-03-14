<template>
  <button v-bind:type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type:String,
      default:'button'
    }
  },
  created() {

  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style scoped>

</style>