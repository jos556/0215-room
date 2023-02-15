import { EventEmitter } from "events";
import Experience from "../experience.js";
import gsap from "gsap";
import convert from "../Utils/covertDivsToSpans";

export default class Preloader extends EventEmitter {
    constructor() {
        super();
        this.experience =  new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resourse = this.experience.resourse;
        this.camera = this.experience.camera;
        this.world = this.experience.world;
        this.world.on("worldready",()=>{
            this.playIntro();

        });
    }
    playIntro(){

    }
}