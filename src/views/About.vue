<template>
  <div>
    <NavBarNotLoggedIn />
    <div class="about">
      <h1>About page</h1>
    </div>
  </div>
  </template>
  
  <script>
  import NavBarNotLoggedIn from './NavBarNotLoggedIn.vue'
  
  export default {
    name: 'About',
    components: {
      NavBarNotLoggedIn
    }
  }
  </script>
