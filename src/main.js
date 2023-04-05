import { createApp } from 'vue'
import App from './App.vue'
import"bootstrap/dist/css/bootstrap.min.css";
import"bootstrap/dist/js/bootstrap"
// import Experience from '../experience/experience'
import VueSweetAlert from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Particles from 'particles.vue3'
import router from "./router/index"
// import {} from './main.ce.js'
const app = createApp(App)
app.use(router);
app.use(VueSweetAlert);
app.use(Particles);
app.mount('#app');
// const experience = new Experience(document.querySelector(".experience-canvas"));
// window.setTimeout(( () =>  new Experience(document.querySelector(".experience-canvas"))) ,50);
  

