<template>
  <div id="app">
    <SignUp/>
  </div>
</template>

<script>
import SignUp from '../components/SignUp';

export default {
  name: 'home',
  components: {
    SignUp,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
