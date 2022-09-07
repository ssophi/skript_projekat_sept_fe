<template>
    <div class="workout-item">
        <b>{{trening.tip}}</b>
        <p>satnica: od {{trening.sati_od}} do {{trening.sati_do}}</p>
        <button @click="onSubmit" class="btn-reserve">RESERVE</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name:"UserReserveWorkoutItem",
  props:["trening"],
  data(){
    return {
      form:{
          username: localStorage.getItem('username'),
          terminId: this.trening.id
      }
    }
  },

  methods: {
      ...mapActions([
        'reserve'
      ]),

      onSubmit(e) {
        console.log("submitujem")
          e.preventDefault();

          this.reserve(this.form);
        }
    }


  }
</script>

<style scoped>
    .workout-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .btn-reserve {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
    border-radius: 10px;
  }
</style>