import { PerspectiveCamera } from "three";
import * as THREE from "three";
import Experience from "../experience";
import gsap from "gsap";
import GUI from "lil-gui";

export default class Environment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resourse =this.experience.resourse;
        // this.gui = new GUI({ container: document.querySelector('.hero-main')});
        this.obj ={
            colorObj:{r:0,g:0,b:0},
            intensity:3
        };
        this.setSunlight();
        // this.setGUI();
        

    }
    setGUI(){
        this.gui.addColor(this.obj,"colorObj").onChange(()=>{
            this.sunlight.color.copy(this.obj.colorObj);
            this.ambientLight.color.copy(this.obj.colorObj);
            console.log(this.obj.colorObj);
        });
        this.gui.add(this.obj,"intensity",0,10).onChange(()=>{
            this.sunlight.intensity = this.obj.intensity
            this.sunlight.ambientLight = this.obj.intensity;
        })
    }
    setSunlight(){
        this.sunlight = new THREE.DirectionalLight("#ffffff",3);
        this.sunlight.castShadow = true;
        this.sunlight.shadow.camera.far = 20;
        this.sunlight.shadow.mapSize.set(2048,2048);
        this.sunlight.shadow.normalBias =0.05;
        this.sunlight.position.set(-1.5,7,3);
        this.scene.add(this.sunlight);
        // const helper = new THREE.CameraHelper(this.sunlight.shadow.camera);
        // this.scene.add(helper);

        this.ambientLight = new THREE.AmbientLight("#ffffff",1)
        this.scene.add(this.ambientLight);
    }

    switchTheme(theme){
        if( theme ==="dark"){
            gsap.to(this.sunlight.color,{           
                r: 0.07058823529411765,
                g: 0.16862745098039217,
                b: 0.32941176470588235
            })
            gsap.to(this.ambientLight.color,{
                r: 0.07058823529411765,
                g: 0.16862745098039217,
                b: 0.32941176470588235
            })
            gsap.to(this.sunlight,{
                intensity: 2.04
            }
            )
            gsap.to(this.ambientLight,{
                intensity: 2.04
            }
            )
        }else{
            gsap.to(this.sunlight.color,{
                r:255/255,
                g:255/255,
                b:255/255
            })
            gsap.to(this.ambientLight.color,{
                r:255/255,
                g:255/255,
                b:255/255
            })
            gsap.to(this.sunlight,{
                intensity: 1.25
            }
            )
            gsap.to(this.ambientLight,{
                intensity: 1.25
            }
            )
        }
    }
    resize(){

    }
    update(){
        
    }
}