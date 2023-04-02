<script setup >
// import HelloWorld from './components/HelloWorld.vue'
import index from './components/index.vue'
import { RouterView } from 'vue-router';
import Experience from '../experience/experience'
import { ref, onMounted,  } from 'vue'
import footerVue from './components/footer.vue';
const isRouterAlive = ref(true);


onMounted(() => {const preloader = document.getElementById("preloader")
window.addEventListener("load",function(){
      window.setTimeout(( () => preloader.style.display ="none") ,2000);
})
window.setTimeout(( () =>  new Experience(document.querySelector(".experience-canvas"))) ,50);
});


</script>

<template>
  <div ref="preloader" id="preloader"><img src="./assets/preloader.png" alt=""></div>
  <main>
    <RouterView v-if="isRouterAlive"/>
    <footerVue/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }



  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
