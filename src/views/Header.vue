<template>
    <header class="header">
        <h1>Wellness center</h1>
    </header>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
    /* .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  } */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    padding: 5px;
    border: 1px solid steelblue;
    border-radius: 5px;
    }
</style>