import { PerspectiveCamera } from "three";
import * as THREE from "three";
import Experience from "../experience";
import {OrbitControls} from"three/examples/jsm/controls/OrbitControls"

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls();
    }
    createPerspectiveCamera(){
        this.perspectiveCamera = new PerspectiveCamera(35,this.sizes.aspect,0.1,1000);
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 29;
        this.perspectiveCamera.position.x = 14;
        this.perspectiveCamera.position.y = 12;
    }
    createOrthographicCamera(){
       
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum)/2,
            (this.sizes.aspect * this.sizes.frustrum)/2,
            this.sizes.frustrum/2,
            -this.sizes.frustrum/2,
            -50,50
        );
        this.orthographicCamera.position.y = 3;
        this.orthographicCamera.position.z = 25;
        this.orthographicCamera.rotation.x = -Math.PI / 8;
        // this.helper = new THREE.CameraHelper(this.orthographicCamera);
        // this.scene.add(this.helper);
        this.scene.add(this.orthographicCamera);

        const size = 20;
        const divisions = 20;

        // const gridHelper = new THREE.GridHelper( size, divisions );
        // this.scene.add( gridHelper );
        // const axesHelper = new THREE.AxesHelper( 10 );
        // this.scene.add( axesHelper );
    }
    setOrbitControls(){
        this.controls =new OrbitControls(this.orthographicCamera, this.canvas);
        this.controls.enableDamping =true;
        this.controls.enableZoom =false;
    }
    resize(){
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum)/2;
        this.orthographicCamera.top =  this.sizes.frustrum/2;
        this.orthographicCamera.bottom =  -this.sizes.frustrum/2;
        this.orthographicCamera.updateProjectionMatrix();
    }
    update(){
        this.controls.update();
        // this.helper.matrixWorldNeedsUpdate = true;
        // this.helper.update();
        // this.helper.position.copy(this.orthographicCamera.position);
        // this.helper.rotation.copy(this.orthographicCamera.rotation);
        // console.log(this.perspectiveCamera.position)
        
    }
}