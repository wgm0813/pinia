<template>
  <div class="app">
    App文件
    <home-page></home-page>
  </div>
</template>

<script>
import homePage from './views/homePage.vue';
export default {
  components:{
    homePage,
  },
  name: 'App',
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
