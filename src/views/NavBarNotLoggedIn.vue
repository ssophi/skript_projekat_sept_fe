<template>
    <div>
        <div id="nav">
        | <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        </div>
        <router-view/>
    
        <div call="container">
            <button  @click="goToLogIn()" class = "btn-logIn">Log In</button>
            <button  @click="goToRegister()" class = "btn-signUp">Sign Up</button>
        </div>
    </div>
</template>
  
  <script>
  // import NavBarNotLoggedIn from './views/NavBarNotLoggedIn.vue'
  
  export default {
    name: 'NavBarNotLoggedIn',
  
    methods:{
      goToLogIn(){
        this.$router.push('/login'); 
      },
      goToRegister(){
        this.$router.push('/register'); 
      }
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
  
  .btn-signUp {
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
    .btn-logIn {
      position: absolute;
      top: 145px;
      right: 120px;
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