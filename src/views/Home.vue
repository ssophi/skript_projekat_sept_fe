<template>
  
  <div>
    <NavBarNotLoggedIn />
      <div class="home">
      <h2>Svi treninzi u ponudi</h2>
      <div v-bind:key="trening.id" v-for="trening in treninzi">
          <WorkoutItem v-bind:trening="trening"  />
      </div>
      <h2>Sve masaze u ponudi</h2>
      <div v-bind:key="masaza.id" v-for="masaza in masaze">
          <MasageItem v-bind:masaza="masaza"  />
      </div>
      <!-- <div v-for="mas in masaze"
      :key="mas.id"
      ></div> -->
    </div>
  </div>

</template>

<script>
import NavBarNotLoggedIn from './NavBarNotLoggedIn.vue'
import WorkoutItem from './WorkoutItem.vue'
import MasageItem from './MasageItem.vue'
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',

  components: {
    NavBarNotLoggedIn,
     WorkoutItem,
     MasageItem,
  },

  // props: {
  //     mas: Object
  //   },

  computed: {
    ...mapState([
      'masaze',
      'treninzi'
    ])
  },
  
  // data(){
  //   return {
  //     // treninzi: [
        
  //     // ],
  //     // masaze: [
        
  //     // ]
  //   }
  // },

  mounted() {
      this.fetchMasaze();
      this.fetchTreninzi();
      
      // if (localStorage.token) {
      //   this.setToken(localStorage.token);
      // }
    },

  methods: {
    ...mapActions([
      'fetchMasaze',
      'fetchTreninzi'
    ]),

    goToLogIn(){
    this.$router.push('/login'); 
    },
    goToRegister(){
      this.$router.push('/register'); 
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
</style>

