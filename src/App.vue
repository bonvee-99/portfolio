<template>
  <TerminalClient/>
</template>

<script>
import TerminalClient from './components/TerminalClient.vue'

export default {
  name: 'App',
  components: {
    TerminalClient
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
