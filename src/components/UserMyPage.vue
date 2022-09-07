<template>
    <div>
    <NavBarLoggedIn />
      <div class="userhome">
        <h2>My Page</h2>
      </div>
    
      <div>
        <form @submit.prevent="addBlogPost">
          <b class="Same">Ime: </b> <p class="Same">{{ime}}</p><br>
          <b class="Same">Prezime: </b> <p class="Same">{{prezime}}</p><br>
          <b class="Same">Username: </b> <p class="Same">{{username}}</p><br>
          <b class="Same">Email: </b> <p class="Same">{{email}}</p><br>
          <input type="submit" value="Change" class="btn">
        </form>
        </div>
    </div>
</template>
    
<script>
  // import axios from 'axios'
  import NavBarLoggedIn from './NavBarLoggedIn.vue'
  import { mapActions, mapState } from 'vuex';
  
  export default {
    
    name: 'UserHome',
    components: {
      NavBarLoggedIn
    },
    data(){
      return {
        // user: {
        //   username:'',
        //   ime:'',
        //   prezime:'',
        //   email:''
        // }
        // username : mapState.username
      }
    },

    computed: {
      ...mapState([
        'username',
        'ime',
        'prezime',
        'email'
      ]),
    },

    mounted() {
      console.log(localStorage.getItem('username'))
      this.fetchUser()
    },

    methods: {
    ...mapActions([
      'fetchUser'
      ]),
    }
  
  }
</script>

<style scoped>
th, td {
  border-bottom: 1px solid #ddd;
}
table {
  width: 100%;
}
.Same{
  display:inline-block;
}
</style>
