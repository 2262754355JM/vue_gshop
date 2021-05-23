<template>
  <div id="app">
    <!-- <p>app</p> -->
    <router-view/>
    <footer-guide v-if="$route.meta.showFooter"></footer-guide>
    
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components:{
    FooterGuide
    
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #090c0f;
  padding: 0;
  margin: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
