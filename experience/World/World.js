import { PerspectiveCamera } from "three";
import * as THREE from "three";
import Experience from "../experience";
import Room from "./Room"
import Environment from "./Environment";
import Floor from "./Floor";
import Controls from "./Controls";
import { EventEmitter } from "events";

export default class World extends EventEmitter{
    constructor(){
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resourse = this.experience.resourse;
        this.theme = this.experience.theme;

        this.resourse.on("ready",()=>{
            this.environment = new Environment();
            this.floor = new Floor();
            this.room = new Room();
            this.controls = new Controls();
            this.emit("worldready");
            // console.log(this.room)
        })
        this.theme.on("switch", (theme)=>{
            this.switchTheme(theme);
        })
        
        
    }

    switchTheme(theme){
        if(this.environment){
            this.environment.switchTheme(theme);
        }
    }
    resize(){

    }
    update(){
        if(this.room){
            this.room.update();
            // console.log(this.room)
        }
        if(this.controls){
            this.controls.update();
        }
    
    }
}