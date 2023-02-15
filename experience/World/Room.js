import { PerspectiveCamera } from "three";
import * as THREE from "three";
import Experience from "../experience";
import gsap from "gsap";
import{RectAreaLightHelper} from 'three/examples/jsm/helpers/RectAreaLightHelper'

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resourse = this.experience.resourse;
        this.time = this.experience.time;
        this.room = this.resourse.items.room;
        this.actualRoom = this.room.scene;
        this.roomChildren = {};

        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1,
        };

        this.setModel();
        // this.setAnimation();
        this.onMouseMove();
    }

    setModel() {
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    // console.log(groupchild.material);
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }
            // console.log(child);
            // child.scale.set(0, 0, 0);
            // if (child.name === "Cube.001") {
            //     child.scale.set(1, 1, 1);
            //     child.position.set(0, -1, 0);
            //     child.rotation.y = Math.PI / 4;
            // }
            this.roomChildren[child.name.toLowerCase()] = child;

        });

        const width = 1.5;
        const height = 1;
        const intensity = 1;
        const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
        rectLight.position.set( -0.7, 1.1, 0.6625553 );
        rectLight.rotation.x = -Math.PI/2;
        rectLight.rotation.z = Math.PI/4;
        this.actualRoom.add( rectLight )

        // const rectLightHelper = new RectAreaLightHelper( rectLight );
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(1.1, 1.1, 1.1);
        // console.log(this.actualRoom)
    }

    // setAnimation() {
    //     this.mixer = new THREE.AnimationMixer(this.actualRoom);
    //     this.swim = this.mixer.clipAction(this.room.animations[0]);
    //     this.swim.play();
    // }

    onMouseMove() {
        window.addEventListener("mousemove", (e) => {
            this.rotation =
                ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.09;
        });
    }

    resize() {}

    update() {
        this.lerp.current = gsap.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );

        this.actualRoom.rotation.y = this.lerp.current;
        // console.log(this.actualRoom)
        // this.mixer.update(this.time.delta * 0.0009);
    }
}