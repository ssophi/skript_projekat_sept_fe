<template>
  <div>
    <Header />
    <!-- <NavBarNotLoggedIn /> -->
    <router-view/>
    <!-- <NavBarLoggedIn /> -->
    <!-- <Home v-bind:treninzi="treninzi" v-bind:masaze="masaze"/> -->
    <!-- <div>
      <p> </p>
    </div> -->
    <NavBar />
  </div>
</template>

<script>
  import Header from './views/Header.vue'
  import NavBarNotLoggedIn from './views/NavBarNotLoggedIn.vue'
  import NavBarLoggedIn from './components/NavBarLoggedIn.vue'
  import NavBar from './components/NavBar.vue'
  // import Home from './views/Home.vue'
  
  
  export default {
    name: 'App',
    components: {
      Header,
      NavBarNotLoggedIn,
      NavBarLoggedIn,
      NavBar
      // Home
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
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
