<template>
    <div>
    <NavBarLoggedIn/>
      <div class="userhome">
        <h2>Forma za zakazivanje treninga</h2>
      </div>
          <b>Ponedeljak</b> <br>
          <div v-bind:key="trening.id" v-for="trening in trening_ponedeljak">
            <UserReserveWorkoutItem v-bind:trening="trening"  />
            <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
          </div> <br>
    
          <b>Utorak</b><br>
          <div v-bind:key="trening.id" v-for="trening in trening_utorak">
            <UserReserveWorkoutItem v-bind:trening="trening"  />
            <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
          </div> <br>
    
          <b>Sreda</b><br>
          <div v-bind:key="trening.id" v-for="trening in trening_sreda">
            <UserReserveWorkoutItem v-bind:trening="trening"  />
            <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
          </div> <br>
    
          <b>Cetvrtak</b><br>
          <div v-bind:key="trening.id" v-for="trening in trening_cetvrtak">
            <UserReserveWorkoutItem v-bind:trening="trening"  />
            <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
          </div> <br>
    
          <b>Petak</b><br>
          <div v-bind:key="trening.id" v-for="trening in trening_petak">
            <UserReserveWorkoutItem v-bind:trening="trening"  />
            <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
          </div> <br>
    
          <b>Subota</b><br>
          <div v-bind:key="trening.id" v-for="trening in trening_subota">
            <UserReserveWorkoutItem v-bind:trening="trening"  />
            <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
          </div> <br>
    
          <b>Nedelja</b><br>
          <div v-bind:key="trening.id" v-for="trening in trening_nedelja">
            <UserReserveWorkoutItem v-bind:trening="trening"  />
            <!-- v-on:del-blogpost="$emit('del-blogpost', blogpost.id)" -->
          </div> <br>
      </div>
    </template>
    
    <script>
    // import axios from 'axios'
    import UserReserveWorkoutItem from './UserReserveWorkoutItem.vue'
    import NavBarLoggedIn from './NavBarLoggedIn.vue'
    import { mapActions, mapState } from 'vuex';
    
    export default {
      name: "UserReserveWorkout",
      components: {
         UserReserveWorkoutItem,
         NavBarLoggedIn
      },
    
    computed: {
      ...mapState([
        'trening_ponedeljak',
        'trening_utorak',
        'trening_sreda',
        'trening_cetvrtak',
        'trening_petak',
        'trening_subota',
        'trening_nedelja',
    ])
  },

  mounted() {
      this.fetchSlobodneTreningPonedeljak(),
      this.fetchSlobodneTreningUtorak(),
      this.fetchSlobodneTreningSreda(),
      this.fetchSlobodneTreningCetvrtak(),
      this.fetchSlobodneTreningPetak(),
      this.fetchSlobodneTreningSubota(),
      this.fetchSlobodneTreningNedelja()
  },

  methods: {
    ...mapActions([
      'fetchSlobodneTreningPonedeljak',
      'fetchSlobodneTreningUtorak',
      'fetchSlobodneTreningSreda',
      'fetchSlobodneTreningCetvrtak',
      'fetchSlobodneTreningPetak',
      'fetchSlobodneTreningSubota',
      'fetchSlobodneTreningNedelja',
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
    