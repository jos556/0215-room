<script setup>

</script>

<template>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
    <a class="nav-link" href="/"><button class="btn btn-outline-primary"><img id="back" src="../assets/arrow.png" alt=""></button></a>
  <div class="cn">
    <div class="jn">
    <div class="card right" @mouseover ="mouseover">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div>
    </div>
        <div class="card wrong" style="width: 18rem;">
      <img class="card-img-top" src="../assets/040704_名片.svg" alt="Card image cap">
      </div>
    </div>
    <div id="flow" :style="{'display': isActive ? '': 'none'}"><img id ="img1" src="../assets/pic.png" alt="" ></div>
    <div class="hn" :style="{'display': isActive ? '': 'none'}">
      <div class="jn">
    <div class="card right "  id = "cd1" @mouseover ="mouseoversec">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div>
    </div>
    <div class="card wrong" style="width: 18rem;">
      <img class="card-img-top" src="../assets/back.png" alt="Card image cap">
      </div>
    </div>
    <div class="jn">
    <div class="card right" id = "cd1" @mouseover ="mouseoversec">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div>
    </div>
    <div class="card wrong" style="width: 18rem;">
      <img class="card-img-top" src="../assets/back1.png" alt="Card image cap">
      </div>
    </div>
  </div>
  <div id="flow" :style="{'display': isActived ? '': 'none'}"><img id ="img2" src="../assets/pic1.png" alt="" ><img id ="img2" src="../assets/pic1.png" alt="" ></div>
  <div class="hn" :style="{'display': isActived ? '': 'none'}">
    <div class="jn">
    <div class="card right" id = "cd1" @mouseover ="mouseoversec">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div>
    </div>
    <div class="card wrong" style="width: 18rem;">
      <img class="card-img-top" src="../assets/back1.png" alt="Card image cap">
      </div>
    </div>
    <div class="jn">
    <div class="card right" id = "cd1" @mouseover ="mouseoversec">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div>
    </div>
    <div class="card wrong" style="width: 18rem;">
      <img class="card-img-top" src="../assets/back1.png" alt="Card image cap">
      </div>
    </div>
  </div>
  </div>
</template>
<script setup lang='ts'>
import { RouterLink } from "vue-router";
import { reactive } from 'vue'
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'
import { ref, onMounted } from 'vue'
onMounted(() => {const preloader = document.getElementById("preloader")
    preloader.style.display ="none";
    const footer = document.getElementsByClassName('l-footer__main-bottom')
    footer[0].style.marginTop ="222px";
});
const isActive = ref (false);
const isActived =  ref(false);
const mouseover = function mouseover() {
  setTimeout( () => isActive.value = true,400) ;
}
const mouseoversec = function mouseover() {
  setTimeout( () => isActived.value = true,400) ;
}
const particlesInit = async (engine:Engine) => {
  await loadFull(engine)
}

const particlesLoaded = async (container:any) => {
  console.log('Particles container loaded', container)
}
const options = reactive({
    background: {
      color: {
        value: '#ffffff' // 粒子顏色
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
.cn{
  width: 100vw ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 150px;

}
.hn{
  display: flex;
}
.jn{
  display: flex;
  position: relative;
  width: 286px;
  height: 199px;
  margin-right: 21px;
}
.right{
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  left: 0;
}
.wrong{
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(-180deg);
}
.jn:hover .wrong {
  transform: rotateY(0deg);
  animation: flame 5s linear infinite; 
}
.jn:hover .right {
  transform: rotateY(180deg);
  
}
.card{
  display: flex;
}
.card-img-top{
  height: 199.2px;
}
#flow{
  display: flex;
}

.btn-outline-primary{
  margin:3px;
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.card{
  width: 18rem;
}

 .btn{
  position: relative;
  z-index: 11;
 }
 #cd1{
  margin-right: 80px;
 }
 #back{
  width: 33px;
  height: 33px;
 }
 #img1{
  position: relative;
  height: 300px;
  width: 103%;
  z-index: 22;
  margin-top: 20px;
 }
 #img2{
  position: relative;
  height: 300px;
  z-index: 22;
  margin-top: 20px;
  margin-right: 130px;
  margin-left: 110px;
 }
 @keyframes flame{ 
	0%{
		box-shadow:  0 0 10px #FF3838,
				  inset 0 0 10px #8EB6FF;
		filter : hue-rotate(0deg);  
	}
	20%{
		box-shadow:  0 0 10px #FF3838,
				  inset 0 0 10px #8EB6FF;
	}
	40%{
		box-shadow:  0 0 10px #FF3838,
				  inset 0 0 10px #8EB6FF;
	}
	60%{
		box-shadow:  0 0 10px #FF3838,
				  inset 0 0 10px #8EB6FF;
	}
	80%{
		box-shadow:  0 0 10px #FF3838,
				  inset 0 0 10px #8EB6FF;
	}
	100%{
		box-shadow:  0 0 10px #FF3838,
				  inset 0 0 10px #8EB6FF;
		filter : hue-rotate(360deg);
	}
}
</style>
