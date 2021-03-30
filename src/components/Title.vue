<template>
  <div class="logo">
    <img alt="Vue logo" src="../assets/vuelogo.svg" class="logo__img">
    <h1>To-Do List</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style  lang="scss" scoped>
  .logo{
    display: inline-flex;
    align-items: center;

    &__img{
      width: 70px;
      height: auto;
    }
    h1{
      font-family: 'Montserrat', sans-serif;
      color: #000;
    }
  }
</style>