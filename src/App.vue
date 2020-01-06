<template>
 	<div id="app">
 		<router-view />
 	</div>
</template>

<script>
  console.log("app.vue")
  export default {
    name: 'App',
  }
</script>

<style>
  html,body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }
</style>
