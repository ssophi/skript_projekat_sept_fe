<template>
    <div>
        <h2>Log In</h2>
        <form id="loginForm" v-on:submit="onSubmit">
            <div>
                <label for="username">Username: </label>
                <input type="text" id="username" v-model="form.username" name="username" placeholder="Username" required>
            </div>
            <div>
                <label for="password">Password: </label>
                <input type="password" id="password" v-model="form.password" name="password" placeholder="Password" required>
            </div>
            <input type="submit" value="Log In" class="btn">
            <!-- <input type="submit" variant="primary" value="Log In" class="btn"> -->
            <!-- <button type="submit" variant="primary">Log In</button> -->
        </form>
    </div>
</template>

<script>
//import axios from 'axios'
import UserReserveWorkout from '../components/UserReserveWorkout.vue'
// import vueJoiValidation from 'vue-joi-validation'
import { mapActions, mapState } from 'vuex';

// Vue.use(vueJoiValidation)

export default {
  name: 'LogIn',

  components: UserReserveWorkout,

  data(){
    return {
      form:{
          username:'',
          password:''
      }
    }
  },

  methods: {
    ...mapActions([
      'login'
    ]),

    onSubmit(e) {
      console.log("submitujem")
        e.preventDefault();

        this.login(this.form);
        localStorage.setItem('username', this.form.username)
        // this.$router.push('/user');
      }
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