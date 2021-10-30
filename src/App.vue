<template>
  <div id="app">
    <b-container>
      <NavBar />
      <router-view />
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
   font-family: 'Orbitron', sans-serif;   
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #e61a44;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-family: 'Orbitron', sans-serif;   


    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
