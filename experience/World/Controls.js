import { PerspectiveCamera } from "three";
import * as THREE from "three";
import Experience from "../experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Room from "./Room";
import ASScroll from '@ashthornton/asscroll'

export default class Controls{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resourse = this.experience.resourse;
        this.time = this.experience.time;
        // this.room1 =new Room();
        this.camera = this.experience.camera;
        this.room = this.experience.world
        // this.circleFirst = this.world.floor
        gsap.registerPlugin(ScrollTrigger)
        
        // console.log(this.world.floor);
        this.setScrollTrigger(); 
        // this.setSmothScroll();       
        

        

    }
    setupASScroll() {
      // https://github.com/ashthornton/asscroll
      const asscroll = new ASScroll({
        disableRaf: true });
    
    
      gsap.ticker.add(asscroll.update);
    
      ScrollTrigger.defaults({
        scroller: asscroll.containerElement });
    
    
      ScrollTrigger.scrollerProxy(asscroll.containerElement, {
        scrollTop(value) {
          if (arguments.length) {
            asscroll.currentPos = value;
            return;
          }
          return asscroll.currentPos;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        fixedMarkers: true });
    
    
      asscroll.on("update", ScrollTrigger.update);
      ScrollTrigger.addEventListener("refresh", asscroll.resize);
    
      requestAnimationFrame(() => {
        asscroll.enable({
          newScrollElements: document.querySelectorAll(".gsap-marker-start, .gsap-marker-end, [asscroll]") });
    
      });
      return asscroll;
    }
    setSmothScroll(){
      this.asscroll = this.setupASScroll();
    }
    setScrollTrigger(){
        ScrollTrigger.matchMedia({  
            
            all : () => {
              this.section =document.querySelectorAll(".section");
              this.section.forEach(section =>{
                this.progressWrapper = section.querySelector(".progress-wrapper")
                this.progressbar = section.querySelector(".progress-bar")
                if(section.classList.contains("right")){
                  gsap.to(section, {
                    borderTopLeftRadius: 10,
                    scrollTrigger:{
                      trigger: section,
                      start:"top bottom",
                      end:"top top",
                      maker: true,
                      scrub:0.6,
                    },
                  });
                  gsap.to(section, {
                    borderBottomLeftRadius: 720,
                    scrollTrigger:{
                      trigger: section,
                      start:"bottom bottom",
                      end:"bottom top",
                      maker: true,
                      scrub:0.6,
                    },
                  });
                }else{
                  gsap.to(section, {
                    borderTopRightRadius: 10,
                    scrollTrigger:{
                      trigger: section,
                      start:"top bottom",
                      end:"top top",
                      maker: true,
                      scrub:0.6,
                    },
                  });
                  gsap.to(section, {
                    borderBottomRightRadius: 720,
                    scrollTrigger:{
                      trigger: section,
                      start:"bottom bottom",
                      end:"bottom top",
                      maker: true,
                      scrub:0.6,
                    },
                  });
                }
                gsap.from(this.progressbar,{
                  scaleY :0,
                  scrollTrigger:{
                    trigger: section,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.3,
                    pin: this.progressWrapper,
                    pinSpacing: false,
                  },
                });
              });
            }
              
          }); 
    }
    
    
    resize(){

    }
    update(){
        
       
    }
}