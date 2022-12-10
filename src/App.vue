<template>
  <Header/>
  <router-view/>
</template>

<script>
  import Header from "./components/Header.vue"
  export default {
    name: "App",
    components: {
      Header
    },
    data() {
      return {
        loading:false
      }
    },
    mounted() {
      this.$store.dispatch("getUser");
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
