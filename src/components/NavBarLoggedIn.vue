<template>
    <div>
        <div id="nav">
        | <router-link to="/user">UserReserveWorkout</router-link> |
        <router-link to="/user/masage">UserReserveMasage</router-link> |
        <router-link to="/user/myPage">UserMyPage</router-link> |
        <!-- <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> -->
        </div>
        <router-view/>
        <!-- <h2>Nav Bar Not Logged In </h2> -->
    
        <div call="container">
            <button @click="logOut()" class = "btn-logOut">Log Out</button>
        </div>
    </div>
</template>
  
  <script>
  // import NavBarNotLoggedIn from './views/NavBarNotLoggedIn.vue'
  
  export default {
    name: 'NavBarLoggedIn',
    components: {
      //Header
    },
    methods:{
      logOut(){
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        this.$router.push('/'); 
      },
    }
  }
  </script>
  
  <style>
  #nav {
    padding: 30px;
  }
  
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  #nav a.router-link-exact-active {
    color: #42b983;
  }
  
  
  .btn-logOut {
      position: absolute;
      top: 145px;
      right: 16px;
      display: inline-block;
      border: none;
      background: #555;
      color: #fff;
      padding: 7px 20px;
      cursor: pointer;
      border-radius: 10px;
    }
    .container {
      position: relative;
    }
  </style>