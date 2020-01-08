<template>
  <div :id="$style.app">
    <router-view/>
  </div>
</template>

<style module scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
</style>
