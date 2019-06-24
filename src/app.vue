<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LittleHelper msg="输入你的信息"/>
  </div>
</template>

<script>
import LittleHelper from './components/LittleHelper.vue'

export default {
  name: 'app',
  components: {
    LittleHelper
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
  margin-top: 60px;
}
</style>
