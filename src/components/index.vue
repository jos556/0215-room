<template>
<main class="light-theme">
    <img src="../assets/23_.png" alt="penguinhero" @click = tog class="logo" style="position: fixed ;z-index: 99999999; border-radius: 20%; height:80px;">
    <div class="tog" style="display: none;"><div class="img-logo"  style="display: flex ;justify-content: center;" >
      <div class = "navgator" style="position: fixed ;z-index: 99999999; display: flex;">
        <div class="container"><div class="rol">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #ffffff6b;">
          <a class="navbar-brand" href="#"><img src="../assets/logof.png" alt="" @click = tog width="50" height="50"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/practicle" >History</a> 
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
          </div>
        </nav></div></div></div></div></div>
      <div class="experience">
        <canvas class="experience-canvas" id="cav"></canvas>
      </div>
      <div class="page">
        <div class="toggle-bar">
          <div class="sun-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 21q-1.65 0-2.825-1.175Q8 18.65 8 17H5q-.825 0-1.413-.587Q3 15.825 3 15q0-3.5 2.3-6.037Q7.6 6.425 11 6.05V3h2v3.05q3.4.375 5.7 2.913Q21 11.5 21 15q0 .825-.587 1.413Q19.825 17 19 17h-3q0 1.65-1.175 2.825Q13.65 21 12 21Zm-7-6h14q0-2.9-2.05-4.95Q14.9 8 12 8q-2.9 0-4.95 2.05Q5 12.1 5 15Zm7 4q.825 0 1.413-.587Q14 17.825 14 17h-4q0 .825.588 1.413Q11.175 19 12 19Zm0-2Z"/></svg>
          </div>
          <button class="toggle-button">
            <div class="toggle-circle"></div>
          </button>
          <div class="moon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Zm0 6q.675 0 1.3-.125t1.2-.4q-1.575-.725-2.537-2.175Q11 13.85 11 12q0-1.85.963-3.3.962-1.45 2.537-2.175-.575-.275-1.2-.4T12 6Q9.5 6 7.75 7.737 6 9.475 6 12q0 2.5 1.75 4.25T12 18Z"/></svg>
          </div>
        </div>
        <div class="page-wrapper">
          <section class="hero">
            <div class="hero-wrapper">
              <div class="hero-main">
                <h1 class="hero-main-title">Yang Ming</h1>
                <p class="hero-main-description">BIOMEDICAL INFORMATICS</p>
              </div>
              <div class="hero-second">
                <p class="hero-second-subheading">Yu-Fan
                  CHEN</p>
                <p class="hero-second-subheading sf">Portfolio</p>
              </div>
            </div>
          </section>
          <div class="swiper_content">
            <span style="font-size: xx-large;font-weight: bolder; color: black;">兪帆的相關連結</span>
          <swiper
    :modules="modules"
    :slides-per-view="2"
    :space-between="0"
    :loop="true"
    :lazy="true"
    :autoplay="{
            delay: 1500,
            disableOnInteraction: false
        }"
    :pagination="{ dynamicBullets: false }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  <swiper-slide><a href="https://www.facebook.com/profile.php?id=100002572182904" target="_blank" rel="noreferrer noopenner" ><img src="../assets/0307_set1.png" alt="" ></a><span style="font-size: x-large;font-weight: bolder;">FACEBOOK</span></swiper-slide>
  <swiper-slide><a href="https://www.linkedin.com/in/%E4%BF%9E%E5%B8%86-%E9%99%B3-9a89371b2/" target="_blank" rel="noreferrer noopenner" ><img src="../assets/0307_set2.png" alt="" ></a><span style="font-size: x-large;font-weight: bolder;">LINKEDIN</span></swiper-slide>
  <swiper-slide><a href="https://bmi.nycu.edu.tw/" target="_blank" rel="noreferrer noopenner" ><img src="../assets/0307_set3.png" alt="" ></a><span style="font-size: x-large;font-weight: bolder;">陽明交大生醫資訊</span></swiper-slide>
  <swiper-slide><a href="https://github.com/jos556" target="_blank" rel="noreferrer noopenner" ><img src="../assets/0307_set4.png" alt="" ></a><span style="font-size: x-large;font-weight: bolder;">GITHUB</span></swiper-slide> </swiper>
