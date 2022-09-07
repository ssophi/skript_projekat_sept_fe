<template>
    <div class="masage-item">
       <b>{{masaza.tip}}</b> 
       <p>satnica: od {{masaza.sati_od}} do {{masaza.sati_do}}</p>
       <button @click="onSubmit" class="btn-reserve">RESERVE</button>    
     </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

export default {
   name:"UserReserveMassageItem",
   props:["masaza"],
   data(){
   return {
     form:{
         username: localStorage.getItem('username'),
         terminId: this.masaza.id
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
   .masage-item {
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