<template>
    <div> 
      <!-- class="workout-item"> -->
        <b>{{masaza.tip}}</b>
        <!-- <p>{{blogpost.content}}</p> -->
        <!-- <button @click="$emit('del-blogpost', blogpost.id)" class="del">x</button> -->
    </div>
</template>

<script>
export default {
    name:"MasageItem",
    props:["masaza"]
}
</script>

<style scoped>
    .workout-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  /* .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  } */
</style>