</div>
          <div class="first-move section-margin"></div>
          <section class="first-section section left">
            <div class="progress-wrapper progress-bar-wrapper-left">
              <div class="progress-bar"></div>
            </div>
            <div class="section-intro-wrapper">
            <h1 class="section-title">
              <span class="section-title-text">About Me<br>關於我</span>
              <div class="section-title-decoration styleOne"></div>
              <div class="section-title-decoration styleTwo"></div>
              <div class="section-title-decoration styleThree"></div>
            </h1>
            <span class="section-number">01</span></div>
            <div class="section-detail-wrapper">
              <h3 class="section-heading"> &emsp; &emsp;Name: Chen, Yu-Fan
              <br>&emsp; &emsp;School: NYCU (Grad student);&ensp; NTHU (Bachelor)<br>
              &emsp; &emsp;Department: Institute of Biomedical Informatics;&ensp; Kinesiology
              </h3>
              <p class="section-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quia quidem molestiae, libero vero voluptatibus sapiente sint? Ullam, repellendus impedit veritatis ducimus consectetur facere odit illo, amet harum cum voluptates.</p>
              <h3 class="section-heading">Lorem ipsum</h3>
              <p class="section-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quia quidem molestiae, libero vero voluptatibus sapiente sint? Ullam, repellendus impedit veritatis ducimus consectetur facere odit illo, amet harum cum voluptates.</p>
              <h3 class="section-heading">Lorem ipsum</h3>
              <p class="section-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quia quidem molestiae, libero vero voluptatibus sapiente sint? Ullam, repellendus impedit veritatis ducimus consectetur facere odit illo, amet harum cum voluptates.</p>
            </div>
          </section>
          <div class="second-move section-margin">
      
          </div>
          <section class="second-section section right">
            <div class="progress-wrapper progress-bar-wrapper-right">
              <div class="progress-bar"></div>
            </div>
            <div class="section-intro-wrapper ">
            <h1 class="section-title ">
              <span class="section-title-text ">My work<br>我的作品</span>
              <div class="section-title-decoration styleOne "></div>
              <div class="section-title-decoration styleTwo "></div>
              <div class="section-title-decoration styleThree  "></div>
            </h1>
            <span class="section-number ">02</span></div>
            <div class="section-detail-wrapper">
              <h3 class="section-heading">Lorem ipsum</h3>
              <p class="section-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quia quidem molestiae, libero vero voluptatibus sapiente sint? Ullam, repellendus impedit veritatis ducimus consectetur facere odit illo, amet harum cum voluptates.</p>
              <h3 class="section-heading">Lorem ipsum</h3>
              <p class="section-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quia quidem molestiae, libero vero voluptatibus sapiente sint? Ullam, repellendus impedit veritatis ducimus consectetur facere odit illo, amet harum cum voluptates.</p>
              <h3 class="section-heading">Lorem ipsum</h3>
              <p class="section-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quia quidem molestiae, libero vero voluptatibus sapiente sint? Ullam, repellendus impedit veritatis ducimus consectetur facere odit illo, amet harum cum voluptates.</p>
            </div>
          </section>

          <div class="third-move section-margin"></div>
          <section class="third-section section left">
            <div class="progress-wrapper progress-bar-wrapper-left">
              <div class="progress-bar"></div>
            </div>
            <div class="section-intro-wrapper ">
            <h1 class="section-title ">
              <span class="section-title-text ">Contact Me<br>聯繫我</span>
              <div class="section-title-decoration styleOne "></div>
              <div class="section-title-decoration styleTwo "></div>
              <div class="section-title-decoration styleThree "></div>
            </h1>
            <span class="section-number ">03</span></div>
            <div class="section-detail-wrapper">
              <h3 class="section-heading">Lorem ipsum</h3>
              <p class="section-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quia quidem molestiae, libero vero voluptatibus sapiente sint? Ullam, repellendus impedit veritatis ducimus consectetur facere odit illo, amet harum cum voluptates.</p>
              <h3 class="section-heading">Lorem ipsum</h3>
              <p class="section-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quia quidem molestiae, libero vero voluptatibus sapiente sint? Ullam, repellendus impedit veritatis ducimus consectetur facere odit illo, amet harum cum voluptates.</p>
              <h3 class="section-heading">Lorem ipsum</h3>
              <p class="section-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo quia quidem molestiae, libero vero voluptatibus sapiente sint? Ullam, repellendus impedit veritatis ducimus consectetur facere odit illo, amet harum cum voluptates.</p>
            </div>
          </section></div></div>
    </main>
