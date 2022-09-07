<template>
    <div>
        <h2>Register</h2>
        <form id="loginForm" v-on:submit="onSubmit">
            <div>
                <label for="username">Username: </label>
                <input type="text" id="username" v-model="form.username" name="username" placeholder="Username" required>
            </div>
            <div>
                <label for="password">Password: </label>
                <input type="password" id="password" v-model="form.password" name="password" placeholder="Password" required>
            </div>
            <div>
                <label for="ime">Ime: </label>
                <input type="ime" id="ime" v-model="form.ime" name="ime" placeholder="Ime" required>
            </div>
            <div>
                <label for="prezime">Prezime: </label>
                <input type="prezime" id="prezime" v-model="form.prezime" name="prezime" placeholder="Prezime" required>
            </div>
            <div>
                <label for="email">Email: </label>
                <input type="email" id="email" v-model="form.email" name="email" placeholder="Email" required>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="tip_clanarine" id="clasic" value="clasic"
                    v-model="form.tip_clanarine">
                <label class="form-check-label" for="tip_clanarine">clasic</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="tip_clanarine" id="clasic" value="exclusive"
                    v-model="form.tip_clanarine">
                <label class="form-check-label" for="tip_clanarine">exclusive</label>
            </div>
            <input type="submit" value="Sign Up" class="btn">
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Registration',

  data(){
    return {
      form:{
          username:'',
          password:'',
          ime:'',
          prezime:'',
          email:'',
          tip_clanarine:''
      }
    }
  },

//   methods:{
//     getUserByUsername(){
//         console.log('http://localhost:5000/user/register', this.form)
//         axios.post('http://localhost:5000/user/register', this.form)
//         .then(res => {
//             console.log(res.data.token)
//             localStorage.setItem('jwt', res.data.token)})
//             this.$router.push('user') 
//         .catch(err => console.log(err))
//     }
//   }

methods: {
    ...mapActions([
      'register'
    ]),

    onSubmit(e) {
      console.log("submitujem")
        e.preventDefault();

        this.register(this.form);
        this.$router.push('/user');
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