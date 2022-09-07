<template>
    <div>
    <NavBarLoggedIn />
      <div class="userhome">
        <h2>Forma za zakazivanje masaza</h2>
      </div>
    
     
        <b>Ponedeljak</b> <br>
        <div v-bind:key="masaza.id" v-for="masaza in masaze_ponedeljak">
          <UserReserveMasageItem v-bind:masaza="masaza"  />
          <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
        </div> <br>
    
        <b>Utorak</b><br>
        <div v-bind:key="masaza.id" v-for="masaza in masaze_utorak">
          <UserReserveMasageItem v-bind:masaza="masaza"  />
          <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
        </div> <br>
    
        <b>Sreda</b><br>
        <div v-bind:key="masaza.id" v-for="masaza in masaze_sreda">
          <UserReserveMasageItem v-bind:masaza="masaza"  />
          <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
        </div> <br>
    
        <b>Cetvrtak</b><br>
        <div v-bind:key="masaza.id" v-for="masaza in masaze_cetvrtak">
          <UserReserveMasageItem v-bind:masaza="masaza"  />
          <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
        </div> <br>
    
        <b>Petak</b><br>
        <div v-bind:key="masaza.id" v-for="masaza in masaze_petak">
          <UserReserveMasageItem v-bind:masaza="masaza"  />
          <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
        </div> <br>
    
        <b>Subota</b><br>
        <div v-bind:key="masaza.id" v-for="masaza in masaze_subota">
          <UserReserveMasageItem v-bind:masaza="masaza"  />
          <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
        </div> <br>
    
        <b>Nedelja</b><br>
        <div v-bind:key="masaza.id" v-for="masaza in masaze_nedelja">
          <UserReserveMasageItem v-bind:masaza="masaza"  />
          <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
        </div> <br>
      </div>
    </template>
    
    <script>
    // import axios from 'axios'
    import UserReserveMasageItem from './UserReserveMasageItem.vue'
    import NavBarLoggedIn from './NavBarLoggedIn.vue'
    import { mapActions, mapState } from 'vuex';
    
    export default {
      name: "UserReserveWorkout",
      components: {
        UserReserveMasageItem,
        NavBarLoggedIn
      },

    computed: {
      ...mapState([
        'masaze_ponedeljak',
        'masaze_utorak',
        'masaze_sreda',
        'masaze_cetvrtak',
        'masaze_petak',
        'masaze_subota',
        'masaze_nedelja'
    ])
  },

  mounted() {
      this.fetchSlobodneMasazePonedeljak(),
      this.fetchSlobodneMasazeUtorak(),
      this.fetchSlobodneMasazeSreda(),
      this.fetchSlobodneMasazeCetvrtak(),
      this.fetchSlobodneMasazePetak(),
      this.fetchSlobodneMasazeSubota(),
      this.fetchSlobodneMasazeNedelja()
  },

  methods: {
    ...mapActions([
      'fetchSlobodneMasazePonedeljak',
      'fetchSlobodneMasazeUtorak',
      'fetchSlobodneMasazeSreda',
      'fetchSlobodneMasazeCetvrtak',
      'fetchSlobodneMasazePetak',
      'fetchSlobodneMasazeSubota',
      'fetchSlobodneMasazeNedelja',
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
    </style>
    