</template>
<script >
  import $ from "jquery"

  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import {useRouter,RouterLink} from "vue-router"
  // import { inject } from "vue";
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        // console.log('slide change');
      };
      const tog = () => {
        $( ".tog" ).toggle();
        $(".logo").toggle();
      };
      // const router = useRouter();
      // const change =() =>router.push({
      //     path: "\practicle"
      //   })
      return {
        onSwiper,
        onSlideChange,
        tog,
        modules: [Navigation, Pagination, Scrollbar, A11y,Autoplay],
      };
    },
  };
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Vast+Shadow&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, section, p, span, svg{
  transition: background-color 0.3s, color 0.3s;
}

:root{
  --color-text-light: rgb(26, 26, 26);
  --color-background-light: rgb(236, 170, 48);
  --color-blue-light: rgb(88, 88, 197);
  --color-green-light: #7cceac;
  --color-pink-light: #e8a1abfa;

  --color-text-dark:  rgb(236, 170, 48);
  --color-background-dark: rgb(88, 88, 197);

}
.light-theme{
  --color-text: var(--color-text-light);
  --color-background: var(--color-background-light);
  --color-pink:var(--color-pink-light);
  --color-green:var(--color-green-light);
  --color-blue:var(--color-blue-light);
}
.dark-theme{
  --color-text: var(--color-text-dark);
  --color-background: var(--color-background-dark);
  --color-pink:var(--color-text-dark);
  --color-green:var(--color-text-dark);
  --color-blue:var(--color-text-dark);
}
.logo{
  cursor: pointer;
  display: flex;
  margin:3px;
}
.logo:active{
  -moz-transform:scaleX(-1);
  -webkit-transform:scaleX(-1);
  -o-transform:scaleX(-1);
  transform:scaleX(-1);
}
.navgator{
    display: flex;
    font-family: "Poppins",sans-serif;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    color: #ffffff6b;
    width: 100%;
}
.container{
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}
.nav{
  height: 54px;
}
.navbar-brand>img:active{
  animation-name: rotate ;
  animation-duration: 500ms;
  animation-iteration-count: 1;
  animation-timing-function: ease; 
  animation-fill-mode: forwards;
}
@keyframes rotate {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(180deg);
  }
}
.nav-item{
  border-bottom: 2px var(--color-text) solid;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
}

.nav-item:active{
  background-color: rgb(255, 176, 18);
}
.nav-item>a:active{
 color: rgb(255, 255, 255);
}
.experience{
  position: fixed;
  width: 100vw;
  height: 100vw;
}
.experience-canvas{
  width: 100%;
  height: 100%;
}
.page{
  z-index: 999999;
  width: 100%;
  height:100%;
  overflow: hidden;
}

.page-wrapper{
  position: relative;
}
.swiper {
  padding-top: 10px;
  width: 108%;
}


.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ffffff6b;
  padding-bottom: 20px;
  padding-top:20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  flex-direction: column;
}

.swiper-slide img {
  display: block;
  width: 50%;
  object-fit: cover;
  filter: opacity(70%);
}
.swiper-horizontal>.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
bottom: 0px;
left: 0;
width: 100%;
}

.swiper-slide img:active{
box-shadow: 0px 8px 8px rgb(0 0 0 / 10%);
filter: opacity(100%);

}

@keyframes move{
0%{
  transform: translate(0px,0px) rotate(0deg);
  opacity: 0.5;
}
100%{
  transform: translate(660px,660px) rotate(450deg);
  opacity: 0.5;
}
}
@keyframes obli {
  0%{
      transform-origin:center ;
  transform: rotate(0deg);
  

}
50%{
  transform-origin: center ;
  transform:rotate(360deg);

}
100%{
  transform:translateX(1250px);
}

}
.swiper_content {
  width: 100%;
  font-size: 0;

  animation-duration: 200s;
  animation-iteration-count:infinite;

}

.hero{
  width: 100vw;
  height: 100vh;
}
.hero-wrapper{
  position: relative;
  height: 100%;
  width: calc( 100% - 426px);
  margin: 0 auto;
  max-width: 1100px;
}
.hero-main{
  position: absolute;
  font-family: "Poppins",sans-serif;
  bottom: 310px;
  left: calc( 30% - 100px);
  color : var(--color-text);
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));
}
.hero-second{
  position: absolute;
  font-family: "Poppins",sans-serif;
  top:calc(50% - 120px);
  right:calc(16% - 150px);
  color : var(--color-text);
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));
}
.hero-mian-title{
  font-size: 64px;
  color : var(--color-text);
}
.hero-mian-description{
  font-size: 32px;
  color : var(--color-text);
}
.hero-second-subheading{
  font-size: 21px;
  text-transform: uppercase;
  color : var(--color-text);
}
.sf{
  font-family: 'Permanent Marker', cursive;
}

