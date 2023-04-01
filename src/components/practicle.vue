<script setup>

</script>

<template>
  <div class="containter">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
  </div>
  <div class="containter"><a class="nav-link" href="/"><button class="btn btn-outline-primary"><img id="back" src="../assets/arrow.png" alt=""></button></a></div>
</template>
<script setup lang='ts'>
import { RouterLink } from "vue-router";
import { reactive } from 'vue'
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'
import { ref, onMounted } from 'vue'
onMounted(() => {const preloader = document.getElementById("preloader")
preloader.style.display ="none";
});

const particlesInit = async (engine:Engine) => {
  await loadFull(engine)
}

const particlesLoaded = async (container:any) => {
  console.log('Particles container loaded', container)
}
const options = reactive({
    background: {
      color: {
        value: '#000000' // 粒子顏色
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'bubble' // 可用的click模式有: "push", "remove", "repulse", "bubble"。
        },
        onHover: {
          enable: true,
          mode: 'repulse' // 可用的hover模式有: "grab", "repulse", "bubble"。
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 1,
          opacity: 0.6,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: '#d99898'
      },
      links: {
        color: '#ffffff', // '#dedede'。線條顏色。
        distance: 150, // 線條長度
        enable: false, // 是否有線條
        opacity: 0.5, // 線條透明度。
        width: 1 // 線條寬度。
      },
      collisions: {
        enable: false
      },
      move: {
        direction: 'down',
        enable: true,
        outMode: 'out',
        random: false,
        speed: 6, // 粒子運動速度。
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80 // 粒子數量。
      },
      opacity: {
        value: 0.5 // 粒子透明度。
      },
      shape: {
        type: 'edge' // "circle","edge","triangle", "polygon","star"
      },
      size: {
        random: true,
        value: 8
      }
    },
    detectRetina: true
  })

</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
 .btn{
  position: relative;
  z-index: 11;
 }
 #back{
  width: 33px;
  height: 33px;
 }
</style>
