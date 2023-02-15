import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Camera from "./Utils/Camera";
import Renderer from "./Renderer";
import Time from"./Utils/Time"
import Resourse from "./Utils/Resourse";
import assets from "./Utils/assets";
import Controls from "./World/Controls";
import World from "./World/World";
import Theme from "./Theme";
import Preloader from "./World/Preloader"

export default class Experience{
    static instance;
    constructor(canvas){
        if(Experience.instance){
            return Experience.instance
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resourse = new Resourse(assets);
        this.theme = new Theme();
        this.world = new World();
        this.preloader = new Preloader();
        this.controls = new Controls();
        this.sizes.on("resize",()=>{
            this.resize();
        })
        this.time.on("update",()=>{
            this.update();
        });
    
    }
    resize(){
        this.camera.resize();
        this.world.resize();
        this.renderer.resize();
    }
    update(){
        this.camera.update();
        this.world.update();
        this.renderer.update();
        if (this.controls) {
            this.controls.update();
        }
    }
}