.section-margin{
  height: 800px;
  width: 100%;
}
.section{
  position: relative;
  width: 50%;
  padding:1000px 4%;
  margin: 0;
  background-color: var(--color-background);
  overflow: hidden;
}
.left{
  margin-right: auto;
  border-top-right-radius:  720px 720px;
  border-bottom-right-radius: 0px 0px;
}
.right{
  margin-left: auto;
  border-top-left-radius:  720px 720px;
  border-bottom-left-radius: 0px 0px;
}
.navbar-expand-lg{
  border-radius: 10px;
  margin:3px;
  width:50%;
}
.section-intro-wrapper{
  position: relative;
  padding: 20% 5%;
  border-bottom: 2px solid var(--color-blue);
  padding-bottom: 400px;
}
.section-detail-wrapper{
  position: relative;
  font-family: "Poppins",sans-serif;
  padding: 20% 5%;
}
.section-heading{
  font-size: 18px;
  font-weight: 700;
  line-height: 1.8;
  margin-top: 64px;
  color : var(--color-text);
}

.section-text{
  line-height: 2;
  margin-top: 18px;
  font-size: 16px;
  color : var(--color-text);
}
.section-title{
  position: relative;
  color: var(--color-blue);
}
.section-title-text{
  display: block;
  font-family: "Poppins",sans-serif;
  font-size: 40px;
  font-weight: 500;
  transform-origin: left;
  transform: skewY(13deg);
  z-index:5;
  text-transform: uppercase;
  color : var(--color-blue);
}
.styleOne,.styleTwo,.styleThree{
  position: absolute;
  display: block;
  width: 100%;
  max-width: 278px;
  height: 60px;
  border:1px solid var(--color-blue);
  transform-origin: left;
  transform: skewY(-13deg);
}
.styleOne{
  top:0px
}
.styleTwo{
  top: 80px;
}
.styleThree{
  top: 80px;
  transform: skewY(13deg);
  background-color: var(--color-blue);
}
.section-number{
  position: absolute;
  bottom: 15px;
  right:0;
  color: var(--color-blue);
  font-size: 24px;
}
.toggle-bar{
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 48px;
  right:48px;
  z-index: 9999999999;
}
.sunwrapper, .moonwrapper{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
svg{
  color : var(--color-text);
  fill: currentColor;
  filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));
}
.toggle-button{
  cursor: pointer;
  position: relative;
  width: 56px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-blue);
  border-radius: 999px;
  margin: 0px 16px;
  border : none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.toggle-circle{
  position: absolute;
  left: 6px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: var(--color-background);
  transition: all 0.2s ease-in-out ;
}
.toggle-button:active .toggle-circle{
  transform: scale(0.9);
}
.slide{
  left:28px;
}
.pink-text{
  color: var(--color-pink);
}
.pink-border{
  border-color: var(--color-pink);
}
.pink-background{
  background-color: var(--color-pink);
}

.green-text{
  color: var(--color-green);
}
.green-border{
  border-color: var(--color-green);
}
.green-background{
  background-color: var(--color-green);
}
.progress-wrapper{
  height:0;
  width: 12px;
  z-index:9999
}
.progress-bar-wrapper-left{
  position: absolute;
  top:0;
  left:0;

}
.progress-bar-wrapper-right{
  position: absolute;
  top:0;
  right:0;
  
}
.progress-bar{
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: var(--color-blue);
  transform-origin: top center;
  transform: scale(1);
}
.nav-item{
  border-radius: 3px;
}



@media (max-width :968px) {
  .section{
    width:100%;
  }
  .progress-bar-wrapper-left{
   right:0;
  left:auto;
  }
  .swiper_content{
    width:1200px
  }
}
@media screen and (max-width: 1122px){
  .hero-second{
  top: calc(70% - 120px);
    right: calc(16% - 100px);}
  
}
@media screen and (max-width: 735px){
  .hero-main{
    bottom: 200px;
    left: calc( 30% - 150px);} 
}@media screen and (max-width: 650px){
  .swiper_content{
    width:900px
  }
}
@media screen and (max-width: 500px){
  .swiper_content{
    width:750px
  }
}
#preloader{
  background: #000 ;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position:fixed;
  z-index: 9999999999999999999999999999999;
}
#preloader>img{
  width: 117px;
  height:117px;
}
@keyframes spin {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}
body::-webkit-scrollbar {
    display: none;
}
</style>