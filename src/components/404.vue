<template>
    <div class="setitem">
      <img src="../assets/404.gif" alt="" class="error">
  404 error
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
onMounted(() => {const preloader = document.getElementById("preloader")
preloader.style.display ="none";
});
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  img{
    display: flex;
    width: 600px;
    border-radius: 1%;
  }
  @font-face {
    font-family: VastShadow-Regular;
  src: local("VastShadow-Regular"),
  url(../assets/VastShadow-Regular.ttf);
  font-weight: bold;
      }
  .setitem{
    color:rgb(255, 171, 46);
    font-size: xxx-large;
    font-family: 'VastShadow-Regular';
    margin-top: 100px;
    margin-bottom: 155px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  
  </style>