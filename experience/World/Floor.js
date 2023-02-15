import { PerspectiveCamera } from "three";
import * as THREE from "three";
import Experience from "../experience";


export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        
        this.setFloor();
        this.setCircles();

       
    }
    setFloor(){
        this.geometry = new THREE.PlaneGeometry(100,100);
        this.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            side: THREE.BackSide
        })
        this.plane =  new THREE.Mesh(this.geometry,this.material);
        this.scene.add(this.plane);
        this.plane.rotation.x = Math.PI /2;
        this.plane.position.y = -0.1;
        this.plane.receiveShadow = true;
    }
    setCircles(){
        const geometry = new THREE.CircleGeometry( 5, 32 );
        const material = new THREE.MeshBasicMaterial( { color: 0Xffffff } );
        const material02 = new THREE.MeshBasicMaterial( { color: 0xe8a1abfa } );
        const material03 = new THREE.MeshBasicMaterial( { color: 0x7cceac } );
        this.circleFirst = new THREE.Mesh( geometry, material );
        this.circleSecond = new THREE.Mesh( geometry, material );
        this.circleThird = new THREE.Mesh( geometry, material );
        this.circleFirst.position.y = -0.29;
        this.circleSecond.position.y = -0.28;
        this.circleThird.position.y = -0.27;
        this.circleFirst.scale.set(0,0,0);
        this.circleSecond.scale.set(0,0,0);
        this.circleThird.scale.set(0,0,0);
        this.circleFirst.rotation.x = -Math.PI/2;
        this.circleSecond.rotation.x = -Math.PI/2;
        this.circleThird.rotation.x =-Math.PI/2;
        this.circleFirst.receiveShadow = true;
        this.circleSecond.receiveShadow = true;
        this.circleThird.receiveShadow =true;

        this.scene.add(this.circleFirst);
        this.scene.add(this.circleSecond );
        this.scene.add(this.circleThird);
    }
}