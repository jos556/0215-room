<script setup>

</script>

<template>
  <div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
  </div>
</template>
<script setup lang='ts'>
import { reactive } from 'vue'
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'

const particlesInit = async (engine:Engine) => {
  await loadFull(engine)
}

const particlesLoaded = async (container:any) => {
  console.log('Particles container loaded', container)
}
const options = reactive({
    background: {
      color: {
        value: '#000000' // 粒子颜色
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
          duration: 2,
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
        color: '#ffffff', // '#dedede'。线条颜色。
        distance: 150, // 线条长度
        enable: false, // 是否有线条
        opacity: 0.5, // 线条透明度。
        width: 1 // 线条宽度。
      },
      collisions: {
        enable: false
      },
      move: {
        direction: 'down',
        enable: true,
        outMode: 'out',
        random: false,
        speed: 6, // 粒子运动速度。
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80 // 粒子数量。
      },
      opacity: {
        value: 0.5 // 粒子透明度。
      },
      shape: {
        type: 'edge' // 可用的粒子外观类型有："circle","edge","triangle", "polygon","star"
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
</style>
